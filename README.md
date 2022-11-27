# nextdns-stats

Prints allowed and blocked domains, grouped by the blocklist/feature that blocked them.

## Usage

1. Clone repository

1. Install [Node.js](https://nodejs.org)

1. Install node module: `npm i`

1. Get API key from [Nextdns account](https://my.nextdns.io/account)

1. Run: `API_KEY=xxxxxx node .` (replace `xxxxxx` with API key from account)

## Example output

```
============================== Profile: Base (abcdef) ==============================



Allowed
_______

Allowlist:
	   1x  192-168-4-49.abcdefghijklmnopqrstuvwxyz012345.plex.direct [Old-Man-Williams]



Relayed
_______

Affiliate & Tracking Links:
	   1x  syndication.realsrv.com [Matt’s iPhone]



Blocked
_______

oisd:
	 398x  app-measurement.com [Matt’s iPhone, Router, Matt's MacBook Pro]
	 310x  7ba3f64df98de730df38846b54ecfbdf7f61f80f.cws.conviva.com (Conviva) [Router, Living Room Apple TV]
	 101x  notify.bugsnag.com (Bugsnag) [Router, Matt’s iPhone, Living Room Apple TV]
	  88x  mobile-collector.newrelic.com (New Relic) [Living Room Apple TV]
	  75x  analytics.query.yahoo.com (Yahoo) [Matt’s iPhone]
	  72x  ichnaea-web.netflix.com (Netflix) [Router, Matt’s iPhone]
	  61x  ssl.google-analytics.com (Google Analytics) [Matt’s iPhone, Router]
	  43x  weather-analytics-events.apple.com (Apple) [Matt's MacBook Pro]
	  35x  googleads.g.doubleclick.net (Doubleclick) [Matt’s iPhone, Router]
	  29x  sessions.bugsnag.com (Bugsnag) [Router, Matt’s iPhone]
	  27x  dit.whatsapp.net [Router]
	  26x  firebase-settings.crashlytics.com [Router, Matt’s iPhone]
	  21x  iadsdk.apple.com (Apple) [Matt's MacBook Pro, Matt’s iPhone, Router]
	  19x  data.flurry.com (Flurry) [Matt’s iPhone]
	  16x  data.emb-api.com [Matt’s iPhone, Router]
	  16x  pubads.g.doubleclick.net (Doubleclick) [Router]
	  15x  config.emb-api.com [Matt’s iPhone, Router]
	  15x  ms.applovin.com [Matt’s iPhone]
	  14x  beap.gemini.yahoo.com (Yahoo) [Matt’s iPhone]
	  13x  config2.mparticle.com [Matt’s iPhone, Router]
	  12x  bats.video.yahoo.com (Yahoo) [Matt’s iPhone]
	  11x  a.et.nytimes.com (Nyt.com) [Router, Matt’s iPhone]
	  10x  ca.iadsdk.apple.com (Apple) [Matt’s iPhone]
	  10x  cf.iadsdk.apple.com (Apple) [Matt's MacBook Pro, Router, Matt’s iPhone]
	  10x  securepubads.g.doubleclick.net (Doubleclick) [Router, Matt’s iPhone]
	   9x  config.inmobi.com [Matt’s iPhone]
	   7x  slackb.com [Router]
	   6x  geo.yahoo.com (Yahoo) [Matt's MacBook Pro (Chrome), Matt’s iPhone]
	   6x  rt.applovin.com [Matt’s iPhone]
	   4x  disney.my.sentry.io (Sentry) [Router, Living Room Apple TV]
	   3x  tr.iadsdk.apple.com (Apple) [Matt’s iPhone]
	   3x  udm.scorecardresearch.com (Scorecard Research Beacon) [Matt’s iPhone]
	   2x  beacons.gcp.gvt2.com [Router]
	   2x  beacons.gvt2.com [Router]
	   2x  control.kochava.com [Router]
	   2x  kvinit-prod.api.kochava.com [Router]
	   2x  mobile.eum-appdynamics.com (Appdynamics) [Matt’s iPhone]
	   2x  tags.crwdcntrl.net (Lotame) [Matt’s iPhone]
	   1x  acdn.adnxs.com (Appnexus) [Router]
	   1x  ads.stickyadstv.com (Stickyads) [Matt’s iPhone]
	   1x  bea4.v.fwmrm.net (Freewheel) [Matt’s iPhone]
	   1x  beacons2.gvt2.com [Router]
	   1x  beacons3.gvt2.com [Router]
	   1x  beacons4.gvt2.com [Router]
	   1x  beacons5.gvt2.com [Router]
	   1x  beacons5.gvt3.com [Router]
	   1x  cdn.adsafeprotected.com (Integral Ad Science) [Matt’s iPhone]
	   1x  cdn.mxpnl.com (Mixpanel) [Matt’s iPhone]
	   1x  comcast-d.openx.net (Openx) [Router]
	   1x  comcast.demdex.net (Adobe Audience Manager) [Router]
	   1x  cookie-cdn.cookiepro.com [Router]
	   1x  d.applovin.com [Matt’s iPhone]
	   1x  d.applvn.com [Matt’s iPhone]
	   1x  d3div1mtym39ic.cloudfront.net (Amazon Cloudfront) [Router]
	   1x  ddacn6pr5v0tl.cloudfront.net (Amazon Cloudfront) [Matt’s iPhone]
	   1x  eq97f.publishers.tremorhub.com (Tremor Video) [Matt’s iPhone]
	   1x  fastlane.rubiconproject.com (Rubicon) [Router]
	   1x  fls.doubleclick.net (Doubleclick) [Router]
	   1x  gcdsdk.appsflyer.com (Appsflyer) [Matt’s iPhone]
	   1x  ib.adnxs.com (Appnexus) [Matt’s iPhone]
	   1x  instant.page [Matt’s iPhone]
	   1x  jsc.mgid.com (Marketgid) [Matt’s iPhone]
	   1x  micro.rubiconproject.com (Rubicon) [Matt's MacBook Pro]
	   1x  middycdn-a.akamaihd.net (Akamai Technologies) [Matt’s iPhone]
	   1x  news.iadsdk.apple.com (Apple) [Matt's MacBook Pro]
	   1x  odb.outbrain.com (Outbrain) [Matt’s iPhone]
	   1x  pagead2.googlesyndication.com (Google Syndication) [Matt’s iPhone]
	   1x  pixel.app.returnpath.net [Matt’s iPhone]
	   1x  radar.cedexis.com (Cedexis Radar) [Router]
	   1x  s3t3d2y8.afcdn.net [Matt’s iPhone]
	   1x  segment-data-us-east.zqtk.net (Comscore) [Matt’s iPhone]
	   1x  service.cmp.oath.com (Oath Inc) [Matt’s iPhone]
	   1x  smetrics.walgreens.com [Router]
	   1x  static.criteo.net (Criteo) [Router]
	   1x  static.doubleclick.net (Doubleclick) [Matt’s iPhone]
	   1x  sync.search.spotxchange.com (Spotxchange) [Matt’s iPhone]
	   1x  tpc.googlesyndication.com (Google Syndication) [Matt’s iPhone]
	   1x  u.openx.net (Openx) [Router]
	   1x  universal.iperceptions.com (Iperceptions) [Router]
	   1x  widgets.outbrain.com (Outbrain) [Matt’s iPhone]

1Hosts (mini), oisd:
	 259x  sdk.iad-06.braze.com [Matt’s iPhone]
	  23x  33490a8068184d69ac8e8a04a88c384b7ee3a9f7.cws.conviva.com → cws-usw2.conviva.com (Conviva) [Living Room Apple TV]
	  21x  outcome-ssp.supersonicads.com [Router]
	  20x  prod-ms.applovin.com [Matt’s iPhone]
	  19x  ads.api.vungle.com [Router, Matt’s iPhone]
	  19x  api.vungle.com [Router, Matt’s iPhone]
	  19x  telemetry.sdk.inmobi.com [Matt’s iPhone]
	  18x  init.supersonicads.com [Router, Matt’s iPhone]
	  17x  ads.flurry.com [Matt’s iPhone]
	  17x  api-us.bidmachine.io [Matt’s iPhone]
	  15x  logs.browser-intake-datadoghq.com [Router, Matt’s iPhone]
	  15x  ms.applvn.com [Matt’s iPhone]
	  13x  api.appodealx.com [Matt’s iPhone]
	  12x  configv2.unityads.unity3d.com [Router]
	  10x  adlog.flurry.com [Matt’s iPhone]
	   7x  api2.appsflyer.com (Appsflyer) [Matt’s iPhone]
	   6x  ets.easybrain.com [Matt’s iPhone]
	   6x  pr.comet.yahoo.com (Yahoo) [Matt’s iPhone]
	   4x  pixel.watch [Matt’s iPhone]
	   4x  rt.applvn.com [Matt’s iPhone]
	   4x  s3-analytics-events.easybrain.com [Matt’s iPhone]
	   3x  collect.serious.li [Router]
	   3x  networksdk.ssacdn.com [Router]
	   2x  als-svc.nytimes.com (Nyt.com) [Router, Matt’s iPhone]
	   2x  api2.amplitude.com (Amplitude) [Router]
	   2x  ec.moengage.com [Matt’s iPhone]
	   2x  fast.a.klaviyo.com (Klaviyo) [Matt’s iPhone, Router]
	   2x  mobile-sdk-lib-ca-1.brilliantcollector.com [Matt’s iPhone]
	   2x  p.liadm.com (Live Intent) [Matt’s iPhone]
	   2x  s.orbsrv.com [Matt’s iPhone]
	   2x  scripts.webcontentassessor.com [Matt's MacBook Pro, Router]
	   2x  tnc16-useast1a.byteoversea.com [Matt’s iPhone]
	   2x  w.sharethis.com (Sharethis) [Matt’s iPhone]
	   2x  www.mczbf.com [Matt’s iPhone]
	   1x  aamapi.com [Matt’s iPhone]
	   1x  analytics.plex.tv (Plex Metrics) [Old-Man-Williams]
	   1x  api-adservices.apple.com (Apple) [Matt’s iPhone]
	   1x  api.iperceptions.com (Iperceptions) [Router]
	   1x  assets.prod.leanplum.com [Router]
	   1x  bidder.criteo.com (Criteo) [Router]
	   1x  cdn-adn-https.rayjump.com [Matt’s iPhone]
	   1x  check.rayjump.com [Matt’s iPhone]
	   1x  cm.mgid.com (Marketgid) [Matt’s iPhone]
	   1x  configure.rayjump.com [Matt’s iPhone]
	   1x  e.acuityplatform.com (Acuity Ads) [Matt’s iPhone]
	   1x  e.serverbid.com (Consumable) [Router]
	   1x  get.s-onetag.com (Sovrn Onetag) [Matt’s iPhone]
	   1x  hbrc.pubnative.net [Matt’s iPhone]
	   1x  image8.pubmatic.com (Pubmatic) [Matt’s iPhone]
	   1x  lazy.rayjump.com [Matt’s iPhone]
	   1x  lightning.cnn.com [Matt’s iPhone]
	   1x  metrics.xfinity.com [Router]
	   1x  ms4.applovin.com [Matt’s iPhone]
	   1x  nytrng.com [Matt’s iPhone]
	   1x  o7f2hmf6f5eije4pxpofgbc7kwliweuw2mpjbqbl22adc156bfa8f217sac.d.aa.online-metrix.net (Threatmetrix) [Matt’s iPhone]
	   1x  origin.acuityplatform.com (Acuity Ads) [Matt’s iPhone]
	   1x  pixel-us-east.rubiconproject.com (Rubicon) [Matt’s iPhone]
	   1x  pok.mintegral.net [Matt’s iPhone]
	   1x  policy.rayjump.com [Matt’s iPhone]
	   1x  report.dfs.glassboxdigital.io [Matt’s iPhone]
	   1x  s.ntv.io (Nativo) [Matt’s iPhone]
	   1x  static.ecorebates.com [Matt’s iPhone]
	   1x  static.yieldmo.com (Yieldmo) [Matt’s iPhone]
	   1x  tnc16-alisg.byteoversea.com [Matt’s iPhone]
	   1x  tnc16-alisg.isnssdk.com [Matt’s iPhone]
	   1x  tnc16-useast1a.isnssdk.com [Matt’s iPhone]
	   1x  view.adjust.com (Adjust) [Matt’s iPhone]
	   1x  www.dianomi.com (Dianomi) [Matt’s iPhone]

Disguised Third-Party Trackers:
	   6x  hulu-ios.hb-api.omtrdc.net → va-edge.sc.omtrdc.net (Omniture: Adobe Analytics) [Living Room Apple TV]
	   3x  sanalytics.disneyplus.com → disneyplus.com.ssl.sc.omtrdc.net [Router, Living Room Apple TV]
	   2x  smetrics.discover.com → discover.com.ssl.d1.sc.omtrdc.net [Matt’s iPhone]
	   1x  comcastcom.d1.sc.omtrdc.net (Omniture: Adobe Analytics) [Router]
	   1x  sw88.go.com → go.com.ssl.d1.sc.omtrdc.net (Go.com) [Matt's MacBook Pro]

Denylist:
	 501x  firebaselogging-pa.googleapis.com (Googleapis.com) [Matt’s iPhone, Router, Matt's MacBook Pro]
	   4x  connect.facebook.net (Facebook) [Matt’s iPhone, Router]
	   2x  device-provisioning.googleapis.com (Googleapis.com) [Matt’s iPhone]
	   2x  platform.twitter.com (Twitter) [Matt’s iPhone]

1Hosts (mini):
	  14x  launches.appsflyer.com (Appsflyer) [Router, Matt’s iPhone]
	   1x  apidt.ecn5.com [Matt’s iPhone]
	   1x  d.xp1.ru4.com (Rocket Fuel) [Matt’s iPhone]
	   1x  telemetry.sdk.inmobi.com [Matt’s iPhone]

Native Tracking (Amazon Alexa):
	  18x  device-metrics-us.amazon.com (Amazon) [Router]
	   5x  device-metrics-us-2.amazon.com (Amazon) [Router, Living Room Apple TV]

Native Tracking (Windows):
	 101x  settings-win.data.microsoft.com (Microsoft) [Old-Man-Williams]

Native Tracking (Apple), oisd:
	 153x  metrics.icloud.com [Matt’s iPhone, Matt's MacBook Pro, Router, Living Room Apple TV]

Parked Domains:
	   1x  htmlentities.net → comingsoon.namebright.com [Matt’s iPhone]
```
