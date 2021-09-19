class tarjet
{
    constructor(id)
    {
        this.contador=3;
        this.id = id;
        this.ingreso = document.getElementById("containerTarjetas");

        this.elemento = document.createElement("div");
        this.elemento.className = "tarea-principal";
        this.elemento.innerHTML = `<div class="tarea" id="${this.id}">
                                        <div class="tarea-cabezera" id="${this.id + "Nombre"}">
                                            <h2 class="letraExtra"></h2>
                                        </div>
                                        <div>
                                        </div>
                                    </div>`;
    }

    lanzar()
    {
        this.ingreso.appendChild(this.elemento);

        this.divTareas = document.getElementById(this.id);

        const input = new Input("tarea-tarjet", this.id+this.contador, "+ Agregar tarea");
        input.lanzar(this.divTareas);

        this.btn = new Btn("tarjeta-footer", this.id+2, "+ Añadir una tarea");
        this.btn.lanzar(this.divTareas);

    }

    NombreTarea()
    {
        let modal = new Modal("img/addTarjeta.svg", "Ingrese el nombre de la tarea", "tarea");

        modal.lanzar((valor)=>{
            let NombreTarjeta = document.getElementById((this.id + "Nombre"));
            NombreTarjeta.textContent = valor;
        });
    }

    addTarea(){
        this.btn.eventoClick(()=>{
            const input = new Input("tarea-tarjet", this.id+ (++this.contador), "+ Agregar tarea");
            input.lanzar(this.divTareas);
        })
    }

}


/*

class tarjet
{
    constructor(id)
    {
        this.id = id;
        this.idNombre = id + "Nombre";
        this.idContenerInput = id + "ContenerInput";
        this.idInput = id + "Input";
        this.idBtn = id + "btn";

        this.ingreso = document.getElementById("containerTarjetas");

        this.elemento = document.createElement("div");
        this.elemento.className = "tarea-principal";
        this.elemento.innerHTML = `<div class="tarea" id="${this.id}">
                                        <div class="tarea-cabezera" id="${this.idNombre}">
                                            <h2 class="letraExtra"></h2>
                                        </div>
                                        <div id="${this.idContenerInput}">
                                        </div>
                                    </div>`;
    }

    lanzar()
    {
        this.ingreso.appendChild(this.elemento);

        this.CreateInput();

        this.createBtn();

        this.NombreTarea();

    }

    CreateInput(){
        const donde = document.getElementById(this.idContenerInput);
        const input = new Input("tarea-tarjet", this.idInput, "+ Agregar tarea");
        input.lanzar(donde);
    }

    createBtn(){
        const donde = document.getElementById(this.id);
        const btn = new Btn("tarjeta-footer", this.idBtn, "+ Añadir una tarea");
        btn.lanzar(donde);
    }

    NombreTarea()
    {
        let modal = new Modal("img/addTarjeta.svg", "Ingrese el nombre de la tarea", "tarea");

        modal.lanzar((valor)=>{
            let NombreTarjeta = document.getElementById((this.id + "Nombre"));
            NombreTarjeta.textContent = valor;
        });
    }

    addTarea(){
        this.btn.eventoClick(()=>{
            const input = new Input("tarea-tarjet", this.id+ (++this.contador), "+ Agregar tarea");
            input.lanzar(this.divTareas);
        })
    }

}

*/