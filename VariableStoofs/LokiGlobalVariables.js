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
let fullxp = Number(document.getElementById("holdxp").innerHTML);
let holdxp = Number(document.getElementById("holdxp").innerHTML);
let maxxp = Number(document.getElementById("maxxp").innerHTML);
let pfullxp = Number(document.getElementById("pholdxp").innerHTML);
let pholdxp = Number(document.getElementById("pholdxp").innerHTML);
let pmaxxp = Number(document.getElementById("pmaxxp").innerHTML);
let plv = Number(document.getElementById("plv").innerHTML);
let lv = Number(document.getElementById("lv").innerHTML);
let totalpts = Number(document.getElementById("ts").innerHTML);
let nousepts = Number(document.getElementById("us").innerHTML);
let atk = Number(document.getElementById("atk").innerHTML);
let mag = Number(document.getElementById("mag").innerHTML);
let def = Number(document.getElementById("def").innerHTML);
let res = Number(document.getElementById("res").innerHTML);
let spd = Number(document.getElementById("spd").innerHTML);
let lf = Number(document.getElementById("lf").innerHTML);
let tlf = Number(document.getElementById("tlf").innerHTML);
let mlf = Number(document.getElementById("mlf").innerHTML);
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
let skillab1 = 3
let skillab2 = 0
let skillab3 = 1
let skillab4 = 3
let skillbb1 = 1
let skillbb2 = 0
let skillbb3 = 0
let skillbb4 = 0
let skillcb1 = 2
let skillcb2 = 0
let skillcb3 = 0
let skillcb4 = 0
let skillai1 = 0
let skillai2 = 0
let skillai3 = 1
let skillai4 = 0
let skillbi1 = 1
let skillbi2 = 2
let skillbi3 = 0
let skillbi4 = 0
let skillci1 = 0
let skillci2 = 3
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
