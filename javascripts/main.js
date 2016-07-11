var Informacion = (function() {
	var _navegador = function() {
		var usuario = document.getElementById('usuario');
		var a = document.createElement("a");
		a.textContent = "Navegador Web: " + navigator.appCodeName + " " + navigator.appName;
		usuario.appendChild(a);
	};

	var _fecha = function() {
		var usuario = document.getElementById('usuario');
		var a = document.createElement("a");
		var date = new Date();
		var day = date.getDate();
		var month = date.getMonth();
		var year = date.getFullYear();
		var fecha_visita = "Fecha: "+ day + "/" + month + "/" + year;
		var br = document.createElement("br");
		usuario.appendChild(br);
		a.textContent = fecha_visita;
		usuario.appendChild(a);
	};

	return {
		"navegador": _navegador,
		"fecha": _fecha
	};
})();
