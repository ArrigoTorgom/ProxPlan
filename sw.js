/* ProxPlan service worker - keeps an offline copy of the app.
   The app page is always fetched fresh when online (so a new release shows up on the next open);
   the cached copy is only used when there is no connection or the network is very slow.
   This file does not need editing for a normal release. Change CACHE only to force a full reset. */
var CACHE = 'proxplan-v1';
var SCOPE = self.registration.scope;
var APP = new URL('index.html', SCOPE).href;
var MUST = ['index.html'];
var EXTRA = ['manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png'];

function keyOf(u) { return new URL(u, SCOPE).href; }

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      var must = MUST.map(function (u) {
        return fetch(new Request(keyOf(u), { cache: 'reload' })).then(function (r) {
          if (!r.ok) throw new Error('precache failed: ' + u);
          return c.put(keyOf(u), r);
        });
      });
      var extra = EXTRA.map(function (u) {
        return fetch(new Request(keyOf(u), { cache: 'reload' })).then(function (r) {
          if (r.ok) return c.put(keyOf(u), r);
        }).catch(function () {});
      });
      return Promise.all(must.concat(extra));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (ks) {
      return Promise.all(ks.filter(function (k) { return k !== CACHE && k.indexOf('proxplan-') === 0; })
        .map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

function isApp(url) {
  var u = url.origin + url.pathname;
  return u === APP || u === SCOPE;
}

function clean(r) {
  /* A redirected response cannot be handed to a page navigation, so rebuild it. */
  if (!r.redirected) return Promise.resolve(r);
  return r.blob().then(function (b) {
    return new Response(b, { status: r.status, statusText: r.statusText, headers: r.headers });
  });
}

function appFetch(req) {
  var fromCache = function () {
    return caches.match(APP).then(function (m) { return m || null; });
  };
  var net = fetch(new Request(req.url, { cache: 'no-cache', credentials: 'same-origin' })).then(function (r) {
    if (!r.ok) {
      return fromCache().then(function (m) { return m || r; });
    }
    var copy = r.clone();
    caches.open(CACHE).then(function (c) { if (!copy.redirected) c.put(APP, copy); });
    return clean(r);
  });
  var slow = new Promise(function (resolve) {
    setTimeout(function () { fromCache().then(function (m) { if (m) resolve(m); }); }, 4000);
  });
  var offline = net.catch(function () {
    return fromCache().then(function (m) { if (m) return m; throw new Error('offline and not cached'); });
  });
  return Promise.race([offline, slow]);
}

function assetFetch(req) {
  return caches.open(CACHE).then(function (c) {
    return c.match(req).then(function (m) {
      var net = fetch(req).then(function (r) {
        if (r && r.ok && r.type === 'basic') c.put(req, r.clone());
        return r;
      }).catch(function () { return m || Response.error(); });
      return m || net;
    });
  });
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.mode === 'navigate' || isApp(url)) {
    e.respondWith(appFetch(req));
    return;
  }
  e.respondWith(assetFetch(req));
});
