$(document).ready(function () {
    var url = "https://alumnoscurso.azure-mobile.net/Tables/Alumno";

    function procesarJson(res) {
        var data = res;
        var r = "";
        for (var i = 0; i < res.length; i++) {
            r += data[i].nombre + "<br />";
        }
        $("#resultado").html(r);
    }

    //recibe cualquier tipo de respuesta
    function conGet() {
        //peticion GET con url y la funcion que procesara la respuesta
        $.get(url, procesarJson);
    }

    //SOLO procesa respuestas en formato JSON
    function conGetJson() {
        var o = {
            nombre: "MiNombre",
            apellidos: "MiApellido",
            edad: 20,
            nota: 7
        }
        $.getJSON(url, procesarJson);
    }

    //no funciona con Azure, realiza una peticion POST
    function conPost() {
        var o = {
            nombre: "MiNombre",
            apellidos: "MiApellido",
            edad: 20,
            nota: 7
        }
        $.post(url, JSON.stringify(o), function (res) {
            console.log(res);
        });
    }
    //inserta el contenido devuelto por LOAD (peticion get a esa URL) en un elemento HTML
    function conLoad() {
        $("#resultado").load(url);
    }

    //peticion AJAX configurable
    function conAjax() {
        var o = {
            nombre: "MiNombre",
            apellidos: "MiApellido",
            edad: 20,
            nota: 7
        }

        $.ajax({
            type: "POST",
            url: url,
            success: function(res) {
                console.log(res);
            },
            error: function(err) {
                console.log(err);
            },
            data: JSON.stringify(o),
            dataType: "json",
            headers: {
                "Content-Type": "application/json"
            }


    });

    }
    

    //ASIGNADO DE EVENTOS
    $("#linkGet").click(function (e) {
        e.preventDefault();
        conGet();
    });

    $("#linkGetJson").click(function (e) {
        e.preventDefault();
        conGetJson();
    });
    $("#linkPost").click(function (e) {
        e.preventDefault();
        conPost();
    });

    $("#linkLoad").click(function (e) {
        e.preventDefault();
        conLoad();
    });

    $("#linkAjax").click(function (e) {
        e.preventDefault();
        conAjax();
    });


})