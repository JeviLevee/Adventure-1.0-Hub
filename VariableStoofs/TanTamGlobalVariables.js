var items;
var ammos;
var ammoc;
var eqnam;
var eqatk;
var eqmag;
var eqdef;
var eqres;
var eqspd;
var eqstr;
var eqsth;
var eqawr;
var eqrfx;

function preload() {
  items = loadStrings('VariableStoofs/ItemStoofs/ItemHtml.txt');
  ammos = loadStrings('VariableStoofs/ItemStoofs/AmmoName.txt');
  ammoc = loadStrings('VariableStoofs/ItemStoofs/AmmoCount.txt');
  eqnam = loadStrings('VariableStoofs/ItemStoofs/EquipName.txt');
  eqatk = loadStrings('VariableStoofs/ItemStoofs/EquipAtk.txt');
  eqmag = loadStrings('VariableStoofs/ItemStoofs/EquipMag.txt');
  eqdef = loadStrings('VariableStoofs/ItemStoofs/EquipDef.txt');
  eqres = loadStrings('VariableStoofs/ItemStoofs/EquipRes.txt');
  eqspd = loadStrings('VariableStoofs/ItemStoofs/EquipSpd.txt');
  eqstr = loadStrings('VariableStoofs/ItemStoofs/EquipStr.txt');
  eqsth = loadStrings('VariableStoofs/ItemStoofs/EquipSth.txt');
  eqawr = loadStrings('VariableStoofs/ItemStoofs/EquipAwr.txt');
  eqrfx = loadStrings('VariableStoofs/ItemStoofs/EquipRfx.txt');
}

