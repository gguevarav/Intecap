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
			$('.Grupo5').hide();
			$('.QuienesSomos').hide();
			$('.Contacto').hide();
			$('.Ubicacion').hide();
			break;
		}
		case 'Grupo2':{
			$('.Grupo1').hide();
			$('.Grupo2').show();
			$('.Grupo3').hide();
			$('.Grupo4').hide();
			$('.Grupo5').hide();
			$('.QuienesSomos').hide();
			$('.Contacto').hide();
			$('.Ubicacion').hide();
			break;
		}
		case 'Grupo3':{
			$('.Grupo1').hide();
			$('.Grupo2').hide();
			$('.Grupo3').show();
			$('.Grupo4').hide();
			$('.Grupo5').hide();
			$('.QuienesSomos').hide();
			$('.Contacto').hide();
			$('.Ubicacion').hide();
			break;
		}
		case 'Grupo4':{
			$('.Grupo1').hide();
			$('.Grupo2').hide();
			$('.Grupo3').hide();
			$('.Grupo4').show();
			$('.Grupo5').hide();
			$('.QuienesSomos').hide();
			$('.Contacto').hide();
			$('.Ubicacion').hide();
			break;
		}
		case 'Grupo5':{
			$('.Grupo1').hide();
			$('.Grupo2').hide();
			$('.Grupo3').hide();
			$('.Grupo4').hide();
			$('.Grupo5').show();
			$('.QuienesSomos').hide();
			$('.Contacto').hide();
			$('.Ubicacion').hide();
			break;
		}
		case 'QuienesSomos':{
			$('.Grupo1').hide();
			$('.Grupo2').hide();
			$('.Grupo3').hide();
			$('.Grupo4').hide();
			$('.Grupo5').hide();
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
			$('.Grupo5').hide();
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
			$('.Grupo5').hide();
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
			$('.Grupo5').show();
			$('.Botonera').hide();
			$('.QuienesSomos').hide();
			$('.Contacto').hide();
			$('.Ubicacion').hide();
			break;
		}
	}
	
}

function MostrarModal(Articulo, Titulo, CasaComercial, Precio) {
	// Cambiamos valores a objetos
	// Cambiamos la imagen
	$(".ImagenVistaPreviaArticulo").attr("src","IMG/" + Articulo + "/" + Articulo +"2.jpg");
	// Cambiamos el título
	$('.TituloArticulo').text(Titulo);
	// Cambiamos la casa comercial
	$('.CasaComercial').text('by ' + CasaComercial);
	// Cambiamos el Precio
	$('.PrecioArt').text('Q. ' + Precio);
	//document.querySelector("#PrecioArticulo").innerText = 'asd';
	$("#AgregarCarrito").modal("show");
}

/*$("#Agregar").click(function() {

	$("#ArticuloComprar").clone().appendTo("#CarritoCompra");
});*/

ContadorNumeroFila = 0;
function crear(obj) {
    // Aumentamos el 1 el contador de la fila
    ContadorNumeroFila++;
    // Obtenemos el nombre del id donde queremos agregarlo
    CuerpoTabla = document.getElementById('CuerpoTabla');
    // Creamos la fila para agregar al cuerpo de la tabla
    FilaTabla = document.createElement('tr');
    //Agregamos el número de la fila a la fila
    NumeroFila = document.createElement('th');
    NumeroFila.scope = 'row';
    NumeroFila.innerHTML = ContadorNumeroFila;
    // Creamos la primer columna de la fila
    ColumnaFila1 = document.createElement('td');

    imagen = document.createElement("img");
    imagen.setAttribute("src", $('#ImagenVistaPreviaArticulo').attr('src'));
    imagen.setAttribute("height", "50px")

    ColumnaFila1.appendChild(imagen);

    // Creamos la segunda columna
    ColumnaFila2 = document.createElement('td');
    titulo = document.createElement("h5");
    titulo.setAttribute("class", "card-title");
    titulo.innerHTML = $('#TituloArticulo').text();

    ColumnaFila2.appendChild(titulo);

    // Creamos la segunda columna
    // Creamos la segunda columna
    ColumnaFila3 = document.createElement('td');
    precio = document.createElement("h4");
    precio.setAttribute("class", "card-text");
    precio.innerHTML = $('#PrecioArt').text();

    ColumnaFila3.appendChild(precio);

    FilaTabla.appendChild(NumeroFila);
    FilaTabla.appendChild(ColumnaFila1);
    FilaTabla.appendChild(ColumnaFila2);
    FilaTabla.appendChild(ColumnaFila3);
    CuerpoTabla.appendChild(FilaTabla);

    // Cerramos el modal
    $('#AgregarCarrito').modal('hide');
}