
function AB1upgrade() {
  if (nousepts >= Number(document.getElementById("b1spend").innerHTML)) {
    skillab1 = skillab1 + 1
    nousepts = nousepts - Number(document.getElementById("b1spend").innerHTML)
    document.getElementById("us").innerHTML = nousepts
    SkillsA();
  }
}

function AB2upgrade() {
  if (nousepts >= Number(document.getElementById("b2spend").innerHTML)) {
    skillab2 = skillab2 + 1
    nousepts = nousepts - Number(document.getElementById("b2spend").innerHTML)
    document.getElementById("us").innerHTML = nousepts
    SkillsA();
  }
}

function AB3upgrade() {
  if (nousepts >= Number(document.getElementById("b3spend").innerHTML)) {
    skillab3 = skillab3 + 1
    nousepts = nousepts - Number(document.getElementById("b3spend").innerHTML)
    document.getElementById("us").innerHTML = nousepts
    SkillsA();
  }
}

function AB4upgrade() {
  if (nousepts >= Number(document.getElementById("b4spend").innerHTML)) {
    skillab4 = skillab4 + 1
    nousepts = nousepts - Number(document.getElementById("b4spend").innerHTML)
    document.getElementById("us").innerHTML = nousepts
    SkillsA();
  }
}

function AI1upgrade() {
  if (nousepts >= Number(document.getElementById("i1spend").innerHTML)) {
    skillai1 = skillai1 + 1
    nousepts = nousepts - Number(document.getElementById("i1spend").innerHTML)
    document.getElementById("us").innerHTML = nousepts
    SkillsA();
  }
}

function AI2upgrade() {
  if (nousepts >= Number(document.getElementById("i2spend").innerHTML)) {
    skillai2 = skillai2 + 1
    nousepts = nousepts - Number(document.getElementById("i2spend").innerHTML)
    document.getElementById("us").innerHTML = nousepts
    SkillsA();
  }
}

function AI3upgrade() {
  if (nousepts >= Number(document.getElementById("i3spend").innerHTML)) {
    skillai3 = skillai3 + 1
    nousepts = nousepts - Number(document.getElementById("i3spend").innerHTML)
    document.getElementById("us").innerHTML = nousepts
    SkillsA();
  }
}

function AI4upgrade() {
  if (nousepts >= Number(document.getElementById("i4spend").innerHTML)) {
    skillai4 = skillai4 + 1
    nousepts = nousepts - Number(document.getElementById("i4spend").innerHTML)
    document.getElementById("us").innerHTML = nousepts
    SkillsA();
  }
}

function AICupgrade() {
  if (nousepts >= Number(document.getElementById("i1spend").innerHTML)) {
    skillai1 = skillai1 + 1.5
    nousepts = nousepts - Number(document.getElementById("i1spend").innerHTML)
    document.getElementById("us").innerHTML = nousepts
    SkillsA();
  }
}

function BB1upgrade() {
  if (nousepts >= Number(document.getElementById("costb1").innerHTML)) {
    skillbb1 = skillbb1 + 1
    nousepts = nousepts - Number(document.getElementById("costb1").innerHTML)
    document.getElementById("us").innerHTML = nousepts
    SkillsB();
  }
}

function BB2upgrade() {
  if (nousepts >= Number(document.getElementById("costb2").innerHTML)) {
    skillbb2 = skillbb2 + 1
    nousepts = nousepts - Number(document.getElementById("costb2").innerHTML)
    document.getElementById("us").innerHTML = nousepts
    SkillsB();
  }
}

function BB3upgrade() {
  if (nousepts >= Number(document.getElementById("costb3").innerHTML)) {
    skillbb3 = skillbb3 + 1
    nousepts = nousepts - Number(document.getElementById("costb3").innerHTML)
    document.getElementById("us").innerHTML = nousepts
    SkillsB();
  }
}

function BB4upgrade() {
  if (nousepts >= Number(document.getElementById("costb4").innerHTML)) {
    skillbb4 = skillbb4 + 1
    nousepts = nousepts - Number(document.getElementById("costb4").innerHTML)
    document.getElementById("us").innerHTML = nousepts
    SkillsB();
  }
}

function BI1upgrade() {
  if (nousepts >= Number(document.getElementById("costi1").innerHTML)) {
    skillbi1 = skillbi1 + 1
    nousepts = nousepts - Number(document.getElementById("costi1").innerHTML)
    document.getElementById("us").innerHTML = nousepts
    SkillsB();
  }
}

function BI2upgrade() {
  if (nousepts >= Number(document.getElementById("costi2").innerHTML)) {
    skillbi2 = skillbi2 + 1
    nousepts = nousepts - Number(document.getElementById("costi2").innerHTML)
    document.getElementById("us").innerHTML = nousepts
    SkillsB();
  }
}

function BI3upgrade() {
  if (nousepts >= Number(document.getElementById("costi3").innerHTML)) {
    skillbi3 = skillbi3 + 1
    nousepts = nousepts - Number(document.getElementById("costi3").innerHTML)
    document.getElementById("us").innerHTML = nousepts
    SkillsB();
  }
}

function BI4upgrade() {
  if (nousepts >= Number(document.getElementById("costi4").innerHTML)) {
    skillbi4 = skillbi4 + 1
    nousepts = nousepts - Number(document.getElementById("costi4").innerHTML)
    document.getElementById("us").innerHTML = nousepts
    SkillsB();
  }
}

function BICupgrade() {
  if (nousepts >= Number(document.getElementById("costi3").innerHTML)) {
    skillbi3 = skillbi3 + 1.5
    nousepts = nousepts - Number(document.getElementById("costi3").innerHTML)
    document.getElementById("us").innerHTML = nousepts
    SkillsB();
  }
}

function CB1upgrade() {
  if (nousepts >= Number(document.getElementById("pricec1").innerHTML)) {
    skillcb1 = skillcb1 + 1
    nousepts = nousepts - Number(document.getElementById("pricec1").innerHTML)
    document.getElementById("us").innerHTML = nousepts
    SkillsC();
  }
}

