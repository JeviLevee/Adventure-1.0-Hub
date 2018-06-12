EquipUpdate();
Nodet();

$("#wow").val(1)
SkillsA()

while (holdxp >= maxxp) {
  holdxp = holdxp - maxxp;
  document.getElementById("holdxp").innerHTML = holdxp;
  lv = lv + 1
  document.getElementById("lv").innerHTML = lv
  totalpts = totalpts + 5
  nousepts = nousepts + 5
  document.getElementById("ts").innerHTML = totalpts
  document.getElementById("us").innerHTML = nousepts
  maxxp = lv * 75 + 75
  document.getElementById("maxxp").innerHTML = maxxp


  console.log(holdxp)
  console.log(lv)
};

//while (pholdxp >= pmaxxp) {
//  pholdxp = pholdxp - pmaxxp;
//  document.getElementById("pholdxp").innerHTML = pholdxp;
//  plv = plv + 1
//  document.getElementById("plv").innerHTML = plv
//  pmaxxp = pmaxxp + 10
//  document.getElementById("pmaxxp").innerHTML = pmaxxp
//  console.log(pholdxp)
//  console.log(plv)
//};

let input = null

$("#patk").click(Boost1Atk)
$("#pmag").click(Boost1Mag)
$("#pdef").click(Boost1Def)
$("#pres").click(Boost1Res)
$("#pspd").click(Boost1Spd)
$("#opatk").click(oBoost1Atk)
$("#opmag").click(oBoost1Mag)
$("#opdef").click(oBoost1Def)
$("#opres").click(oBoost1Res)
$("#opspd").click(oBoost1Spd)
$("#pmp").click(Boost5MP)
$("#plf").click(Boost5LF)
$("#psp").click(Boost5SP)
$("#wow").change(Skilltype)
//$("#lefthande").hover(Leftdet, Nodet)
//$("#righthande").hover(Rightdet, Nodet)
$("#0002").hover(Medlfdet, Nodet)
//$("#pet1").hover(Pet1det, Nodet)
//$("#platee").hover(Platedet, Nodet)
$("#name1").hover(TanTamdet, Nodet)

function Skilltype() {
  skillselect = $("#wow").val();
  if (skillselect == 1) {
    SkillsA()
  }
  if (skillselect == 2) {
    SkillsB()
  }
  if (skillselect == 3) {
    SkillsC()
  }
}

function Check() {
  input = document.getElementById("command").value
  console.log(input)
  GiveExp();
  GiveGold();
  GiveADMG();
  GiveMDMG();
  GiveTDMG();
  GiveRep();
  GiveItem();
  GiveMulti2();
  GiveMulti();
  GiveThrow();
  TakeItem();
  TakeNumber();
  GiveMana();
  pickAmmo();
  ammoConsole();
  ManaConsole();
  TakeConsole();
  ThrowConsole();
  GiveOCustomBuff();
  GiveCustomBuff();
  GiveBuff();
  GiveEquip();
  BuffConsole();
  EquipConsole();
  MultiConsole();
  ItemConsole();
  TDMGConsole();
  ExpConsole();
  GoldConsole();
  ADMGConsole();
  MDMGConsole();
  RepConsole();
  SaveExp();
  document.getElementById("command").value = null
  input = null
  nope = 0
}

function Update() {
  add = 0

  document.getElementById("holdxp").innerHTML = holdxp

  while (holdxp >= maxxp) {
    lvc = lvc + 1
    holdxp = holdxp - maxxp;
    document.getElementById("holdxp").innerHTML = holdxp;
    lv = lv + 1
    document.getElementById("lv").innerHTML = lv
    totalpts = totalpts + 5
    nousepts = nousepts + 5
    document.getElementById("ts").innerHTML = totalpts
    document.getElementById("us").innerHTML = nousepts
    maxxp = lv * 50 + 50
    document.getElementById("maxxp").innerHTML = maxxp
    console.log(lvc)
    if (lvc > 0) {
      pts = pts + 1
      opts = opts + 1
      lvc = lvc - 1
      $(".boost1").html("&nbsp; &nbsp; +")
      $(".oboost1").html("&nbsp; &nbsp; +")
      if (lv % 5 == 0) {
        mopts = mopts + 1
        $(".boost5").html("&nbsp; &nbsp; +")
      }
    }
  }
  if (pts > 0 || opts > 0) {
    document.getElementById("statpts").innerHTML = " &nbsp; Stat Points Remaining: " + pts + "|" + opts
  }
  EquipUpdate();
}

