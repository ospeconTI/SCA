/** @format */

import _ from "lodash";

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

export const register = () => {
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker.ready.then((registration) => {
                if (registration.active) {
                    registration.active.addEventListener("statechange", (event) => {
                        const { state = "" } = event.target;
                        if (state === "activated") {
                            window.location.reload();
                        }
                    });
                }
            });
            navigator.serviceWorker
                .register("./service-worker.js", {
                    scope: "/SCA/",
                })
                .then((registration) => {
                    console.log("SW registered: ", registration);
                    if (registration.active) {
                        registration.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: urlBase64ToUint8Array("BKyuLvO8mIsCF8NaajSctFXHBkROCIqqQFlm3D31M7tugZyXsW_0128y1j6bh8bKw3NOEMj84m_JNzpgXthm128") }).then(async (subscription) => {
                            console.log("Subscribed after expiration", subscription.endpoint);
                            localStorage.setItem("subscription", JSON.stringify(subscription));
                        });
                    }
                })
                .catch((registrationError) => {
                    console.log("SW registration failed: ", registrationError);
                });
        });
    }
};
