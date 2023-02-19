'use strict';
const CACHE_STATIC = 'static-cache-v2';

const STATIC_ASSETS_FILE = [
    'favicon.ico',
    'index.html',
    'manifest.json',
    'sw.js'
]

self.addEventListener('install', async (e) => {
    try {
        const cache = await caches.open(CACHE_STATIC);
        cache.addAll(STATIC_ASSETS_FILE);
    } catch {

    }
});

self.addEventListener('activate', async (e) => {
    const chachesKeys = await caches.keys();
    await Promise.all(
        chachesKeys
        .filter(chacheKey => chacheKey !== CACHE_STATIC)
        .map(key => caches.delete(key))
    )
});

self.addEventListener('fetch', async (e) => {
    e.respondWith(chcheFirst(e.request))
});

async function chcheFirst(request) {
    const response = await caches.match(request);
    return response ?? await fetch(request)
}