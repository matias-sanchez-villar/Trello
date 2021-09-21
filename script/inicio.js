var tajetas = [];

let modal = new Modal("img/presentacion.svg", "Bienvenidos al organizador de tareas", "Nombre");

modal.lanzar((valor)=>{
    let menu = document.getElementById("nombreUsuario");
    menu.textContent = valor;

    //Creamos la primeta tarjeta
    let tarjeta = new Tarjet(tajetas.length);
    tarjeta.lanzar();

    tajetas.push(tarjeta);

    //Creamos el Btn
    let btncontainerTarjetButon = document.getElementById("containerTarjetButon");
    let btn = new Btn("", "-2", "+ Añadir una tarjeta");
    btn.lanzar(btncontainerTarjetButon);
    btn.eventoClick(()=>{
        
        let containerTarjetas = document.getElementById("containerTarjetas");
        //Necesito saber la cantidad de divs dentro del contenedo para asignar el ID
        // osea tengo 3 tarjetas el proximo ID es 4

        let tarjeta = new Tarjet(tajetas.length);
        tarjeta.lanzar();

        tajetas.push(tarjeta);

    })

});