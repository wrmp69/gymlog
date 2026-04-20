// ═══════════════════════════════════════════════
// GYMLOG K&J — Service Worker
// Stratégie : Cache First pour assets statiques
//             Network First pour données externes
// ═══════════════════════════════════════════════

var CACHE_NAME = 'gymlog-v2';
var OFFLINE_URL = 'index.html';

// Assets à mettre en cache immédiatement
var PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap',
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js'
];

// ── INSTALL ─────────────────────────────────────
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      // On cache ce qu'on peut, sans bloquer si externe échoue
      return Promise.allSettled(
        PRECACHE_ASSETS.map(function(url) {
          return cache.add(url).catch(function(err) {
            console.warn('[SW] Impossible de cacher:', url, err);
          });
        })
      );
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

// ── ACTIVATE ────────────────────────────────────
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) {
          return key !== CACHE_NAME;
        }).map(function(key) {
          console.log('[SW] Suppression ancien cache:', key);
          return caches.delete(key);
        })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// ── FETCH ────────────────────────────────────────
self.addEventListener('fetch', function(event) {
  var url = event.request.url;

  // Google Sheets (export) → Network only, pas de cache
  if(url.includes('docs.google.com') || url.includes('script.google.com')) {
    return; // laisse passer sans intercepter
  }

  // Fonts Google → Cache First
  if(url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) {
    event.respondWith(
      caches.match(event.request).then(function(cached) {
        if(cached) return cached;
        return fetch(event.request).then(function(response) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, clone);
          });
          return response;
        }).catch(function() { return cached; });
      })
    );
    return;
  }

  // CDN (Chart.js, etc.) → Cache First
  if(url.includes('cdn.jsdelivr.net') || url.includes('cdnjs.cloudflare.com')) {
    event.respondWith(
      caches.match(event.request).then(function(cached) {
        if(cached) return cached;
        return fetch(event.request).then(function(response) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, clone);
          });
          return response;
        }).catch(function() { return cached || new Response('', {status:503}); });
      })
    );
    return;
  }

  // App locale (index.html, manifest, etc.) → Cache First avec fallback
  if(url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(function(cached) {
        // En parallèle, met à jour le cache en arrière-plan
        var networkFetch = fetch(event.request).then(function(response) {
          if(response && response.status === 200) {
            var clone = response.clone();
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(event.request, clone);
            });
          }
          return response;
        }).catch(function() { return null; });

        // Retourne le cache immédiatement si dispo, sinon attend le réseau
        return cached || networkFetch.then(function(r) {
          return r || caches.match(OFFLINE_URL);
        });
      })
    );
    return;
  }
});

// ── MESSAGE (skip waiting depuis l'appli) ───────
self.addEventListener('message', function(event) {
  if(event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