function CB2upgrade() {
  if (nousepts >= Number(document.getElementById("pricec2").innerHTML)) {
    skillcb2 = skillcb2 + 1
    nousepts = nousepts - Number(document.getElementById("pricec2").innerHTML)
    document.getElementById("us").innerHTML = nousepts
    SkillsC();
  }
}

function CB3upgrade() {
  if (nousepts >= Number(document.getElementById("pricec3").innerHTML)) {
    skillcb3 = skillcb3 + 1
    nousepts = nousepts - Number(document.getElementById("pricec3").innerHTML)
    document.getElementById("us").innerHTML = nousepts
    SkillsC();
  }
}

function CB4upgrade() {
  if (nousepts >= Number(document.getElementById("pricec4").innerHTML)) {
    skillcb4 = skillcb4 + 1
    nousepts = nousepts - Number(document.getElementById("pricec4").innerHTML)
    document.getElementById("us").innerHTML = nousepts
    SkillsC();
  }
}

function CI1upgrade() {
  if (nousepts >= Number(document.getElementById("pricei1").innerHTML)) {
    skillci1 = skillci1 + 1
    nousepts = nousepts - Number(document.getElementById("pricei1").innerHTML)
    document.getElementById("us").innerHTML = nousepts
    SkillsC();
  }
}

function CI2upgrade() {
  if (nousepts >= Number(document.getElementById("pricei2").innerHTML)) {
    skillci2 = skillci2 + 1
    nousepts = nousepts - Number(document.getElementById("pricei2").innerHTML)
    document.getElementById("us").innerHTML = nousepts
    SkillsC();
  }
}

function CI3upgrade() {
  if (nousepts >= Number(document.getElementById("pricei3").innerHTML)) {
    skillci3 = skillci3 + 1
    nousepts = nousepts - Number(document.getElementById("pricei3").innerHTML)
    document.getElementById("us").innerHTML = nousepts
    SkillsC();
  }
}

function CI4upgrade() {
  if (nousepts >= Number(document.getElementById("pricei4").innerHTML)) {
    skillci4 = skillci4 + 1
    nousepts = nousepts - Number(document.getElementById("pricei4").innerHTML)
    document.getElementById("us").innerHTML = nousepts
    SkillsC();
  }
}

function CICupgrade() {
  if (nousepts >= Number(document.getElementById("pricei4").innerHTML)) {
    skillci4 = skillci4 + 1.5
    nousepts = nousepts - Number(document.getElementById("pricei4").innerHTML)
    document.getElementById("us").innerHTML = nousepts
    SkillsC();
  }
}

