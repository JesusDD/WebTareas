$(document).ready(function() {
    var num1, num2;

    function captNum() {
        if ($(".num1").val().length === 0) {
            alert("No se ingreso el primer numero");
            $(".num1").focus();
            return false;
        } else if ($(".num1").val().length === 0) {
            alert("No se ingreso el segundo numero");
            $(".num2").focus();
            return false;
        } else {
            num1 = parseInt($(".num1").val());
            num2 = parseInt($(".num2").val());
            return true;
        }
    }

    $(".suma").click(function() {
        if (captNum()) {
            $("#result").val(num1 + num2);
        }
    });

    $(".resta").click(function() {
        if (captNum()) {
            $("#result").val(num1 - num2);
        }
    });

    $(".raiz").click(function() {
        if (captNum()) {
            if (num1 < 0) {
                alert("El número ingresado es negativo");
                $(".num1").focus();
            } else {
                $("#result").val(Math.sqrt(num1));

            }
        }
    });

    $(".div").click(function() {
        if (captNum()) {
            if (num2 === 0) {
                alert("El número ingresado es cero");
                $(".num2").focus();
            } else {
                $("#result").val(num1 / num2);

            }
        }
    });

    $(".multp").click(function() {
        if (captNum()) {
            $("#result").val(num1 * num2);
        }
    });

    $(".unoSX").click(function() {
        if (captNum()) {
            if (num1 === 0) {
                alert("El número ingresado es cero");
                $(".num1").focus();
            } else {
                $("#result").val(1 / num1);

            }
        }
    });

});