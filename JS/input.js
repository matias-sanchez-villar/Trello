
class Input
{
    constructor(idPadre)
    {
        this.idPadre = idPadre;
        this.pintar();
        this.css();
        this.clickBtnDeletInput();
    }

    pintar()
    {
        $(`#${this.idPadre}`).append(`
            <div>
                <input class="txtInput" type="text" placeholder="Ingresar nombre tarea">
                
            </div>
        `)
    }

    css()
    { 
        $(`.txtInput`).css({
            "font-size": "16px",
            "border-radius": "3px",
            "border": "1px solid #5454c1",
            "padding": "10px",
            "letter-spacing": "1px",
            "margin": "4px"
        });

        $(`.btnTXT`).css(btnDelete);
    }

    clickBtnDeletInput()
    {
        $('button').keyup(function(event){
            console.log(event);
        });
    }
/// falta que este evento ocurra
}