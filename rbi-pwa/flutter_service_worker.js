'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "d84960956ed593c503e364615491a05c",
"index.html": "259e3e690291be92cff0c6da573e4889",
"/": "259e3e690291be92cff0c6da573e4889",
"firebase-messaging-sw.js": "03aee12d8e6333542d2e439666ff8d09",
"main.dart.js": "4b5887c791cdb116a7a1b36139225daa",
"r/index.html": "8805e30555a6ba81e0b60ff6bee4159c",
"r/fallback_deeplink/rbi_fallback_redirect.html": "fedaf9179bd46d61565a3fe7ec776002",
"r/portfolioAnalytics/index.html": "3bbce5f3c5ccaf9f0a5e52f25cfa98a5",
"r/trading/index.html": "d27cc528e77ae64aeb3eb588ece98d3b",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "f45ee08f35918da331190eac7228b062",
"icons/Icon-192.png": "7d6da9461a9b10a946fbb4dc871a4fb0",
"icons/splash_screen_logo.png": "79da41d8663667aa90b6e940770d8254",
"icons/Icon-maskable-192.png": "ccd35871423826858843366b1a7bce30",
"icons/splash_screen_loader.gif": "78918a400f0537d173b6d5681c47b977",
"icons/Icon-maskable-512.png": "5d49d17071ed0a6cae4b3a272a8d2c6f",
"icons/Icon-512.png": "fc20876fcfbd5571d1320ebbb8e11e8f",
"scripts/open_page.js": "cae72ef715c561a5a2a85d6f462ae817",
"scripts/auth.html": "3a1882530a51a75a2eb062f2b2027849",
"scripts/web_authn.js": "97224e9fdc154bd0b240fd47ca67acd5",
"scripts/add_to_home_screen.js": "62201e7b720998c6ad3efd09387890b1",
"scripts/indexed_db.js": "2fe28d105c54b6774c9701fc3ed909fc",
"manifest.json": "6dd07c2cc665c3f69648c30e4d1299f6",
"assets/AssetManifest.json": "f16c9f3e672cafa6d0d9e15af2a58de0",
"assets/NOTICES": "9549c5e18e91f96c004c0fa051abfb4f",
"assets/FontManifest.json": "9f54032da2ea74756c94f3e304162e3d",
"assets/AssetManifest.bin.json": "657724e23770978a7832ce897b908816",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f69b1031e2b301dffb7b3f0222d4c044",
"assets/fonts/MaterialIcons-Regular.otf": "ef64a3434a04d1844272d462917585c0",
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
"assets/assets/svg/icons/ic_phone.svg": "d76dcb5813d5b8c997d5791fb0125ab0",
"assets/assets/svg/icons/ic_key.svg": "0a76ad557465f99f6e5910f0c720990f",
"assets/assets/svg/icons/ic_attach.svg": "4d5d4a79894eca4f203db76c81e6e7ca",
"assets/assets/svg/icons/ic_doc.svg": "e63a23f6b7f4d80ff6105c46bc6d608e",
"assets/assets/svg/icons/ic_back_arrow.svg": "7877250d6e7ab9256ff0ec9d1b4c70de",
"assets/assets/svg/icons/ic_medal.svg": "b6670ec1cd3530558de8fea472b7388f",
"assets/assets/svg/icons/ic_pwa_install.svg": "49dea5aa75c94d634a63d4efe4875898",
"assets/assets/svg/icons/ic_lock.svg": "fc66ef28bc9927dae403e4c3c35c73d8",
"assets/assets/svg/icons/ic_delete.svg": "a8ab9991fa05423d3ab0b687ffb4f8a5",
"assets/assets/svg/icons/ic_desc_sort.svg": "d3d1c3391ec6a8e6e748ebb5e5f06182",
"assets/assets/svg/icons/ic_money_in.svg": "498cccf1af5975c154f9353b56439075",
"assets/assets/svg/icons/ic_news.svg": "78b3cc40dbd8a6610cd7ac4cc8e7e08e",
"assets/assets/svg/icons/ic_star_sharp_filled.svg": "df89ed461f7689750817eb3303c97c92",
"assets/assets/svg/icons/ic_quotes.svg": "5fc687faf2e73f1517820cbbdfd23d33",
"assets/assets/svg/icons/ic_doc_arrow_down.svg": "25decd00022a8246319148dae21b8255",
"assets/assets/svg/icons/ic_plus.svg": "6f4baab6a87bf15e328bad6b45ebf79d",
"assets/assets/svg/icons/ic_clock_hands.svg": "ac9ba73590bd0a1e8474204d746ca7c2",
"assets/assets/svg/icons/ic_requisites.svg": "2b2a14a96011e3f4e08468b6ca7fac0f",
"assets/assets/svg/icons/ic_minus.svg": "e9f5f22329d3d830621d5aac47d47359",
"assets/assets/svg/icons/ic_add.svg": "5241748235cb0588c038fa78917ff429",
"assets/assets/svg/icons/ic_bell.svg": "ed29d5733c2e16355404236d5c933497",
"assets/assets/svg/icons/ic_graph_line.svg": "7929fabf1c1c4e235c007ba4e7a4dd21",
"assets/assets/svg/icons/ic_close.svg": "fa77e2e152abbecadcb02e3ebfaa54df",
"assets/assets/svg/icons/ic_format_list_bulleted.svg": "3bf8cf33721ff7965bc7e51123e868a7",
"assets/assets/svg/icons/ic_star_outlined.svg": "4042b3a2667e9d3f70f4e6436a10d231",
"assets/assets/svg/icons/ic_report.svg": "16d55feb833cb2865fe45d15f6ab4c8e",
"assets/assets/svg/icons/ic_content_copy.svg": "48371df9ffa8dbe09458a3c6ed5bf26d",
"assets/assets/svg/icons/ic_calendar.svg": "d4b71d330b29c1f0a28b1513eb079693",
"assets/assets/svg/icons/ic_bell_filled.svg": "00d861ed8da13a6354264619119696af",
"assets/assets/svg/icons/ic_diplomat.svg": "01033a36197edba9d9429be1e98b20fa",
"assets/assets/svg/icons/ic_ios_share.svg": "07263baa4f14eb62576a9396baf30199",
"assets/assets/svg/icons/ic_speech_balloons.svg": "20b89c84d17b0c3fcd68eafa7cefe1a5",
"assets/assets/svg/icons/ic_medal_outline.svg": "708fc357291a79d2eb38c0d0dcf8e4ff",
"assets/assets/svg/icons/ic_trash.svg": "3b5e224b5a06286600560494e11196f5",
"assets/assets/svg/icons/ic_bookmark.svg": "0076ad904885dfcbc2978370c0a3052d",
"assets/assets/svg/icons/ic_down.svg": "8b545502e95ecb493258ec258f29885b",
"assets/assets/svg/icons/ic_star_filled.svg": "a31d220e46f0c7e824932f6cacbc0b87",
"assets/assets/svg/icons/ic_story_close.svg": "ca8ab30b95dc4971705373ceae963439",
"assets/assets/svg/icons/ic_money_out.svg": "5663b779beb3a5f37c5a834d57d81b02",
"assets/assets/svg/icons/ic_info_circle.svg": "580b2d395d4582775b399de5a634575c",
"assets/assets/svg/icons/ic_money_out_old.svg": "89dd0ce705758cf08fffd4f32426a466",
"assets/assets/svg/icons/ic_exit.svg": "dfa77d016bebdd5ecaa29986b45c1260",
"assets/assets/svg/icons/ic_chevron_left.svg": "a50fc0fa4c28bd30bcb7a3bb73eead52",
"assets/assets/svg/icons/ic_chevron_up.svg": "4a907fda6048631aaa4c6c3a53e0568c",
"assets/assets/svg/icons/ic_check.svg": "d63279581a2b822bb722984390dd8b1b",
"assets/assets/svg/icons/ic_arrow_down.svg": "bb6e80faec6e08279a43fac10f9f07ed",
"assets/assets/svg/icons/ic_up.svg": "697ea5334648433e4f6f4b2bcc78d8ab",
"assets/assets/svg/icons/ic_wallet.svg": "58aa7d281beb8d28034bd98a89763885",
"assets/assets/svg/icons/ic_person.svg": "789d4d431d9324b50f76037d0286f221",
"assets/assets/svg/icons/ic_bookmarks_filler.svg": "4fd5549cfc2ac4d37ee67b0903d79dd1",
"assets/assets/svg/icons/ic_face_id.svg": "5a23d4ca987a528c6e98919d7528457c",
"assets/assets/svg/icons/ic_news_filler.svg": "f9bd8250c65f0e5e28df4ee5f27108e8",
"assets/assets/svg/icons/ic_chevron_right.svg": "d0b71febaa5fdb6045751b53dafb1012",
"assets/assets/svg/icons/ic_empty_sheet.svg": "d6d3b01ca947450750a15eca2595f1de",
"assets/assets/svg/icons/ic_settings.svg": "a6eecd4f719354ba12bef40735873e96",
"assets/assets/svg/icons/ic_small_chevron_down.svg": "6a913439bb80ad6d488b93b83b5d3689",
"assets/assets/svg/icons/ic_search.svg": "d37014a5546e30764a29d35ce70626a5",
"assets/assets/svg/icons/ic_open_in_new.svg": "9d6bc011b2907652e9362706e7894f90",
"assets/assets/svg/icons/ic_fingerprint.svg": "a0edda7c85d29fd900fad88e5bd55341",
"assets/assets/svg/icons/ic_question_mark.svg": "6e8d87e931a3eaa2a0d0db72dd16b13c",
"assets/assets/svg/icons/ic_back_arrow_long.svg": "7254ed0a18ae5a8aed93fdc4a83b2ef7",
"assets/assets/svg/icons/ic_candle.svg": "df4d0d906b174b0f180eafc9c5a895cd",
"assets/assets/svg/icons/ic_export.svg": "339f1829d4be9e2d83f3527f097643ff",
"assets/assets/svg/icons/ic_asc_sort.svg": "dc90be92b8f283a89b31d2c82985dc06",
"assets/assets/svg/icons/ic_doc_arrow_up.svg": "336074722461953524c7e327463423b2",
"assets/assets/svg/icons/ic_more.svg": "9fc37fdbb5eecf3b8571341ff2af3700",
"assets/assets/svg/icons/ic_doc_old.svg": "d220d4dd08bfb9c16f4d3815fd072969",
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
"assets/assets/images/img_rosbank_evo_logo.png": "a013fa2129dea1c9da61d7de663be8cd",
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
"assets/assets/translations/ru.json": "59b92d57344f6a70aa5cfcf0464db0e3",
"pwa_advertising/narrow/advertising5.jpeg": "911f806a23a16d146b5b96e4efd7b81d",
"pwa_advertising/narrow/advertising4.jpeg": "5e4f42f873ae891a297ad7f2a7273ecb",
"pwa_advertising/narrow/advertising3.jpeg": "c92b62949bbea957b786123d62f71b05",
"pwa_advertising/narrow/advertising2.jpeg": "90cde3f71e6bdbf667adc751095f346f",
"pwa_advertising/narrow/advertising1.jpeg": "9c99a8da49dacf2b8c0216cc4b60e038",
"pwa_advertising/narrow/advertising0.jpeg": "2f4b6135b1d160b875d15402aadfb8fe",
"pwa_advertising/narrow/advertising6.jpeg": "e50f3c2663373264d5bbae2e53989c74",
"pwa_advertising/email/Wallet.png": "e9b01544e9dd6300233e1471222b3a27",
"pwa_advertising/email/image_2.png": "f9bf6789e0863bbaf0c7554f0cfbc691",
"pwa_advertising/email/image_1.png": "a8ffe107c3b2dc9998df120a87f33ca3",
"pwa_advertising/email/header.png": "a5f35347dadb7238e772c5ec70dfacac",
"pwa_advertising/email/Logo.png": "f35d6a73a98037e9e5c0eae82c63f24c",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
