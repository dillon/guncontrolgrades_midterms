"use strict";var precacheConfig=[["/d4d-map/index.html","f3f93e4b09eab5721af5f5897cf02943"],["/d4d-map/static/css/main.6477e410.css","b99f9cd04f77440fee3a5ed49fa0f1f9"],["/d4d-map/static/js/main.d2a84a11.js","0caecebba4a6e827f0ac7232bcaf1ca9"],["/d4d-map/static/media/Portrait_001.0626428d.jpg","0626428d3226c15595244bd202df396a"],["/d4d-map/static/media/Portrait_002.473d240f.jpg","473d240f1a171aeeb29b55147f07818c"],["/d4d-map/static/media/Portrait_003.c572fd4a.jpg","c572fd4ab91d382288e09a4f2ff9f341"],["/d4d-map/static/media/Portrait_004.122e560b.jpg","122e560b262f7a88e19bb474f8bd9643"],["/d4d-map/static/media/Portrait_005.5990816b.jpg","5990816bf0c72d5ce174ec58cb79f043"],["/d4d-map/static/media/Portrait_006.bc1aa5e6.jpg","bc1aa5e68cb2929c177a7d48bfedb48f"],["/d4d-map/static/media/Portrait_007.bc7d7c74.jpg","bc7d7c74569457c3fafc55a290b5cd9c"],["/d4d-map/static/media/Portrait_008.fce14331.jpg","fce1433164e54cc892d39a0f0c745411"],["/d4d-map/static/media/Portrait_009.36aa9f5b.jpg","36aa9f5b0b53f4b88bf980d56ca2c5cf"],["/d4d-map/static/media/Portrait_010.f8e85e82.jpg","f8e85e82e303bedbd7f2a89aa033e9a0"],["/d4d-map/static/media/Portrait_011.fbf90821.jpg","fbf908212673117464a25e250eb4f607"],["/d4d-map/static/media/Portrait_012.60925506.jpg","60925506e533d4c68e28088378f6787a"],["/d4d-map/static/media/Portrait_013.a1abe876.jpg","a1abe8765e7fe19348b2dbd93d85d522"],["/d4d-map/static/media/Portrait_014.b5a4998e.jpg","b5a4998e5e33c754b9222711c466cb7c"],["/d4d-map/static/media/Portrait_015.152033f4.jpg","152033f49336f4dfd17e0cf9eb9fddd1"],["/d4d-map/static/media/Portrait_016.4aa20119.jpg","4aa20119ebef60a39d478898d9fbd0ac"],["/d4d-map/static/media/Portrait_017.cad4f19e.jpg","cad4f19ec962e0b3171e26fafad5516c"],["/d4d-map/static/media/Portrait_018.01b0b7a4.jpg","01b0b7a4ba24a022e43816a52567c5dd"],["/d4d-map/static/media/Portrait_019.3b0b1cad.jpg","3b0b1cad8f8445f66fd75e6f46804263"],["/d4d-map/static/media/Portrait_020.90f2ec83.jpg","90f2ec8345dd6cddc85e482988e46c28"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),n=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,r),e=urlsToCacheKeys.has(t));var n="/d4d-map/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});