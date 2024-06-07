const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/app.js",
  "/OrlandoMunizz.github.io/index.html",
  "/OrlandoMunizz.github.io/app.css",
  "/OrlandoMunizz.github.io/assets/images/ATech.ico",
  
 
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})