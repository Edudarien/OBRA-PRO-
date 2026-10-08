const CACHE='obrapro-v9-0';
const ASSETS=['./','./index.html','./manifest.json','./logo-obrapro.png','./logo-obrapro-header.png','./logo-obrapro-watermark.png','./icon-192.png','./icon-512.png','./obrapro_logo_helmet.png','./obrapro_logo_obra.png','./obrapro_logo_pro.png','./obrapro_logo_roof.png','./obrapro_logo_seal.png','./obrapro_logo_tagline.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request).then(r=>{let c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request))));
