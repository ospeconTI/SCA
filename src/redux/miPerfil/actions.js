/** @format */

export const SET = "[miPerfil] SET";

export const set = (perfil, item) => ({
    type: SET,
    perfil: perfil,
    item: item,
});