function SkillsA() {
  document.getElementById("category").innerHTML = "Sword"
  if (skillab1 == 1) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Fury Strike:</span> Attack with five fast blows, <br> with <span class=equipbuff>(Attack/4)</span> damage each. <span class=mana>2 MP</span> <span class=sklvl>1/3</span> <span class=skpts>0/<span id=b1spend>8</span></span><span> &nbsp; <button class=upgrade id=yesb1>Upgrade!</button>"
  }
  if (skillab2 == 0) {
    document.getElementById("begin2").innerHTML = "<span class=lock><span class=bigboi>Thrust:</span> One fierce stab has a 25% chance to break <span class=lockequipbuff> 15 Defense </span> of armour. <span class=lockmana>3 MP</span> <span class=locksklvl>0/3</span> <span class=lockskpts>0/<span id=b2spend>5</span></span></span> &nbsp; <button class=unlock id=yesb2>Unlock!</button> "
  }
  if (skillab3 == 0) {
    document.getElementById("begin3").innerHTML = "<span class=lock><span class=bigboi>Parry:</span> Reflects <span class=lockequipbuff>30%</span> of damage. <span class=lockmana> 4 MP</span><span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=b3spend>5</span> </span></span> &nbsp; <button class=unlock id=yesb3>Unlock!</button>"
  }
  if (skillab4 == 0) {
    document.getElementById("begin4").innerHTML = "<span class=lock><span class=bigboi> Not The Ankles:</span> A strike directed at the ankles with a <span class=lockequipbuff>25%</span> chance to cripple. <span class=lockmana>4 MP </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=b4spend>5</span></span> </span> &nbsp; <button class=unlock id=yesb4>Unlock!</button>"
  }
  if (skillab2 == 1) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi>Thrust:</span> One fierce stab has a 25% chance to break <span class=equipbuff> 15 Defense </span> of armour. <span class=mana>3 MP</span> <span class=sklvl>1/3</span> <span class=skpts>0/<span id=b2spend>8</span></span></span> &nbsp; <button class=upgrade id=yesb2>Upgrade!</button> "
  }
  if (skillab3 == 1) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi>Parry:</span> Reflects <span class=equipbuff>30%</span> of damage. <span class=mana> 4 MP</span><span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=b3spend>8</span> </span></span> &nbsp; <button class=upgrade id=yesb3>Upgrade!</button>"
  }
  if (skillab4 == 1) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi> Not The Ankles:</span> A strike directed at the ankles with a <span class=equipbuff>25%</span> chance to cripple. <span class=mana>4 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=b4spend>8</span></span> </span> &nbsp; <button class=upgrade id=yesb4>Upgrade!</button>"
  }
  if (skillab1 == 2) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Fury Strike:</span> Attack with five fast blows, <br> with <span class=equipbuff>(Attack/3)</span> damage each. <span class=mana>2 MP</span> <span class=sklvl>2/3</span> <span class=skpts>0/<span id=b1spend>12</span></span><span> &nbsp; <button class=upgrade id=yesb1>Upgrade!</button>"
  }
  if (skillab2 == 2) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi>Thrust:</span> One fierce stab has a 25% chance to break <span class=equipbuff> 20 Defense </span> of armour. <span class=mana>3 MP</span> <span class=sklvl>2/3</span> <span class=skpts>0/<span id=b2spend>12</span></span></span> &nbsp; <button class=upgrade id=yesb2>Upgrade!</button> "
  }
  if (skillab3 == 2) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi>Parry:</span> Reflects <span class=equipbuff>60%</span> of damage. <span class=mana> 4 MP</span><span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=b3spend>12</span> </span></span> &nbsp; <button class=upgrade id=yesb3>Upgrade!</button>"
  }
  if (skillab4 == 2) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi> Not The Ankles:</span> A strike directed at the ankles with a <span class=equipbuff>45%</span> chance to cripple. <span class=mana>4 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=b4spend>12</span></span> </span> &nbsp; <button class=upgrade id=yesb4>Upgrade!</button>"
  }
  if (skillab1 == 3) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Fury Strike:</span> Attack with five fast blows, <br> with <span class=equipbuff>(Attack/2)</span> damage each. <span class=mana>4 MP</span> <span class=sklvl>3/3</span> <span class=skpts>---</span><span> &nbsp; "
  }
  if (skillab2 == 3) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi>Thrust:</span> One fierce stab has a 25% chance to break <span class=equipbuff> 30 Defense </span> of armour. <span class=mana>6 MP</span> <span class=sklvl>3/3</span> <span class=skpts>---</span></span> &nbsp;  "
  }
  if (skillab3 == 3) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi>Parry:</span> Reflects <span class=equipbuff>100%</span> of damage. <span class=mana> 7 MP</span><span class=sklvl> 3/3 </span> <span class=skpts> --- </span></span> &nbsp; "
  }
  if (skillab4 == 3) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi> Not The Ankles:</span> A strike directed at the ankles with a <span class=equipbuff>70%</span> chance to cripple. <span class=mana>7 MP </span> <span class=sklvl> 3/3 </span> <span class=skpts>---</span> </span> &nbsp; "
  }
  if (skillai1 == 0) {
    document.getElementById("moderate1").innerHTML = "<span class=lock><span class=lockbigboii>Dual Wield:</span> Summon a second sword that does <span class=lockequipbuff> (Mag/2 + Atk/2) </span><br> damage and lasts for <span class=lockequipbuff> 10 </span> minutes. <span class=lockmana> 7 MP </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=i1spend>8</span> </span> </span> <button class=unlock id=yesi1> Unlock! </button>"
  }
  if (skillai2 == 0){
    document.getElementById("moderate2").innerHTML = "<span class=lock><span class=bigboi>Super Strike:</span> A strong attack that ignores <span class=lockequipbuff> 15% </span> block efficiency. <span class=lockmana> 8 MP </span> <span class= locksklvl>0/3</span> <span class=lockskpts> 0/<span id=i2spend>8</span> </span> </span> <button class=unlock id=yesi2> Unlock! </button>"
  } 
  if (skillai3 == 0){
    document.getElementById("moderate3").innerHTML = "<span class=lock><span class=bigboi>Mega Blade:</span>Grows your weapon to <span class=lockequipbuff>125%</span> size <br> (weight and weapon damage included) for three attacks <span class=lockmana> 5 MP </span> <span class= locksklvl>0/3</span> <span class=lockskpts> 0/<span id=i3spend>8</span> </span> </span> <button class=unlock id=yesi3> Unlock! </button>"
  }
  if (skillai4 == 0){
    document.getElementById("moderate4").innerHTML = "<span class=lock><span class=bigboi>Float Sword:</span>Levitates your sword next to you, making <br> the damage  <span class=lockequipbuff>(WeaponAtk + Mag/2)</span>.   <span class=lockmana> 3 MP (+1 MP per extra turn) </span> <span class= locksklvl>0/3</span> <span class=lockskpts> 0/<span id=i4spend>8</span> </span> </span> <button class=unlock id=yesi4> Unlock! </button>"
  }
  if (skillai1 == 1) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboii>Dual Wield:</span> Summon a second sword that does <span class=equipbuff> (Mag/2 + Atk/2) </span><br> damage and lasts for <span class=equipbuff> 10 </span> minutes. <span class=mana> 7 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=i1spend>12</span> </span> </span> <button class=upgrade id=yesi1> Upgrade Damage! </button> <button class=upgrade id=yesic> Upgrade Time! </button>"
  }
  if (skillai2 == 1){
    document.getElementById("moderate2").innerHTML = "<span class=white><span class=bigboi>Super Strike:</span> A strong attack that ignores <span class=equipbuff> 15% </span> block efficiency. <span class=mana> 8 MP </span> <span class= sklvl>1/3</span> <span class=skpts> 0/<span id=i2spend>12</span> </span> </span> <button class=upgrade id=yesi2> Upgrade! </button>"
  } 
  if (skillai3 == 1){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboi>Mega Blade:</span>Grows your weapon to <span class=equipbuff>125%</span> size <br> (weight and weapon damage included) for three attacks <span class=mana> 5 MP </span> <span class= sklvl>1/3</span> <span class=skpts> 0/<span id=i3spend>12</span> </span> </span> <button class=upgrade id=yesi3> Upgrade! </button>"
  }
  if (skillai4 == 1){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboi>Float Sword:</span>Levitates your sword next to you, making <br> the damage  <span class=equipbuff>(WeaponAtk + Mag/2)</span>.   <span class=mana> 3 MP (+1 MP per extra turn) </span> <span class= sklvl>1/3</span> <span class=skpts> 0/<span id=i4spend>12</span> </span> </span><button class=upgrade id=yesi4> Upgrade! </button>"
  }
  if (skillai1 == 2) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboii>Dual Wield:</span> Summon a second sword that does <span class=equipbuff> (Mag/2 + Atk*3/4) </span><br> damage and lasts for  10  minutes. <span class=mana> 7 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=i1spend>15</span> </span> </span> <button class=upgrade id=yesi1> Upgrade! </button>"
  }
  if (skillai1 == 2.5) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboii>Dual Wield:</span> Summon a second sword that does (Mag + Atk/2) <br> damage and lasts for <span class=equipbuff> 18 </span> minutes. <span class=mana> 7 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=i1spend>15</span> </span> </span><button class=upgrade id=yesi1> Upgrade! </button>"
  }
   if (skillai2 == 2){
    document.getElementById("moderate2").innerHTML = "<span class=white><span class=bigboi>Super Strike:</span> A strong attack that ignores <span class=equipbuff> 20% </span> block efficiency. <span class=mana> 8 MP </span> <span class= sklvl>2/3</span> <span class=skpts> 0/<span id=i2spend>15</span> </span> </span> <button class=upgrade id=yesi2> Upgrade! </button>"
  } 
  if (skillai3 == 2){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboi>Mega Blade:</span>Grows your weapon to <span class=equipbuff>145%</span> size <br> (weight and weapon damage included) for three attacks <span class=mana> 5 MP </span> <span class= sklvl>2/3</span> <span class=skpts> 0/<span id=i3spend>15</span> </span> </span> <button class=upgrade id=yesi3> Upgrade! </button>"
  }
  if (skillai4 == 2){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboi>Float Sword:</span>Levitates your sword next to you, making <br> the damage  <span class=equipbuff>(WeaponAtk + Mag*3/4)</span>.   <span class=mana> 3 MP (+1 MP per extra turn) </span> <span class= sklvl>2/3</span> <span class=skpts> 0/<span id=i4spend>15</span> </span> </span><button class=upgrade id=yesi4> Upgrade! </button>"
  }
  if (skillai1 == 3) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboii>Dual Wield:</span> Summon a second sword that does <span class=equipbuff> (Mag/2 + Atk) </span><br> damage and lasts for  10  minutes. <span class=mana> 12 MP </span> <span class=sklvl> 3/3 </span> <span class=skpts> --- </span> </span> "
  }
  if (skillai1 == 3.5) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboii>Dual Wield:</span> Summon a second sword that does (Mag + Atk/2) <br> damage and lasts for <span class=equipbuff> 30 </span> minutes. <span class=mana> 12 MP </span> <span class=sklvl> 3/3 </span> <span class=skpts>--- </span> </span>"
  }
   if (skillai2 == 3){
    document.getElementById("moderate2").innerHTML = "<span class=white><span class=bigboi>Super Strike:</span> A strong attack that ignores <span class=equipbuff> 30% </span> block efficiency. <span class=mana> 8 MP </span> <span class= sklvl>3/3</span> <span class=skpts> --- </span> </span> "
  } 
  if (skillai3 == 3){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboi>Mega Blade:</span>Grows your weapon to <span class=equipbuff>175%</span> size <br> (weight and weapon damage included) for three attacks <span class=mana> 8 MP </span> <span class= sklvl>3/3</span> <span class=skpts> --- </span> </span> "
  }
  if (skillai4 == 3){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboi>Float Sword:</span>Levitates your sword next to you, making <br> the damage  <span class=equipbuff>(WeaponAtk + Mag)</span>.   <span class=mana> 3 MP (+2 MP per extra turn) </span> <span class= sklvl>3/3</span> <span class=skpts>--- </span> </span>"
  }
  $("#yesb1").on("click", AB1upgrade)
  $("#yesb2").on("click", AB2upgrade)
  $("#yesb3").on("click", AB3upgrade)
  $("#yesb4").on("click", AB4upgrade)
  $("#yesi1").on("click", AI1upgrade)
  $("#yesi2").on("click", AI2upgrade)
  $("#yesi3").on("click", AI3upgrade)
  $("#yesi4").on("click", AI4upgrade)
  $("#yesic").on("click", AICupgrade)
  
}

