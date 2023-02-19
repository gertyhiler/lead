'use strict';
const CACHE_STATIC = 'static-cache-v6';

const STATIC_ASSETS_FILE = [
    'favicon.ico',
    'index.html',
    'manifest.json',
    'sw.js',
    'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
    'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2',
    'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu5mxKKTU1Kvnz.woff2',
    'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7mxKKTU1Kvnz.woff2',
    'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4WxKKTU1Kvnz.woff2',
    'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7WxKKTU1Kvnz.woff2',
    'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu7GxKKTU1Kvnz.woff2',
    'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
    'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfCRc4AMP6lbBP.woff2',
    'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfABc4AMP6lbBP.woff2',
    'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfCBc4AMP6lbBP.woff2',
    'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBxc4AMP6lbBP.woff2',
    'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfCxc4AMP6lbBP.woff2',
    'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfChc4AMP6lbBP.woff2',
    'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2',
    'images/'
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