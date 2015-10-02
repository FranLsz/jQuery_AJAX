$(document).ready(function() {
    var url = "https://alumnoscurso.azure-mobile.net/Tables/Alumno";

    function conGet() {

        $.get(url, function (res) {
            var data = res;
            var r =  "";
            for (var i = 0; i < res.length; i++) {
                r += data[i].nombre + "<br />";
            }

            $("#resultado").html(r);

        });
    }


    $("#linkGet").click(function() {
        conGet();

    });


})