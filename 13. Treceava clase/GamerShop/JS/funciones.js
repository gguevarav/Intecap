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

$("#Agregar").click(function() {

	$("#ArticuloComprar").clone().appendTo("#CarritoCompra");
});

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
    DivInputGroup = document.createElement('div');
    DivInputGroup.className = 'input-group input-group-lg';
    SpanSizing = document.createElement('span');
    SpanSizing.id = 'sizing-addon1';
    SpanSizing.className = 'input-group-addon';
    Icono = document.createElement('i');
    Icono.className = 'glyphicon glyphicon-asterisk';
    NombreArticulo = document.createElement('p');
    //$('#TituloArticulo h5').clone().append(NombreArticulo);
    // SelectProducto = document.createElement('select');
    NombreArticulo.id = 'TituloArticulo' + ContadorNumeroFila;
    NombreArticulo.className = 'card-title TituloArticulo';
    NombreArticulo.name = 'TituloArticulo' + ContadorNumeroFila;
    NombreArticulo.innerHTML = document.getElementById('TituloArticulo').val();
    
    //$('#Equipo1 option').clone().appendTo(SelectProducto);
    // Para el select
    //SpanSizing.appendChild(Icono);
    //DivInputGroup.appendChild(SpanSizing);
    DivInputGroup.appendChild(NombreArticulo);
    ColumnaFila1.appendChild(DivInputGroup);
    
    // Creamos la tercer columna
    ColumnaFila3 = document.createElement('td');
    DivInputGroup3 = document.createElement('div');
    DivInputGroup3.className = 'input-group input-group-lg';
    SpanSizing3 = document.createElement('span');
    SpanSizing3.id = 'sizing-addon1';
    SpanSizing3.className = 'input-group-addon';
    Icono3 = document.createElement('i');
    Icono3.className = 'glyphicon glyphicon-question-sign';
    InputHoras = document.createElement('input');
    InputHoras.id = 'CantidadHorasEquipo' + ContadorNumeroFila;
    InputHoras.className = 'form-control';
    InputHoras.name = 'CantidadHorasEquipo' + ContadorNumeroFila;
    InputHoras.placeholder = 'Horas';
    InputHoras.type = 'number';
    SpanSizing3.appendChild(Icono3);
    DivInputGroup3.appendChild(SpanSizing3);
    DivInputGroup3.appendChild(InputHoras);
    ColumnaFila3.appendChild(DivInputGroup3);
    FilaTabla.appendChild(NumeroFila);
    // Agregamos las dos columnas a la fila
    FilaTabla.appendChild(ColumnaFila1);

    FilaTabla.appendChild(ColumnaFila3);
    // Agregamos la fila al cuerpo de la tabla
    CuerpoTabla.appendChild(FilaTabla);
}