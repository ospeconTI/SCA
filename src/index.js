/** @format */

import {} from "../css/main.css";
import {} from "../css/media.css";
import {} from "../css/nunito.css";
import {} from "../css/fontSizes.css";
import {} from "../css/colors.css";
import {} from "../css/shadows.css";

import { store } from "./redux/store";
import { captureMedia } from "./redux/ui/actions";
import { goTo } from "./redux/routing/actions";
import { viewManager } from "./views/manager";
import { activate as activateSW, register as registerSW } from "./libs/serviceWorker";

import { getAll as getProtocolos } from "./redux/protocolos/actions";
import { subscribe, suscribir } from "./redux/notifications/actions";

//if (process.env.NODE_ENV === "production") {
registerSW();
//activateSW();

//}

store.dispatch(captureMedia());
store.dispatch(getProtocolos());

async function pollAndSave() {
    const requestDB = window.indexedDB.open("ntfy", 1);

    requestDB.onerror = (event) => {
        console.error("Database error: " + event.target.errorCode);
    };

    requestDB.onsuccess = async (event) => {
        getProximos(event.target.result, addMensajes);
    };

    requestDB.onupgradeneeded = (event) => {
        const db = event.target.result;
        const objectStore = db.createObjectStore("mensajes", { keyPath: "time" });
        objectStore.transaction.oncomplete = (event) => {
            //addMensajes(db);
        };
    };

    const getProximos = (db, oncompleted) => {
        const transaction = db.transaction("mensajes", "readwrite");
        const mensajesObjectStore = transaction.objectStore("mensajes");
        const cursorObjectStore = mensajesObjectStore.openCursor(null, "prev");

        cursorObjectStore.onsuccess = async (e) => {
            const cursor = e.target.result;
            if (cursor) {
                const nextTime = cursor.value.time + 1;
                poll(nextTime).then((proximos) => oncompleted(proximos, db));
                return;
            }
        };
    };

    const addMensajes = (mensajes, db) => {
        const mensajesObjectStore = db.transaction("mensajes", "readwrite").objectStore("mensajes");
        mensajes.forEach((mensaje) => {
            const mensajeObject = JsonOrDefault(mensaje);
            if (mensajeObject != null) {
                const objectStoreRequest = mensajesObjectStore.add(mensajeObject);
                objectStoreRequest.onsuccess = (event) => {
                    //showNotification(mensajeObject);
                    //console.log(event);
                };
                objectStoreRequest.onerror = (err) => {
                    //console.log(err);
                };
            }
        });
    };
}
const JsonOrDefault = (text) => {
    try {
        return JSON.parse(text);
    } catch (error) {
        return null;
    }
};

Notification.requestPermission().then(async (result) => {
    if (result === "granted") {
        store.dispatch(suscribir());
    }
});

console.log("Sirviendo datos de :" + SERVICE_URL);
