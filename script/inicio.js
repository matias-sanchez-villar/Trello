let contador = 1;

let modal = new Modal("img/presentacion.svg", "Bienvenidos al organizador de tareas", "Nombre");


const createTarjeta = ()=>{
    let tarjeta = new tarjet(contador);
    tarjeta.lanzar();
    tarjeta.NombreTarea();
    tarjeta.addTarea();
    
    const div = document.getElementById("containerTarjetButon");

    const btn = new Btn("", "AgregarMas", "+ Añadir una tarjeta");
    btn.lanzar(div);
    
    btn.eventoClick(()=>{
        
        let tarjeta = new tarjet(++contador);
        tarjeta.lanzar();
        tarjeta.NombreTarea();
        tarjeta.addTarea();
    })
    
}

modal.lanzar((valor)=>{
    let menu = document.getElementById("nombreUsuario");
    menu.textContent = valor;

    createTarjeta();

});
