const nombreCache = 'apv-2.1';
const archivos = [
    './',
    './index.html',
    './error.html',
    './css/bootstrap.css',
    './css/styles.css',
    './js/app.js',
    './js/apv.js'
];


//Cuando se instala el service worker
self.addEventListener('install', e => {
    console.log('Instalado el service worker');

    e.waitUntil(
        caches.open(nombreCache)
        .then(cache=> {
            console.log('haciendo el cache');
            cache.addAll(archivos)
            .catch(e=> console.log(e))
        })
    )
});

//Activar el service woker

self.addEventListener('activate', e=>{
    console.log('Service Worker Activado');

    e.waitUntil(
        caches.keys()
            .then(keys=> {
                return Promise.all(
                    keys.filter(key => key !== nombreCache)
                        .map(key => caches.delete(key))
                )
            })
    )
});

//Eveneto fetch para descargar elementos estaticos
self.addEventListener('fetch', e =>{
    console.log('Fetch...', e);

    e.respondWith(
        caches.match(e.request)
        .then(respuestaCache =>{
            return respuestaCache;
        })
        .catch(()=> caches.match('/error.html'))
    )
})