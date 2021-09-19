class Input
{
    constructor(classe, id, placeholder)
    {
        this.elemento = document.createElement("div");
        this.elemento.className = classe;
        this.elemento.innerHTML = `<input class="letraInputs" type="text" id="${id}" placeholder="${placeholder}">`;
    }

    lanzar(donde)
    {
        donde.appendChild(this.elemento);
    }

}