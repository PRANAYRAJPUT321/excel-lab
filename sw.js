const V='xlab-fa84ed18ab';
const SHELL=["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png"];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL).catch(()=>{})))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  const u=new URL(r.url);if(u.origin!==location.origin)return;
  if(u.pathname.endsWith('.xlsx')){e.respondWith(fetch(r).catch(()=>caches.match(r)));return;}
  if(r.mode==='navigate'){e.respondWith(fetch(r).then(x=>{const c=x.clone();caches.open(V).then(z=>z.put('index.html',c));return x;}).catch(()=>caches.match('index.html')));return;}
  e.respondWith(caches.match(r).then(c=>c||fetch(r).then(x=>{if(x.ok){const z=x.clone();caches.open(V).then(q=>q.put(r,z));}return x;})));
});
