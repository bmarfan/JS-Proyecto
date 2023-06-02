//cuando el documento cargue
"use strict";

$(function() {
    selecOptions();
    guardarStorage();
    unitsAll();
    getInfo();
    $("#tabRobin").toggleClass('visible');
});
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
        $(this).append($("<option></option>").val("base").text("Stats Base"));
        $(this).append($("<option></option>").val("indgrs").text("Growth Rates Individuales"));
        $(this).append($("<option></option>").val("gr").text("Growth Rates Efectivoss"));
        $(this).change(function(){
            updateInfo(unit);
        })
    })
    $(".cl").each(function(){
        var unit = getUnitO($(this).data("unit"));
        if(unit == robin){
            robinClasses(unit);
        }
        else{
            setClase(unit);
        };
        updateInfo(unit);
        $(this).change(function(){
            updateInfo(unit);
        });
    });
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
        var unitName = allUnits[i].n;
        $('#unitsOpciones').append($("<button id='button" + unitName +"' class='contentButton'> "+ unitName +" </button>"));
        $('#contentTabs').append($("<div id='tab" + unitName +"' class='contentTab'></div>"));
    }   
 }

function showTabs(){
    for(var i = 0; i < allUnits.length; i++){
        let unitName = allUnits[i].n;
        $("#tabRobin").focus();
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
//hacer que la tabla de la Robin aparezca por defecto al cargar la página


//poner las unidades en las tablas

function getUnit() { 
    for(var i = 0; i < allUnits.length; i++){
        let unit = allUnits[i];
        let unitN = unit.n;

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
    var v = unit.n;
    var cl = getCl(v);
    var statBasU = statBaseArray(unit);
    var statGrU = growthBaseArray(unit);
    var statBasC = getBaseArr(cl);
    var statGrC = getGrArrC(cl);
    var assetModArray = assetMod(getAsset());
    var flawModArray = flawMod(getFlaw());
    var assetGrArray = assetGrowth(getAsset());
    var flawGrArray = flawGrowth(getFlaw());

    for(var i = 0; i < statsArray.length; i++){ //por cada stat
        var j;
        if($("#" + v + "Type").val() === "base"){ //seleeciona los stat base
            j = statBasU[i] + statBasC[i];
            if($("#RobinType").val() === "base"){ //si es Robin agrega el asset/flaw
                j = (statBasU[i] + statBasC[i] + assetModArray[i] + flawModArray[i])
            }
        }
        else if($("#" + v + "Type").val() === "indgrs"){ //seleeciona los gr individuales
            j = statGrU[i];
            if($("#RobinType").val() === "indgrs"){ //si es Robin agrega el asset/flaw
                j = (statGrU[i] + assetGrArray[i] + flawGrArray[i])
            }
        }
        else if($("#" + v + "Type").val() === "gr"){ //seleeciona los stat base
            j = statGrU[i] + statGrC[i];
            if($("#RobinType").val() === "gr"){ //si es Robin agrega el asset/flaw
                j = (statGrU[i] + statGrC[i] + assetGrArray[i] + flawGrArray[i])
            }
        }
        $("#" + v + statsArray[i]).empty().append(j)
    }
    cambiarTexto();
}

//tomar clase
function getCl(v){
    var cl = $("#" + v + "Class").val();
    for(var i = 0; i < allClasses.length; i++){
        if(allClasses[i].n === cl){
            return allClasses[i];
        }
    }
    return noClass;
}
function getClO(str){
    for(var i = 0; i < allClasses.length; i++){
        if(allClasses[i].n === str){
            return allClasses[i];
        }
    }
    return noClass;
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
function classDir(unit){
    if(unit == robin){
        return;
    }
    updateInfo(unit);
    setClase(unit);
}
//clases de la Robin
function robinClasses(unit){
    var sel = $("#" + unit.n + "Class");
    if(unit == robin){
        for(var i = 0; i < allRobinCl.length; i++){
            var option = document.createElement("option");
            $(option).val(allRobinCl[i].n).text(allRobinCl[i].n);
            $(sel).append(option);
        }
    }
}

function addClOpts(clOpts, unit) {
    var fullClOpts = [];
    var sel = $("#" + unit.n + "Class");
    $(sel).empty();
    
    for(var i = 0; i < clOpts.length; i++) {
        if(clOpts[i] != "-") {
            if($.inArray(getGenderClass(clOpts[i], unit), fullClOpts) == -1) {
                fullClOpts.push(getGenderClass(clOpts[i], unit));
            }
            for(var j = 0; j < getClO(clOpts[i]).promotesTo.length; j++) {
                if($.inArray(getGenderClass(getClO(clOpts[i]).promotesTo[j], unit), fullClOpts) == -1) {
                    fullClOpts.push(getGenderClass(getClO(clOpts[i]).promotesTo[j], unit));
                }
            }
        }
    }
    for(var i = 0; i < fullClOpts.length; i++) {
        var opt = document.createElement("option");
        $(opt).val(fullClOpts[i]).text(fullClOpts[i]);
        $(sel).append(opt);
    }
}

function setClase(unit){
    var v = unit.n;
    var baseCl = unit.claseBase;
    var clOpt = [];
    var sel = $("#" + v + "Class");
    $(sel).empty();
    for(var i = 0; i < baseCl.length; i++) { 
        if(baseCl[i] != "-") { 
            clOpt.push(baseCl[i]);
            for(var j = 0; j < getClO(baseCl[i]).promotesTo.length; j++) { //por cada clase básica su clase avanzada
                if($.inArray(getClO(baseCl[i]).promotesTo[j], unit) == -1){
                    clOpt.push(getClO(baseCl[i]).promotesTo[j])
                }   
            }
        }
    }
    //añadir las opiones a los select
    for(var i = 0; i < clOpt.length; i++){
        var opt = document.createElement("option");
        $(opt).val(clOpt[i]).text(clOpt[i]);
        $(sel).append(opt);
    }
}