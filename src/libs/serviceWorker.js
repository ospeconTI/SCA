/** @format */

import _ from "lodash";
import { Workbox, messageSW } from "workbox-window";

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
                    scope: "/",
                })
                .then((registration) => {
                    console.log("SW registered: ", registration);
                    if (registration.active) {
                        registration.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: urlBase64ToUint8Array("BKyuLvO8mIsCF8NaajSctFXHBkROCIqqQFlm3D31M7tugZyXsW_0128y1j6bh8bKw3NOEMj84m_JNzpgXthm128") }).then(async (subscription) => {
                            console.log("Subscribed after expiration", subscription.endpoint);
                            localStorage.setItem("subscription", JSON.stringify(subscription));

                            //const response = await saveSubscription(subscription, "Sistemas");
                            //console.log(response);
                        });
                    }
                })
                .catch((registrationError) => {
                    console.log("SW registration failed: ", registrationError);
                });
        });
    }
};

export const activate = () => {
    if ("serviceWorker" in navigator) {
        const wb = new Workbox("./service-worker.js");

        /* let registration;
        const showSkipWaitingPrompt = (event) => {
            alert("La versión " + __VERSION__ + " se encuentra discontinuada. Se actualizará a la nueva versión.");
            wb.addEventListener("controlling", (event) => {
                window.location.reload();
            });
            if (registration && registration.waiting) {
                messageSW(registration.waiting, { type: "SKIP_WAITING" });
            }
        };
        wb.addEventListener("waiting", showSkipWaitingPrompt);
        wb.addEventListener("externalwaiting", showSkipWaitingPrompt);
        wb.register().then((r) => (registration = r)); */
    }
};
