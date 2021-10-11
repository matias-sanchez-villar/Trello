
class Modal{
    constructor(txt, url, placeholder)
    {
        this.txt = txt;
        this.url = url;
        this.placeholder = placeholder;

        this.pintar();
        this.css();
    }

    pintar()
    {
        $("body").append(`
        <div id="modal">
            <div class="modal">
                <img id="img" src="${this.url}" alt="">
                <div>
                    <h1>${this.txt}</h1>
                    <form id="modal">
                        <input type="text" placeholder="${this.placeholder}" id="txtModal">
                        <button type='button' id="btnModal" class="ingresar">Ingresar</button>
                    </form>
                </div>
            <div>
        </div>
        `);
    }

    css()
    {
        $("#modal").css({
            "position" : "fixed",
            "z-index" : "100",
            "width" : "100%",
            "height" : "100vh",
            "top" : "0",
            "left" : "0",
            "background" : "#b1a8a899",
            "display" : "flex",
            "justify-content" : "center",
            "align-items" : "center",
            "flex-direction" : "column"
        });

        $("#img").css({"height": "250px",});

        $("h1").css({
            "letter-spacing" : "1px",
            "font-size" : "2em",
            "padding" : "5px",
            "margin" : "5px",
            "font-weight" : "100",
            "color" : "#4e3b5"
        });

        $("#txtModal").css({
            "font-size": "18px",
            "font-weight" : "600",
            "border-radius": "3px",
            "border": "1px solid #5454c1",
            "padding": "5px",
            "margin" : "5px",
            "letter-spacing": "1px",
            "width": "50%"
         });
    }

}