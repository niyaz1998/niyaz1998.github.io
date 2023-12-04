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
"index.html": "1ad9dbf7fc7c95c3061ee00276f1c4da",
"/": "1ad9dbf7fc7c95c3061ee00276f1c4da",
"main.dart.js": "fa2afb0a70b5fd97ebd856d3a30ec880",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0a1253e0cc231a114ac39b40f43106b4",
"assets/AssetManifest.json": "0da86f803dd572760e0eac2a9048abee",
"assets/NOTICES": "d022a582e4399ddb72a186d7789760b9",
"assets/FontManifest.json": "3020802906dc520f88ca973c65aa46d8",
"assets/AssetManifest.bin.json": "6287d806512726b7ae97a1336ef30556",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "0a10f33a578ce74588edd1faabe63da5",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "f06977e02c665f9ecdf76824d9e42302",
"assets/assets/svg/location_pin.svg": "e978f5acdec7b42a4cd10833ba5cde86",
"assets/assets/svg/target_pin.svg": "1c7256e559a8c15be7bb7a241b6dca8a",
"assets/assets/svg/rounded_pin.svg": "b916742366bd7acf006dce0a57e6423d",
"assets/assets/images/info_icon.svg": "60cc941910a85e561b0d8ab8f04090c4",
"assets/assets/images/minus_icon.svg": "e2f28bd4e622fe477ff0b94dbd859a58",
"assets/assets/images/workflow_complete.svg": "02aca1782410218aab30271460b99368",
"assets/assets/images/target_pin.png": "f5ce59227ea1b8bc70a8e242c8b6e06c",
"assets/assets/images/target_pin_loading.png": "95374e8e740244632508f33273aec3dc",
"assets/assets/images/destination_pin.svg": "574b2ad77a35384a2b8c9d6fccf73f63",
"assets/assets/images/company_name.svg": "76e42f746b1590c013415fcababe7617",
"assets/assets/images/orders_empty.svg": "83d42262bfd823754d6dbe72827608e6",
"assets/assets/images/icon_cards.svg": "ca2ca1d3b4651afd4fc4bffb47c02417",
"assets/assets/images/icon_order_marketplace.svg": "82d2bb6ee6dc089e57acc9d36f067cd8",
"assets/assets/images/group_info_icon.svg": "0f69e86f3751bd1465f767c36aa70991",
"assets/assets/images/checkmark_icon.svg": "ecf5cd42e8f8c5f7cf623895c4cc9984",
"assets/assets/images/notification_permission.svg": "f025cd812f871018c9112ac94a2d215f",
"assets/assets/images/edit_icon.svg": "491c23f9cb9e9c1e910de6c629a50d9a",
"assets/assets/images/target_pin_destination.png": "6858df5382f48ab06cf7ccc16cb905c7",
"assets/assets/images/check_progress.svg": "d384d8d4d1607350573edde53372fc74",
"assets/assets/images/check_complete.svg": "bcb7a80f521ad0abf0dc49fb325013e2",
"assets/assets/images/workflow_error.svg": "b699a9f97d77999626a87eac793bdf00",
"assets/assets/images/bell_button.svg": "529f854b40ee5b0fada036afe6886666",
"assets/assets/images/external_link.svg": "fa315dd0b890611a818fb23581849969",
"assets/assets/images/chevron_right.svg": "d0370c96eb9e6dfb24ac3cae943efcad",
"assets/assets/images/vertical_dots.svg": "6bcab0760a4b5ad0da7634d887de79a4",
"assets/assets/images/geo_location_permission.svg": "ac8f79eb30e106bde09aca962a88e1af",
"assets/assets/images/check_error.svg": "e133c3717b153ec33d4588203a9a7188",
"assets/assets/images/direction_pin.svg": "5db5f48d47892a5d910620ee15b814fc",
"assets/assets/images/local_shipping.svg": "4b9880b5244bd827b9f0e4233ace0d57",
"assets/assets/images/introduction.svg": "80f2cbc525122dadeaba17830ee37570",
"assets/assets/images/icon_order_supply.svg": "8a8366f0449a03ab83d712fbc268e7b5",
"assets/assets/images/plus_icon.svg": "89a6f1262be25d16ab75f2d73b825be5",
"assets/assets/images/%25D0%259A%25D0%25BE%25D0%25BD%25D1%2581%25D0%25BE%25D0%25BB%25D1%258C.txt": "878744e48b43579ae87a42c8ba705451",
"assets/assets/images/back_button.svg": "11aa364b1db982710ac539ed966346eb",
"assets/assets/images/logo_small.svg": "3f07f40f24e7b357180c73e142f2caea",
"assets/assets/images/building_icon.svg": "8aa63bbb6814de7c419ddc25068071ba",
"assets/assets/images/locate_fixed.svg": "dd832904da870ada6a0b1fa576fc117d",
"assets/assets/images/user_icon.svg": "b8a12081c2cc64f09a757c451b566ee2",
"assets/assets/images/workflow_failed.svg": "59f529072516aa7c2f0cd5b024f05545",
"assets/assets/images/filter_icon.svg": "5f9e167a0a0d64a15ba280a02c677f3e",
"assets/assets/images/icon_not_found.svg": "69702a62f7fe5bae00d1c59ac2d098f1",
"assets/assets/web/target_pin_cb11ab.svg": "c5aead788c571b61a0f21ac71630f70b",
"assets/assets/web/location_pin_ffffff.svg": "e978f5acdec7b42a4cd10833ba5cde86",
"assets/assets/web/target_pin_abe409.svg": "29c7b65e8f3b778ee35419b4d5561b99",
"assets/assets/web/target_pin_9e9e9e.svg": "999a9fc6d1a85d78e3016958e9c43097",
"assets/assets/web/rounded_pin_9e9e9e.svg": "3fb082906dfbe05ccb7144284883632f",
"assets/assets/web/rounded_pin_abe409.svg": "b916742366bd7acf006dce0a57e6423d",
"assets/assets/web/rounded_pin_cb11ab.svg": "37f20276415161e4751642eaeaf99965",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
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
