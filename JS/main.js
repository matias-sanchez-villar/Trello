
if(localStorage.getItem("Nombre")  == null){
    new Modal("Bienvenido a tu organizado de tareas", "img/presentacion.svg", "Nombre");
    $('#btnModal').click(function(e){
        if($('#txtModal').val() == ""){
            alert("Complete su nombre");
        }else{
            $('#nombreUsuario').text($('#txtModal').val());
            localStorage.setItem("Nombre", $('#txtModal').val());
            $('#modal').fadeOut(400, function(){
                $('#modal').remove();
            });
        }
    });
}else{
    $('#nombreUsuario').text(localStorage.getItem("Nombre"));
}


/*
*   Evento click del boton + add tarjeta
*/
let cont = 1;
$("#containerTarjetButon").append('<button id="bntAddTarjeta">+ add tarjeta</button>');
$("#bntAddTarjeta").css(btnAddTargeta);

$("#bntAddTarjeta").click(function(){

    new Modal("Ingrese el nombre de la tarjeta", "img/addTarjeta.svg", "Nombre tarjeta");
    $('#btnModal').click(function(e){
        if($('#txtModal').val() == ""){
            alert("Complete el nombre de la tarjeta");
        }else{
            new Targeta(cont, $('#txtModal').val());
            $('#modal').fadeOut(400, function(){
                $('#modal').remove();
            });
            cont++;
        }
    });

});


/*
*   Evento doble click del menu
*/
const txt = this.idH2;
$(`#nombreUsuario`).dblclick(function(){
    new Modal("Ingrese el nuevo nombre de usuaro", "img/presentacion.svg", $(`#nombreUsuario`).text());
    $('#btnModal').click(function(e){
        if($('#txtModal').val() == ""){
            alert("Complete su nombre");
        }else{
            $('#nombreUsuario').text($('#txtModal').val());
            localStorage.setItem("Nombre", $('#txtModal').val());
            $('#modal').fadeOut(400, function(){
                $('#modal').remove();
            });
        }
    });
});
