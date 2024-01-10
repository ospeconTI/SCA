/** @format */

export const SHOW_SPINNER = "[ui] show spinner";
export const HIDE_SPINNER = "[ui] hide spinner";

//oculta o muestra ventana de error
export const SHOW_ERROR = "[ui] show error";
export const HIDE_ERROR = "[ui] hide error";

//oculta o muestra ventana de error
export const SHOW_WARNING = "[ui] show warning";
export const HIDE_WARNING = "[ui] hide warning";

//define el tamaño,forma orientacion de la UI
export const CAPTURE_MEDIA = "[ui] capture media";
export const SET_MEDIA = "[ui] set media";
export const SET_MEDIA_ORIENTATION = "[ui] set media orientation";

export const SELECTION = "[ui] selection";

export const STEP = "[ui] step";

export const SHOW_ALERT = "[ui] show alert";
export const SHOW_CONFIRM = "[ui] show confirm";

export const LOGUEAR_CON_NUEVO_USUARIO = "[ui] loguear con nuevo usuario";

export const RECORDAR_TAREA = "[ui] recordar tarea";

export const loguearConNuevoUsuario = () => ({
    type: LOGUEAR_CON_NUEVO_USUARIO,
});

export const showSpinner = () => ({
    type: SHOW_SPINNER,
});
export const hideSpinner = () => ({
    type: HIDE_SPINNER,
});

export const showError = (message) => ({
    type: SHOW_ERROR,
    message: message,
});
export const hideError = () => ({
    type: HIDE_ERROR,
});

export const showAlert = (titulo = "Atencion", mensaje = "Sin mensaje") => ({
    type: SHOW_ALERT,
    titulo: titulo,
    mensaje: mensaje,
});
export const showConfirm = (titulo = "Atencion", mensaje = "Sin mensaje", onOk = null, onCancel = null) => ({
    type: SHOW_CONFIRM,
    titulo: titulo,
    mensaje: mensaje,
    onOk: onOk,
    onCancel: onCancel,
});
export const showWarning = (titulo = "", subTitulo = "", backgroundColor = "fondoInformacion", timeOut = 1500) => ({
    type: SHOW_WARNING,
    titulo: titulo,
    subTitulo: subTitulo,
    backgroundColor: backgroundColor,
    timeOut: timeOut,
});
export const hideWarning = () => ({
    type: HIDE_WARNING,
});
export const captureMedia = () => ({
    type: CAPTURE_MEDIA,
});
export const setMedia = (size) => ({
    type: SET_MEDIA,
    size: size,
});

export const setMediaOrientation = (orientation) => ({
    type: SET_MEDIA_ORIENTATION,
    orientation: orientation,
});

export const selection = (option) => ({
    type: SELECTION,
    option: option,
});

export const setStep = (step) => ({
    type: STEP,
    step: step,
});

export const recordarTarea = (tarea) => ({
    type: RECORDAR_TAREA,
    tarea: tarea,
});
