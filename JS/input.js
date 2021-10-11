
class Input
{
    constructor(idPadre, id)
    {
        this.id = id;
        this.idPadre = idPadre;
        this.idBtn = id + "btn";
        this.pintar();
        this.css();
        this.clickBtnDeletInput();
    }

    pintar()
    {
        $(`#${this.idPadre}`).append(`
            <div id="${this.id}">
                <input class="txtInput" type="text" placeholder="Ingresar nombre tarea">
                <button class="btnTXT" id="${this.idBtn}">X</button>
            </div>
        `)
    }

    css()
    { 
        $(`#${this.idPadre}`).css({
            "margin": "5px 0",
            "display": "flex",
            "flex-direction": "column"
        });

        $(`#${this.id}`).css({
            "margin": "5px",
            "display": "flex",
            "flex-direction": "row"
        });

        $(`.txtInput`).css({
            "font-size": "16px",
            "border-radius": "3px",
            "border": "1px solid #5454c1",
            "padding": "5px",
            "letter-spacing": "1px",
            "width": "76%"
        });

        $(`.btnTXT`).css(btnDelete);
    }

    clickBtnDeletInput()
    {
        const id = this.id;
        $(`#${this.idBtn}`).click(function(){
            $(`#${id}`).fadeOut( 500,function(){
                $(`#${id}`).remove();
            });
        });
    }
/// falta que este evento ocurra
}