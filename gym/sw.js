// Change V after editing any file so installed apps pick up the new version.
const V = "gymlog-v1";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(k => k !== V && k.startsWith("gymlog-")).map(k => caches.delete(k))
  )).then(() => self.clients.claim()));
});
// Serve from cache first (works offline), refresh the cache in the background.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.open(V).then(c => c.match(e.request, { ignoreSearch: true }).then(hit => {
    const net = fetch(e.request).then(r => {
      if (r.ok && (r.type === "basic" || r.type === "cors")) c.put(e.request, r.clone());
      return r;
    }).catch(() => hit);
    return hit || net;
  })));
});