function SkillsB() {
  document.getElementById("category").innerHTML = "Shield"
  if (skillbb1 == 1) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Stand Ground:</span>Hold your shield with both hands and plant your feet <br> to avoid flinching from <span class=equipbuff> one  </span> attack. <span class=mana> 3 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=costb1>8</span> &nbsp; <button class=upgrade id=yab1>Upgrade!</button>"
  }
  if (skillbb2 == 0) {
    document.getElementById("begin2").innerHTML = "<span class=lock><span class=bigboi> Defensive Charge: </span> Ram into an enemy with all your strength, dealing <br> <span class=lockequipbuff>(Atk + ShieldDef)</span> damage. <span class=lockmana> 5 MP </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=costb2>5</span> </span> &nbsp; <button class=unlock id=yab2>Unlock!</button> "
  }
  if (skillbb3 == 0) {
    document.getElementById("begin3").innerHTML = "<span class=lock><span class=bigboi> Swift Charge:</span> Sheath your sword and barrel into an enemy, dealing (PlayerAtk) damage, <br> with <span class=lockequipbuff>(Speed + PlayerAtk)</span> speed. <span class=lockmana> 5 MP </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=costb3>5</span> &nbsp; <button class=unlock id=yab3>Unlock!</button>"
  }
  if (skillbb4 == 0) {
    document.getElementById("begin4").innerHTML = "<span class=lock><span class=bigboi> A Lion's Protection: </span>Take a blow for an ally, your reaction bypasses the Awareness stat, <br> and makes your defense  in this instance <span class=lockequipbuff>(PlayerDef/3)</span>. <span class=lockmana> 5 MP </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=costb4>5</span> &nbsp; <button class=unlock id=yab4>Unlock!</button>"
  }
  if (skillbb2 == 1) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi> Defensive Charge: </span> Ram into an enemy with all your strength, dealing <br> <span class=equipbuff>(Atk + ShieldDef)</span> damage. <span class=mana> 5 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=costb2>8</span> </span> &nbsp; <button class=upgrade id=yab2>Upgrade!</button> "
  }
  if (skillbb3 == 1) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi> Swift Charge:</span> Sheath your sword and barrel into an enemy, dealing (PlayerAtk) damage, <br> with <span class=equipbuff>(Speed + PlayerAtk)</span> speed. <span class=mana> 5 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=costb3>8</span> &nbsp; <button class=upgrade id=yab3>Upgrade!</button>"
  }
  if (skillbb4 == 1) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi> A Lion's Protection: </span>Take a blow for an ally, your reaction bypasses the Awareness stat, <br> and makes your defense  in this instance <span class=equipbuff>(PlayerDef/3)</span>. <span class=mana> 5 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=costb4>8</span> &nbsp; <button class=upgrade id=yab4>Upgrade!</button>"
  }
  if (skillbb1 == 2) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Stand Ground:</span>Hold your shield with both hands and plant your feet <br> to avoid flinching from <span class=equipbuff> two  </span> attacks. <span class=mana> 3 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=costb1>12</span> &nbsp; <button class=upgrade id=yab1>Upgrade!</button>"
  }
  if (skillbb2 == 2) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi> Defensive Charge: </span> Ram into an enemy with all your strength, dealing <br> <span class=equipbuff>(Atk + ShieldDef*125%)</span> damage. <span class=mana> 5 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=costb2>12</span> </span> &nbsp; <button class=upgrade id=yab2>Upgrade!</button> "
  }
  if (skillbb3 == 2) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi> Swift Charge:</span> Sheath your sword and barrel into an enemy, dealing (PlayerAtk) damage, <br> with <span class=equipbuff>(Speed + PlayerAtk + 5)</span> speed. <span class=mana> 5 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=costb3>12</span> &nbsp; <button class=upgrade id=yab3>Upgrade!</button>"
  }
  if (skillbb4 == 2) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi> A Lion's Protection: </span>Take a blow for an ally, your reaction bypasses the Awareness stat, <br> and makes your defense  in this instance <span class=equipbuff>(PlayerDef/2)</span>. <span class=mana> 5 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=costb4>12</span> &nbsp; <button class=upgrade id=yab4>Upgrade!</button>"
  }
  if (skillbb1 == 3) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Stand Ground:</span>Hold your shield with both hands and plant your feet <br> to avoid flinching from <span class=equipbuff> four  </span> attacks. <span class=mana> 5 MP </span> <span class=sklvl> 3/3 </span> <span class=skpts>--- &nbsp; <button class=upgrade id=yab1>Upgrade!</button>"
  }
  if (skillbb2 == 3) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi> Defensive Charge: </span> Ram into an enemy with all your strength, dealing <br> <span class=equipbuff>(Atk + ShieldDef*150%)</span> damage. <span class=mana> 8 MP </span> <span class=sklvl> 3/3 </span> <span class=skpts> --- </span> &nbsp; <button class=upgrade id=yab2>Upgrade!</button> "
  }
  if (skillbb3 == 3) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi> Swift Charge:</span> Sheath your sword and barrel into an enemy, dealing (PlayerAtk) damage, <br> with <span class=equipbuff>(Speed + PlayerAtk + 15)</span> speed. <span class=mana> 7 MP </span> <span class=sklvl> 3/3 </span> <span class=skpts> --- &nbsp; <button class=upgrade id=yab3>Upgrade!</button>"
  }
  if (skillbb4 == 3) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi> A Lion's Protection: </span>Take a blow for an ally, your reaction bypasses the Awareness stat, <br> and makes your defense  in this instance <span class=equipbuff>(PlayerDef)</span>. <span class=mana> 8 MP </span> <span class=sklvl> 3/3 </span> <span class=skpts> --- &nbsp; <button class=upgrade id=yab4>Upgrade!</button>"
  }
  if (skillbi1 == 0) {
    document.getElementById("moderate1").innerHTML = "<span class=lock><span class=bigboi>Shield Toss:</span> Throws your shield to a teammate and stops it to levitate <br> in front of them and protect them. <span class=lockequipbuff> (Speed + 5) </span> <span class=lockmana> 4 MP </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=costi1>8</span> </span> </span> <button class=unlock id=yai1> Unlock! </button>"
  }
  if (skillbi2 == 0){
    document.getElementById("moderate2").innerHTML = "<span class=lock><span class=bigboi>Shield Surf:</span> Uses your shield to grind across the land at <span class=lockequipbuff> (Speed + ShieldDef/3) </span>, <br> and staggers you upon stopping. <span class=lockmana> 1 MP </span> <span class= locksklvl>0/3</span> <span class=lockskpts> 0/<span id=costi2>8</span> </span> </span> <button class=unlock id=yai2> Unlock! </button>"
  } 
  if (skillbi3 == 0){
    document.getElementById("moderate3").innerHTML = "<span class=lock><span class=lockbigboii>Shield Split:</span> Forms a second temporary shield with <span class=lockequipbuff>a third</span>of <br> your normal shield's stats, and lasts for <span class=lockequipbuff>5</span> minutes. <span class=lockmana> 7 MP </span> <span class= locksklvl>0/3</span> <span class=lockskpts> 0/<span id=costi3>8</span> </span> </span> <button class=unlock id=yai3> Unlock! </button>"
  }
  if (skillbi4 == 0){
    document.getElementById("moderate4").innerHTML = "<span class=lock><span class=bigboi>Focus Shift:</span> Switches the stats of your armour and shield for <span class=lockequipbuff>5</span> minutes. <span class=lockmana> 5 MP </span> <span class= locksklvl>0/3</span> <span class=lockskpts> 0/<span id=costi4>8</span> </span> </span> <button class=unlock id=yai4> Unlock! </button>"
  }
  if (skillbi1 == 1) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboi>Shield Toss:</span> Throws your shield to a teammate and stops it to levitate <br> in front of them and protect them. <span class=lockequipbuff> (Speed + 5) </span> <span class=lockmana> 4 MP </span> <span class=locksklvl> 1/3 </span> <span class=lockskpts> 0/<span id=costi1>12</span> </span> </span> <button class=upgrade id=yai1> Upgrade! </button>"
  }
  if (skillbi2 == 1){
    document.getElementById("moderate2").innerHTML = "<span class=white><span class=bigboi>Shield Surf:</span> Uses your shield to grind across the land at <span class=lockequipbuff> (Speed + ShieldDef/3) </span>, <br> and staggers you upon stopping. <span class=lockmana> 1 MP </span> <span class= locksklvl>1/3</span> <span class=lockskpts> 0/<span id=costi2>12</span> </span> </span> <button class=upgrade id=yai2> Upgrade! </button>"
  } 
  if (skillbi3 == 1){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboii>Shield Split:</span> Forms a second temporary shield with <span class=lockequipbuff>a third</span>of <br> your normal shield's stats, and lasts for <span class=lockequipbuff>5</span> minutes. <span class=lockmana> 7 MP </span> <span class= locksklvl>1/3</span> <span class=lockskpts> 0/<span id=costi3>12</span> </span> </span> <button class=upgrade id=yai3> Upgrade Stats! </button> <button class=upgrade id=yaic> Upgrade Time! </button>"
  }
  if (skillbi4 == 1){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboi>Focus Shift:</span> Switches the stats of your armour and shield for <span class=lockequipbuff>5</span> minutes. <span class=lockmana> 5 MP </span> <span class= locksklvl>1/3</span> <span class=lockskpts> 0/<span id=costi4>12</span> </span> </span> <button class=upgrade id=yai4> Upgrade! </button>"
  }
  if (skillbi1 == 2) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboi>Shield Toss:</span> Throws your shield to a teammate and stops it to levitate <br> in front of them and protect them. <span class=lockequipbuff> (Speed + 8) </span> <span class=lockmana> 4 MP </span> <span class=locksklvl> 2/3 </span> <span class=lockskpts> 0/<span id=costi1>15</span> </span> </span> <button class=upgrade id=yai1> Upgrade! </button>"
  }
  if (skillbi2 == 2){
    document.getElementById("moderate2").innerHTML = "<span class=white><span class=bigboi>Shield Surf:</span> Uses your shield to grind across the land at <span class=lockequipbuff> (Speed + ShieldDef/2) </span>, <br> and staggers you upon stopping. <span class=lockmana> 1 MP </span> <span class= locksklvl>2/3</span> <span class=lockskpts> 0/<span id=costi2>15</span> </span> </span> <button class=upgrade id=yai2> Upgrade! </button>"
  } 
  if (skillbi3 == 2){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboii>Shield Split:</span> Forms a second temporary shield with <span class=lockequipbuff>half</span>of <br> your normal shield's stats, and lasts for 5 minutes. <span class=lockmana> 7 MP </span> <span class= locksklvl>2/3</span> <span class=lockskpts> 0/<span id=costi3>15</span> </span> </span> <button class=upgrade id=yai3> Upgrade! </button>"
  }
  if (skillbi3 == 2.5){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboii>Shield Split:</span> Forms a second temporary shield with a third of <br> your normal shield's stats, and lasts for <span class=lockequipbuff>10</span> minutes. <span class=lockmana> 7 MP </span> <span class= locksklvl>2/3</span> <span class=lockskpts> 0/<span id=costi3>15</span> </span> </span><button class=upgrade id=yai3> Upgrade! </button>"
  }
  if (skillbi4 == 2){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboi>Focus Shift:</span> Switches the stats of your armour and shield for <span class=lockequipbuff>10</span> minutes. <span class=lockmana> 5 MP </span> <span class= locksklvl>2/3</span> <span class=lockskpts> 0/<span id=costi4>15</span> </span> </span> <button class=upgrade id=yai4> Upgrade! </button>"
  }
    if (skillbi1 == 3) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboi>Shield Toss:</span> Throws your shield to a teammate and stops it to levitate <br> in front of them and protect them. <span class=lockequipbuff> (Speed + 15) </span> <span class=lockmana> 6 MP </span> <span class=locksklvl> 3/3 </span> <span class=lockskpts> --- </span> </span> "
  }
  if (skillbi2 == 3){
    document.getElementById("moderate2").innerHTML = "<span class=white><span class=bigboi>Shield Surf:</span> Uses your shield to grind across the land at <span class=lockequipbuff> (Speed + ShieldDef) </span>, <br> and staggers you upon stopping. <span class=lockmana> 2 MP </span> <span class= locksklvl>3/3</span> <span class=lockskpts> --- </span> </span> "
  } 
  if (skillbi3 == 3){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboii>Shield Split:</span> Forms a second temporary shield with <span class=lockequipbuff>all</span>of <br> your normal shield's stats, and lasts for 5 minutes. <span class=lockmana> 11 MP </span> <span class= locksklvl>3/3</span> <span class=lockskpts> --- </span> </span> "
  }
  if (skillbi3 == 3.5){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboii>Shield Split:</span> Forms a second temporary shield with a third of <br> your normal shield's stats, and lasts for <span class=lockequipbuff>18</span> minutes. <span class=lockmana> 11 MP </span> <span class= locksklvl>3/3</span> <span class=lockskpts> --- </span> </span>"
  }
  if (skillbi4 == 3){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboi>Focus Shift:</span> Switches the stats of your armour and shield for <span class=lockequipbuff>18</span> minutes. <span class=lockmana> 8 MP </span> <span class= locksklvl>2/3</span> <span class=lockskpts> --- </span> </span> "
  }

  $("#yab1").on("click", BB1upgrade)
  $("#yab2").on("click", BB2upgrade)
  $("#yab3").on("click", BB3upgrade)
  $("#yab4").on("click", BB4upgrade)
  $("#yai1").on("click", BI1upgrade)
  $("#yai2").on("click", BI2upgrade)
  $("#yai3").on("click", BI3upgrade)
  $("#yai4").on("click", BI4upgrade)
  $("#yaic").on("click", BICupgrade)
}

