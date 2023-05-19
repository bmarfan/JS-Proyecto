//guardar en el Storage
function guardarJSON(){
    var as = $("#assetSelect").val();
    var fl = $("#flawSelect").val();
    var gn = $("#genderSelect").val();
    var nm = $("#unitName").text()
    var all = {asset: as, flaw: fl, gender: gn, nombre: nm};
    var json, storage, eleccionesObjeto;
    

    json = JSON.stringify(all);
    localStorage.setItem("elecciones", json);

    storage = localStorage.getItem("elecciones");
    eleccionesObjeto = JSON.parse(storage);
    
    $("#unidadesActNombre").html(eleccionesObjeto.nombre);
    $("#unidadesActdat").text(eleccionesObjeto.asset);
    $("#unidadesActdat2").text(eleccionesObjeto.flaw);
    $("#unidadesActdat3").text(eleccionesObjeto.gender);
}

//guardar assets Robin
function guardarA(){
    $("#assetSelect").change(function () { 
        localStorage.setItem('asset', this.value)
    });
    if(localStorage.getItem("asset")){
        $("#assetSelect").val(localStorage.getItem("asset"))
    }
    modAssetFlaw();
    cambiarTexto();
    guardarJSON()
}
//guardar flaws Robin
function guardarF(){
    $("#flawSelect").change(function () { 
        localStorage.setItem('flaw', this.value)
    });
    if(localStorage.getItem("flaw")){
        $("#flawSelect").val(localStorage.getItem("flaw"))
    }
    modAssetFlaw();
    cambiarTexto();
}
//guardar género Robin
function guardarG(){
    $("#genderSelect").change(function () { 
        localStorage.setItem('gender', this.value)
    });
    if(localStorage.getItem("gender")){
        $("#genderSelect").val(localStorage.getItem("gender"))
    }
    guardarJSON()
}