function Boost1Atk() {
  pts = pts - 1
  atk = atk + 1
  document.getElementById("atk").innerHTML = atk
  if (pts == 0) {
    $(".boost1").html(null)
    $("#statpts").html(null)
  }
  Update();
}

function Boost1Mag() {
  pts = pts - 1
  mag = mag + 1
  document.getElementById("mag").innerHTML = mag
  if (pts == 0) {
    $(".boost1").html(null)
    $("#statpts").html(null)
  }
  Update();
}

function Boost1Def() {
  pts = pts - 1
  def = def + 1
  document.getElementById("def").innerHTML = def
  if (pts == 0) {
    $(".boost1").html(null)
    $("#statpts").html(null)
  }
  Update();
}

function Boost1Res() {
  pts = pts - 1
  res = res + 1
  document.getElementById("res").innerHTML = res
  if (pts == 0) {
    $(".boost1").html(null)
    $("#statpts").html(null)
  }
  Update();
}

function Boost1Spd() {
  pts = pts - 1
  spd = spd + 1
  document.getElementById("spd").innerHTML = spd
  if (pts == 0) {
    $(".boost1").html(null)
    $("#statpts").html(null)
  }
  Update();
}

function oBoost1Atk() {
  opts = opts - 1
  oatk = oatk + 1
  document.getElementById("oatk").innerHTML = oatk
  if (opts == 0) {
    $(".oboost1").html(null)
    $("#statpts").html(null)
  }
  Update();
}

function oBoost1Mag() {
  opts = opts - 1
  omag = omag + 1
  document.getElementById("omag").innerHTML = omag
  if (opts == 0) {
    $(".oboost1").html(null)
    $("#statpts").html(null)
  }
  Update();
}

function oBoost1Def() {
  opts = opts - 1
  odef = odef + 1
  document.getElementById("odef").innerHTML = odef
  if (opts == 0) {
    $(".oboost1").html(null)
    $("#statpts").html(null)
  }
  Update();
}

function oBoost1Res() {
  opts = opts - 1
  ores = ores + 1
  document.getElementById("ores").innerHTML = ores
  if (opts == 0) {
    $(".oboost1").html(null)
    $("#statpts").html(null)
  }
  Update();
}

function oBoost1Spd() {
  opts = opts - 1
  ospd = ospd + 1
  document.getElementById("ospd").innerHTML = ospd
  if (opts == 0) {
    $(".oboost1").html(null)
    $("#statpts").html(null)
  }
  Update();
}

function Boost5MP() {
  mopts = mopts - 1
  mmp = mmp + 3
  mp = mp + 3
  document.getElementById("mmp").innerHTML = mmp
  document.getElementById("mp").innerHTML = mp
  if (mopts == 0) {
    $(".boost5").html(null)
  }
  Update();
}

function Boost5LF() {
  mopts = mopts - 1
  mtlf = mtlf + 5
  tlf = tlf + 5
  olf = olf + 5
  omlf = mtlf 
  Math.round(mlf)
  msoul = mtlf / 2
  omsoul = omlf / 2
  msoul = Math.round(msoul) 
  omsoul = Math.round(omsoul)
  soul = msoul
  osoul = omsoul
  document.getElementById("mtlf").innerHTML = mtlf
  document.getElementById("tlf").innerHTML = tlf
  document.getElementById("mlf").innerHTML = omlf
  document.getElementById("lf").innerHTML = olf
  document.getElementById("msoul").innerHTML = msoul
  document.getElementById("omsoul").innerHTML = omsoul
  document.getElementById("soul").innerHTML = soul
  document.getElementById("osoul").innerHTML = osoul
  if (mopts == 0) {
    $(".boost5").html(null)
  }
  Update();
}