function SkillsC() {
   document.getElementById("category").innerHTML = "Electric Magic (Sword)"
  if (skillcb1 == 1) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Static Buffer:</span>Charge your shield for an extra <span class=equipbuff> 8 </span> Resistance for one attack. <span class=mana> 3 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=pricec1>8</span> </span> </span> &nbsp; <button class=upgrade id=mhmb1>Upgrade!</button>"
  }
  if (skillcb2 == 0) {
    document.getElementById("begin2").innerHTML = "<span class=lock><span class=bigboi> Bolt Beam: </span> Shoot electricity from your sword. Does <span class=lockequipbuff>(Mag/2)</span> damage. <span class=lockmana> 3 MP </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=pricec2>5</span> </span> &nbsp; <button class=unlock id=mhmb2>Unlock!</button> "
  }
  if (skillcb3 == 0) {
    document.getElementById("begin3").innerHTML = "<span class=lock><span class=bigboi> Electric Shock:</span>Electrifies your blade for a <span class=lockequipbuff>25%</span> chance to stun. <span class=lockmana> 4 MP </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=pricec3>5</span> &nbsp; <button class=unlock id=mhmb3>Unlock!</button>"
  }
  if (skillcb4 == 0) {
    document.getElementById("begin4").innerHTML = "<span class=lock><span class=bigboi> Imbued Hilt: </span>Enhances your hilt with electricity. Deals <span class=lockequipbuff>(Atk + Mag/2)</span> damage.<span class=lockmana> 4 MP </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=pricec4>5</span> &nbsp; <button class=unlock id=mhmb4>Unlock!</button>"
  }
  if (skillcb2 == 1) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi> Bolt Beam: </span> Shoot electricity from your sword. Does <span class=equipbuff>(Mag/2)</span> damage. <span class=mana> 3 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=pricec2>8</span> </span> &nbsp; <button class=upgrade id=mhmb2>Upgrade!</button> "
  }
  if (skillcb3 == 1) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi> Electric Shock:</span>Electrifies your blade for a <span class=equipbuff>25%</span> chance to stun. <span class=mana> 4 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=pricec3>8</span> &nbsp; <button class=upgrade id=mhmb3>Upgrade!</button>"
  }
  if (skillcb4 == 1) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi> Imbued Hilt: </span>Enhances your hilt with electricity. Deals <span class=equipbuff>(Atk + Mag/2)</span> damage.<span class=mana> 4 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=pricec4>8</span> &nbsp; <button class=upgrade id=mhmb4>Upgrade!</button>"
  }
  if (skillcb1 == 2) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Static Buffer:</span>Charge your shield for an extra <span class=equipbuff> 12 </span> Resistance for one attack. <span class=mana> 3 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=pricec1>12</span> </span> </span> &nbsp; <button class=upgrade id=mhmb1>Upgrade!</button>"
  }
  if (skillcb2 == 2) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi> Bolt Beam: </span> Shoot electricity from your sword. Does <span class=equipbuff>(Mag)</span> damage. <span class=mana> 3 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=pricec2>12</span> </span> &nbsp; <button class=upgrade id=mhmb2>Upgrade!</button> "
  }
  if (skillcb3 == 2) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi> Electric Shock:</span>Electrifies your blade for a <span class=equipbuff>35%</span> chance to stun. <span class=mana> 4 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=pricec3>12</span> &nbsp; <button class=upgrade id=mhmb3>Upgrade!</button>"
  }
  if (skillcb4 == 2) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi> Imbued Hilt: </span>Enhances your hilt with electricity. Deals <span class=equipbuff>(Atk + Mag*80%)</span> damage.<span class=mana> 4 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=pricec4>12</span> &nbsp; <button class=upgrade id=mhmb4>Upgrade!</button>"
  }
  if (skillcb1 == 3) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Static Buffer:</span>Charge your shield for an extra <span class=equipbuff> 12 </span> Resistance for one attack. <span class=mana> 5 MP </span> <span class=sklvl> 3/3 </span> <span class=skpts> --- </span> </span> &nbsp; "
  }
  if (skillcb2 == 3) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi> Bolt Beam: </span> Shoot electricity from your sword. Does <span class=equipbuff>(Mag*130%)</span> damage. <span class=mana> 6 MP </span> <span class=sklvl> 3/3 </span> <span class=skpts> --- </span> &nbsp;  "
  }
  if (skillcb3 == 3) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi> Electric Shock:</span>Electrifies your blade for a <span class=equipbuff>55%</span> chance to stun. <span class=mana> 7 MP </span> <span class=sklvl> 3/3 </span> <span class=skpts>---</span> &nbsp; "
  }
  if (skillcb4 == 3) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi> Imbued Hilt: </span>Enhances your hilt with electricity. Deals <span class=equipbuff>(Atk + Mag*120%)</span> damage.<span class=mana> 6 MP </span> <span class=sklvl> 3/3 </span> <span class=skpts>---</span> &nbsp; "
  }
  if (skillci1 == 0) {
    document.getElementById("moderate1").innerHTML = "<span class=lock><span class=bigboi>Mjölnir's Bond:</span> An electric rope attaches to your sword, allowing you to pick it back up at range. The range<br> spans <span class=lockequipbuff>15 </span> metres, and if the rope touches someone, it does (Mag/2) damage.<span class=lockmana> 6 MP </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=pricei1>8</span> </span> </span> <button class=unlock id=mhmi1> Unlock! </button>"
  }
  if (skillci2 == 0){
    document.getElementById("moderate2").innerHTML = "<span class=lock><span class=bigboi>Magnhild:</span> Summon a bolt of lightning to your sword and charge it with <span class=lockequipbuff>Mag+7 Atk+5</span>, <br> and lasts for 10 minutes. <span class=lockmana> 6 MP </span> <span class= locksklvl>0/3</span> <span class=lockskpts> 0/<span id=pricei2>8</span> </span> </span> <button class=unlock id=mhmi2> Unlock! </button>"
  } 
  if (skillci3 == 0){
    document.getElementById("moderate3").innerHTML = "<span class=lock><span class=bigboi>Zeus' Wrath:</span> Let out 10 uncontrolled lightning bolts from your sword that do Mag damage, that have a <span class=lockequipbuff>5%</span> paralysis chance and a <span class=lockequipbuff>20%</span> stun chance (5% accuracy each, unaffected by stat changes). <span class=lockmana> 8 MP </span> <span class= locksklvl>0/3</span> <span class=lockskpts> 0/<span id=pricei3>8</span> </span> </span> <button class=unlock id=mhmi3> Unlock! </button>"
  }
  if (skillci4 == 0){
    document.getElementById("moderate4").innerHTML = "<span class=lock><span class=lockbigboii>Raijin Aura:</span> generate an electric aura for <span class=lockequipbuff>5</span> minutes with a <span class=lockequipbuff>20%</span> chance to <br> stun anyone who touches the user. <span class=lockmana> 5 MP </span> <span class= locksklvl>0/3</span> <span class=lockskpts> 0/<span id=pricei4>8</span> </span> </span> <button class=unlock id=mhmi4> Unlock! </button>"
  }
  if (skillci1 == 1) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboi>Mjölnir's Bond:</span> An electric rope attaches to your sword, allowing you to pick it back up at range. The range<br> spans <span class=equipbuff>15 </span> metres, and if the rope touches someone, it does (Mag/2) damage.<span class=mana> 6 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=pricei1>12</span> </span> </span> <button class=upgrade id=mhmi1> Upgrade! </button>"
  }
  if (skillci2 == 1){
    document.getElementById("moderate2").innerHTML = "<span class=white><span class=bigboi>Magnhild:</span> Summon a bolt of lightning to your sword and charge it with <span class=equipbuff>Mag+7 Atk+5</span>, <br> and lasts for 10 minutes. <span class=mana> 6 MP </span> <span class= sklvl>1/3</span> <span class=skpts> 0/<span id=pricei2>12</span> </span> </span> <button class=upgrade id=mhmi2> Upgrade! </button>"
  } 
  if (skillci3 == 1){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboi>Zeus' Wrath:</span> Let out 10 uncontrolled lightning bolts from your sword that do Mag damage, that have a <span class=equipbuff>5%</span> paralysis chance and a <span class=equipbuff>20%</span> stun chance (5% accuracy each, unaffected by stat changes). <span class=mana> 8 MP </span> <span class= sklvl>1/3</span> <span class=skpts> 0/<span id=pricei3>12</span> </span> </span> <button class=upgrade id=mhmi3> Upgrade! </button>"
  }
  if (skillci4 == 1){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboii>Raijin Aura:</span> generate an electric aura for <span class=equipbuff>5</span> minutes with a <span class=equipbuff>20%</span> chance to <br> stun anyone who touches the user. <span class=mana> 5 MP </span> <span class= sklvl>1/3</span> <span class=skpts> 0/<span id=pricei4>12</span> </span> </span> <button class=upgrade id=mhmi4> Upgrade Time! </button> <button class=upgrade id=mhmic> Upgrade Stun! </button>"
  }
  if (skillci1 == 2) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboi>Mjölnir's Bond:</span> An electric rope attaches to your sword, allowing you to pick it back up at range. The range<br> spans <span class=equipbuff>25 </span> metres, and if the rope touches someone, it does (Mag/2) damage.<span class=mana> 6 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=pricei1>15</span> </span> </span> <button class=upgrade id=mhmi1> Upgrade! </button>"
  }
  if (skillci2 == 2){
    document.getElementById("moderate2").innerHTML = "<span class=white><span class=bigboi>Magnhild:</span> Summon a bolt of lightning to your sword and charge it with <span class=equipbuff>Mag+12 Atk+14</span>, <br> and lasts for 10 minutes. <span class=mana> 6 MP </span> <span class= sklvl>2/3</span> <span class=skpts> 0/<span id=pricei2>15</span> </span> </span> <button class=upgrade id=mhmi2> Upgrade! </button>"
  } 
  if (skillci3 == 2){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboi>Zeus' Wrath:</span> Let out 10 uncontrolled lightning bolts from your sword that do Mag damage, that have a <span class=equipbuff>8%</span> paralysis chance and a <span class=equipbuff>30%</span> stun chance (5% accuracy each, unaffected by stat changes). <span class=mana> 8 MP </span> <span class= sklvl>2/3</span> <span class=skpts> 0/<span id=pricei3>15</span> </span> </span> <button class=upgrade id=mhmi3> Upgrade! </button>"
  }
  if (skillci4 == 2){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboii>Raijin Aura:</span> generate an electric aura for <span class=equipbuff>10</span> minutes with a 20% chance to <br> stun anyone who touches the user. <span class=mana> 5 MP </span> <span class= sklvl>2/3</span> <span class=skpts> 0/<span id=pricei4>15</span> </span> </span> <button class=upgrade id=mhmi4> Upgrade! </button> "
  }
  if (skillci4 == 2.5){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboii>Raijin Aura:</span> generate an electric aura for 5 minutes with a <span class=equipbuff>35%</span> chance to <br> stun anyone who touches the user. <span class=mana> 5 MP </span> <span class= sklvl>2/3</span> <span class=skpts> 0/<span id=pricei4>15</span> </span> </span> <button class=upgrade id=mhmi4> Upgrade! </button>"
  }
  if (skillci1 == 3) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboi>Mjölnir's Bond:</span> An electric rope attaches to your sword, allowing you to pick it back up at range. The range<br> spans <span class=equipbuff>45 </span> metres, and if the rope touches someone, it does (Mag/2) damage.<span class=mana> 8 MP </span> <span class=sklvl> 3/3 </span> <span class=skpts>---</span> </span>"
  }
  if (skillci2 == 3){
    document.getElementById("moderate2").innerHTML = "<span class=white><span class=bigboi>Magnhild:</span> Summon a bolt of lightning to your sword and charge it with <span class=equipbuff>Mag+18 Atk+22</span>, <br> and lasts for 10 minutes. <span class=mana> 11 MP </span> <span class= sklvl>3/3</span> <span class=skpts>---</span> </span> </span> "
  } 
  if (skillci3 == 3){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboi>Zeus' Wrath:</span> Let out 10 uncontrolled lightning bolts from your sword that do Mag damage, that have a <span class=equipbuff>15%</span> paralysis chance and a <span class=equipbuff>50%</span> stun chance (5% accuracy each, unaffected by stat changes). <span class=mana> 14 MP </span> <span class= sklvl>3/3</span> <span class=skpts>---</span> </span> </span> "
  }
  if (skillci4 == 3){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboii>Raijin Aura:</span> generate an electric aura for <span class=equipbuff>15</span> minutes with a 20% chance to <br> stun anyone who touches the user. <span class=mana> 8 MP </span> <span class= sklvl>3/3</span> <span class=skpts>---</span> </span> "
  }
   if (skillci4 == 3.5){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboii>Raijin Aura:</span> generate an electric aura for 5 minutes with a <span class=equipbuff>50%</span> chance to <br> stun anyone who touches the user. <span class=mana> 8 MP </span> <span class= sklvl>3/3</span> <span class=skpts>---</span> </span>"
  }
  


  $("#mhmb1").on("click", CB1upgrade)
  $("#mhmb2").on("click", CB2upgrade)
  $("#mhmb3").on("click", CB3upgrade)
  $("#mhmb4").on("click", CB4upgrade)
  $("#mhmi1").on("click", CI1upgrade)
  $("#mhmi2").on("click", CI2upgrade)
  $("#mhmi3").on("click", CI3upgrade)
  $("#mhmi4").on("click", CI4upgrade)
  $("#mhmic").on("click", CICupgrade)
 }
