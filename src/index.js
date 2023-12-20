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
import { register as registerSW, activate as activateSW } from "./libs/serviceWorker";
import { getAll as getProtocolos } from "./redux/protocolos/actions";

if (process.env.NODE_ENV === "production") {
    registerSW();
    activateSW();
}

store.dispatch(captureMedia());
store.dispatch(getProtocolos());

console.log("Sirviendo datos de :" + SERVICE_URL);
