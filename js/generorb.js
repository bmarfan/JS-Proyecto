document.getElementById("robinMujer").addEventListener("click", guardarGenero)


function guardarGenero(){
    var gen, myJSON, genero, obj;

    gen = {name: "Robin", genero: "femenino"};
    myJSON = JSON.stringify(gen);
    localStorage.setItem("GeneroRobin", myJSON);

    genero = localStorage.getItem("GeneroRobin");
    obj = JSON.parse(genero);
    document.getElementById("pjImagen").innerHTML = obj.genero;
}

document.getElementById("robinHombre").addEventListener("click", guardarGeneroM)


function guardarGeneroM(){
    var gen, myJSON, genero, obj;

    gen = {name: "Robin", genero: "masculino"};
    myJSON = JSON.stringify(gen);
    localStorage.setItem("GeneroRobin", myJSON);

    genero = localStorage.getItem("GeneroRobin");
    obj = JSON.parse(genero);
    document.getElementById("pjImagen").innerHTML = obj.genero;
}
