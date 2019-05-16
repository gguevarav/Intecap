//$(window).on("load", OcultarPrecios);

//$(document).ready(resaltar);

function OcultarPrecios(jQuery){
	//$('#PrecioArticulo').hide();
	$('.PrecioArticulo').hide();
}

$(document).ready(function(){
	$('#mostrar').click(function(){
		$('.PrecioArticulo').show();
	})
})

function IniciarSesion(){
	// Primero obtenemos los valores de inicio se sesión
	var NombreUsuario = $('#NombreUsuario').val();
	var Password = $('#Password').val();

	// Credenciales autorizadas
	var UsuarioAutorizado = "admin";
	var ContraseniaUsuarioAutorizado = "admin";

	// Validamos si las credenciales son correctas
	if(NombreUsuario == UsuarioAutorizado){
		if(Password == ContraseniaUsuarioAutorizado){
			window.location.href = "principal.html";
			//alert("inicio valido");
		}
	}
}