/** @format */

import { cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute } from "workbox-precaching";
import { clientsClaim } from "workbox-core";

self.__WB_MANIFEST;

const broadcastChannel = new BroadcastChannel("web-push-broadcast");

const urlBase64ToUint8Array = (base64String) => {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/");

    const rawData = atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }

    return outputArray;
};
const saveSubscription = async (subscription, topico) => {
    var body = {
        subscription,
        topico,
    };

    const response = await fetch(WEBPUSH_URL + "/save-subscription", {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
    });

    return response.json();
};

self.addEventListener("install", () => {
    console.log("[ServiceWorker] Installed");
    self.skipWaiting();
});
self.addEventListener("activate", () => {
    console.log("[ServiceWorker] Activated");

    /*     self.registration.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: urlBase64ToUint8Array("BKyuLvO8mIsCF8NaajSctFXHBkROCIqqQFlm3D31M7tugZyXsW_0128y1j6bh8bKw3NOEMj84m_JNzpgXthm128") }).then(async (subscription) => {
        console.log("Subscribed after expiration", subscription.endpoint);
        const response = await saveSubscription(subscription, "Sistemas");
        console.log(response);
    }); */

    const tabs = self.clients.matchAll({ type: "window" }).then((tabs) => {
        tabs.forEach((tab) => {
            tab.navigate(tab.url);
        });
    });

    self.skipWaiting();
});

self.addEventListener("pushsubscriptionchange", async (event) => {
    console.log("Subscription expired");
    /*  event.waitUntil(
        self.registration.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: urlBase64ToUint8Array("BKyuLvO8mIsCF8NaajSctFXHBkROCIqqQFlm3D31M7tugZyXsW_0128y1j6bh8bKw3NOEMj84m_JNzpgXthm128") }).then(async (subscription) => {
            console.log("Subscribed after expiration", subscription.endpoint);
            const response = await saveSubscription(subscription);
            console.log(response);
        })
    ); */
});

self.addEventListener("push", (event) => {
    const eventNotification = event.data.json().body;
    const title = eventNotification.Descripcion;
    const vto = new Date(eventNotification.Vencimiento).toLocaleDateString();
    const notifiaction = {
        body: "Tarea enviada por " + eventNotification.Creador + ", con vencimiento el " + vto,
        icon: "favicon.ico",
        data: {
            tareaId: eventNotification.TareaId,
        },
        actions: [
            {
                action: "ver",
                title: "Ver en SCA",
            },
        ],
    };
    self.registration.showNotification(title, notifiaction);
});

self.addEventListener("notificationclick", (event) => {
    console.log("[ServiceWorker] NotificationClick");
    event.waitUntil(handleClick(event));
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
const handleClick = async (event) => {
    const { tareaId } = event.notification.data;
    const clients = await self.clients.matchAll({ type: "window" });
    const rootUrl = new URL(self.location.origin);
    const rootClient = clients.find((client) => client.url === rootUrl.toString() + "?tareaId=" + tareaId);
    // perhaps open on another topic
    const fallbackClient = clients[0];

    if (!event.notification.data?.tareaId) {
        // e.g. something other than a message, e.g. a subscription_expiring event
        // simply open the web app on the root route (/)
        if (rootClient) {
            rootClient.focus();
        } else if (fallbackClient) {
            fallbackClient.focus();
            fallbackClient.navigate(rootUrl.toString());
        } else {
            self.clients.openWindow(rootUrl);
        }
        event.notification.close();
    } else {
        if (event.action) {
            if (event.action === "ver") {
                if (rootClient) {
                    rootClient.focus();
                } else if (fallbackClient) {
                    fallbackClient.focus();
                    fallbackClient.navigate(rootUrl.toString() + "?tareaId=" + tareaId);
                } else {
                    self.clients.openWindow(rootUrl + "?tareaId=" + tareaId);
                }
                event.notification.close();
            }

            if (event.action.clear) {
                event.notification.close();
            }
        } else {
            /*             // If no action was clicked, and the message doesn't have a click url:
            // - first try focus an open tab on the `/:topic` route
            // - if not, use an open tab on the root route (`/`) and navigate to the topic
            // - if not, use whichever tab we have open and navigate to the topic
            // - finally, open a new tab focused on the topic

            const topicClient = clients.find((client) => client.url === topicRoute);

            if (topicClient) {
                topicClient.focus();
            } else if (rootClient) {
                rootClient.focus();
                rootClient.navigate(topicRoute);
            } else if (fallbackClient) {
                fallbackClient.focus();
                fallbackClient.navigate(topicRoute);
            } else {
                self.clients.openWindow(topicRoute);
            }
 */
            if (event.action.clear) {
                event.notification.close();
            }
        }
    }
};
