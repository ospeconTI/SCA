import { store } from "../redux/store";

export const validaMail = (email) => {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
};

export const isValidDateUS = (dateString) => {
	// First check for the pattern
	var regex_date = /^\d{1,4}\-\d{1,2}\-\d{1,2}([a-zA-Z0-9_\.\-\:])+$/;

	if (!regex_date.test(dateString)) {
		return false;
	}

	// Parse the date parts to integers
	var parts = dateString.split("-");
	var day = parseInt(parts[2], 10);
	var month = parseInt(parts[1], 10);
	var year = parseInt(parts[0], 10);

	// Check the ranges of month and year
	if (year < 1000 || year > 3000 || month == 0 || month > 12) {
		return false;
	}

	var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	// Adjust for leap years
	if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
		monthLength[1] = 29;
	}

	// Check the range of the day
	return day > 0 && day <= monthLength[month - 1];
};

export const mailInvalid = (email) => {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? false : true;
};

export const invalidCUITCUIL = (cuit) => {
	if (cuit === undefined) return true;

	let acumulado = 0;
	let digitos = cuit.replaceAll("-", "");
	digitos = digitos.split("");
	let digito = parseInt(digitos.pop());

	for (let i = 0; i < digitos.length; i++) {
		acumulado += digitos[9 - i] * (2 + (i % 6));
	}

	let verif = 11 - (acumulado % 11);
	if (verif === 11) {
		verif = 0;
	} else if (verif === 10) {
		verif = 9;
	}

	return !(digito === verif);
};

export const invalidDni = (value) => {
	var dni = /^\d*$/g;
	value = value.toString().trim();
	if (value.length == 6 || value.length == 7 || value.length == 8) {
		return !dni.test(value);
	}
	return true;
};

export const nameInvalido = (value) => {
	var name = /^[a-zA-Z ñÑ]*$/g;
	if (value == "") {
		return true;
	}
	return name.test(value) ? false : true;
};

export const onlyLetter = (value) => {
	let name = /[a-zA-ZñÑ]/g;
	return name.test(value) ? false : true;
};

export const onlyNumber = (value) => {
	let name = /^\d*$/g;
	return name.test(value) ? false : true;
};

export const invalidFecha = (value) => {
	let fecha = new Date().toISOString();

	if (value >= fecha || value == "") {
		return true;
	}
	return false;
};

export const opcionInvalida = (value) => {
	if (!value == 1 || !value == 2) return true;
};

export const opcionBooleanaInvalida = (value) => {
	if (value == null) return true;
	return false;
};

export const isEmpty = (value) => {
	if (value == "") return true;
	if (value == 0) return true;
};

export const recursiveSearch = (arr, target) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].id === target) {
			return arr[i];
		}
		if (arr[i].condiciones) {
			const result = recursiveSearch(arr[i].condiciones, target);
			if (result) {
				return result;
			}
		}
	}
	return null;
};

export const armoTareas = (padre, array) => {
	let newAr = [];
	if (padre == "0") {
		newAr = array;
	} else {
		//let a = array.find((item) => item.id == padre);
		let a = recursiveSearch(array, padre);
		newAr = a.condiciones.sort((a, b) => b.vigenteDesde.localeCompare(a.vigenteDesde)).sort((a, b) => b.vencimiento.localeCompare(a.vencimiento));
	}
	let ar = [];
	newAr.map((item, index) => {
		let js = {};
		js.clase = "tarea";
		js.id = item.id;
		js.planId = item.planId;
		js.descripcion = item.descripcion;
		js.urlReferencia = "";
		js.estado = item.estado;
		js.conTareas = item.condiciones.length > 0;
		js.hijo = item.condiciones.length > 0;
		js.esPorLapso = item.esPorLapso;
		if (padre == "0") {
			js.padre = item.planId;
			js.padreClase = "plan";
		} else {
			js.padre = padre;
			js.padreClase = "tarea";
		}
		js.tipo = item.tipo;
		js.cumplidaEl = item.cumplidaEl == "0001-01-01T00:00:00" ? null : item.cumplidaEl;
		js.creacion = item.creacion;
		js.creador = item.creador;
		js.ejecutor = item.ejecutor;
		js.instrucciones = item.instrucciones;
		js.vencimiento = item.vencimiento;
		js.vigenteDesde = item.vigenteDesde;
		js.alerta = item.alerta;
		ar.push(js);
	});
	return ar;
};

export const hoyEnStringDDMMYYYY = () => {
	let hoy = new Date();
	let ddhoy = String(hoy.getDate()).padStart(2, "0");
	let mmhoy = String(hoy.getMonth() + 1).padStart(2, "0"); //January is 0!
	let yyyyhoy = hoy.getFullYear();
	return ddhoy + "-" + mmhoy + "-" + yyyyhoy;
};

export const hoyEnStringYYYYMMDD = () => {
	let hoy = new Date();
	let ddhoy = String(hoy.getDate()).padStart(2, "0");
	let mmhoy = String(hoy.getMonth() + 1).padStart(2, "0"); //January is 0!
	let yyyyhoy = hoy.getFullYear();
	return yyyyhoy + "-" + mmhoy + "-" + ddhoy;
};

export const dateToFrench = (fecha) => {
	let f = new Date(fecha);
	return ("0" + String(f.getDate())).slice(-2) + "/" + ("0" + String(f.getMonth() + 1)).slice(-2) + "/" + String(f.getFullYear());
};

export const dateReturnForComponente = (pFecha) => {
	let fecha = new Date(pFecha);
	return fecha.getFullYear() + "-" + ("0" + (fecha.getMonth() + 1)).slice(-2) + "-" + ("0" + fecha.getDate()).slice(-2);
};

export const uuidv4 = () => {
	return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16));
};

export const hiddenOpcion = (itemMenu) => {
	let hidden = true;
	if (store.getState().autorizacion.entities?.result?.sectores[0]?.token) {
		let misRoles = store.getState().miPerfil.sector.roles;
		let opcionRoles = require("../../json/opcionRoles.json").find((item) => item.opcion == itemMenu);
		misRoles.forEach((item) =>
			opcionRoles.roles.forEach((rol) => {
				if (item.nombre == rol) {
					hidden = false;
				}
			})
		);
	}
	return hidden;
};
