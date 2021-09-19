class Modal
{
    constructor(img, title, nombre)
    {
        this.value = "";
        this.id = "inputModal";
        this.btnID = "btnModal";
        this.inputs = nombre;

        this.elemento = document.createElement("div");
        this.elemento.className = "modal-container";
        this.elemento.innerHTML = `<div class="modal modal-close">
                                        <img src="${img}" alt="">
                                        <div class="modal-textos">
                                        <h1>${title}</h1>
                                        <form id="modal" class="modal-input">
                                            <input type="text" placeholder="${this.inputs}" id="${this.id}">
                                            <button type='button' id="${this.btnID}" class="ingresar">Ingresar</button>
                                        </form>
                                        </div>
                                    </div>`;
    }

    lanzar(funcion)
    {
        document.body.appendChild(this.elemento);
        this.validamos(funcion);
    }

    validamos(funcion)
    {
        let button = document.getElementById(this.btnID);

        button.addEventListener("click", () => {
            let input = document.getElementById(this.id).value;
            if(input == ""){
                alert("Debe completar con su nombre");
            }
            else{
                this.value = input;
                this.eliminar();
                funcion(this.value);
            }
        });

    }

    eliminar()
    {
        let eliminar = document.getElementsByClassName("modal-container")[0];
        eliminar.parentNode.removeChild(eliminar);
    }

    getValueInputs()
    {
        return this.value;
    }

}