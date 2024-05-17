/** @format */

import { cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute } from "workbox-precaching";
import { clientsClaim } from "workbox-core";

self.__WB_MANIFEST;

self.addEventListener("install", () => {
    console.log("[ServiceWorker] Installed");
    self.skipWaiting();
});
self.addEventListener("activate", () => {
    console.log("[ServiceWorker] Activated");
    const tabs = self.clients.matchAll({ type: "window" }).then((tabs) => {
        tabs.forEach((tab) => {
            tab.navigate(tab.url);
        });
    });

    self.skipWaiting();
});

// There's no good way to test this, and Chrome doesn't seem to implement this,
// so leaving it for now
self.addEventListener("pushsubscriptionchange", (event) => {
    console.log("[ServiceWorker] PushSubscriptionChange");
    console.log(event);
});
// Claim all open windows
clientsClaim();
// Delete any cached old dist files from previous service worker versions
cleanupOutdatedCaches();
/* 
if (!import.meta.env.DEV) {
    // we need the app_root setting, so we import the config.js file from the go server
    // this does NOT include the same base_url as the web app running in a window,
    // since we don't have access to `window` like in `src/app/config.js`
    self.importScripts("/config.js");

    // this is the fallback single-page-app route, matching vite.config.js PWA config,
    // and is served by the go web server. It is needed for the single-page-app to work.
    // https://developer.chrome.com/docs/workbox/modules/workbox-routing/#how-to-register-a-navigation-route
    registerRoute(
        new NavigationRoute(createHandlerBoundToURL("/app.html"), {
            allowlist: [
                // the app root itself, could be /, or not
                new RegExp(`^${config.app_root}$`),
            ],
        })
    );

    // the manifest excludes config.js (see vite.config.js) since the dist-file differs from the
    // actual config served by the go server. this adds it back with `NetworkFirst`, so that the
    // most recent config from the go server is cached, but the app still works if the network
    // is unavailable. this is important since there's no "refresh" button in the installed pwa
    // to force a reload.
    registerRoute(({ url }) => url.pathname === "/config.js", new NetworkFirst());
} */
