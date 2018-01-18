
var dataCacheName = 'PWA';
var cacheName = 'PWA-1';
var filesToCache = [
  '/',
  './index.html',
  './js/app.js',
  './js/home.js',
  './js/angular.js',
  './css/style.css',
  'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
  // 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js',
  'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.8/angular-ui-router.min.js',
   
  
 
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
       return cache.addAll(filesToCache);
    })
  );
});


self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
   return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetch', e);
    var dataUrl ='http://jsonplaceholder.typicode.com';
  if (e.request.url.indexOf(dataUrl) > -1) {
   
     e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
     }))
    e.respondWith(
      caches.open(dataCacheName).then(function(cache) {
        return fetch(e.request).then(function(response){
          cache.put(e.request.url, response.clone());
          return response;
        });
      })
    );
  } else {

    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
  );
 }

 });


