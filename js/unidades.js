var robin = {
    nombre: "Robin",
    claseBase: ["Tactician"],
    baseHp: 19,
    baseStr: 6,
    baseMag: 5,
    baseSkl: 5,
    baseSpd: 6,
    baseLck: 4,
    baseDef: 6,
    baseRes: 4,
    hpMod: 19,
    strMod: 6,
    magMod: 5,
    sklMod: 5,
    spdMod: 6,
    lckMod: 4,
    defMod: 6,
    resMod: 4,
    baseHpGr: 40,
    baseStrGr: 40,
    baseMagGr: 35,
    baseSklGr: 35,
    baseSpdGr: 35,
    baseLckGr: 55,
    baseDefGr: 30,
    baseResGr: 20,
    hpGr: 40,
    strGr: 40,
    magGr: 35,
    sklGr: 35,
    spdGr: 35,
    lckGr: 55,
    defGr: 30,
    resGr: 20,
}

//hacer array de los stats
function statBaseArray(unit){
    return[unit.baseHp, unit.baseStr, unit.baseMag, unit.baseSkl, unit.baseSpd, unit.baseLck, unit.baseDef, unit.baseRes]
}
function statModsArray(unit){
    return[unit.hpMod, unit.strMod, unit.magMod, unit.sklMod, unit.spdMod, unit.lckMod, unit.defMod, unit.resMod]
}

function growthBaseArray(unit){
    return [unit.baseHpGr, unit.baseStrGr, unit.baseMagGr, unit.baseSklGr, unit.baseSpdGr, unit.baseLckGr, unit.baseDefGr, unit.baseDefGr]
}
function growthModsArray(unit){
    return [unit.hpGr, unit.strGr, unit.magGr, unit.sklGr, unit.spdGr, unit.lckGr, unit.defGr, unit.resGr]
}