function Boost5SP() {
  mopts = mopts - 1
  nousepts = nousepts + 2
  totalpts = totalpts + 2
  document.getElementById("us").innerHTML = nousepts
  document.getElementById("ts").innerHTML = totalpts
  if (mopts == 0) {
    $(".boost5").html(null)
  }
  Update();
}

//Skills

//Details/Descriptions


function keyPressed() {
  //Press enter to advance commands
  if (keyCode == 13) {
    Check();
  }
  //Every Turn
  if (keyCode == 110) {
    olf = olf - ofiretick
    tlf = tlf - firetick
    poisontick = Math.round(mtlf / 16) * poisonturn
    opoisontick = Math.round(omlf / 16) * opoisonturn
    olf = olf - opoisontick
    tlf = tlf - poisontick
    if (poisontick > 0) {
      poisonturn = poisonturn * 2
    }
     if (opoisontick > 0) {
      opoisonturn = opoisonturn * 2
    }
    block = tblock
    oblock = otblock
    $("#blockeff").html(tblock)
    $("#oblockeff").html(otblock)
    if (tlf > Number(document.getElementById("mtlf").innerHTML)) {
      tlf = Number(document.getElementById("mtlf").innerHTML)
      document.getElementById("tlf").innerHTML = Number(document.getElementById("mtlf").innerHTML)
    }
    if (olf > Number(document.getElementById("mlf").innerHTML)) {
      olf = Number(document.getElementById("mlf").innerHTML)
      document.getElementById("lf").innerHTML = Number(document.getElementById("mtlf").innerHTML)
    }
    document.getElementById("lf").innerHTML = olf
    document.getElementById("tlf").innerHTML = tlf
    yes = 0
    if (tlf <= 0 || olf <= 0) {
      olf = 0
      tlf = 0
      document.getElementById("lf").innerHTML = olf
      document.getElementById("tlf").innerHTML = tlf
      document.getElementById("liv").style.color = "#000000"
      document.getElementById("partyboost").style.color = "#000000"
    }
  }
  //Return to normal console if not already done
  if (keyCode == 96) {
    yes = 0
  }
  
  //Give Exp
  if (keyCode == 97) {
    yes = 1
  }
  
  //Give Gold
  if (keyCode == 98) {
    yes = 2
  }
  
  //Deal Attack Damage
  if (keyCode == 99) {
    yes = 3
  }
  
  //Deal Magic Damage
  if (keyCode == 100) {
    yes = 4
  }
  
  //Edit Reputation
  if (keyCode == 101) {
    yes = 5
  }
  
  //Deal True Damage
  if (keyCode == 102) {
    yes = 6
  }
  
  //Give an Item
  if (keyCode == 103) {
    yes = 7
  }
  
  //Add Multiples to an Item
  if (keyCode == 104) {
    yes = 8
  }
  
  //Add Equipment to a slot
  if (keyCode == 105) {
    yes = 9
  }
  
  //Give a buff
  if (keyCode == 111) {
    yes = 10
  }
  
  //Give a throwable
  if (keyCode == 106) {
    yes = 11
  }
  
  //Use an Item
  if (keyCode == 109) {
    yes = 12
  }
  
  //Give or Take Mana
  if (keyCode == 107) {
    yes = 13
  }
  
  //Make commands target Alpha
  if (keyIsDown(220) && keyIsDown(38)) {
    character = "alpha"
    $("#charcheck").css("color", "#e50d0d")
  }
  
  //Make commands target Omega
  if (keyIsDown(220) && keyIsDown(40)) {
    character = "omega"
    $("#charcheck").css("color", "#0d0de5")
  }
  
    //Select Ammo Type
  if (keyCode == 40) {
    yes = 14
  }
  
  //Use Ammo
  if (keyCode == 38) {
    useAmmo();
  }
    
  //Gain Ammo
  if (keyCode == 37 && keyIsDown(39)) {
    getAmmo();
  }
  
}
