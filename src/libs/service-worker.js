/** @format */

import { cleanupOutdatedCaches, precacheAndRoute } from "workbox-precaching";
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

self.addEventListener("pushsubscriptionchange", async (event) => {
    console.log("Subscription expired");
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

clientsClaim();

cleanupOutdatedCaches();

const handleClick = async (event) => {
    const { tareaId } = event.notification.data;
    const clients = await self.clients.matchAll({ type: "window" });
    const rootUrl = new URL(self.location.origin);
    const rootClient = clients.find((client) => client.url === rootUrl.toString() + "?tareaId=" + tareaId);
    // perhaps open on another topic
    const fallbackClient = clients[0];

    if (!event.notification.data?.tareaId) {
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
            if (event.action.clear) {
                event.notification.close();
            }
        }
    }
};
