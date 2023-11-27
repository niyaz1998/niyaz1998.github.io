'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "53ad7b1bbf223064f5f9b9ead39a5532",
"index.html": "d58bce1494f90073b0b777ed2bbdec80",
"/": "2d2ffe9a6213551374939fe6100ee042",
"firebase-messaging-sw.js": "26d788a7073e562493a856202cf6ef46",
"main.dart.js": "9e158484ea88266a8f723bc90e91017e",
"r/index.html": "e4286056c94e02e9d7970b248145ba31",
"r/fallback_deeplink/index.html": "208f5c97742a33ac6c2813c49c981847",
"r/portfolioAnalytics/index.html": "8554d56089f5c429e8a573a8b5ed1e86",
"r/trading/index.html": "2d2ffe9a6213551374939fe6100ee042",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "f45ee08f35918da331190eac7228b062",
"icons/Icon-192.png": "7d6da9461a9b10a946fbb4dc871a4fb0",
"icons/splash_screen_logo.png": "79da41d8663667aa90b6e940770d8254",
"icons/Icon-maskable-192.png": "ccd35871423826858843366b1a7bce30",
"icons/splash_screen_loader.gif": "78918a400f0537d173b6d5681c47b977",
"icons/Icon-maskable-512.png": "5d49d17071ed0a6cae4b3a272a8d2c6f",
"icons/Icon-512.png": "fc20876fcfbd5571d1320ebbb8e11e8f",
"scripts/open_page.js": "cae72ef715c561a5a2a85d6f462ae817",
"scripts/auth.html": "3a1882530a51a75a2eb062f2b2027849",
"scripts/add_to_home_screen.js": "0db636ba8a1192470c0a07f094141607",
"scripts/indexed_db.js": "23ff3cc2fed61b860360b71d531a99c2",
"manifest.json": "64b2125ccbf170dda1a78547c4920844",
"assets/AssetManifest.json": "85a784ddff068e20a55085e85c2924b0",
"assets/NOTICES": "5b2415a362da73eb30b1a0e2a8268194",
"assets/FontManifest.json": "5f5cd186549cf1c88ec9372ea8182340",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "3da8db876c2dde619bdbe28ed223a2de",
"assets/fonts/MaterialIcons-Regular.otf": "61c3057c69cc7c6036fdb5d30b2d1ec4",
"assets/assets/svg/illustrations/ill_onboarding_18.svg": "396e3e988e26040adf87c6dd66349208",
"assets/assets/svg/illustrations/ill_small_error_cross.svg": "db041498106414827642d73dddcf3d1d",
"assets/assets/svg/illustrations/ill_phone_refresh.svg": "3e6e388d8316e0ba4feb02f290f89056",
"assets/assets/svg/illustrations/ill_onboarding_18_dark.svg": "b489db1dee5a15c928fcec1292149ec6",
"assets/assets/svg/illustrations/ill_app_locked.svg": "685e2d865ce6404260a66e815023fe36",
"assets/assets/svg/illustrations/ill_tools_circle.svg": "b2c3436aa0cf490bcf3e737859a888b1",
"assets/assets/svg/illustrations/ill_warning_triangle.svg": "285f7dd6aab62067ca9dabd6a0cc2e1b",
"assets/assets/svg/illustrations/ill_onboarding_diamond_dark.svg": "5743cf33aed23107c001d6ebe030fa88",
"assets/assets/svg/illustrations/ill_clock.svg": "9b6207b54f00c3c85d396cda739798d1",
"assets/assets/svg/illustrations/ill_rosbank_invest_muller_label.svg": "026b15833f7a6c21fc7d68a91aacc7b5",
"assets/assets/svg/illustrations/ill_completed_form.svg": "67048c9ab3f72ef32511902d5fb6b399",
"assets/assets/svg/illustrations/ill_rosbank_online_logo.svg": "fdda3c9c2d17817ad2db8b7a25f45da5",
"assets/assets/svg/illustrations/ill_logo_rb_short.svg": "541c926f86633bfd2d5e25a050b17d6f",
"assets/assets/svg/illustrations/ill_onboarding_sand_clock_dark.svg": "c944157aa494bcf0b78131d6f7a4c95c",
"assets/assets/svg/illustrations/ill_onboarding_error_cross_dark.svg": "c1971b99f6ca9a8efb9b6abeb32d9a17",
"assets/assets/svg/illustrations/ill_internet_error.svg": "9c1a3379076168bf2357fbca1a659975",
"assets/assets/svg/illustrations/ill_onboarding_not_resident.svg": "3ae6d8cc0d6b74293612251c58693039",
"assets/assets/svg/illustrations/ill_qualified_investor.svg": "a500bd34482152da2edbc7e448db46da",
"assets/assets/svg/illustrations/ill_onboarding_diamond.svg": "ceb701b2cf9e0d06d6eb9268e4b9c7cb",
"assets/assets/svg/illustrations/ill_checkbox_filled.svg": "44be0671606ec56fc885e6aa09a9f613",
"assets/assets/svg/illustrations/ill_cloud_warning.svg": "c09cacd0197829fec649a741ad4df1f7",
"assets/assets/svg/illustrations/ill_person_success_circle.svg": "3ff3f1d140d29e3b2181369016969ad6",
"assets/assets/svg/illustrations/ill_error_cross.svg": "f74c28b949cc50a2885d4613b339ef45",
"assets/assets/svg/illustrations/ill_blue_certificate.svg": "cd2100bc9893b1c2b6a0d2b2b2a7d94c",
"assets/assets/svg/illustrations/ill_withdrawal_money.svg": "0e9ab0768199c70f77cb44fe0206f56e",
"assets/assets/svg/illustrations/ill_onboarding_sand_clock.svg": "ca2dfd2dd58d151d5b169ddb2f69c6fc",
"assets/assets/svg/illustrations/ill_onboarding_shield_dark.svg": "7ef0fce4d969c796767d7d9458951cf5",
"assets/assets/svg/illustrations/ill_document_failure.svg": "c58fd4654d7b4a02c9daa3862097fa20",
"assets/assets/svg/illustrations/ill_onboarding_clock.svg": "7ddf54a721eff01a57538ced0d43b356",
"assets/assets/svg/illustrations/ill_onboarding_refresh.svg": "447853af3b7ff8a88cb89d6a479e9df8",
"assets/assets/svg/illustrations/ill_onboarding_person_money.svg": "ec73d79f8ede36431057cbd7d4f4f1f3",
"assets/assets/svg/illustrations/ill_yellow_bell.svg": "d1fcff54002e1f17035972e1851e2745",
"assets/assets/svg/illustrations/ill_arrival_money.svg": "61bb92683e3d278211b0e35ea7503a4b",
"assets/assets/svg/illustrations/ill_onboarding_shield.svg": "f2e8f4c49da1d2bfd21d550ea9f4115f",
"assets/assets/svg/illustrations/ill_checkbox_empty.svg": "2e2f48261693d970db6327331e8aafcc",
"assets/assets/svg/illustrations/ill_onboarding_not_resident_dark.svg": "8a32467dac736e93fa88c528fbafb7bc",
"assets/assets/svg/illustrations/ill_gears.svg": "447ef6a992804e50b4bfa01151916101",
"assets/assets/svg/illustrations/ill_rosbank_invest_muller_label_light.svg": "63044fb6b632bee4a3003dacacb3a9c2",
"assets/assets/svg/illustrations/ill_onboarding_error_cross.svg": "5c75542067a0d7de2cf4095d85301103",
"assets/assets/svg/illustrations/ill_onboarding_refresh_dark.svg": "7daeb884af655af27402b2e24b4ce48b",
"assets/assets/svg/illustrations/ill_onboarding_clock_dark.svg": "c111f6d4b93bf9203300ee37ec463acf",
"assets/assets/svg/illustrations/ill_yellow_lock.svg": "fe254efdb62bb5bfa4de6a415c7cb258",
"assets/assets/svg/illustrations/ill_rosbank_logo.svg": "69586f0f50b5bfae5d4f5da5d5ef240c",
"assets/assets/svg/illustrations/ill_onboarding_person_money_dark.svg": "575e72e3193aa7dc99060f37ec0f51a8",
"assets/assets/svg/icons/ic_doc.svg": "e63a23f6b7f4d80ff6105c46bc6d608e",
"assets/assets/svg/icons/ic_pwa_install.svg": "49dea5aa75c94d634a63d4efe4875898",
"assets/assets/svg/icons/ic_money_in.svg": "498cccf1af5975c154f9353b56439075",
"assets/assets/svg/icons/ic_ios_share.svg": "07263baa4f14eb62576a9396baf30199",
"assets/assets/svg/icons/ic_money_out.svg": "5663b779beb3a5f37c5a834d57d81b02",
"assets/assets/svg/icons/ic_arrow_down.svg": "bb6e80faec6e08279a43fac10f9f07ed",
"assets/assets/svg/icons/ic_bookmarks_filler.svg": "4fd5549cfc2ac4d37ee67b0903d79dd1",
"assets/assets/svg/icons/ic_news_filler.svg": "f9bd8250c65f0e5e28df4ee5f27108e8",
"assets/assets/svg/icons/ic_more.svg": "9fc37fdbb5eecf3b8571341ff2af3700",
"assets/assets/demo_data/candles_response_example.json": "b8b36868f7d751b8d1313878b70ee9df",
"assets/assets/images/img_lhermitage_logo.png": "48162e1d453246106a9c3e5b03daf26a",
"assets/assets/images/img_rosbank_invest_logo.png": "7188bc3387600f0cf985de89a7be7007",
"assets/assets/images/img_suit_person.png": "42e239d67fb73b635544223d23bfe8de",
"assets/assets/images/illustrations/study.png": "3f125c3092672b1d65a77a1672734b6f",
"assets/assets/images/illustrations/congratulations.png": "4b94a250a6589e777346a16a7819a9e3",
"assets/assets/images/app_icon_development.png": "401530d3b5afd66bd3dc882c2d2a2856",
"assets/assets/images/img_phone_pincode_error.png": "3507cb927131d43fd74a943b2e12ddb6",
"assets/assets/images/img_rosbank_invest_logo_light.png": "86e49631cc607d23815252a262375e5b",
"assets/assets/images/img_splash_background.png": "2b475ff8bc9b4119738c48e7fe9d7908",
"assets/assets/images/img_rosbank_evo_logo.png": "5112cf4d713a64c923072848b4d8d10a",
"assets/assets/images/img_splash_background_dark.png": "a19300be9be252960df975222a7a80c0",
"assets/assets/images/img_splash_error_background.png": "09b36f62fce9c0d69d17a613570dd703",
"assets/assets/images/pwa_ios_install/to_home.png": "1c96ec50ffe7a260ab8169ba1cfb1c8b",
"assets/assets/images/pwa_ios_install/change_name.png": "9fc0875068ed68f08e8a55d1b00440fd",
"assets/assets/images/img_withdrawal_icon.png": "1430f161bdf89f8f8fdeba695254223e",
"assets/assets/images/app_icon_production.png": "eca718a4749d7411de85b1c5df041945",
"assets/assets/images/app_intro/img_onboarding_step_4.png": "420a0bfb1f4395943872803ded74a2b5",
"assets/assets/images/app_intro/img_onboarding_step_1.png": "30c8ed30dfb2b7488c9794a3dc0e7dd9",
"assets/assets/images/app_intro/img_onboarding_step_2.png": "8f0a6958e2589e1eea150f20a9516fda",
"assets/assets/images/app_intro/img_onboarding_step_3.png": "ecc975a17fc9a3df93c134de25b3c088",
"assets/assets/images/img_rosbank_invest_logo_splash_light.png": "cefa8b271684ec79d138b718765c8972",
"assets/assets/images/img_rosbank_invest_logo_splash.png": "79da41d8663667aa90b6e940770d8254",
"assets/assets/rive/rive_bell.riv": "090fb42b5fac9552e7f46f8654909a73",
"assets/assets/rive/rive_loader.riv": "6cb602e39280c6a4891a5167d205feb9",
"assets/assets/fonts/icons/HermitageIcons.ttf": "f4581e040e828540f72c232500ac58fe",
"assets/assets/fonts/sf_pro/SF-Pro-Display-Regular.otf": "5810cdf5bc7db8d0090a6c46890ee33b",
"assets/assets/fonts/sf_pro/SF-Pro-Display-Bold.otf": "01a151b865c124f88ef147e5592bae76",
"assets/assets/fonts/sf_pro/SF-Pro-Display-Medium.otf": "fb9b9cc0d18e37d34fee679aa55d7f3f",
"assets/assets/fonts/sf_pro/SF-Pro-Display-Semibold.otf": "e570ec818d03840bfd5072c83deb1b21",
"assets/assets/fonts/sf_pro/SF-Pro-Display-Black.otf": "f180bcab9705cb31acf307493e48e659",
"assets/assets/translations/ru.json": "c95f2c0607f4c89c8065707a4b6002c4",
"pwa_advertising/narrow/advertising5.jpeg": "911f806a23a16d146b5b96e4efd7b81d",
"pwa_advertising/narrow/advertising4.jpeg": "5e4f42f873ae891a297ad7f2a7273ecb",
"pwa_advertising/narrow/advertising3.jpeg": "c92b62949bbea957b786123d62f71b05",
"pwa_advertising/narrow/advertising2.jpeg": "90cde3f71e6bdbf667adc751095f346f",
"pwa_advertising/narrow/advertising1.jpeg": "9c99a8da49dacf2b8c0216cc4b60e038",
"pwa_advertising/narrow/advertising0.jpeg": "2f4b6135b1d160b875d15402aadfb8fe",
"pwa_advertising/narrow/advertising6.jpeg": "e50f3c2663373264d5bbae2e53989c74",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