function setup() {

}
//Alpha
let fullxp = Number(document.getElementById("holdxp").innerHTML);
let holdxp = Number(document.getElementById("holdxp").innerHTML);
let maxxp = Number(document.getElementById("maxxp").innerHTML);
//let pfullxp = Number(document.getElementById("pholdxp").innerHTML);
//let pholdxp = Number(document.getElementById("pholdxp").innerHTML);
//let pmaxxp = Number(document.getElementById("pmaxxp").innerHTML);
//let plv = Number(document.getElementById("plv").innerHTML);
let lv = Number(document.getElementById("lv").innerHTML);
let totalpts = Number(document.getElementById("ts").innerHTML);
let nousepts = Number(document.getElementById("us").innerHTML);
let atk = Number(document.getElementById("atk").innerHTML);
let mag = Number(document.getElementById("mag").innerHTML);
let def = Number(document.getElementById("def").innerHTML);
let res = Number(document.getElementById("res").innerHTML);
let spd = Number(document.getElementById("spd").innerHTML);
let tlf = Number(document.getElementById("tlf").innerHTML);
let mtlf = Number(document.getElementById("mtlf").innerHTML);
let mmp = Number(document.getElementById("mmp").innerHTML);
let mp = Number(document.getElementById("mp").innerHTML);
let msoul = Number(document.getElementById("msoul").innerHTML);
let soul = Number(document.getElementById("soul").innerHTML);
let rep = Number(document.getElementById("rep").innerHTML);
let stg = Number(document.getElementById("stg").innerHTML);
let sth = Number(document.getElementById("sth").innerHTML);
let awr = Number(document.getElementById("awr").innerHTML);
let rfx = Number(document.getElementById("rfx").innerHTML);
let block = Number(document.getElementById("blockeff").innerHTML);
let tblock = Number(document.getElementById("blockeff").innerHTML);
let ammo = 0
let ammocount = 0
let stagger = 10
let store = 0
let ename = 0
let yes = 0
let character = "alpha"
$("#charcheck").css("color", "#e50d0d")
let write = "Missing Buff Description"
let astat = 0
let mstat = 0
let dstat = 0
let rstat = 0
let sstat = 0
let istat = 0
let tstat = 0
let wstat = 0
let xstat = 0
let nope = 0
let add = 0
let coin = 0
let lvc = 0
let pts = 0
let mopts = 0
let eatkl = 0
let eatkr = 0
let eatk = 0
let emag = 0
let edef = 0
let eres = 0
let espd = 0
let estr = 0
let esth = 0
let eawr = 0
let erfx = 0
let ratk = 0
let ratkl = 0
let ratkr = 0
let rmag = 0
let rdef = 0
let rres = 0
let rspd = 0
let rstr = 0
let rsth = 0
let rawr = 0
let rrfx = 0
let qatk = 0
let qatkl = 0
let qatkr = 0
let qmag = 0
let qdef = 0
let qres = 0
let qspd = 0
let qstr = 0
let qsth = 0
let qawr = 0
let qrfx = 0
let skillab1 = 1
let skillab2 = 3
let skillab3 = 0
let skillab4 = 0
let skillbb1 = 1
let skillbb2 = 0
let skillbb3 = 1
let skillbb4 = 2
let skillcb1 = 1
let skillcb2 = 0
let skillcb3 = 0
let skillcb4 = 1
let skillai1 = 3
let skillai2 = 0
let skillai3 = 0
let skillai4 = 0
let skillbi1 = 0
let skillbi2 = 0
let skillbi3 = 2
let skillbi4 = 0
let skillci1 = 0
let skillci2 = 0
let skillci3 = 0
let skillci4 = 0
let skillselect = 0
let batk = atk + eatk
let batkl = atk + eatk + eatkl
let batkr = atk + eatk + eatkr
let bmag = mag + emag
let bdef = def + edef
let bres = res + eres
let bspd = spd + espd
let bstr = stg + estr
let bsth = sth + esth
let bawr = awr + eawr
let brfx = rfx + erfx
let hotkey = 0
let x = 0
let firetick = 0
let poisontick = 0
let poisonturn = 0
let breath = 0
let color;
let buffnum;
let buffname;
let catk;
let catkl;
let catkr;
let cmag;
let cdef;
let cres;
let cspd;
let cstr;
let csth;
let cawr;
let crfx;
let closeacc = Number(document.getElementById("closesight").innerHTML)
let midacc = Number(document.getElementById("midsight").innerHTML)
let faracc = Number(document.getElementById("farsight").innerHTML)
//Omega
let oatk = Number(document.getElementById("oatk").innerHTML);
let omag = Number(document.getElementById("omag").innerHTML);
let odef = Number(document.getElementById("odef").innerHTML);
let ores = Number(document.getElementById("ores").innerHTML);
let ospd = Number(document.getElementById("ospd").innerHTML);
let olf = Number(document.getElementById("lf").innerHTML);
let omlf = Number(document.getElementById("mlf").innerHTML);
let omsoul = Number(document.getElementById("omsoul").innerHTML);
let osoul = Number(document.getElementById("osoul").innerHTML);
let orep = Number(document.getElementById("orep").innerHTML);
let ostg = Number(document.getElementById("ostg").innerHTML);
let osth = Number(document.getElementById("osth").innerHTML);
let oawr = Number(document.getElementById("oawr").innerHTML);
let orfx = Number(document.getElementById("orfx").innerHTML);
let oblock = Number(document.getElementById("oblockeff").innerHTML);
let otblock = Number(document.getElementById("oblockeff").innerHTML);
let ostagger = 10
let ostore = 0
let opts = 0
let oename = 0
let owrite = "Missing Buff Description"
let oastat = 0
let omstat = 0
let odstat = 0
let orstat = 0
let osstat = 0
let oistat = 0
let otstat = 0
let owstat = 0
let oxstat = 0
let oeatkl = 0
let oeatkr = 0
let oeatk = 0
let oemag = 0
let oedef = 0
let oeres = 0
let oespd = 0
let oestr = 0
let oesth = 0
let oeawr = 0
let oerfx = 0
let oratk = 0
let oratkl = 0
let oratkr = 0
let ormag = 0
let ordef = 0
let orres = 0
let orspd = 0
let orstr = 0
let orsth = 0
let orawr = 0
let orrfx = 0
let oqatk = 0
let oqatkl = 0
let oqatkr = 0
let oqmag = 0
let oqdef = 0
let oqres = 0
let oqspd = 0
let oqstr = 0
let oqsth = 0
let oqawr = 0
let oqrfx = 0
let obatk = oatk + oeatk
let obatkl = oatk + oeatk + oeatkl
let obatkr = oatk + oeatk + oeatkr
let obmag = omag + oemag
let obdef = odef + oedef
let obres = ores + oeres
let obspd = ospd + oespd
let obstr = ostg + oestr
let obsth = osth + oesth
let obawr = oawr + oeawr
let obrfx = orfx + oerfx
let ofiretick = 0
let opoisontick = 0
let opoisonturn = 0
let ocolor;
let obuffnum;
let obuffname;
let ocatk;
let ocatkl;
let ocatkr;
let ocmag;
let ocdef;
let ocres;
let ocspd;
let ocstr;
let ocsth;
let ocawr;
let ocrfx;
let ocloseacc = Number(document.getElementById("oclosesight").innerHTML)
let omidacc = Number(document.getElementById("omidsight").innerHTML)
let ofaracc = Number(document.getElementById("ofarsight").innerHTML)
let sbuffnum;
let sobuffnum;
