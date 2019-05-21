// Ocultando los precios
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
	var UsuarioAutorizado = 'admin';
	var ContraseniaUsuarioAutorizado = 'admin';

	// Validamos si las credenciales son correctas
	if(NombreUsuario == UsuarioAutorizado){
		if(Password == ContraseniaUsuarioAutorizado){
			window.location.href = 'principal.html';
			//alert('inicio valido');
		}
	}
}

// Paginación de la página
function MostrarArticulos(Grupo) {
	switch(Grupo){
		case 'Grupo1':{
			$('.Grupo1').show();
			$('.Grupo2').hide();
			$('.Grupo3').hide();
			$('.Grupo4').hide();
			$('.Botonera').show();
			$('.QuienesSomos').hide();
			break;
		}
		case 'Grupo2':{
			$('.Grupo1').hide();
			$('.Grupo2').show();
			$('.Grupo3').hide();
			$('.Grupo4').hide();
			break;
		}
		case 'Grupo3':{
			$('.Grupo1').hide();
			$('.Grupo2').hide();
			$('.Grupo3').show();
			$('.Grupo4').hide();
			break;
		}
		case 'Grupo4':{
			$('.Grupo1').hide();
			$('.Grupo2').hide();
			$('.Grupo3').hide();
			$('.Grupo4').show();
			break;
		}
		case 'QuienesSomos':{
			$('.Grupo1').hide();
			$('.Grupo2').hide();
			$('.Grupo3').hide();
			$('.Grupo4').hide();
			$('.Botonera').hide();
			$('.QuienesSomos').show();
			$('.Contacto').hide();
			$('.Ubicacion').hide();
			break;
		}
		case 'Contacto':{
			$('.Grupo1').hide();
			$('.Grupo2').hide();
			$('.Grupo3').hide();
			$('.Grupo4').hide();
			$('.Botonera').hide();
			$('.QuienesSomos').hide();
			$('.Contacto').show();
			$('.Ubicacion').hide();
			break;
		}
		case 'Ubicacion':{
			$('.Grupo1').hide();
			$('.Grupo2').hide();
			$('.Grupo3').hide();
			$('.Grupo4').hide();
			$('.Botonera').hide();
			$('.QuienesSomos').hide();
			$('.Contacto').hide();
			$('.Ubicacion').show();
			break;
		}
		case 'ListaJuegos':{
			$('.Grupo1').show();
			$('.Grupo2').show();
			$('.Grupo3').show();
			$('.Grupo4').show();
			$('.Botonera').hide();
			$('.QuienesSomos').hide();
			$('.Contacto').hide();
			$('.Ubicacion').hide();
			break;
		}
	}
	
}

function MostrarModal(Articulo, Titulo, CasaComercial, Precio) {
	//var Contenido = "	<div class='row'>	<div class='col-lg-5'>	<div class='modal-body'>	<img src='IMG/" + articulo + "/" + articulo + "2.jpg' class='img-fluid'>	</div>	</div>	<div class='col-lg-7'>	<div class='titulo'>	<form>	<div class='card'>	<div class='card-body'>	<h5 class='card-title'>" + Titulo + "</h5>	<hr>	<small class='card-text'>by" + CasaComercial + "</small>	<span>	<ion-icon name='star'></ion-icon>	<ion-icon name='star'></ion-icon>	<ion-icon name='star'></ion-icon>	<ion-icon name='star'></ion-icon>	<ion-icon name='star'></ion-icon>	</span>	<h4 class='card-text PrecioArticulo' id='PrecioArticulo'>Q. " + Precio + "</h4>	<p class='card-text'>Cantidad</p>	<input type='number' class='form-control' id='Cantidad' name='Cantidad' placeholder='Cantidad' required>	<hr>	<a href='#' class='btn btn-primary'>Agregar al carrito</a>	</div>	</div>	</form>	</div>	</div>	</div>"
	// Cambiamos valores a objetos
	// Cambiamos la imagen
	$(".ImagenVistaPrevia").attr("src","IMG/" + Articulo + "/" + Articulo +"2.jpg");
	// Cambiamos el título
	$('.TituloArticulo').text(Titulo);
	// Cambiamos la casa comercial
	$('.CasaComercial').text('by ' + CasaComercial);
	// Cambiamos el Precio
	$('.PrecioArt').text('Q. ' + Precio);
	//document.querySelector("#PrecioArticulo").innerText = 'asd';
	$("#AgregarCarrito").modal("show");
}