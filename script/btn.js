class Btn{
    constructor(className, id ,texto)
    {
        this.id = id;
        this.elemento = document.createElement("div");
        this.elemento.className = className;
        this.elemento.innerHTML = `<button type='button' id="${this.id}" class="btnAddTarjeta letra">${texto}</button>`;
    }

    lanzar(donde)
    {
        donde.appendChild(this.elemento);
    }

    eventoClick(funcion){
        let button = document.getElementById(this.id);
        button.addEventListener("click", funcion);
    }
}