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