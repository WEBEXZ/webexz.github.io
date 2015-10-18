var Informacion = (function() {
	var _navegador = function() {
		var usuario = document.getElementById('usuario');
		usuario.textContent = "Usuario con: " + navigator.appCodeName + " " + navigator.appName;
	};

	return {
		"navegador": _navegador
	};
})();