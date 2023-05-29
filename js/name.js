//cuando el documento cargue
"use strict";
window.addEventListener('load', function (){
    selecOptions();
    guardarStorage();
    unitsAll();
})

//poner los selects
function selecOptions(){
    //poner las opciones de Asset y Flaw
    selectAssetFlaw();
    cambiarTexto();
    robinGender();
    $("#assetSelect").change(modAssetFlaw);
    $("#flawSelect").change(modAssetFlaw);

}
function guardarStorage(){
    guardarA();
    guardarG();
    guardarF();
    guardarJSON();
}

function unitsAll(){
    showUnits();
    showTabs();
}

// elegir el género de Robin
function robinGender(){
    for(var i = 0; i < robinFM.length; i++){
        var gn = robinFM[i].gender;
        $("#genderSelect").append($("<option></option>").val(gn).text(gn).attr("data-optNo", i));
    }
}


//array de los stats
var statsArray = ["Hp", "Str", "Mag", "Skl", "Spd", "Lck", "Def", "Res"];


//asset y flaw
function modAssetFlaw (){
    var assetModArray = assetMod(getAsset());
    var flawModArray = flawMod(getFlaw());
    var assetGrArray = assetGrowth(getAsset());
    var flawGrArray = flawGrowth(getFlaw());
    var baseModArray = statBaseArray(robin);
    var baseGrArray = growthBaseArray(robin);
    
    for(var i = 0; i < statsArray.length; i++){
         statModUp(statsArray[i], (assetModArray[i] + flawModArray[i] + baseModArray[i]), robin);
         statGrUp(statsArray[i], (assetGrArray[i] + flawGrArray[i] + baseGrArray[i]), robin);
    }
    cambiarTexto();
}


//que devuelva el asset
function getAsset(){
    for(var i = 0; i < assetArray.length; i++){
        //si encuentra el objeto
        if(assetArray[i].textVal === $("#assetSelect").val()){
            return assetArray[i]
        }
    }
    // o da ninguno
    return noneAF;
}

//que devuelva el flaw
function getFlaw(){
    for(var i = 0; i < flawArray.length; i++){
        //si encuentra el objeto
        if(flawArray[i].textVal === $("#flawSelect").val()){
            return flawArray[i]
        }
    }
    //o da ninguno
    return noneAF;
}

//SELECT de los Assets/Flaws
function selectAssetFlaw(){
    for(var i = 0; i < assetArray.length; i++){
        var asset = assetArray[i].textVal;
        $('#assetSelect').append($("<option></option>").val(asset).text(asset).attr("data-optNo", i));
        var flaw = flawArray[i].textVal;
        $('#flawSelect').append($("<option></option>").val(flaw).text(flaw).attr("data-optNo", i));
    }
}


//hacer las opciones de las unidades
function showUnits(){
    
    for(var i = 0; i < allUnits.length; i++){
        var unitName = allUnits[i].nombre;
        $('#unitsOpciones').append($("<button id='button" + unitName +"' class='contentButton'> "+ unitName +" </button>"));
        $('#contentTabs').append($("<div id='tab" + unitName +"' class='contentTab'></div>"));
        

    }   
 }
function showTabs(){
    for(var i = 0; i < allUnits.length; i++){
        let unitName = allUnits[i].nombre;
        $("#button" + unitName +"").on('click', function(){
            if( $(".content-tabs div").hasClass('visible')){
                $(".content-tabs div").removeClass('visible')
            };
        });
         $("#button" + unitName +"").on('click', function(event){
            event.preventDefault();
            $("#tab" + unitName +"").toggleClass('visible');
        });
    }
}


//poner la info en la página
function cambiarTexto(){
    var stBase =  statModsArray(robin);
    var stGrBase = growthModsArray(robin);
    for(var i = 0; i < statsArray.length; i++){
        $("#stat" + statsArray[i]).empty().text(stBase[i]);
    };

    for(var i = 0; i < statsArray.length; i++){
        $("#stat" + statsArray[i] + "Gr").empty().text(stGrBase[i])
    }
}
//dar mod, val, unit STAT BASE
function statModUp(mod, val, unit){
    if(mod === "Hp"){
        unit.hpMod = val;
    }
    else if(mod === "Str"){
        unit.strMod = val;
    }
    else if(mod === "Mag"){
        unit.magMod = val;
    }
    else if(mod === "Skl"){
        unit.sklMod = val;
    }
    else if(mod === "Spd"){
        unit.spdMod = val;
    }
    else if(mod === "Lck"){
        unit.lckMod = val;
    }
    else if(mod === "Def"){
        unit.defMod = val;
    }
    else if(mod === "Res"){
        unit.resMod = val;
    }
}

//dar mod, val, unit GROWTH
function statGrUp(gr, val, unit){
    if(gr === "Hp"){
        unit.hpGr = val;
    }
    else if(gr === "Str"){
        unit.strGr = val;
    }
    else if(gr === "Mag"){
        unit.magGr = val;
    }
    else if(gr === "Skl"){
        unit.sklGr = val;
    }
    else if(gr === "Spd"){
        unit.spdGr = val;
    }
    else if(gr === "Lck"){
        unit.lckGr = val;
    }
    else if(gr === "Def"){
        unit.defGr = val;
    }
    else if(gr === "Res"){
        unit.resGr = val;
    }
}

