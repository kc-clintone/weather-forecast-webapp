import { cache } from "webpack"

self.addEventListener('install', function(event){
    event.waitUntil(
        cashes.open('serviceworker-cache').then(function(cache){
            return cache.add('index.html')
        })
    )
})


self.addEventListener('fetch', function(event){
    event.respondWith(
        cashes.match(event.request).then(function(response){
            return response || fetch(event.request);
        })
    )
})

