!function(){var e=["/","594e09efb4ad6364/bundle.css","a0e0df4c22c57d88/bundle.js","manifest.json","/assets/img/shiai.grid","/assets/img/itaf.png","/assets/img/shiai.png","/assets/img/shiai.svg","/assets/img/tas.png","/assets/sfx/horn.mp3","/assets/sfx/horn.ogg"];self.addEventListener("fetch",function(e){e.respondWith(self.caches.match(e.request).then(function(s){return s||self.fetch(e.request)}))}),self.addEventListener("install",function(s){s.waitUntil(self.caches.open("1.0.0").then(function(s){return s.addAll(e)}))}),self.addEventListener("activate",function(e){e.waitUntil(self.caches.keys().then(function(e){return Promise.all(e.map(function(s,t){if("1.0.0"!==e[t])return self.caches.delete(e[t])}))}))})}();
//# sourceMappingURL=bankai-service-worker.js.map