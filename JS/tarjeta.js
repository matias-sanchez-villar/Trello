
class Targeta
{
    constructor(id, txt)
    {
        this.id = id;
        this.idH2 = id+"h2";
        this.idInput = [id + Math.random()];
        this.idContenedorInput = id + "input";
        this.idDeleteInput = id+"DeleteInput";
        this.idAgregarTargeta = id+"AgregarTargeta";
        this.idEliminarTargeta = id+"EliminarTargeta";
        this.txt = txt;
        this.pintar();
    }

    pintar()
    {
        $('#containerTarjetas').append(`
                                <div id="${this.id}">
                                    <div>
                                        <h2 id="${this.idH2}" class="txtName">${this.txt}</h2>
                                    </div>
                                    <div id="${this.idContenedorInput}">
                                        
                                    </div>
                                    <div class="btn">
                                        <button id="${this.idAgregarTargeta}">+ add tarea</button>
                                        <button id="${this.idEliminarTargeta}">X</button>
                                    </div>
                                </div>`);
        this.css();
        this.pintarInput();

        //eventos;
        this.clicBtnDeletTarget();
        this.clicBtnAgregarTarget();
        this.dblClickNombre();
    }

    pintarInput()
    {
        new Input(this.idContenedorInput);
    }

    css()
    {
        $(`#${this.id}`).css({"text-align": "center",
        "padding": "10px",
        "margin": "5px",
        "background-color": "#8480b1",
        "border-radius": "3px"});

        $('.txtName').css({
            "font-weight": "500",
            "letter-spacing": "2px",
            "font-size": "2em"
        });

        $(`.btn`).css({
            "display": "flex",
            "flex-direction": "row"
        })

        $(`#${this.idAgregarTargeta}`).css(btnAddTarea);

        $(`#${this.idEliminarTargeta}`).css(btnDelete);

    }
    
    ///eventos

    clicBtnDeletTarget()
    {
        const id = this.id;
        $(`#${this.idEliminarTargeta}`).click(function(){
            $(`#${id}`).fadeOut( 500,function(){
                $(`#${id}`).remove();
            });
        });
    }

    clicBtnAgregarTarget()
    {
        const id = this.id;
        const idContenedor = this.idContenedorInput;

        $(`#${this.idAgregarTargeta}`).click(function(){
            $(`#${id}`).fadeIn( 500,function(){
                new Input(idContenedor);
            });
        });
    }

    dblClickNombre()
    {
        const txt = this.idH2;
        $(`#${this.idH2}`).dblclick(function(){
            new Modal("Ingrese el nuevo nombre de la tarea", "img/addTarjeta.svg", $(`#${txt}`).text());
            $('#btnModal').click(function(e){
                if($('#txtModal').val() == ""){
                    alert("Complete el nombre de la tarjeta");
                }else{
                    $(`#${txt}`).text($('#txtModal').val());
                    $('#modal').fadeOut(400, function(){
                        $('#modal').remove();
                    });
                }
            });
        });
    }

}
