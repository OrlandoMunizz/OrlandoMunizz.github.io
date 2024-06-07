const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/app.js",
  "/index.html",
  "/app.css",
  "/assets/images/ATech.ico",
  
 
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})