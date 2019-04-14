function IniciarSesion(){
	alert("correcto");
	// Datos para el inicio de sesión
	var User = gguevarav;
	var Password = 123;
	// Variables que contiene los datos enviados por el usuario
	var Usuario = document.getElementById('username').value;
	var Contrasena = document.getElementById('password').value;

	if(Usuario == User){
		if(Contrasena == Password){
			location.href ="Principal.html";
		}
	}
}