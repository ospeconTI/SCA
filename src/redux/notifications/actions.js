/** @format */

export const SUSCRIBIR = "[notifications] suscribir";
export const SUBSCRIBE = "[notifications] subscribe";
export const SUBSCRIBE_OK = "[notifications] subscribe ok";
export const SUBSCRIBE_ERROR = "[notifications] subscribe error";

export const subscribe = (subscription, topic) => ({
    type: SUBSCRIBE,
    subscription: subscription,
    topic: topic,
});

export const suscribir = () => ({
    type: SUSCRIBIR,
});
