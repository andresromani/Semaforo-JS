var i = 0;
var modo;

function cambiarEstado() {
    i++;

    if (i <= 4) {
        cambiarColor(i);
    }
    else {
        i = 1;
        cambiarColor(i);
    }
}

function cambiarColor(i) {
    var red = document.querySelector(".red");
    var yellow = document.querySelector(".yellow");
    var green = document.querySelector(".green");

    switch (i) {
        case 1:
            red.style.backgroundColor = "red";
            yellow.style.backgroundColor = "";
            green.style.backgroundColor = "";
            break;
        case 2:
            red.style.backgroundColor = "red";
            yellow.style.backgroundColor = "yellow";
            green.style.backgroundColor = "";
            break;
        case 3:
            red.style.backgroundColor = "";
            yellow.style.backgroundColor = "yellow";
            green.style.backgroundColor = "";
            break;
        case 4:
            red.style.backgroundColor = "";
            yellow.style.backgroundColor = "";
            green.style.backgroundColor = "green";
            break;
        default:
            red.style.backgroundColor = "";
            yellow.style.backgroundColor = "";
            green.style.backgroundColor = "";
            break;
    }
}

function cambiarModo(i) {
    if (i == 1) {
        cambiarColor(0);
        modo = setInterval('cambiarEstado()', 3000);
        document.querySelector("#color").style.visibility = "hidden";
        document.querySelector(".modo").innerText = "Modo Automático Activado";
    }
    else {
        apagar();
    }
}

function apagar() {
    clearInterval(modo);
    cambiarColor(0);
    document.querySelector("#color").style.visibility = "visible";
    document.querySelector(".modo").innerText = "Modo Manual Activado";
}