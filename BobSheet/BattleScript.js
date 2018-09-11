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
  maxxp = lv * 50 + 50
  document.getElementById("maxxp").innerHTML = maxxp


  console.log(holdxp)
  console.log(lv)
};

while (pholdxp >= pmaxxp) {
  pholdxp = pholdxp - pmaxxp;
  document.getElementById("pholdxp").innerHTML = pholdxp;
  plv = plv + 1
  document.getElementById("plv").innerHTML = plv
  pmaxxp = pmaxxp + 10
  document.getElementById("pmaxxp").innerHTML = pmaxxp
  console.log(pholdxp)
  console.log(plv)
};

let input = null

$("#patk").click(Boost1Atk)
$("#pmag").click(Boost1Mag)
$("#pdef").click(Boost1Def)
$("#pres").click(Boost1Res)
$("#pspd").click(Boost1Spd)
$("#wow").change(Skilltype)
$("#lefthande").hover(Leftdet, Nodet)
$("#righthande").hover(Rightdet, Nodet)
$("#0002").hover(Medlfdet, Nodet)
$("#pet1").hover(Pet1det, Nodet)
$("#platee").hover(Platedet, Nodet)
$("#name1").hover(Bobdet, Nodet)

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
  console.log(yes)
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
    if (lvc > 0) {
      pts = pts + 1
      lvc = lvc - 1
      $(".boost1").html("&nbsp; &nbsp; +")
      if (lv % 2 == 0) {
        mp = mp + 1
        mmp = mmp + 1
        document.getElementById("mmp").innerHTML = mmp
        document.getElementById("mp").innerHTML = mp
        boostStats(lightAssassinEven)
        
      } else {
        boostStats(lightAssassinOdd)
      }
    }
  }
  if (pts > 0) {
    document.getElementById("statpts").innerHTML = " &nbsp; Stat Points Remaining: " + pts
  }
  EquipUpdate();
  document.cookie = "fullxp=" + fullxp + "; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
  x = document.cookie;
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

function boostStats(playerClass) {
atk = atk + Number(playerClass[0])
mag = mag + Number(playerClass[1])
def = def + Number(playerClass[2])
res = res + Number(playerClass[3])
spd = spd + Number(playerClass[4])
console.log(atk)
document.getElementById("atk").innerHTML = atk
document.getElementById("mag").innerHTML = mag
document.getElementById("def").innerHTML = def
document.getElementById("res").innerHTML = res
document.getElementById("spd").innerHTML = spd
console.log(atk)
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
    lf = lf - firetick
    poisontick = Math.round(mlf / 16) * poisonturn
    lf = lf - poisontick
    if (poisontick > 0) {
      poisonturn = poisonturn * 2
    }
    tlf = lf
    if (tlf > Number(document.getElementById("mtlf").innerHTML)) {
      tlf = Number(document.getElementById("mtlf").innerHTML)
      document.getElementById("tlf").innerHTML = Number(document.getElementById("mtlf").innerHTML)
    }
    document.getElementById("lf").innerHTML = lf
    document.getElementById("tlf").innerHTML = tlf
    yes = 0
    if (lf <= 0) {
      lf = 0
      tlf = 0
      document.getElementById("lf").innerHTML = lf
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
