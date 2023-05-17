var tactician = {
    nombre: "Tactician",
    baseHp: 16,
    baseStr: 4,
    baseMag: 3,
    baseSkl: 5,
    baseSpd: 5,
    baseDef: 5,
    baseRes: 3,
}

var grandmaster = {
    nombre: "Grandmaster",
    baseHp: 20,
    baseStr: 7,
    baseMag: 6,
    baseSkl: 7,
    baseSpd: 7,
    baseDef: 7,
    baseRes: 5,
}
var thief = {
    nombre: "Thief",
    baseHp: 16,
    baseStr: 3,
    baseMag: 0,
    baseSkl: 6,
    baseSpd: 8,
    baseDef: 2,
    baseRes: 0,
}
var darkFlier = {
    nombre: "Dark Flier",
    baseHp: 1,
    baseStr: 5,
    baseMag: 6,
    baseSkl: 8,
    baseSpd: 10,
    baseDef: 6,
    baseRes: 9,
}
var sorcerer = {
    nombre: "Sorcerer",
    baseHp: 23,
    baseStr: 2,
    baseMag: 6,
    baseSkl: 4,
    baseSpd: 4,
    baseDef: 7,
    baseRes: 7,
}
var bride = {
    nombre: "Bride",
    baseHp: 21,
    baseStr: 7,
    baseMag: 6,
    baseSkl: 11,
    baseSpd: 10,
    baseDef: 7,
    baseRes: 6,
}

var pegasusKnight = {
    nombre: "Pegasus Knight",
    baseHp: 16,
    baseStr: 4,
    baseMag: 2,
    baseSkl: 7,
    baseSpd: 8,
    baseDef: 4,
    baseRes: 6,
}
var falconKnight = {
    nombre: "FalconKnight",
    baseHp: 20,
    baseStr: 6,
    baseMag: 3,
    baseSkl: 10,
    baseSpd: 11,
    baseDef: 6,
    baseRes: 9,
}

//
var promotedClasses = [grandmaster, darkFlier, sorcerer, bride, falconKnight];
var nopromotedClasses = [tactician, pegasusKnight, thief];

function getModArr(cl){
    return [cl.hpMod, cl.strMod, cl.magMod, cl.sklMod, cl.spdMod, cl.lckMod, cl.defMod, cl.resMod];
}