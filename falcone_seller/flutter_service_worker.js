'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "59488c68b2be5c9176f0a0c41238d566",
"splash/img/light-2x.png": "f8b4480fe448f8a3d6fa983d113109c6",
"splash/img/dark-4x.png": "615d6361d67ff69cefd3fd9fc61b3bcb",
"splash/img/light-3x.png": "0a9f9e0bf09f8379340769441448ba4b",
"splash/img/dark-3x.png": "0a9f9e0bf09f8379340769441448ba4b",
"splash/img/light-4x.png": "615d6361d67ff69cefd3fd9fc61b3bcb",
"splash/img/dark-2x.png": "f8b4480fe448f8a3d6fa983d113109c6",
"splash/img/dark-1x.png": "a26aaadffbb6a51f4509c065fe2c0b93",
"splash/img/light-1x.png": "a26aaadffbb6a51f4509c065fe2c0b93",
"index.html": "122597537caf29b3d7ad5ae1a4b048a6",
"/": "122597537caf29b3d7ad5ae1a4b048a6",
"firebase-messaging-sw.js": "1cddc06d6438a1e14348b7845c0bad03",
"main.dart.js": "bd612a057fd69c11467135af22992486",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "f17f462fb9e69f3f06a054fcd076ea8d",
"icons/Icon-192.png": "1a289ebe188ecfd529568a95a432146c",
"icons/Icon-maskable-192.png": "1a289ebe188ecfd529568a95a432146c",
"icons/Icon-maskable-512.png": "1a289ebe188ecfd529568a95a432146c",
"icons/Icon-512.png": "1a289ebe188ecfd529568a95a432146c",
"manifest.json": "0a1253e0cc231a114ac39b40f43106b4",
"assets/AssetManifest.json": "37204eb7b3c4eb869f771a40be88fd53",
"assets/NOTICES": "74b52949176e62e4eb6b35e3e7f46343",
"assets/FontManifest.json": "3020802906dc520f88ca973c65aa46d8",
"assets/AssetManifest.bin.json": "fd8e4c4f42329cd983b11b655b6e5373",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "25563b67ca162b842ed24cfa17f6f26e",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "847b29915570fc97be6837c2cf31afac",
"assets/assets/pins/pin_destination_dark.png": "be6838e5082fffc4a8dd591ba045be73",
"assets/assets/pins/target_pin.png": "ffbee99af01a04804cc460dce08c435d",
"assets/assets/pins/location_pin.png": "8710c84093b91d1698c739eeb7cd3ae5",
"assets/assets/pins/target_pin_dark.png": "5ba54fd2687bf86017ff46cb4e2700d1",
"assets/assets/pins/pin_start_dark.png": "f5720217adc068af11f51b54d9bc2804",
"assets/assets/pins/pin_start.png": "228f8ef1408b3e21ccf3b547ec066bce",
"assets/assets/pins/driver_pin.png": "bece795e41914c7b6bbf40d9db98abb1",
"assets/assets/pins/pin_destination.png": "6cc360015004f7122e677e039c3709a7",
"assets/assets/pins/driver_pin_dark.png": "4153d15d72745b49509b2942988ee466",
"assets/assets/images/info_icon.svg": "60cc941910a85e561b0d8ab8f04090c4",
"assets/assets/images/pallet.svg": "7ea1ff095bfb1dcc4fff4212545f14f6",
"assets/assets/images/minus_icon.svg": "e2f28bd4e622fe477ff0b94dbd859a58",
"assets/assets/images/workflow_complete.svg": "02aca1782410218aab30271460b99368",
"assets/assets/images/icon_call.svg": "6d983ae516660493af8ab9ba201dbcf0",
"assets/assets/images/destination_pin.svg": "574b2ad77a35384a2b8c9d6fccf73f63",
"assets/assets/images/company_name.svg": "76e42f746b1590c013415fcababe7617",
"assets/assets/images/orders_empty.svg": "83d42262bfd823754d6dbe72827608e6",
"assets/assets/images/icon_cards.svg": "ca2ca1d3b4651afd4fc4bffb47c02417",
"assets/assets/images/icon_order_marketplace.svg": "82d2bb6ee6dc089e57acc9d36f067cd8",
"assets/assets/images/order_services.svg": "997880e4aa4cea439949926c50e1a2df",
"assets/assets/images/group_info_icon.svg": "0f69e86f3751bd1465f767c36aa70991",
"assets/assets/images/checkmark_icon.svg": "ecf5cd42e8f8c5f7cf623895c4cc9984",
"assets/assets/images/notification_permission.svg": "f025cd812f871018c9112ac94a2d215f",
"assets/assets/images/edit_icon.svg": "491c23f9cb9e9c1e910de6c629a50d9a",
"assets/assets/images/target_pin_destination.png": "6858df5382f48ab06cf7ccc16cb905c7",
"assets/assets/images/illustrations/introduction_light.svg": "e523337981b456dc2845256c4d15c965",
"assets/assets/images/illustrations/driver_personal_data_intro_light.svg": "da91138570ad3bf05972562cccc4eb65",
"assets/assets/images/illustrations/location_destination_dark.svg": "77301b9ac7eb106334c067d43d616e74",
"assets/assets/images/illustrations/workflow_error_light.svg": "63fa69b93b42dd7ebdce0e7207444b9b",
"assets/assets/images/illustrations/driver_personal_data_intro_dark.svg": "102885ca72a853932cb5eb6fc08ef68d",
"assets/assets/images/illustrations/location_destination_light.svg": "694c0e66e734497110795b63f1ba498a",
"assets/assets/images/illustrations/workflow_complete_light.svg": "2813c4a69e1d31c4265d88172d9151fa",
"assets/assets/images/illustrations/sand_watch_dark.svg": "10882f2b382fc1c4f8258be81f7692d3",
"assets/assets/images/illustrations/workflow_failed_light.svg": "a0a42de94e385cba50364d0232d80e65",
"assets/assets/images/illustrations/workflow_error_dark.svg": "b1c9665e64393dfbd18b086e644b7838",
"assets/assets/images/illustrations/delete_account_light.svg": "af8e23e08856499a50ebfb949e8b46cf",
"assets/assets/images/illustrations/organisation_light.svg": "abfe14ea478473479f5c694503b28957",
"assets/assets/images/illustrations/check_status_correction_light.svg": "faf213923884099c169af7a4f5b0aa23",
"assets/assets/images/illustrations/checkmark_success_light.svg": "e0d64806cfea303524f4886329b5b451",
"assets/assets/images/illustrations/bus_light.svg": "77ff676ed2ef5d735a604d24fd6c1936",
"assets/assets/images/illustrations/delete_account_dark.svg": "442aa66e979002e2c8fd1c5def7136bb",
"assets/assets/images/illustrations/meditation_dark.svg": "cd24e4d7af95af37b5646a737c40f841",
"assets/assets/images/illustrations/workflow_failed_dark.svg": "344e3a3efe86059734a2ad25aea9f963",
"assets/assets/images/illustrations/bus_dark.svg": "afc75cf65b1a7e2171664fd5c18c7aab",
"assets/assets/images/illustrations/notepad_light.svg": "b796f5e2212e233d29404f49750253b5",
"assets/assets/images/illustrations/introduction_dark.svg": "f04fa6dff5faa6ec19d080d546e33c7c",
"assets/assets/images/illustrations/meditation_light.svg": "e4c77e800c8f633f2e60b8f2df734d4e",
"assets/assets/images/illustrations/workflow_complete_dark.svg": "e6bb7d1d4b623878b609533b30035d5e",
"assets/assets/images/illustrations/check_status_refused_light.svg": "f6909937158d42c7d3462cc9ab9da35a",
"assets/assets/images/illustrations/check_status_correction_dark.svg": "6269e3b5310fdc2e66cf9ea303a4ae87",
"assets/assets/images/illustrations/check_status_refused_dark.svg": "abf3a9bc1fa4a5e9a40f9a6fc88502d1",
"assets/assets/images/illustrations/sand_watch_light.svg": "ea5ba46e65722379481a56d4c24a784c",
"assets/assets/images/navigator.svg": "90d7b72482d41b89cced13a2e7ed10dc",
"assets/assets/images/check_progress.svg": "d384d8d4d1607350573edde53372fc74",
"assets/assets/images/check_complete.svg": "bcb7a80f521ad0abf0dc49fb325013e2",
"assets/assets/images/pending_light.svg": "13574d34ea6e6f6e70fb8f48bda4aeb6",
"assets/assets/images/workflow_error.svg": "b699a9f97d77999626a87eac793bdf00",
"assets/assets/images/bell_button.svg": "529f854b40ee5b0fada036afe6886666",
"assets/assets/images/check_error_2.svg": "8d6ebb355c84679203b3e573704d02b2",
"assets/assets/images/external_link.svg": "fa315dd0b890611a818fb23581849969",
"assets/assets/images/chevron_right.svg": "d0370c96eb9e6dfb24ac3cae943efcad",
"assets/assets/images/vertical_dots.svg": "6bcab0760a4b5ad0da7634d887de79a4",
"assets/assets/images/warning.svg": "60cc941910a85e561b0d8ab8f04090c4",
"assets/assets/images/icon_logout.svg": "5db64378a77860c0f43db3dba87933f0",
"assets/assets/images/geo_location_permission.svg": "ac8f79eb30e106bde09aca962a88e1af",
"assets/assets/images/check_error.svg": "e133c3717b153ec33d4588203a9a7188",
"assets/assets/images/direction_pin.svg": "5db5f48d47892a5d910620ee15b814fc",
"assets/assets/images/local_shipping.svg": "4b9880b5244bd827b9f0e4233ace0d57",
"assets/assets/images/introduction.svg": "80f2cbc525122dadeaba17830ee37570",
"assets/assets/images/icon_order_supply.svg": "8a8366f0449a03ab83d712fbc268e7b5",
"assets/assets/images/truck.svg": "8a0c2f38a47cd6d36d415e497b05f907",
"assets/assets/images/plus_icon.svg": "89a6f1262be25d16ab75f2d73b825be5",
"assets/assets/images/icons/cross_icon.svg": "680bf6a11d555e083a8f8b5eed5134fc",
"assets/assets/images/icons/clock_icon.svg": "52e9838c5c18c5887d9013e11335b443",
"assets/assets/images/back_button.svg": "11aa364b1db982710ac539ed966346eb",
"assets/assets/images/logo_small.svg": "3f07f40f24e7b357180c73e142f2caea",
"assets/assets/images/building_icon.svg": "8aa63bbb6814de7c419ddc25068071ba",
"assets/assets/images/banknote.svg": "e32063d8b13bc999634fab722b1ffeed",
"assets/assets/images/locate_fixed.svg": "dd832904da870ada6a0b1fa576fc117d",
"assets/assets/images/user_icon.svg": "b8a12081c2cc64f09a757c451b566ee2",
"assets/assets/images/workflow_failed.svg": "59f529072516aa7c2f0cd5b024f05545",
"assets/assets/images/filter_icon.svg": "5f9e167a0a0d64a15ba280a02c677f3e",
"assets/assets/images/cross.svg": "9b5485371ff14f8e8958c1901aa05198",
"assets/assets/images/asterisk.svg": "b9ce8a9aeb380ca0ae5dda56d642ef87",
"assets/assets/images/icon_delete_profile.svg": "1d5675a63ae1361f91ffb08c0bf66fc3",
"assets/assets/images/icon_not_found.svg": "69702a62f7fe5bae00d1c59ac2d098f1",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
