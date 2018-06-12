
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
  document.getElementById("category").innerHTML = "Alpha"
  if (skillab1 == 1) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Fake Out:</span> Taunts with the ball end and strikes with the handle, <br>staggering the enemy. <span class=equipbuff>(Attack/3)</span> <span class=mana>1 MP</span> <span class=sklvl>1/3</span> <span class=skpts>0/<span id=b1spend>8</span></span><span> &nbsp; <button class=upgrade id=yesb1>Upgrade!</button>"
  }
  if (skillab2 == 0) {
    document.getElementById("begin2").innerHTML = "<span class=lock><span class=bigboi>Searing Flame:</span> <span class=lockequipbuff>20%</span> chance to burn the target. (Magic) <span class=lockmana>5 MP</span> <span class=locksklvl>0/3</span> <span class=lockskpts>0/<span id=b2spend>5</span></span></span> &nbsp; <button class=unlock id=yesb2>Unlock!</button> "
  }
  if (skillab3 == 0) {
    document.getElementById("begin3").innerHTML = "<span class=lock><span class=bigboi>Broken Blow:</span> Dislocates your arm and reaches for an accelerated attack.<br> <span class=lockequipbuff>(Attack*1.5)</span> Also makes you vulnerable. <span class=lockmana> 3 MP</span><span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=b3spend>5</span> </span></span> &nbsp; <button class=unlock id=yesb3>Unlock!</button>"
  }
  if (skillab4 == 0) {
    document.getElementById("begin4").innerHTML = "<span class=lock><span class=bigboi><span class=japanese> 火  ストライキ:</span></span> Applies fire to your weapon as you strike.<span class=lockequipbuff>(Magic + Attack/3) </span><span class=lockmana>3 MP </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=b4spend>5</span></span> </span> &nbsp; <button class=unlock id=yesb4>Unlock!</button>"
  }
  if (skillab2 == 1) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi>Searing Flame:</span><span class=equipbuff> 20%</span> chance to burn the target. (Magic) <span class=mana>3 MP</span> <span class=sklvl>1/3</span> <span class=skpts>0/<span id=b2spend>8</span></span></span> <button class=upgrade id=yesb2>Upgrade!</button> "
  }
  if (skillab3 == 1) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi>Broken Blow:</span> Dislocates your arm and reaches for an accelerated attack. <br> <span class=equipbuff>(Attack*1.5)</span> Also makes you vulnerable. <span class=mana> 3 MP</span><span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=b3spend>8</span> </span></span> <button class=upgrade id=yesb3>Upgrade!</button>"
  }
  if (skillab4 == 1) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi><span class=japanese> 火  ストライキ:</span></span> Applies fire to your weapon as you strike. <span class=equipbuff>(Magic + Attack/3) </span><span class=mana>5 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=b4spend>8</span> </span> </span> <button class=upgrade id=yesb4>Upgrade!</button>"
  }
  if (skillab1 == 2) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Fake Out:</span> Taunts with the ball end and strikes with the handle, <br> staggering the enemy. <span class=equipbuff>(Attack*2/3)</span> <span class=mana>1 MP</span> <span class=sklvl>2/3</span> <span class=skpts>0/<span id=b1spend>12</span></span><span> &nbsp; <button class=upgrade id=yesb1>Upgrade!</button>"
  }
  if (skillab2 == 2) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi>Searing Flame:</span><span class=equipbuff> 50%</span> chance to burn the target. (Magic) <span class=mana>3 MP</span> <span class=sklvl>2/3</span> <span class=skpts>0/<span id=b2spend>12</span></span></span> <button class=upgrade id=yesb2>Upgrade!</button> "
  }
  if (skillab3 == 2) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi>Broken Blow:</span> Dislocates your arm and reaches for an accelerated attack. <br> <span class=equipbuff>(Attack*2)</span> Also makes you vulnerable. <span class=mana> 3 MP</span><span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=b3spend>12</span> </span></span> <button class=upgrade id=yesb3>Upgrade!</button>"
  }
  if (skillab4 == 2) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi><span class=japanese> 火  ストライキ:</span></span> Applies fire to your weapon as you strike. <span class=equipbuff>(Magic + Attack*2/3) </span><span class=mana>5 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=b4spend>12</span> </span> </span> <button class=upgrade id=yesb4>Upgrade!</button>"
  }
  if (skillab1 == 3) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Fake Out:</span> Taunts with the ball end and strikes with the handle, <br> staggering the enemy. <span class=equipbuff>(Attack)</span>. <span class=mana>3 MP</span> <span class=sklvl>Max</span> <span class=skpts>---</span><span> &nbsp;"
  }
  if (skillab2 == 3) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi>Searing Flame:</span><span class=equipbuff> 70%</span> chance to burn the target. (Magic) <span class=mana>5 MP</span> <span class=sklvl>Max</span> <span class=skpts>---</span></span> "
  }
  if (skillab3 == 3) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi>Broken Blow:</span>Dislocates your arm and reaches for an accelerated attack. <br> <span class=equipbuff>(Attack*2.5) </span>Also najes you vulnerable. <span class=mana> 5 MP</span><span class=sklvl> Max </span> <span class=skpts> --- </span></span>"
  }
  if (skillab4 == 3) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi><span class=japanese> 火  ストライキ:</span></span> Applies fire to your weapon as you strike. <span class=equipbuff>(Magic + Attack) </span><span class=mana>6 MP </span> <span class=sklvl> Max </span> <span class=skpts> --- </span> </span>"
  }
  if (skillai1 == 0) {
    document.getElementById("moderate1").innerHTML = "<span class=lock><span class=lockbigboii>Flail Bar:</span> The chain of the flail becomes solid and jointless for <span class=lockequipbuff> 5 minutes </span>. <br> The bar flail has the normal stats plus <span class=lockequipbuff> 10 Defense </span>. <span class=lockmana> 5 MP </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=i1spend>8</span> </span> </span> <button class=unlock id=yesi1> Unlock! </button>"
  }
  if (skillai2 == 0){
    document.getElementById("moderate2").innerHTML = "<span class=lock><span class=bigboi>Arcane Flame:</span> Summon an old inextinguishable flame that <br> burns for (Magic) damage and lasts for <span class=lockequipbuff> 10 seconds </span>. <span class=lockmana> 7 MP </span> <span class= locksklvl>0/3</span> <span class=lockskpts> 0/<span id=i2spend>8</span> </span> </span> <button class=unlock id=yesi2> Unlock! </button>"
  } 
  if (skillai3 == 0){
    document.getElementById("moderate3").innerHTML = "<span class=lock><span class=bigboi>Ball Launch:</span>Throws the ball from the chain and returns it after it strikes. <span class=lockequipbuff>(Accuracy)</span> <span class=lockmana> 5 MP </span> <span class= locksklvl>0/3</span> <span class=lockskpts> 0/<span id=i3spend>8</span> </span> </span> <button class=unlock id=yesi3> Unlock! </button>"
  }
  if (skillai4 == 0){
    document.getElementById("moderate4").innerHTML = "<span class=lock><span class=bigboi>Fire Twister:</span>Creates a whirlpool of flames with a <span class=lockequipbuff>6 metre</span>  diameter  <br> that lasts for 1 minute. <span class=lockmana> 10 MP </span> <span class= locksklvl>0/3</span> <span class=lockskpts> 0/<span id=i4spend>8</span> </span> </span> <button class=unlock id=yesi4> Unlock! </button>"
  }
  if (skillai1 == 1) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboii>Flail Bar:</span> The chain of the flail becomes solid and jointless for <span class=equipbuff> 5 minutes </span>. <br> The bar flail has the normal stats plus <span class=equipbuff> 10 Defense </span>. <span class=mana> 5 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=i1spend>12</span> </span> </span> <button class=upgrade id=yesi1> Upgrade Time! </button> <button class=upgrade id=yesic> Upgrade Defense! </button>"
  }
  if (skillai2 == 1){
    document.getElementById("moderate2").innerHTML = "<span class=white><span class=bigboi>Arcane Flame:</span> Summon an old inextinguishable flame that <br> burns for (Magic) damage and lasts for <span class=equipbuff> 10 seconds </span>. <span class=mana> 7 MP </span> <span class=sklvl>1/3</span> <span class=skpts> 0/<span id=i2spend>12</span> </span> </span> <button class=upgrade id=yesi2> Upgrade! </button>"
  } 
  if (skillai3 == 1){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboi>Ball Launch:</span>Throws the ball from the chain and returns it after it strikes. <span class=equipbuff>(Accuracy)</span> <span class=mana> 5 MP </span> <span class= sklvl>1/3</span> <span class=skpts> 0/<span id=i3spend>12</span> </span> </span> <button class=upgrade id=yesi3> Upgrade! </button>"
  }
  if (skillai4 == 1){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboi>Fire Twister:</span>Creates a whirlpool of flames with a <span class=equipbuff>6 metre</span>  diameter  <br> that lasts for 1 minute. <span class=mana> 10 MP </span> <span class= sklvl>1/3</span> <span class=skpts> 0/<span id=i4spend>12</span> </span> </span> <button class=upgrade id=yesi4> Upgrade! </button>"
  }
  if (skillai1 == 2) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboii>Flail Bar:</span> The chain of the flail becomes solid and jointless for <span class=equipbuff> 10 minutes </span>. <br> The bar flail has the normal stats plus  10 Defense. <span class=mana> 5 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=i1spend>15</span> </span> </span> <button class=upgrade id=yesi1> Upgrade! </button>"
  }
  if (skillai1 == 2.5) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboii>Flail Bar:</span> The chain of the flail becomes solid and jointless for 5 minutes. <br> The bar flail has the normal stats plus <span class=equipbuff> 20 Defense </span>. <span class=mana> 5 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=i1spend>15</span> </span> </span> <button class=upgrade id=yesi1> Upgrade! </button>"
  }
   if (skillai2 == 2){
    document.getElementById("moderate2").innerHTML = "<span class=white><span class=bigboi>Arcane Flame:</span> Summon an old inextinguishable flame that <br> burns for (Magic) damage and lasts for <span class=equipbuff> 15 seconds </span>. <span class=mana> 7 MP </span> <span class=sklvl>2/3</span> <span class=skpts> 0/<span id=i2spend>15</span> </span> </span> <button class=upgrade id=yesi2> Upgrade! </button>"
  } 
  if (skillai3 == 2){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboi>Ball Launch:</span>Throws the ball from the chain and <br>returns it after it strikes. <span class=equipbuff>(Accuracy+20%)</span> <span class=mana> 5 MP </span> <span class= sklvl>2/3</span> <span class=skpts> 0/<span id=i3spend>15</span> </span> </span> <button class=upgrade id=yesi3> Upgrade! </button>"
  }
  if (skillai4 == 2){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboi>Fire Twister:</span>Creates a whirlpool of flames with a <span class=equipbuff>10 metre</span>  diameter  <br> that lasts for 1 minute. <span class=mana> 10 MP </span> <span class= sklvl>2/3</span> <span class=skpts> 0/<span id=i4spend>15</span> </span> </span> <button class=upgrade id=yesi4> Upgrade! </button>"
  }
  if (skillai1 == 3) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboii>Flail Bar:</span> The chain of the flail becomes solid and jointless for <span class=equipbuff> 15 minutes </span>. <br> The bar flail has the normal stats plus  10 Defense. <span class=mana> 5 MP </span> <span class=sklvl> 3/3 </span> <span class=skpts>---</span> </span> "
  }
  if (skillai1 == 3.5) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboii>Flail Bar:</span> The chain of the flail becomes solid and jointless for 5 minutes. <br> The bar flail has the normal stats plus <span class=equipbuff> 30 Defense </span>. <span class=mana> 5 MP </span> <span class=sklvl> 3/3 </span> <span class=skpts>---</span> </span> "
  }
   if (skillai2 == 3){
    document.getElementById("moderate2").innerHTML = "<span class=white><span class=bigboi>Arcane Flame:</span> Summon an old inextinguishable flame that <br> burns for (Magic) damage and lasts for <span class=equipbuff> 25 seconds </span>. <span class=mana> 10 MP </span> <span class=sklvl>3/3</span> <span class=skpts>---</span> </span> "
  } 
  if (skillai3 == 3){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboi>Ball Launch:</span>Throws the ball from the chain and <br>returns it after it strikes. <span class=equipbuff>(Accuracy+50%)</span> <span class=mana> 8 MP </span> <span class= sklvl>3/3</span> <span class=skpts>---</span> </span> "
  }
  if (skillai4 == 3){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboi>Fire Twister:</span>Creates a whirlpool of flames with a <span class=equipbuff>16 metre</span>  diameter  <br> that lasts for 1 minute. <span class=mana> 13 MP </span> <span class= sklvl>3/3</span> <span class=skpts>---</span> </span>"
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
  document.getElementById("category").innerHTML = "Omega"
  if (skillbb1 == 1) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Heal Tag:</span> Gives up to 10 Res to a player that will heal them for <span class=equipbuff> (GivenRes/2) <br> </span> every time it's Omega's Turn. <span class=mana> 3 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=costb1>8</span> &nbsp; <button class=upgrade id=yab1>Upgrade!</button>"
  }
  if (skillbb2 == 0) {
    document.getElementById("begin2").innerHTML = "<span class=lock><span class=bigboi> Winter Wind: </span> Uses a gust of wind to blow enemies away and has a <br> <span class=lockequipbuff>10%</span> chance to freeze. <span class=lockmana> 4 MP </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=costb2>5</span> </span> &nbsp; <button class=unlock id=yab2>Unlock!</button> "
  }
  if (skillbb3 == 0) {
    document.getElementById("begin3").innerHTML = "<span class=lock><span class=bigboi> Bubble:</span> Create a protective barrier on an ally that has <span class=lockequipbuff>15 Defense and <br> 15 Resistance</span> for a single attack. <span class=lockmana> 5 MP </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=costb3>5</span> &nbsp; <button class=unlock id=yab3>Unlock!</button>"
  }
  if (skillbb4 == 0) {
    document.getElementById("begin4").innerHTML = "<span class=lock><span class=bigboi> Below Zero: </span>For each 5 degrees celsius below zero, <br> ice attack damage is increased by <span class=lockequipbuff>3</span>. <span class=lockmana> (Passive) </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=costb4>5</span> &nbsp; <button class=unlock id=yab4>Unlock!</button>"
  }
  if (skillbb2 == 1) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi> Winter Wind: </span> Uses a gust of wind to blow enemies away and has a <br> <span class=equipbuff>10%</span> chance to freeze. <span class=mana> 4 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=costb2>8</span> </span> &nbsp; <button class=upgrade id=yab2>Upgrade!</button> "
  }
  if (skillbb3 == 1) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi> Bubble:</span> Create a protective barrier on an ally that has <span class=equipbuff>15 Defense and <br> 15 Resistance</span> for a single attack. <span class=mana> 5 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=costb3>8</span> &nbsp; <button class=upgrade id=yab3>Upgrade!</button>"
  }
  if (skillbb4 == 1) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi> Below Zero: </span>For each 5 degrees celsius below zero, <br> ice attack damage is increased by <span class=equipbuff>3</span>. <span class=mana> (Passive) </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=costb4>8</span> &nbsp; <button class=upgrade id=yab4>Upgrade!</button>"
  }
  if (skillbb1 == 2) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Heal Tag:</span> Gives up to 10 Res to a player that will heal them for <span class=equipbuff> (GivenRes) <br> </span> every time it's Omega's Turn. <span class=mana> 3 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=costb1>12</span> &nbsp; <button class=upgrade id=yab1>Upgrade!</button>"
  }
  if (skillbb2 == 2) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi> Winter Wind: </span> Uses a gust of wind to blow enemies away and has a <br> <span class=equipbuff>15%</span> chance to freeze. <span class=mana> 4 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=costb2>12</span> </span> &nbsp; <button class=upgrade id=yab2>Upgrade!</button> "
  }
  if (skillbb3 == 2) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi> Bubble:</span> Create a protective barrier on an ally that has <span class=equipbuff>25 Defense and <br> 25 Resistance</span> for a single attack. <span class=mana> 5 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=costb3>12</span> &nbsp; <button class=upgrade id=yab3>Upgrade!</button>"
  }
  if (skillbb4 == 2) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi> Below Zero: </span>For each 5 degrees celsius below zero, <br> ice attack damage is increased by <span class=equipbuff>8</span>. <span class=mana> (Passive) </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=costb4>12</span> &nbsp; <button class=upgrade id=yab4>Upgrade!</button>"
  }
  if (skillbb1 == 3) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Heal Tag:</span> Gives up to 10 Res to a player that will heal them for <span class=equipbuff> (GivenRes * 1.5) <br> </span> every time it's Omega's Turn. <span class=mana> 5 MP </span> <span class=sklvl> 3/3 </span> <span class=skpts>---</span>  &nbsp;"
  }
  if (skillbb2 == 3) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi> Winter Wind: </span> Uses a gust of wind to blow enemies away and has a <br> <span class=equipbuff>25%</span> chance to freeze. <span class=mana> 7 MP </span> <span class=sklvl> 3/3 </span> <span class=skptss>---</span> </span> &nbsp;  "
  }
  if (skillbb3 == 3) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi> Bubble:</span> Create a protective barrier on an ally that has <span class=equipbuff>35 Defense and <br> 35 Resistance</span> for a single attack. <span class=mana> 9 MP </span> <span class=sklvl> 3/3 </span> <span class=skpts>---</span> &nbsp;"
  }
  if (skillbb4 == 3) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi> Below Zero: </span>For each 5 degrees celsius below zero, <br> ice attack damage is increased by <span class=equipbuff>12</span>. <span class=mana> (Passive) </span> <span class=sklvl> 3/3 </span> <span class=skpts>---</span> &nbsp; "
  }
  if (skillbi1 == 0) {
    document.getElementById("moderate1").innerHTML = "<span class=lock><span class=bigboi>Magic Cloak:</span> Omega enchants Alpha's flail with an afterimage that <br> blocks attacks with <span class=lockequipbuff> (Mag/4) </span> Defense and Resistance. Stays until Omega's next turn. <span class=lockmana> 7 MP </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=costi1>8</span> </span> </span> <button class=unlock id=yai1> Unlock! </button>"
  }
  if (skillbi2 == 0){
    document.getElementById("moderate2").innerHTML = "<span class=lock><span class=bigboi>Flurry:</span> A low power blizzard directed straight at a target. <br> Does (Mag/2) damage with a <span class=lockequipbuff> 20% </span> chance to freeze. <span class=lockmana> 10 MP </span> <span class= locksklvl>0/3</span> <span class=lockskpts> 0/<span id=costi2>8</span> </span> </span> <button class=unlock id=yai2> Unlock! </button>"
  } 
  if (skillbi3 == 0){
    document.getElementById("moderate3").innerHTML = "<span class=lock><span class=lockbigboii>Magic Meteor:</span> Omega summons a meteor that crashes down from the sky and heals allies for <span class=lockequipbuff>(Mag/3)</span> and damages enemies for <span class=lockequipbuff>(Mag/3)</span>. <span class=lockmana> 10 MP </span> <span class= locksklvl>0/3</span> <span class=lockskpts> 0/<span id=costi3>8</span> </span> </span> <button class=unlock id=yai3> Unlock! </button>"
  }
  if (skillbi4 == 0){
    document.getElementById("moderate4").innerHTML = "<span class=lock><span class=bigboi>Flash Freeze:</span> In an instant, temperature is set to <span class=lockequipbuff>-10</span> degrees celsius (if the temperature was higher), and everyone nearby gets a -2 modifier to all stats. <span class=lockmana> 10 MP </span> <span class= locksklvl>0/3</span> <span class=lockskpts> 0/<span id=costi4>8</span> </span> </span> <button class=unlock id=yai4> Unlock! </button>"
  }
  if (skillbi1 == 1) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboi>Magic Cloak:</span> Omega enchants Alpha's flail with an afterimage that <br> blocks attacks with <span class=equipbuff> (Mag/4) </span> Defense and Resistance. Stays until Omega's next turn. <span class=mana> 7 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=costi1>12</span> </span> </span> <button class=upgrade id=yai1> Upgrade! </button>"
  }
  if (skillbi2 == 1){
    document.getElementById("moderate2").innerHTML = "<span class=white><span class=bigboi>Flurry:</span> A low power blizzard directed straight at a target. <br> Does (Mag/2) damage with a <span class=equipbuff> 20% </span> chance to freeze. <span class=mana> 10 MP </span> <span class= sklvl>1/3</span> <span class=skpts> 0/<span id=costi2>12</span> </span> </span> <button class=upgrade id=yai2> Upgrade! </button>"
  } 
  if (skillbi3 == 1){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboii>Magic Meteor:</span> Omega summons a meteor that crashes down from the sky and heals allies for <span class=equipbuff>(Mag/3)</span> and damages enemies for <span class=equipbuff>(Mag/3)</span>. <span class=mana> 10 MP </span> <span class= sklvl>1/3</span> <span class=skpts> 0/<span id=costi3>12</span> </span> </span> <button class=upgrade id=yai3> Upgrade Healing! </button> <button class=upgrade id=yaic> Upgrade Damage! </button>"
  }
  if (skillbi4 == 1){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboi>Flash Freeze:</span> In an instant, temperature is set to <span class=equipbuff>-10</span> degrees celsius (if the temperature was higher), and everyone nearby gets a -2 modifier to all stats. <span class=mana> 10 MP </span> <span class= sklvl>1/3</span> <span class=skpts> 0/<span id=costi4>12</span> </span> </span> <button class=upgrade id=yai4> Upgrade! </button>"
  }
  if (skillbi1 == 2) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboi>Magic Cloak:</span> Omega enchants Alpha's flail with an afterimage that <br> blocks attacks with <span class=equipbuff> (Mag/3) </span> Defense and Resistance. Stays until Omega's next turn. <span class=mana> 7 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=costi1>15</span> </span> </span> <button class=upgrade id=yai1> Upgrade! </button>"
  }
  if (skillbi2 == 2){
    document.getElementById("moderate2").innerHTML = "<span class=white><span class=bigboi>Flurry:</span> A low power blizzard directed straight at a target. <br> Does (Mag/2) damage with a <span class=equipbuff> 30% </span> chance to freeze. <span class=mana> 10 MP </span> <span class= sklvl>2/3</span> <span class=skpts> 0/<span id=costi2>15</span> </span> </span> <button class=upgrade id=yai2> Upgrade! </button>"
  } 
  if (skillbi3 == 2){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboii>Magic Meteor:</span> Omega summons a meteor that crashes down from the sky and heals allies for <span class=equipbuff>(Mag/2)</span> and damages enemies for (Mag/3). <span class=mana> 10 MP </span> <span class= sklvl>2/3</span> <span class=skpts> 0/<span id=costi3>15</span> </span> </span> <button class=upgrade id=yai3> Upgrade! </button>"
  }
  if (skillbi3 == 2.5){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboii>Magic Meteor:</span> Omega summons a meteor that crashes down from the sky and heals allies for (Mag/3) and damages enemies for <span class=equipbuff>(Mag/2)</span>. <span class=mana> 10 MP </span> <span class= sklvl>2/3</span> <span class=skpts> 0/<span id=costi3>15</span> </span> </span> <button class=upgrade id=yai3> Upgrade! </button>"
  }
  if (skillbi4 == 2){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboi>Flash Freeze:</span> In an instant, temperature is set to <span class=equipbuff>-15</span> degrees celsius (if the temperature was higher), and everyone nearby gets a -2 modifier to all stats. <span class=mana> 10 MP </span> <span class= sklvl>2/3</span> <span class=skpts> 0/<span id=costi4>15</span> </span> </span> <button class=upgrade id=yai4> Upgrade! </button>"
  }
    if (skillbi1 == 3) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboi>Magic Cloak:</span> Omega enchants Alpha's flail with an afterimage that <br> blocks attacks with <span class=equipbuff> (Mag/2) </span> Defense and Resistance. Stays until Omega's next turn. <span class=mana> 10 MP </span> <span class=sklvl> 3/3 </span> <span class=skpts>--- </span> </span> "
  }
  if (skillbi2 == 3){
    document.getElementById("moderate2").innerHTML = "<span class=white><span class=bigboi>Flurry:</span> A low power blizzard directed straight at a target. <br> Does (Mag/2) damage with a <span class=equipbuff> 50% </span> chance to freeze. <span class=mana> 14 MP </span> <span class= sklvl>3/3</span> <span class=skpts>---</span> </span> "
  } 
  if (skillbi3 == 3){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboii>Magic Meteor:</span> Omega summons a meteor that crashes down from the sky and heals allies for <span class=equipbuff>(Mag)</span> and damages enemies for (Mag/3). <span class=mana> 13 MP </span> <span class= sklvl>3/3</span> <span class=skpts>---</span> </span> "
  }
  if (skillbi3 == 3.5){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboii>Magic Meteor:</span> Omega summons a meteor that crashes down from the sky and heals allies for (Mag/3) and damages enemies for <span class=equipbuff>(Mag)</span>. <span class=mana> 13 MP </span> <span class= sklvl>3/3</span> <span class=skpts> --- </span> </span> "
  }
  if (skillbi4 == 3){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboi>Flash Freeze:</span> In an instant, temperature is set to <span class=equipbuff>-25</span> degrees celsius (if the temperature was higher), and everyone nearby gets a -2 modifier to all stats. <span class=mana> 13 MP </span> <span class= sklvl>3/3</span> <span class=skpts> --- </span> </span> "
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
   document.getElementById("category").innerHTML = "Duo"
  if (skillcb1 == 1) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Soulbound:</span>When one is dead, the other dies as well. <span class=equipbuff> The characters can <br> perform combos together without rolling. </span> <span class=mana> (Passive) </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=pricec1>8</span> </span> </span> &nbsp; <button class=upgrade id=mhmb1>Upgrade!</button>"
  }
  if (skillcb2 == 0) {
    document.getElementById("begin2").innerHTML = "<span class=lock><span class=bigboi> Dual Aid: </span> Multiplies positive effects given to each other by <span class=lockequipbuff>1.5</span>. <span class=lockmana> (Passive) </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=pricec2>5</span> </span> &nbsp; <button class=unlock id=mhmb2>Unlock!</button> "
  }
  if (skillcb3 == 0) {
    document.getElementById("begin3").innerHTML = "<span class=lock><span class=bigboi> Superhuman Adrenaline:</span>Lets one partner multiply their stats and rolls by <span class=lockequipbuff>1.5</span> temporarily <br> to save the other from danger. <span class=lockmana> 8 MP </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=pricec3>5</span> &nbsp; <button class=unlock id=mhmb3>Unlock!</button>"
  }
  if (skillcb4 == 0) {
    document.getElementById("begin4").innerHTML = "<span class=lock><span class=bigboi> Tag In: </span> Lets the partners instantly switch positions <br> without giving up either of their turns. <span class=lockequipbuff>(</span><span class=lockmana> 15 MP </span><span class=lockequipbuff>)</span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=pricec4>5</span> &nbsp; <button class=unlock id=mhmb4>Unlock!</button>"
  }
  if (skillcb2 == 1) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi> Dual Aid: </span> Multiplies positive effects given to each other by <span class=equipbuff>1.5</span>. <span class=mana> (Passive) </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=pricec2>8</span> </span> &nbsp; <button class=upgrade id=mhmb2>Upgrade!</button> "
  }
  if (skillcb3 == 1) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi> Superhuman Adrenaline:</span>Lets one partner multiply their stats and rolls by <span class=equipbuff>1.5</span> temporarily <br> to save the other from danger. <span class=mana> 8 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=pricec3>8</span> &nbsp; <button class=upgrade id=mhmb3>Upgrade!</button>"
  }
  if (skillcb4 == 1) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi> Tag In: </span> Lets the partners instantly switch positions <br> without giving up either of their turns. <span class=equipbuff>(</span><span class=mana> 15 MP </span><span class=equipbuff>)</span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=pricec4>8</span> &nbsp; <button class=upgrade id=mhmb4>Upgrade!</button>"
  }
  if (skillcb1 == 2) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Soulbound:</span>When one is dead, the other dies as well. <span class=equipbuff> The characters can <br> perform combos together without rolling, and have a 50% <br> speed boost during the combo. </span> <span class=mana> (Passive) </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=pricec1>12</span> &nbsp; </span> </span> <button class=upgrade id=mhmb1>Upgrade!</button>"
  }
  if (skillcb2 == 2) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi> Dual Aid: </span> Multiplies positive effects given to each other by <span class=equipbuff>2</span>. <span class=mana> (Passive) </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=pricec2>12</span> </span> &nbsp; <button class=upgrade id=mhmb2>Upgrade!</button> "
  }
  if (skillcb3 == 2) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi> Superhuman Adrenaline:</span>Lets one partner multiply their stats and rolls by <span class=equipbuff>2</span> temporarily <br> to save the other from danger. <span class=mana> 8 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=pricec3>12</span> &nbsp; <button class=upgrade id=mhmb3>Upgrade!</button>"
  }
  if (skillcb4 == 2) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi> Tag In: </span> Lets the partners instantly switch positions <br> without giving up either of their turns. <span class=equipbuff>(</span><span class=mana> 12 MP </span><span class=equipbuff>)</span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=pricec4>12</span> &nbsp; <button class=upgrade id=mhmb4>Upgrade!</button>"
  }
  if (skillcb1 == 3) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Soulbound:</span>When one is dead, the other dies as well. <span class=equipbuff> The characters can <br> perform combos together without rolling, and have a 50%  speed boost during the combo.<br> They can also perform combos that take only one of their turns, <br> but cannot participate in a combo without a turn. </span> <span class=mana> (Passive) </span> <span class=sklvl> 3/3 </span> <span class=skpts>---</span> </span>  &nbsp; "
  }
  if (skillcb2 == 3) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi> Dual Aid: </span> Multiplies positive effects given to each other by <span class=equipbuff>2.5</span>. <span class=mana> (Passive) </span> <span class=sklvl> 3/3 </span> <span class=skpts>---</span> &nbsp; "
  }
  if (skillcb3 == 3) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi> Superhuman Adrenaline:</span>Lets one partner multiply their stats and rolls by <span class=equipbuff>2.5</span> temporarily <br> to save the other from danger. <span class=mana> 12 MP </span> <span class=sklvl> 3/3 </span> <span class=skpts>---</span> </span>  &nbsp;"
  }
  if (skillcb4 == 3) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi> Tag In: </span> Lets the partners instantly switch positions <br> without giving up either of their turns. <span class=equipbuff>(</span><span class=mana> 7 MP </span><span class=equipbuff>)</span> <span class=sklvl> 3/3 </span> <span class=skpts>---</span> </span> &nbsp; "
  }
  if (skillci1 == 0) {
    document.getElementById("moderate1").innerHTML = "<span class=lock><span class=bigboi>Other Eye:</span> Alpha or Omega add <span class=lockequipbuff>30% </span> accuracy from the other's specialty, <br> borrowing it for the turn. <span class=lockmana> 4 MP </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=pricei1>8</span> </span> </span> <button class=unlock id=mhmi1> Unlock! </button>"
  }
  if (skillci2 == 0){
    document.getElementById("moderate2").innerHTML = "<span class=lock><span class=bigboi>Duo Hex:</span> Applies the stat buff of one to the other, <br> also nullifying all other buffs the other doesn't have. <span class=lockequipbuff>(</span><span class=lockmana> 12 MP </span><span class=lockequipbuff>)</span> <span class= locksklvl>0/3</span> <span class=lockskpts> 0/<span id=pricei2>8</span> </span> </span> <button class=unlock id=mhmi2> Unlock! </button>"
  } 
  if (skillci3 == 0){
    document.getElementById("moderate3").innerHTML = "<span class=lock><span class=bigboi>Bipolar Swirl:</span>Trades the elemental magic of the two for one turn, letting them use <br> each other's mage skills at <span class=lockequipbuff>30%</span> efficiency for the turn. <span class=lockmana> 8 MP </span> <span class= locksklvl>0/3</span> <span class=lockskpts> 0/<span id=pricei3>8</span> </span> </span> <button class=unlock id=mhmi3> Unlock! </button>"
  }
  if (skillci4 == 0){
    document.getElementById("moderate4").innerHTML = "<span class=lock><span class=lockbigboii>Shining Flail:</span>Omega enchants Alpha's Flail, giving him the Shine buff. The shining flail deflects projectiles, and takes <span class=lockequipbuff>all</span>  of Omega's Resistance Stat to make Alpha's flail do <span class=lockequipbuff>(30% Omega's Mag)</span> more damage.<span class=lockmana> 15 MP </span> <span class= locksklvl>0/3</span> <span class=lockskpts> 0/<span id=pricei4>8</span> </span> </span> <button class=unlock id=mhmi4> Unlock! </button>"
  }
  if (skillci1 == 1) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboi>Other Eye:</span> Alpha or Omega add <span class=equipbuff>30% </span> accuracy from the other's specialty, <br> borrowing it for the turn. <span class=mana> 4 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=pricei1>12</span> </span> </span> <button class=upgrade id=mhmi1> Upgrade! </button>"
  }
  if (skillci2 == 1){
    document.getElementById("moderate2").innerHTML = "<span class=white><span class=bigboi>Duo Hex:</span> Applies the stat buff of one to the other, <br> also nullifying all other buffs the other doesn't have. <span class=equipbuff>(</span><span class=mana> 12 MP </span><span class=equipbuff>)</span> <span class= sklvl>1/3</span> <span class=skpts> 0/<span id=pricei2>12</span> </span> </span> <button class=upgrade id=mhmi2> Upgrade! </button>"
  } 
  if (skillci3 == 1){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboi>Bipolar Swirl:</span>Trades the elemental magic of the two for one turn, letting them use <br> each other's mage skills at <span class=equipbuff>30%</span> efficiency for the turn. <span class=mana> 8 MP </span> <span class= sklvl>1/3</span> <span class=skpts> 0/<span id=pricei3>12</span> </span> </span> <button class=upgrade id=mhmi3> Upgrade! </button>"
  }
  if (skillci4 == 1){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboii>Shining Flail:</span>Omega enchants Alpha's Flail, giving him the Shine buff. The shining flail deflects projectiles, and takes <span class=equipbuff>all</span>  of Omega's Resistance Stat to make Alpha's flail do <span class=equipbuff>(30% Omega's Mag)</span> more damage.<span class=mana> 15 MP </span> <span class= sklvl>1/3</span> <span class=skpts> 0/<span id=pricei4>12</span> </span> </span> <button class=upgrade id=mhmi4> Lower Sacrifice! </button> <button class=upgrade id=mhmic> Upgrade Damage! </button>"
  }
  if (skillci1 == 2) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboi>Other Eye:</span> Alpha or Omega add <span class=equipbuff>60% </span> accuracy from the other's specialty, <br> borrowing it for the turn. <span class=mana> 4 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=pricei1>15</span> </span> </span> <button class=upgrade id=mhmi1> Upgrade! </button>"
  }
  if (skillci2 == 2){
    document.getElementById("moderate2").innerHTML = "<span class=white><span class=bigboi>Duo Hex:</span> Applies the stat buff of one to the other, <br> also nullifying all other buffs the other doesn't have. <span class=equipbuff>(</span><span class=mana> 9 MP </span><span class=equipbuff>)</span> <span class= sklvl>2/3</span> <span class=skpts> 0/<span id=pricei2>15</span> </span> </span> <button class=upgrade id=mhmi2> Upgrade! </button>"
  } 
  if (skillci3 == 2){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboi>Bipolar Swirl:</span>Trades the elemental magic of the two for one turn, letting them use <br> each other's mage skills at <span class=equipbuff>60%</span> efficiency for the turn. <span class=mana> 8 MP </span> <span class= sklvl>2/3</span> <span class=skpts> 0/<span id=pricei3>15</span> </span> </span> <button class=upgrade id=mhmi3> Upgrade! </button>"
  }
  if (skillci4 == 2){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboii>Shining Flail:</span>Omega enchants Alpha's Flail, giving him the Shine buff. The shining flail deflects projectiles, and takes <span class=equipbuff>60%</span>  of Omega's Resistance Stat to make Alpha's flail do (30% Omega's Mag) more damage.<span class=mana> 15 MP </span> <span class= sklvl>2/3</span> <span class=skpts> 0/<span id=pricei4>15</span> </span> </span> <button class=upgrade id=mhmi4> Upgrade! </button>"
  }
  if (skillci4 == 2.5){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboii>Shining Flail:</span>Omega enchants Alpha's Flail, giving him the Shine buff. The shining flail deflects projectiles, and takes all of Omega's Resistance Stat to make Alpha's flail do <span class=equipbuff>(50% Omega's Mag)</span> more damage.<span class=mana> 15 MP </span> <span class= sklvl>2/3</span> <span class=skpts> 0/<span id=pricei4>15</span> </span> </span><button class=upgrade id=mhmi4> Upgrade! </button>"
  }
  if (skillci1 == 3) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboi>Other Eye:</span> Alpha or Omega add <span class=equipbuff>100%</span> accuracy from the other's specialty, <br> borrowing it for the turn. <span class=mana> 6 MP </span> <span class=sklvl> 3/3 </span> <span class=skpts>---</span> </span>"
  }
  if (skillci2 == 3){
    document.getElementById("moderate2").innerHTML = "<span class=white><span class=bigboi>Duo Hex:</span> Applies the stat buff of one to the other, <br> also nullifying all other buffs the other doesn't have. <span class=equipbuff>(</span><span class=mana> 6 MP </span><span class=equipbuff>)</span> <span class= sklvl>3/3</span> <span class=skpts>---</span> </span> </span> "
  } 
  if (skillci3 == 3){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboi>Bipolar Swirl:</span>Trades the elemental magic of the two for one turn, letting them use <br> each other's mage skills at <span class=equipbuff>100%</span> efficiency for the turn. <span class=mana> 10 MP </span> <span class= sklvl>3/3</span> <span class=skpts>---</span> </span> </span> "
  }
  if (skillci4 == 3){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboii>Shining Flail:</span>Omega enchants Alpha's Flail, giving him the Shine buff. The shining flail deflects projectiles, and takes <span class=equipbuff>25%</span>  of Omega's Resistance Stat to make Alpha's flail do (30% Omega's Mag) more damage.<span class=mana> 15 MP </span> <span class= sklvl>3/3</span> <span class=skpts>---</span> </span> "
  }
   if (skillci4 == 3.5){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboii>Shining Flail:</span>Omega enchants Alpha's Flail, giving him the Shine buff. The shining flail deflects projectiles, and takes all of Omega's Resistance Stat to make Alpha's flail do <span class=equipbuff>(80% Omega's Mag)</span> more damage.<span class=mana> 15 MP </span> <span class= sklvl>3/3</span> <span class=skpts>---</span> </span>"
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
