import { capitalize, orderBy } from "lodash-es";
import fetch from "node-fetch";
import { stdout } from "process";

const API_BASE = "https://api.nextdns.io";
const DEFAULT_DEVICE_NAME = "Router";
const LOGS_LOOKBACK = "-1d";

const apiKey = process.env.API_KEY;

if (!apiKey) {
  console.error("API_KEY not set!");
  console.error("Usage: API_KEY=xxxxxx node .");
  process.exit(1);
}

function titleCase(str) {
  return str
    .replaceAll("__", ": ")
    .replaceAll("_", " ")
    .trim()
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
}

/**
 *
 * @param {string} url
 * @returns {Promise<any>}
 */
function apiFetch(url) {
  return fetch(`${API_BASE}${url}`, { headers: { "X-Api-Key": apiKey } }).then(
    (response) => response.json()
  );
}

async function fetchProfiles() {
  try {
    const response = await apiFetch("/profiles");
    return response.data;
  } catch (error) {
    console.error(error.message);
  }

  return [];
}

async function fetchLogs(profile, status) {
  let data = [];
  let done = false;
  /** @type {string | null | undefined} */
  let cursor = "";

  try {
    while (!done) {
      const params = new URLSearchParams(
        Object.entries({ status, from: LOGS_LOOKBACK, limit: 1000 })
      );

      if (cursor) {
        params.set("cursor", cursor);
      }

      /** @type {{ data?: [Object], meta?: { pagination: { cursor: string | null } } }} */
      const json = await apiFetch(`/profiles/${profile}/logs?${params}`);

      if (Array.isArray(json.data)) {
        data = data.concat(json.data);
      }

      cursor = json.meta?.pagination.cursor;

      if (!cursor) {
        done = true;
      }
    }
  } catch (error) {
    console.error(error.message);
  }

  return processLogs(data);
}

function processLogs(data) {
  const map = {};

  data.forEach((log) => {
    const { reasons = [], domain, tracker, matched } = log;
    const deviceName = log.device?.name || DEFAULT_DEVICE_NAME;
    const reason =
      reasons
        .map(({ name }) => name)
        .sort()
        .join(", ") || "Manual";

    map[reason] = map[reason] || {};
    map[reason][domain] = map[reason][domain] || {
      domain,
      matched,
      tracker,
      deviceNames: new Set(),
      count: 0,
    };
    map[reason][domain].count += 1;
    map[reason][domain].deviceNames.add(deviceName);
  });

  return map;
}

function printLogSection(logs) {
  Object.entries(logs)
    .sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length)
    .forEach(([reason, domains]) => {
      stdout.write(`${reason}:\n`);

      orderBy(
        Object.values(domains),
        ["count", "domain"],
        ["desc", "asc"]
      ).forEach(({ domain, matched, tracker, deviceNames, count }) => {
        stdout.write(
          `\t${String(count).padStart(4, " ")}x  ${domain}` +
            `${matched ? ` → ${matched}` : ""}` +
            `${tracker ? ` (${titleCase(tracker)})` : ""}` +
            `${
              deviceNames.size > 0
                ? ` [${Array.from(deviceNames).join(", ")}]`
                : ""
            }\n`
        );
      });

      stdout.write("\n");
    });
}

async function printAllLogs() {
  const profiles = await fetchProfiles();

  if (profiles.length === 0) {
    console.warn("No profiles found!");
    return;
  }

  for (const profile of profiles) {
    const [blocked, relayed, allowed] = await Promise.all([
      fetchLogs(profile.id, "blocked"),
      fetchLogs(profile.id, "relayed"),
      fetchLogs(profile.id, "allowed"),
    ]);

    stdout.write(
      `\n\n============================== Profile: ${profile.name} (${profile.id}) ==============================\n\n`
    );

    stdout.write("\n\nAllowed\n_______\n\n");
    printLogSection(allowed);
    stdout.write("\n\nRelayed\n_______\n\n");
    printLogSection(relayed);
    stdout.write("\n\nBlocked\n_______\n\n");
    printLogSection(blocked);
  }
}

printAllLogs();
