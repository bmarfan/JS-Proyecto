//cuando el documento cargue
"use strict";
window.addEventListener('load', function (){
    selecOptions();
    guardarStorage();
    unitsAll();
    getInfo();
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
    guardarF();
    guardarJSON();
}

function unitsAll(){
    showUnits();
    showTabs();
    getUnit();
    
}

function getInfo(){
    $(".type").each(function() { //por cada opción
        var unit = getUnitO($(this).data("unit"));
        //crea el option
        $(this).append($("<option></option>").val("base").text("Stats Base Individuales"));
        $(this).append($("<option></option>").val("efBase").text("Stas Base Efectivos"));
        $(this).append($("<option></option>").val("indgrs").text("Groth Rates Individuales"));
        $(this).append($("<option></option>").val("gr").text("Growth Rates Efectivoss"));
        $(this).change(function(){
            updateInfo(unit);
        })
    })
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

//poner las unidades en las tablas

function getUnit() { 
    for(var i = 0; i < allUnits.length; i++){
        let unit = allUnits[i];
        let unitN = unit.nombre;

        var head = document.createElement("div");
        $(head).addClass("unitHeader");
        var ut = document.createElement("div");
        $(ut).text(unitN);
        $("#tab" + unitN +"").append(head).append(ut);
        for(var j = 0; j < statsArray.length; j++){
            var dv = document.createElement("div");
            $(dv).addClass("statList").text(statsArray[j]);
            $(head).append(dv);
        }
        var cl = document.createElement("div"); //crea un div para los select
        var clSel = document.createElement("select");
        $(clSel).attr("id", unitN + "Class").attr("data-unit", unit.vName).addClass("cl");
        $("#tab" + unitN +"").append(cl).append(clSel);

        var type = document.createElement("div");
        var typeSel = document.createElement("select");
        $(typeSel).attr("id", unitN + "Type").attr("data-unit", unit.vName).addClass("type");
        $("#tab" + unitN + "").append(type).append(typeSel);

        for(var j = 0; j < statsArray.length; j++){
            var statdiv = document.createElement("div");
            $(statdiv).attr("id", unitN + statsArray[j]).addClass("statShow");
            $("#tab" + unitN + "").append(statdiv)
        }
    }
}

function updateInfo(unit){
    var v = unit.vName;
    var cl = getCl(v)
    var statBasU = statBaseArray(unit);
    var statGrU = growthBaseArray(unit);
    var statBasC = getModArr(cl);
    var statGrC = getGrArrC(cl);

    for(var i = 0; i < statArr.length; i++){ //por cada stat
        var j;
        if($("#" + v + "Type").val() === "base"){ //seleeciona los stat base
            j = statBasU[i];
        }
        else if($("#" + v + "Type").val() === "efbase"){ //seleeciona los stat base
            j = statBasU[i] + statBasC[i];
        }
        else if($("#" + v + "Type").val() === "indgrs"){ //seleeciona los gr individuales
            j = statGrU[i];
        }
        else if($("#" + v + "Type").val() === "gr"){ //seleeciona los stat base
            j = grGrU[i] + statGrC[i];
        }
        $("#" + v + statsArray[i]).empty().append(j)
    }
}

//tomar clase
function getCl(v){
    var cl = $("#" + v + "Class").val();
    for(var i = 0; i < allClasses.length; i++){
        if(allClasses[i].nombre === cl){
            return allClasses[i];
        }
    }
}
function getClO(str){
    for(var i = 0; i < allClasses.length; i++){
        if(allClasses[i].vName == str){
            return allClasses[i];
        }
    }
}
function getUnitO(str){
    for(var i = 0; allUnits.length; i++){
        if(allUnits[i].vName === str){
            return allUnits[i];
        }
    }
    return noUnit;
}

function getGenderClass(cl, unit){
    if(cl === "Cleric" && unit.gender === "M"){
        cl === "Priest;"
    }
    else if(cl === "Priest" && unit.gender === "F"){
        cl = "Cleric"
    }
    if(cl === "War Cleric" && unit.gender === "M"){
        cl === "War Priest;"
    }
    else if(cl === "War Priest" && unit.gender === "F"){
        cl = "War Cleric"
    }
}
//clases según pj
function setClase(unit){
    var v = unit.vName;
    var baseCl = unit.claseBase;
    var clOpt = [];
    var sel = $("#" + v + "Class");
    $(sel).empty();
    for(var i = 0; i < baseCl.length; i++){ //por cada clase base
        clOpt.push(baseCl[i]);
        for(var j = 0; j < getClO(baseCl[i]).promote.length; j++){ //cada clase base promovida
            clOpt.push(getGenderClass(getClO(baseCl[i]).promote[j], unit));
        }
    }
    //añadir las opiones a los select
    for(var i = 0; i < clOpt.length; i++){
        var opt = document.createElement("option");
        $(opt).val(clOpt[i]).text(clOpt[i]);
        $(sel).append(opt);
    }
}


