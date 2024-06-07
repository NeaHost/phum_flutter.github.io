'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6ca7c1d692435184ebf83d2f563f12a3",
"version.json": "9094aacdae789dccd67fa32109ff1a18",
"index.html": "7094b17f30cb656c0ad95d490b7dcfc4",
"/": "7094b17f30cb656c0ad95d490b7dcfc4",
"main.dart.js": "0441033246f0f5ab3afd0eb3181ef2d3",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "4ef64afb9e8e4c16e6f54931d8e37441",
"manifest.json": "901d86fb8842ec0d66225a542131d689",
"assets/AssetManifest.json": "b3b7270f1aebfb42c3f8cb6cc3c62ff6",
"assets/NOTICES": "b1b801a622a5d04ddf9d31bbde0ba56a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "5f1ba10277cb099911f27e884840567f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "7a59657de035f28a7c23d027cf2d59b2",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ae13e2a602e6c0a9cb16312826505f70",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/home/ic_cardfill.png": "c09eac3fa935538a25830b5dacc00f3b",
"assets/assets/images/home/ic_user.png": "7d76fb24be22f42c2d0a26bc8b7b082b",
"assets/assets/images/home/ic_add.png": "9da8a5bd329ce4899b5cda3e26c25f2c",
"assets/assets/images/home/ic_users.png": "731ad7fccf19394734cbda554874eec2",
"assets/assets/images/home/ic_card.png": "68158634981823eac3c05473cd154c51",
"assets/assets/images/home/ic_flag_en.png": "a59145bbe0ccb2be20027ffa0954eb11",
"assets/assets/images/home/ic_success.png": "2339d70b924582455309086de8f1cd2e",
"assets/assets/images/home/ic_noti.png": "8f8317a7160dee0f50709771b7f00580",
"assets/assets/images/home/ic_flag_km.png": "97323acdfb46ff26091d38a5debaebbc",
"assets/assets/images/home/ic_alert.png": "ecf5069b35e7826c7fea3f4d9cd78b32",
"assets/assets/images/home/ic_flag_english.png": "3155175b8b1392ed24363d01bfd602fa",
"assets/assets/images/home/ic_bgcard.png": "b126e8b6436aa063414a9fe49126816f",
"assets/assets/images/home/ic_unfavourite.png": "7a78004393af8da918a3e4c23955a846",
"assets/assets/images/home/ic_person.png": "8d4831a0bdd9fa63877d4af4acde26a2",
"assets/assets/images/home/ic_flagkm.png": "d40cd2624540c1a172e12c55f5f27f93",
"assets/assets/images/home/ic_favourite.png": "96a7c4aeacd70ee0a7fb176dde6f1fae",
"assets/assets/images/home/ic_eye.png": "000d6715eb40e1ade4d989e43961f247",
"assets/assets/images/drawer/ic_mycontact.png": "b75dea51f3b967ed48cfa002905b59bb",
"assets/assets/images/drawer/ic_background_card.png": "21d3bb9b04b763cf457fddda10595c2a",
"assets/assets/images/drawer/ic_setting.png": "101e6ef9152fc1441b735bff20ccfdcd",
"assets/assets/images/drawer/ic_bell.png": "12a7a1ec67bae41d0d35ea1f9149bee1",
"assets/assets/images/drawer/ic_pw.png": "ba22831f5e4b35e083910064a038f20f",
"assets/assets/images/drawer/ic_sign_out.png": "53ca238b93cb293f7ae5b0e9d9adb32b",
"assets/assets/images/drawer/ic_my_event.png": "9d9a9da30b99efe2f6c2edc60b2ad3f4",
"assets/assets/images/drawer/ic_lang.png": "b3a8f2000d4e576f1e699b5e72f02b67",
"assets/assets/images/drawer/ic_info.png": "e397ad4fb8e12cf7577654b44b49de36",
"assets/assets/images/drawer/ic_myforum.png": "6331806adcaae07bf7aa631c4226c819",
"assets/assets/images/drawer/ic_acc_remove.png": "8250eed4272319dc12887f4daa0aaea7",
"assets/assets/images/drawer/ic_border_qr.png": "1b5f7ae0a474064082d07be2c3d70521",
"assets/assets/images/drawer/ic_event_list.png": "8342b9bccc2a0c9d9c494b9bb8cedccb",
"assets/assets/images/contact/info.png": "83344e2831523a07cedd67e22c70b696",
"assets/assets/images/contact/calendar@2x.png": "5cc42e9eabca9a8405d443823fdb05b4",
"assets/assets/images/contact/ic_calendar.png": "341a85f1fad549d819e20f739d54031d",
"assets/assets/images/contact/clock@2x.png": "70384e9e65674a29923f252524a48648",
"assets/assets/images/contact/ic_marker.png": "dcc27fa49ab63213b4fd107dcf9963b7",
"assets/assets/images/contact/banner.png": "454beecd14829718f16d358c99eade48",
"assets/assets/images/contact/ic_qr.png": "8ffd822630cacbf2ee58b1895d5e03d7",
"assets/assets/images/contact/register.png": "da2ed1938db0ce2934c4441a4f11c964",
"assets/assets/images/contact/home.png": "564360dc8921a39349a39db3b13ed3ad",
"assets/assets/images/contact/ic_mail.png": "4d09d3a30fda4fada53dd01ca34bd392",
"assets/assets/images/contact/ic_search.png": "8adf80c952c5ed085ea20ba686cc0148",
"assets/assets/images/contact/call.png": "d10d9609fb54450d176bf8ca7507591c",
"assets/assets/images/contact/clock.png": "52f85c5e42a7ec992a1c92facf1bd2b3",
"assets/assets/images/contact/edit.png": "fdb92d58a91138e9069bd2e504d157e2",
"assets/assets/images/contact/ic_mall.png": "9f9c78dca20582cc5b36b09e5764651b",
"assets/assets/images/contact/about.png": "439498f4d506b1aba7ca064ec1185880",
"assets/assets/images/contact/ic_login.png": "6a2de516067854ecf4b8b487d050dd75",
"assets/assets/images/contact/marker@2x.png": "2fea67488974c735eb652208ba7d5911",
"assets/assets/images/contact/marker.png": "4bd6822c60ddeabc49ada28bf25a5903",
"assets/assets/images/contact/ic_eye.png": "6970f6004cce30e76c8f0eb641b2ba42",
"assets/assets/images/auth/image_event.jpg": "5426738b3326b011a0b77b4b19781960",
"assets/assets/images/auth/ic_user.png": "8caa46235c6ead4b489c59935841294f",
"assets/assets/images/auth/ic_camera.png": "533efeaa63d5804ae332298dbfa5704e",
"assets/assets/images/auth/ic_key.png": "be25163c470ef0464e3bc66a9546b12a",
"assets/assets/images/auth/ic_edit_profile.png": "f34347c8abd67f8ad5e1ea1dc0919346",
"assets/assets/images/payment/4Cards.png": "5463ad5da409e0898e6012eb90f77553",
"assets/assets/images/payment/4Cards(BG).png": "9831747ceea3502853f4eed5062f99da",
"assets/assets/images/payment/ic_KHQR.png": "ca24349f2df00cd3c01ae9adf438ff70",
"assets/assets/images/payment/ic_add_user.png": "ffed209f48009e95786fbeb2eeeee4a7",
"assets/assets/images/payment/ic_ABA_PAY.png": "e0517ecfccb8be3591efac6dd509be06",
"assets/assets/images/payment/ic_done.png": "0493c8cec22f8d79437744f91fee233a",
"assets/assets/images/payment/ic_CreditDebit.png": "d6fc923a0f8a8e3c4fea2e46fae96315",
"assets/assets/images/menu/news.png": "7a71df175b5b25384fb5c410b0ba6d35",
"assets/assets/images/menu/ic_create_event.png": "7c8805e4bfc3e36a3194b4d908788950",
"assets/assets/images/menu/book.png": "d5d64793dbf45237586c536dabcb07bc",
"assets/assets/images/menu/ic_discussion.png": "5e1335b437d3b1527176ec7080ae8956",
"assets/assets/images/menu/ic_personal.png": "4e62c0076d364392288d96bafcc6093a",
"assets/assets/images/menu/users.png": "9b5cb2b7ea6c39599b5d3d42a3420673",
"assets/assets/images/menu/ic_view_personal.png": "c65a05867053c5114db84096283b8d66",
"assets/assets/images/menu/ic_edit.png": "0ebc17b068741c2f954e9ed2a8795202",
"assets/assets/images/menu/ic_change.png": "bc573aa078f19e8eef78df2fe2e6dca3",
"assets/assets/images/menu/calendar.png": "aeb266dd1f337361ffda56490357df42",
"assets/assets/images/menu/ic_send.png": "ed05c13844b03d07e4a99656dde26471",
"assets/assets/images/menu/ic_member.png": "d805e5df25cb1c83e0e5bf11e7363085",
"assets/assets/images/menu/ic_cmt.png": "4ae2ecf3563318364c17d52612a637bd",
"assets/assets/images/ic_logo.png": "69fd9cc2e75a184aa3ef8c8fa2ae5158",
"assets/assets/images/bg.jpeg": "cf27ee2e8c9ad93c77e65c7a95aff9b7",
"assets/assets/images/phum.png": "4ef64afb9e8e4c16e6f54931d8e37441",
"assets/assets/icons/auth/ic_mail.svg": "1a40cc4976c00e658816acbe3bcfd7b8",
"assets/assets/icons/auth/ic_success.svg": "568736e4ec4e2cd169a7b5c4e19be52a",
"assets/assets/icons/auth/ic_eye.svg": "847ec7938dd963683f4e8d69041b0bf0",
"assets/assets/icons/auth/ic_eye_close.svg": "83ce0552792c85922145f3af6219e62c",
"assets/assets/icons/auth/ic_telegram.svg": "b97f46f9375a06d335d5a71a043ea65d",
"assets/assets/icons/auth/ic_ph.svg": "54e8efeb924b55642de4c8166c1c750b",
"assets/assets/icons/ic_eye.svg": "847ec7938dd963683f4e8d69041b0bf0",
"assets/assets/icons/ic_eye_close.svg": "83ce0552792c85922145f3af6219e62c",
"assets/assets/translations/km-KH.json": "e2ced8e308942e532cef56fd4cd39174",
"assets/assets/translations/en-US.json": "ba967ca8999ebe8d190e4fad5af016e0",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
