var lucina = {
    nombre: "Lucina",
    claseBase: ["Lord", "Cavalier", "Archer"],
    mother: ["-", "Robin", "Sumia", "Maribelle", "Sully", "Olivia"],
    father: "Chrom",
    sRank: ["Owain", "Inigo", "Brady", "Gerome", "Yarne", "Morgan"],
    aRank: ["Robin", "Jkelle", "Jkelle (S)", "Cynthia", "Cynthia(S)", "Morgan (B)", "Brady (B)", "Inigo (B)"],
    isChilde: true,
    gender: "F",
    baseHp: 12,
    baseStr: 5,
    baseMag: 1,
    baseSkl: 8,
    baseSpd: 4,
    baseLck: 13,
    baseDef: 3,
    baseRes: 3,
    baseHpGr: 45,
    baseStrGr: 35,
    baseMagGr: 20,
    baseSklGr: 45,
    baseSpdGr: 45,
    baseLckGr: 80,
    baseDefGr: 25,
    baseResGr: 25,
}
var morgan = {
    nombre: "Morgan",
    claseBase: ["Tactician"],
    mother: "Robin",
    father: ["Chrom", "Frederick", "Virion", "Vaike", "Stahl", "Kellam", "Lon'qu", "Ricken", "Gaius", "Gregor", "Libra", "Henry"],
    sRank: ["Lucina", "Kjelle", "Cynthia", "Severa", "Noire", "Nah"],
    aRank: ["Robin", "Lucina (S)", "Yarne", "Owain"],
    isChilde: true,
    gender: "M",
    baseHp: 9,
    baseStr: 6,
    baseMag: 8,
    baseSkl: 7,
    baseSpd: 6,
    baseLck: 7,
    baseDef: 3,
    baseRes: 7,
    baseHpGr: 35,
    baseStrGr: 35,
    baseMagGr: 40,
    baseSklGr: 40,
    baseSpdGr: 40,
    baseLckGr: 59,
    baseDefGr: 25,
    baseResGr: 25,
}
var owain = {
    nombre: "Owain",
    claseBase: ["Myrmidion", "Priest", "Barbarian"],
    mother: "Lissa",
    father: ["Frederick", "Virion", "Vaike", "Stahl", "Kellam", "Lon'qu", "Ricken", "Gaius", "Gregor", "Libra", "Henry"],
    sRank: ["Robin", "Lucina", "Kjelle", "Cynthia", "Severa", "Noire", "Nah"],
    aRank: ["Inigo", "Brady", "Morgan"],
    isChilde: true,
    gender: "M",
    baseHp: 10,
    baseStr: 4,
    baseMag: 4,
    baseSkl: 5,
    baseSpd: 6,
    baseLck: 9,
    baseDef: 6,
    baseRes: 5,
    baseHpGr: 45,
    baseStrGr: 40,
    baseMagGr: 30,
    baseSklGr: 45,
    baseSpdGr: 35,
    baseLckGr: 50,
    baseDefGr: 30,
    baseResGr: 30,
}
var inigo = {
    nombre: "Inigo",
    claseBase: ["Mercenary", "Myrmidion", "Barbarian"],
    mother: "Olivia",
    father: ["Chrom", "Frederick", "Virion", "Vaike", "Stahl", "Kellam", "Lon'qu", "Ricken", "Gaius", "Gregor", "Libra", "Henry"],
    sRank: ["Robin", "Lucina", "Kjelle", "Cynthia", "Severa", "Noire", "Nah"],
    aRank: ["Lucina (S)", "Owain", "Brady"],
    isChilde: true,
    gender: "M",
    baseHp: 11,
    baseStr: 5,
    baseMag: 2,
    baseSkl: 4,
    baseSpd: 9,
    baseLck: 12,
    baseDef: 4,
    baseRes: 4,
    baseHpGr: 50,
    baseStrGr: 35,
    baseMagGr: 15,
    baseSklGr: 35,
    baseSpdGr: 45,
    baseLckGr: 65,
    baseDefGr: 30,
    baseResGr: 20,
}
var brady = {
    nombre: "Brady",
    claseBase: ["Priest", "Cavalier", "Mage"],
    mother: "Maribelle",
    father: ["Chrom", "Frederick", "Virion", "Vaike", "Stahl", "Kellam", "Lon'qu", "Ricken", "Gaius", "Gregor", "Libra", "Henry"],
    sRank: ["Robin", "Lucina", "Kjelle", "Cynthia", "Severa", "Noire", "Nah"],
    aRank: ["Lucina (S)", "Owain", "Inigo"],
    isChilde: true,
    gender: "M",
    baseHpGr: 55,
    baseStrGr: 30,
    baseMagGr: 40,
    baseSklGr: 25,
    baseSpdGr: 30,
    baseLckGr: 60,
    baseDefGr: 30,
    baseResGr: 30,
}
var kjelle = {
    nombre: "Kjelle",
    claseBase: ["Knight", "Myrmidion", "Cavalier", "Wyvern Rider"],
    mother: "Sully",
    father: ["Chrom", "Frederick", "Virion", "Vaike", "Stahl", "Kellam", "Lon'qu", "Ricken", "Gaius", "Gregor", "Libra", "Henry"],
    sRank: ["Owain", "Inigo", "Brady", "Gerome", "Yarne", "Morgan"],
    aRank: ["Robin", "Lucina (S)", "Lucina", "Severa"],
    isChilde: true,
    gender: "F",
    baseHp: 9,
    baseStr:6 ,
    baseMag:5 ,
    baseSkl:4 ,
    baseSpd:2 ,
    baseLck:10 ,
    baseDef: 7,
    baseRes: 4,
    baseHpGr: 40,
    baseStrGr: 35,
    baseMagGr: 25,
    baseSklGr: 40,
    baseSpdGr: 45,
    baseLckGr: 55,
    baseDefGr: 40,
    baseResGr: 20,
}
var cynthia = {
    nombre: "Cynthia",
    claseBase: ["Pegasus Knight", "Knight", "Cleric"],
    mother: "Sumia",
    father: ["Chrom", "Frederick", "Virion", "Vaike", "Stahl", "Kellam", "Lon'qu", "Ricken", "Gaius", "Gregor", "Libra", "Henry"],
    sRank: ["Owain", "Inigo", "Brady", "Gerome", "Yarne", "Morgan"],
    aRank: ["Robin", "Lucina (S)", "Lucina", "Severa", "Nah"],
    isChilde: true,
    gender: "F",
    baseHp: 7,
    baseStr:5 ,
    baseMag:2 ,
    baseSkl:4 ,
    baseSpd:10 ,
    baseLck: 17,
    baseDef: 6,
    baseRes: 6,
    baseHpGr: 45,
    baseStrGr: 35,
    baseMagGr: 20,
    baseSklGr: 25,
    baseSpdGr: 45,
    baseLckGr: 70,
    baseDefGr: 30,
    baseResGr: 30,
}
var severa = {
    nombre: "Severa",
    claseBase: ["Mercenary", "Pegasus Knight", "Dark Mage"],
    mother: "Cordelia",
    father: ["Frederick", "Virion", "Vaike", "Stahl", "Kellam", "Lon'qu", "Ricken", "Gaius", "Gregor", "Libra", "Henry"],
    sRank: ["Owain", "Inigo", "Brady", "Gerome", "Yarne", "Morgan"],
    aRank: ["Robin", "Kjelle", "Cynthia"],
    isChilde: true,
    gender: "F",
    baseHp: 8,
    baseStr:6 ,
    baseMag:1 ,
    baseSkl:7 ,
    baseSpd:6 ,
    baseLck:6 ,
    baseDef:6 ,
    baseRes:5 ,
    baseHpGr: 45,
    baseStrGr: 40,
    baseMagGr: 10,
    baseSklGr: 45,
    baseSpdGr: 35,
    baseLckGr: 35,
    baseDefGr: 40,
    baseResGr:30 ,
}
var gerome = {
    nombre: "Gerome",
    claseBase: ["Wyvern Rider", "Fighter", "Priest"],
    mother: "Cherche",
    father: ["Frederick", "Virion", "Vaike", "Stahl", "Kellam", "Lon'qu", "Ricken", "Gaius", "Gregor", "Libra", "Henry"],
    sRank: ["Robin", "Lucina", "Kjelle", "Cynthia", "Severa", "Noire", "Nah"],
    aRank: ["Inigo", "Laurent"],
    isChilde: true,
    gender: "M",
    baseHp: 13,
    baseStr: 8,
    baseMag: 0,
    baseSkl: 4,
    baseSpd: 8,
    baseLck: 5,
    baseDef: 5,
    baseRes: 1,
    baseHpGr: 65,
    baseStrGr: 50,
    baseMagGr: 15,
    baseSklGr: 40,
    baseSpdGr: 40,
    baseLckGr: 30,
    baseDefGr: 40,
    baseResGr: 10,
}
var yarne = {
    nombre: "Yarne",
    claseBase: ["Taguel", "Thief", "Barbarian"],
    mother: "Panne",
    father: ["Frederick", "Virion", "Vaike", "Stahl", "Kellam", "Lon'qu", "Ricken", "Gaius", "Gregor", "Libra", "Henry"],
    sRank: ["Robin", "Lucina", "Kjelle", "Cynthia", "Severa", "Noire", "Nah"],
    aRank: ["Morgan", "Brady", "Laurent"],
    isChilde: true,
    gender: "M",
    baseHp: 16,
    baseStr: 9,
    baseMag: 1,
    baseSkl: 4,
    baseSpd: 4,
    baseLck: 13,
    baseDef: 6,
    baseRes: 1,
    baseHpGr: 70,
    baseStrGr: 50,
    baseMagGr: 10,
    baseSklGr: 45,
    baseSpdGr: 40,
    baseLckGr: 60,
    baseDefGr: 45,
    baseResGr: 10,
}
var laurent = {
    nombre: "Laurent",
    claseBase: ["Mage", "Barbarian", "Dark Mage"],
    mother: "Miriel",
    father: ["Frederick", "Virion", "Vaike", "Stahl", "Kellam", "Lon'qu", "Ricken", "Gaius", "Gregor", "Libra", "Henry"],
    sRank: ["Robin", "Lucina", "Kjelle", "Cynthia", "Severa", "Noire", "Nah"],
    aRank: ["Gerome", "Yarne"],
    isChilde: true,
    gender: "M",
    baseHp: 10,
    baseStr: 3,
    baseMag: 7,
    baseSkl: 7,
    baseSpd: 4,
    baseLck: 11,
    baseDef: 4,
    baseRes: 5,
    baseHpGr: 45,
    baseStrGr: 20,
    baseMagGr: 40,
    baseSklGr: 40,
    baseSpdGr: 30,
    baseLckGr: 50,
    baseDefGr: 25,
    baseResGr: 35,
}
var noire = {
    nombre: "Noire",
    claseBase: ["Arher", "Knight", "Dark Mage"],
    mother: "Tharja",
    father: ["Frederick", "Virion", "Vaike", "Stahl", "Kellam", "Lon'qu", "Ricken", "Gaius", "Gregor", "Libra", "Henry"],
    sRank: ["Owain", "Inigo", "Brady", "Gerome", "Yarne", "Morgan"],
    aRank: ["Robin", "Severa"],
    isChilde: true,
    gender: "F",
    baseHp: 8,
    baseStr: 5,
    baseMag: 3,
    baseSkl: 4,
    baseSpd: 7,
    baseLck: 10,
    baseDef: 4,
    baseRes: 6,
    baseHpGr: 45,
    baseStrGr: 20,
    baseMagGr: 40,
    baseSklGr: 40,
    baseSpdGr: 30,
    baseLckGr: 50,
    baseDefGr: 25,
    baseResGr: 35,
}
var nah = {
    nombre: "Nah",
    claseBase: ["Manakete", "Wyvern Rider", "Mage"],
    mother: "Nowi",
    father: ["Frederick", "Virion", "Vaike", "Stahl", "Kellam", "Lon'qu", "Ricken", "Gaius", "Gregor", "Libra", "Henry"],
    sRank: ["Owain", "Inigo", "Brady", "Gerome", "Yarne", "Morgan"],
    aRank: ["Robin", "Cynthia"],
    isChilde: true,
    gender: "F",
    baseHp: 5,
    baseStr: 3,
    baseMag: 3,
    baseSkl: 5,
    baseSpd: 6,
    baseLck: 8,
    baseDef: 3,
    baseRes: 3,
    baseHpGr: 70,
    baseStrGr: 35,
    baseMagGr: 35,
    baseSklGr: 45,
    baseSpdGr: 35,
    baseLckGr: 70,
    baseDefGr: 45,
    baseResGr: 40,
}