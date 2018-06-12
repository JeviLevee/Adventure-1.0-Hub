
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
  if (nousepts >= Number(document.getElementById("i3spend").innerHTML)) {
    skillai3 = skillai3 + 1.5
    nousepts = nousepts - Number(document.getElementById("i3spend").innerHTML)
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
  if (nousepts >= Number(document.getElementById("costi4").innerHTML)) {
    skillbi4 = skillbi4 + 1.5
    nousepts = nousepts - Number(document.getElementById("costi4").innerHTML)
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
  if (nousepts >= Number(document.getElementById("pricei1").innerHTML)) {
    skillci1 = skillci1 + 1.5
    nousepts = nousepts - Number(document.getElementById("pricei1").innerHTML)
    document.getElementById("us").innerHTML = nousepts
    SkillsC();
  }
}

function SkillsA() {
  document.getElementById("category").innerHTML = "Bow & Arrow"
  if (skillab1 == 1) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Arrow Shotgun:</span> Shoots <span class=equipbuff> 3 </span> arrows in a spread, dealing <span class=equipbuff>(Attack)</span> damage. <span class=mana>2 MP</span> <span class=sklvl>1/3</span> <span class=skpts>0/<span id=b1spend>8</span></span><span> &nbsp; <button class=upgrade id=yesb1>Upgrade!</button>"
  }
  if (skillab2 == 0) {
    document.getElementById("begin2").innerHTML = "<span class=lock><span class=bigboi>Arrow Repeater:</span> Shoots up to <span class=lockequipbuff>5</span> arrows at the same spot, <br> meaning if you miss one, they all miss. <span class=lockmana>5 MP</span> <span class=locksklvl>0/3</span> <span class=lockskpts>0/<span id=b2spend>5</span></span></span> &nbsp; <button class=unlock id=yesb2>Unlock!</button> "
  }
  if (skillab3 == 0) {
    document.getElementById("begin3").innerHTML = "<span class=lock><span class=bigboi>Bow Push:</span> Use your bow to push off of an enemy or ally to get <br> <span class=lockequipbuff>5</span> metres away. <span class=lockmana> 2 MP</span><span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=b3spend>5</span> </span></span> &nbsp; <button class=unlock id=yesb3>Unlock!</button>"
  }
  if (skillab4 == 0) {
    document.getElementById("begin4").innerHTML = "<span class=lock><span class=bigboi>Roped Arrow:</span> Attaches a rope to the shot arrow, allowing you to pull the target in, pull into the target, or tie the target to something. Does <span class=lockequipbuff>(Attack/3) </span>damage. <span class=lockmana>4 MP </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=b4spend>5</span></span> </span> &nbsp; <button class=unlock id=yesb4>Unlock!</button>"
  }
  if (skillab2 == 1) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi>Arrow Repeater:</span> Shoots up to <span class= equipbuff>5</span> arrows at the same spot, <br> meaning if you miss one, they all miss. <span class= mana>5 MP</span> <span class= sklvl>1/3</span> <span class= skpts>0/<span id=b2spend>8</span></span></span> &nbsp; <button class=upgrade id=yesb2>Upgrade!</button> "
  }
  if (skillab3 == 1) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi>Bow Push:</span> Use your bow to push off of an enemy or ally to get <br> <span class= equipbuff>5</span> metres away. <span class= mana> 2 MP</span><span class= sklvl> 1/3 </span> <span class= skpts> 0/<span id=b3spend>8</span> </span></span> &nbsp; <button class=upgrade id=yesb3>Upgrade!</button>"
  }
  if (skillab4 == 1) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi>Roped Arrow:</span> Attaches a rope to the shot arrow, allowing you to pull the target in, pull into the target, or tie the target to something. Does <span class= equipbuff>(Attack/3) </span>damage. <span class= mana>4 MP </span> <span class= sklvl> 1/3 </span> <span class=skpts> 0/<span id=b4spend>8</span></span> </span> &nbsp; <button class=upgrade id=yesb4>Upgrade!</button>"
  }
  if (skillab1 == 2) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Arrow Shotgun:</span> Shoots <span class=equipbuff> 5 </span> arrows in a spread, dealing <span class=equipbuff>(Attack)</span> damage. <span class=mana>2 MP</span> <span class=sklvl>2/3</span> <span class=skpts>0/<span id=b1spend>12</span></span><span> &nbsp; <button class=upgrade id=yesb1>Upgrade!</button>"
  }
   if (skillab2 == 2) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi>Arrow Repeater:</span> Shoots up to <span class= equipbuff>7</span> arrows at the same spot, <br> meaning if you miss one, they all miss. <span class= mana>5 MP</span> <span class= sklvl>2/3</span> <span class= skpts>0/<span id=b2spend>12</span></span></span> &nbsp; <button class=upgrade id=yesb2>Upgrade!</button> "
  }
  if (skillab3 == 2) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi>Bow Push:</span> Use your bow to push off of an enemy or ally to get <br> <span class= equipbuff>10</span> metres away. <span class= mana> 2 MP</span><span class= sklvl> 2/3 </span> <span class= skpts> 0/<span id=b3spend>12</span> </span></span> &nbsp; <button class=upgrade id=yesb3>Upgrade!</button>"
  }
  if (skillab4 == 2) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi>Roped Arrow:</span> Attaches a rope to the shot arrow, allowing you to pull the target in, pull into the target, or tie the target to something. Does <span class= equipbuff>(Attack/2) </span>damage. <span class= mana>4 MP </span> <span class= sklvl> 2/3 </span> <span class=skpts> 0/<span id=b4spend>12</span></span> </span> &nbsp; <button class=upgrade id=yesb4>Upgrade!</button>"
  }
   if (skillab1 == 3) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Arrow Shotgun:</span> Shoots <span class=equipbuff> 5 </span> arrows in a spread, dealing <span class=equipbuff>(Attack * 1.3)</span> damage. <span class=mana>4 MP</span> <span class=sklvl>3/3</span> </span><span> &nbsp; "
  }
   if (skillab2 == 3) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi>Arrow Repeater:</span> Shoots up to <span class= equipbuff>10</span> arrows at the same spot, <br> meaning if you miss one, they all miss. <span class= mana>10 MP</span> <span class= sklvl>3/3</span> <span class= skpts></span></span> &nbsp; "
  }
  if (skillab3 == 3) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi>Bow Push:</span> Use your bow to push off of an enemy or ally to get <br> <span class= equipbuff>15</span> metres away. <span class= mana> 3 MP</span><span class= sklvl> 3/3 </span> <span class= skpts>  </span></span> &nbsp; "
  }
  if (skillab4 == 3) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi>Roped Arrow:</span> Attaches a rope to the shot arrow, allowing you to pull the target in, pull into the target, or tie the target to something. Does <span class= equipbuff>(Attack) </span>damage. <span class= mana>6 MP </span> <span class= sklvl> 3/3 </span> </span> </span> &nbsp; "
  }
  if (skillai1 == 0) {
    document.getElementById("moderate1").innerHTML = "<span class=lock><span class=bigboi>Bow Lock:</span>Use your bow to trap any   <span class=lockequipbuff> small </span>melee weapon <br> in the crook of your bow and twist it free. <span class=lockmana> 5 MP </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=i1spend>8</span> </span> </span> <button class=unlock id=yesi1> Unlock! </button>"
  }
  if (skillai2 == 0){
    document.getElementById("moderate2").innerHTML = "<span class=lock><span class=bigboi>Net Arrow:</span>Upon contact, a net surronds the target with <span class=lockequipbuff> 10 </span>Defense. <span class=lockmana> 5 MP </span> <span class= locksklvl>0/3</span> <span class=lockskpts> 0/<span id=i2spend>8</span> </span> </span> <button class=unlock id=yesi2> Unlock! </button>"
  } 
  if (skillai3 == 0){
    document.getElementById("moderate3").innerHTML = "<span class=lock><span class=lockbigboii>Sonic Arrow:</span>Allows you to see a  <span class=lockequipbuff>5</span> metre radius around the arrow through walls for <span class=lockequipbuff> 1 </span> minute. <span class=lockmana> 5 MP </span> <span class= locksklvl>0/3</span> <span class=lockskpts> 0/<span id=i3spend>8</span> </span> </span> <button class=unlock id=yesi3> Unlock! </button>"
  }
  if (skillai4 == 0){
    document.getElementById("moderate4").innerHTML = "<span class=lock><span class=bigboi>Arrow Cannon:</span> Shoots an arrow that breaks <span class=lockequipbuff>15%</span>  block efficiency. <br> Lowers your own block efficiency by 10% for the turn. <span class=lockmana> 4 MP </span> <span class= locksklvl>0/3</span> <span class=lockskpts> 0/<span id=i4spend>8</span> </span> </span> <button class=unlock id=yesi4> Unlock! </button>"
  }
  if (skillai1 == 1) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboi>Bow Lock:</span>Use your bow to trap any   <span class=equipbuff> small </span>melee weapon <br> in the crook of your bow and twist it free. <span class=mana> 5 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=i1spend>12</span> </span> </span> <button class=upgrade id=yesi1> Upgrade! </button> "
  }
  if (skillai2 == 1){
    document.getElementById("moderate2").innerHTML = "<span class=white><span class=bigboi>Net Arrow:</span>Upon contact, a net surronds the target with <span class=equipbuff> 10 </span>Defense. <span class=mana> 5 MP </span> <span class=sklvl>1/3</span> <span class=skpts> 0/<span id=i2spend>12</span> </span> </span> <button class=upgrade id=yesi2> Upgrade! </button>"
  } 
  if (skillai3 == 1){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboii>Sonic Arrow:</span>Allows you to see a  <span class=equipbuff>5</span> metre radius around the arrow through walls for <span class=equipbuff>1</span> minute. <span class=mana> 5 MP </span> <span class= sklvl>1/3</span> <span class=skpts> 0/<span id=i3spend>12</span> </span> </span> <button class=upgrade id=yesi3> Upgrade Radius! </button> <button class=upgrade id=yesic> Upgrade Time! </button>"
  }
  if (skillai4 == 1){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboi>Arrow Cannon:</span> Shoots an arrow that breaks <span class=equipbuff>15%</span>  block efficiency. <br> Lowers your own block efficiency by 10% for the turn. <span class=mana> 4 MP </span> <span class= sklvl>1/3</span> <span class=skpts> 0/<span id=i4spend>12</span> </span> </span> <button class=upgrade id=yesi4> Upgrade! </button>"
  }
  if (skillai1 == 2) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboi>Bow Lock:</span>Use your bow to trap any   <span class=equipbuff> small or medium </span>melee weapon <br> in the crook of your bow and twist it free. <span class=mana> 5 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=i1spend>15</span> </span> </span> <button class=upgrade id=yesi1> Upgrade! </button>"
  }
   if (skillai2 == 2){
    document.getElementById("moderate2").innerHTML = "<span class=white><span class=bigboi>Net Arrow:</span>Upon contact, a net surronds the target with <span class=equipbuff> 15 </span>Defense. <span class=mana> 5 MP </span> <span class=sklvl>2/3</span> <span class=skpts> 0/<span id=i2spend>15</span> </span> </span> <button class=upgrade id=yesi2> Upgrade! </button>"
  } 
  if (skillai3 == 2){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboi>Sonic Arrow:</span>Allows you to see a  <span class=equipbuff>8</span> metre radius around the arrow through walls for 1 minute. <span class=mana> 5 MP </span> <span class= sklvl>2/3</span> <span class=skpts> 0/<span id=i3spend>15</span> </span> </span> <button class=upgrade id=yesi3> Upgrade! </button>"
  }
  if (skillai3 == 2.5){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboi>Sonic Arrow:</span>Allows you to see a  5 metre radius around the arrow through walls for <span class=equipbuff>2</span> minutes. <span class=mana> 5 MP </span> <span class= sklvl>2/3</span> <span class=skpts> 0/<span id=i3spend>15</span> </span> </span> <button class=upgrade id=yesi3> Upgrade! </button>"
  }
  if (skillai4 == 2){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboi>Arrow Cannon:</span> Shoots an arrow that breaks <span class=equipbuff>20%</span>  block efficiency. <br> Lowers your own block efficiency by 10% for the turn. <span class=mana> 4 MP </span> <span class= sklvl>2/3</span> <span class=skpts> 0/<span id=i4spend>15</span> </span> </span> <button class=upgrade id=yesi4> Upgrade! </button>"
  }
  if (skillai1 == 3) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboi>Bow Lock:</span>Use your bow to trap any   <span class=equipbuff> small,medium or large </span>melee weapon <br> in the crook of your bow and twist it free. <span class=mana> 7 MP </span> <span class=sklvl> 3/3 </span> <span class=skpts>---</span> </span> "
  }
   if (skillai2 == 3){
    document.getElementById("moderate2").innerHTML = "<span class=white><span class=bigboi>Net Arrow:</span>Upon contact, a net surronds the target with <span class=equipbuff> 25 </span>Defense. <span class=mana> 8 MP </span> <span class=sklvl>3/3</span> <span class=skpts>---</span> </span> "
  } 
  if (skillai3 == 3){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboii>Sonic Arrow:</span>Allows you to see a  <span class=equipbuff>15</span> metre radius around the arrow through walls for 1 minute. <span class=mana> 9 MP </span> <span class= sklvl>3/3</span> <span class=skpts>---</span> </span> "
  }
  if (skillai3 == 3){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboii>Sonic Arrow:</span>Allows you to see a  5 metre radius around the arrow through walls for <span class=equipbuff>4</span> minutes. <span class=mana> 9 MP </span> <span class= sklvl>3/3</span> <span class=skpts>---</span> </span> "
  }
  if (skillai4 == 3){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboi>Arrow Cannon:</span> Shoots an arrow that breaks <span class=equipbuff>30%</span>  block efficiency. <br> Lowers your own block efficiency by 10% for the turn. <span class=mana> 6 MP </span> <span class= sklvl>3/3</span> <span class=skpts>---</span> </span>"
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
  document.getElementById("category").innerHTML = "Sense"
  if (skillbb1 == 1) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Target Practice:</span> Allows to shoot an arrow that <br> bypasses accuracy, and hits for <span class=equipbuff> (Attack/4) </span> damage. <span class=mana> 4 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=costb1>8</span> &nbsp; <button class=upgrade id=yab1>Upgrade!</button>"
  }
  if (skillbb2 == 0) {
    document.getElementById("begin2").innerHTML = "<span class=lock><span class=bigboi>Analysis: </span> Allows you to see the <span class=lockequipbuff>LF</span> of a visible enemy. <span class=lockmana> 4 MP </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=costb2>5</span> </span> &nbsp; <button class=unlock id=yab2>Unlock!</button> "
  }
  if (skillbb3 == 0) {
    document.getElementById("begin3").innerHTML = "<span class=lock><span class=bigboi> Reflex:</span> Whenever you're attacked from behind, you gain an extra <span class=lockequipbuff>7</span> <br> Speed for the duration of the attack. <span class=lockmana> (Passive) </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=costb3>5</span> &nbsp; <button class=unlock id=yab3>Unlock!</button>"
  }
  if (skillbb4 == 0) {
    document.getElementById("begin4").innerHTML = "<span class=lock><span class=bigboi> Camouflage: </span>10 minutes after you enter an area, you get a <span class=lockequipbuff> 10% </span> evasion boost. <span class=lockmana> (Passive) </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=costb4>5</span> &nbsp; <button class=unlock id=yab4>Unlock!</button>"
  }
  if (skillbb2 == 1) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi> Analysis: </span> Allows you to see the <span class=equipbuff>LF</span> of a visible enemy. <span class=mana> 4 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=costb2>8</span> </span> &nbsp; <button class=upgrade id=yab2>Upgrade!</button> "
  }
  if (skillbb3 == 1) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi> Reflex:</span> Whenever you're attacked from behind, you gain an extra <span class=equipbuff>7</span> <br> Speed for the duration of the attack. <span class=mana> (Passive) </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=costb3>8</span> &nbsp; <button class=upgrade id=yab3>Upgrade!</button>"
  }
  if (skillbb4 == 1) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi> Camouflage: </span>10 minutes after you enter an area, you get a <span class=equipbuff> 10% </span> evasion boost. <span class=mana> (Passive) </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=costb4>8</span> &nbsp; <button class=upgrade id=yab4>Upgrade!</button>"
  }
  if (skillbb1 == 2) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Target Practice:</span> Allows to shoot an arrow that <br> bypasses accuracy, and hits for <span class=equipbuff> (Attack/3) </span> damage. <span class=mana> 4 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=costb1>12</span> &nbsp; <button class=upgrade id=yab1>Upgrade!</button>"
  }
  if (skillbb2 == 2) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi>Analysis: </span> Allows you to see the  <span class=equipbuff>LF, Atk, Mag, <br> Def, Res, and Spd </span> of a visible enemy. <span class=mana> 4 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=costb2>12</span> </span> &nbsp; <button class=upgrade id=yab2>Upgrade!</button> "
  }
  if (skillbb3 == 2) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi> Reflex:</span> Whenever you're attacked from behind, you gain an extra <span class=equipbuff>12</span> <br> Speed for the duration of the attack. <span class=mana> (Passive) </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=costb3>12</span> &nbsp; <button class=unlock id=yab3>Upgrade!</button>"
  }
  if (skillbb4 == 2) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi>Camouflage: </span>10 minutes after you enter an area, you get a <span class=equipbuff> 15% </span> evasion boost. <span class=mana> (Passive) </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=costb4>8</span> &nbsp;<button class=unlock id=yab4>Upgrade!</button>"
  }
  if (skillbb1 == 3) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Target Practice:</span> Allows to shoot an arrow that <br> bypasses accuracy, and hits for <span class=equipbuff> (Attack/2) </span> damage. <span class=mana> 6 MP </span>  <span class=sklvl> 3/3 </span> <span class=skpts>---</span>  &nbsp;"
  }
  if (skillbb2 == 3) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi> Analysis: </span> Allows you to see the  <span class=equipbuff>Stats (Base 9 + Accuracy + LF)  </span> of a visible enemy. <span class=mana> 7 MP </span> <span class=sklvl> 3/3 </span> <span class=skpts>---</span> </span> &nbsp;  "
  }
  if (skillbb3 == 3) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi> Reflex:</span> Whenever you're attacked from behind, you gain an extra <span class=equipbuff>17</span> <br> Speed for the duration of the attack. <span class=mana> (Passive) </span> <span class=sklvl> 3/3 </span> <span class=skpts>---</span> &nbsp;"
  }
  if (skillbb4 == 3) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi> Camouflage: </span>10 minutes after you enter an area, you get a <span class=equipbuff> 25% </span> evasion boost. <span class=mana> (Passive) </span> <span class=sklvl> 3/3 </span> <span class=skpts>---</span> &nbsp; "
  }
  if (skillbi1 == 0) {
    document.getElementById("moderate1").innerHTML = "<span class=lock><span class=bigboi>Eagle Eyes:</span> Sharpens Eyesight to the point where you can see <span class=lockequipbuff> 1 </span> kilometre away.  <span class=lockmana> (Passive) </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=costi1>8</span> </span> </span> <button class=unlock id=yai1> Unlock! </button>"
  }
  if (skillbi2 == 0){
    document.getElementById("moderate2").innerHTML = "<span class=lock><span class=bigboi>Pressure Pulse:</span> For every <span class=lockequipbuff> 3 </span> enemies in a 10 metre radius upon use, <br> you gain 1 Awareness for one turn. <span class=lockmana>5 MP</span> <span class= locksklvl>0/3</span> <span class=lockskpts> 0/<span id=costi2>8</span> </span> </span> <button class=unlock id=yai2> Unlock! </button>"
  } 
  if (skillbi3 == 0){
    document.getElementById("moderate3").innerHTML = "<span class=lock><span class=bigboi>Wild Wind:</span> Knocks entities away from the user in all directions. <span class=lockequipbuff>(</span><span class=lockmana>12 MP</span><span class=lockequipbuff>)</span>  <span class= locksklvl>0/3</span> <span class=lockskpts> 0/<span id=costi3>8</span> </span> </span> <button class=unlock id=yai3> Unlock! </button>"
  }
  if (skillbi4 == 0){
    document.getElementById("moderate4").innerHTML = "<span class=lock><span class=lockbigboii>Expert's Eye:</span> Lets the user see all salvagable arrows through walls in a <span class=lockequipbuff>10</span> metre radius. <br> Also allows salvaging of arrows that seemed impossible to take.  <span class=lockequipbuff>(</span><span class=lockmana>8 MP</span><span class=lockequipbuff>)</span> <span class= locksklvl>0/3</span> <span class=lockskpts> 0/<span id=costi4>8</span> </span> </span> <button class=unlock id=yai4> Unlock! </button>"
  }
  if (skillbi1 == 1) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboi>Eagle Eyes:</span> Sharpens Eyesight to the point where you can see <span class=equipbuff> 1 </span> kilometre away.  <span class=mana> (Passive) </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=costi1>12</span> </span> </span> <button class=upgrade id=yai1> Upgrade! </button>"
  }
  if (skillbi2 == 1){
    document.getElementById("moderate2").innerHTML = "<span class=white><span class=bigboi>Pressure Pulse:</span> For every <span class=equipbuff> 3 </span> enemies in a 10 metre radius upon use, <br> you gain 1 Awareness for one turn. <span class=mana>5 MP</span> <span class= sklvl>1/3</span> <span class=skpts> 0/<span id=costi2>12</span> </span> </span> <button class=upgrade id=yai2> Upgrade! </button>"
  } 
  if (skillbi3 == 1){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboi>Wild Wind:</span> Knocks entities away from the user in all directions. <span class=equipbuff>(</span><span class=mana> 12 MP </span><span class=equipbuff>)</span> <span class= sklvl>1/3</span> <span class=skpts> 0/<span id=costi3>12</span> </span> </span> <button class=upgrade id=yai3> Upgrade! </button> "
  }
  if (skillbi4 == 1){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboii>Expert's Eye:</span> Lets the user see all salvagable arrows through walls in a <span class=equipbuff>10</span> metre radius. <br> Also allows salvaging of arrows that seemed impossible to take.  <span class=equipbuff>(</span><span class=mana>8 MP</span><span class=equipbuff>)</span> <span class= sklvl>1/3</span> <span class=skpts> 0/<span id=costi4>12</span> </span> </span> <button class=upgrade id=yai4> Upgrade Radius! </button> <button class=upgrade id=yaic> Decrease Mana! </button>"
  }
  if (skillbi1 == 2) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboi>Eagle Eyes:</span> Sharpens Eyesight to the point where you can see <span class=equipbuff> 2 </span> kilometres away.  <span class=mana> (Passive) </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=costi1>15</span> </span> </span> <button class=upgrade id=yai1> Upgrade! </button>"
  }
  if (skillbi2 == 2){
    document.getElementById("moderate2").innerHTML = "<span class=white><span class=bigboi>Pressure Pulse:</span> For every <span class=equipbuff> 2 </span> enemies in a 10 metre radius upon use, <br> you gain 1 Awareness for one turn. <span class=mana>5 MP</span> <span class= sklvl>2/3</span> <span class=skpts> 0/<span id=costi2>15</span> </span> </span> <button class=upgrade id=yai2> Upgrade! </button>"
  } 
  if (skillbi3 == 2){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboi>Wild Wind:</span> Knocks entities away from the user in all directions. <span class=equipbuff>(</span><span class=mana> 9 MP </span><span class=equipbuff>)</span> <span class= sklvl>2/3</span> <span class=skpts> 0/<span id=costi3>15</span> </span> </span> <button class=upgrade id=yai3> Upgrade! </button>"
  }
  if (skillbi4 == 2){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboii>Expert's Eye:</span> Lets the user see all salvagable arrows through walls in a <span class=equipbuff>15</span> metre radius. <br> Also allows salvaging of arrows that seemed impossible to take.  <span class=mana>8 MP</span> <span class= sklvl>2/3</span> <span class=skpts> 0/<span id=costi4>15</span> </span> </span> <button class=upgrade id=yai4> Upgrade! </button>"
  }
  if (skillbi4 == 2.5){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboii>Expert's Eye:</span> Lets the user see all salvagable arrows through walls in a 10 metre radius. <br> Also allows salvaging of arrows that seemed impossible to take.  <span class=equipbuff>(</span><span class=mana>7 MP</span><span class=equipbuff>)</span> <span class= sklvl>2/3</span> <span class=skpts> 0/<span id=costi4>15</span> </span> </span> <button class=upgrade id=yai4> Upgrade! </button>"
  }
  if (skillbi1 == 3) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboi>Eagle Eyes:</span> Sharpens Eyesight to the point where you can see <span class=equipbuff> 4 </span> kilometres away.  <span class=mana> (Passive) </span> <span class=sklvl> 3/3 </span> <span class=skpts>--- </span> </span> "
  }
  if (skillbi2 == 3){
    document.getElementById("moderate2").innerHTML = "<span class=white><span class=bigboi>Pressure Pulse:</span> For  <span class=equipbuff> every </span> enemy in a 10 metre radius upon use, <br> you gain 1 Awareness for one turn. <span class=mana>8 MP</span> <span class= sklvl>3/3</span> <span class=skpts>---</span> </span> "
  } 
  if (skillbi3 == 3){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboi>Wild Wind:</span> Knocks entities away from the user in all directions. <span class=equipbuff>(</span><span class=mana> 6 MP </span><span class=equipbuff>)</span> <span class= sklvl>3/3</span> <span class=skpts>---</span> </span> "
  }
  if (skillbi4 == 3){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboii>Expert's Eye:</span> Lets the user see all salvagable arrows through walls in a <span class=equipbuff>25</span> metre radius. <br> Also allows salvaging of arrows that seemed impossible to take.  <span class=mana>8 MP</span> <span class= sklvl>3/3</span> <span class=skpts> --- </span> </span> "
  }
  if (skillbi4 == 3.5){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboii>Expert's Eye:</span> Lets the user see all salvagable arrows through walls in a 10 metre radius. <br> Also allows salvaging of arrows that seemed impossible to take.  <span class=equipbuff>(</span><span class=mana>6 MP</span><span class=equipbuff>)</span> <span class= sklvl>3/3</span> <span class=skpts> --- </span> </span> "
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
   document.getElementById("category").innerHTML = "Magic (Arrow)"
  if (skillcb1 == 1) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Thunder Infusion:</span>Infuses a single arrow with lightning as it's fired. Does <span class=equipbuff> (Attack) </span> damage. <span class=mana> 2 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=pricec1>8</span> </span> </span> &nbsp; <button class=upgrade id=mhmb1>Upgrade!</button>"
  }
  if (skillcb2 == 0) {
    document.getElementById("begin2").innerHTML = "<span class=lock><span class=bigboi> Spectral Infusion: </span> Uses magic to create an arrow from thin air. This arrow does <span class=lockequipbuff>(Magic)</span> damage. <span class=lockmana> 3 MP </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=pricec2>5</span> </span> &nbsp; <button class=unlock id=mhmb2>Unlock!</button> "
  }
  if (skillcb3 == 0) {
    document.getElementById("begin3").innerHTML = "<span class=lock><span class=bigboi> Toxic Infusion:</span>Infuses an arrow with a toxin, and causes the arrow to deal <span class=lockequipbuff>30</span> damage over 5 minutes. Does (75%Attack) damage on the initial hit. <span class=lockmana> 4 MP </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=pricec3>5</span> &nbsp; <button class=unlock id=mhmb3>Unlock!</button>"
  }
  if (skillcb4 == 0) {
    document.getElementById("begin4").innerHTML = "<span class=lock><span class=bigboi> Pine Infusion: </span>Infuses an arrow with a sharp pine needle to allow it to pierce <span class=lockequipbuff>10</span> Defense. <span class=lockmana> 5 MP </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=pricec4>5</span> &nbsp; <button class=unlock id=mhmb4>Unlock!</button>"
  }
  if (skillcb2 == 1) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi> Spectral Infusion: </span> Uses magic to create an arrow from thin air. This arrow does <span class=equipbuff>(Magic)</span> damage. <span class=mana> 3 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=pricec2>8</span> </span> &nbsp; <button class=upgrade id=mhmb2>Upgrade!</button> "
  }
  if (skillcb3 == 1) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi> Toxic Infusion:</span>Infuses an arrow with a toxin, and causes the arrow to deal <span class=equipbuff>30</span> damage over 5 minutes. Does (75%Attack) damage on the initial hit. <span class=mana> 4 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=pricec3>8</span> &nbsp; <button class=upgrade id=mhmb3>Upgrade!</button>"
  }
  if (skillcb4 == 1) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi> Pine Infusion: </span>Infuses an arrow with a sharp pine needle to allow it to pierce <span class=equipbuff>10</span> Defense. <span class=mana> 5 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=pricec4>8</span> &nbsp; <button class=upgrade id=mhmb4>Upgrade!</button>"
  }
  if (skillcb1 == 2) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Thunder Infusion:</span>Infuses a single arrow with lightning as it's fired. Does <span class=equipbuff> (130%Attack) </span> damage. <span class=mana> 2 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=pricec1>12</span> &nbsp; </span> </span> <button class=upgrade id=mhmb1>Upgrade!</button>"
  }
  if (skillcb2 == 2) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi> Spectral Infusion: </span> Uses magic to create an arrow from thin air. This arrow does <span class=equipbuff>(120%Magic)</span> damage. <span class=mana> 3 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=pricec2>12</span> </span> &nbsp; <button class=upgrade id=mhmb2>Upgrade!</button> "
  }
  if (skillcb3 == 2) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi> Toxic Infusion:</span>Infuses an arrow with a toxin, and causes the arrow to deal <span class=equipbuff>50</span> damage over 5 minutes. Does (75%Attack) damage on the initial hit. <span class=mana> 4 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=pricec3>12</span> &nbsp; <button class=upgrade id=mhmb3>Upgrade!</button>"
  }
  if (skillcb4 == 2) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi> Pine Infusion: </span>Infuses an arrow with a sharp pine needle to allow it to pierce <span class=equipbuff>15</span> Defense. <span class=mana> 5 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=pricec4>12</span> &nbsp; <button class=upgrade id=mhmb4>Upgrade!</button>"
  }
  if (skillcb1 == 3) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Thunder Infusion:</span>Infuses a single arrow with lightning as it's fired. Does <span class=equipbuff> (150%Attack) </span> damage. <span class=mana> 4 MP </span> <span class=sklvl> 3/3 </span> <span class=skpts>---</span> </span>  &nbsp; "
  }
  if (skillcb2 == 3) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi> Spectral Infusion: </span> Uses magic to create an arrow from thin air. This arrow does <span class=equipbuff>(160%Magic)</span> damage. <span class=mana> 5 MP </span> <span class=sklvl> 3/3 </span> <span class=skpts>---</span> &nbsp; "
  }
  if (skillcb3 == 3) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi> Toxic Infusion:</span>Infuses an arrow with a toxin, and causes the arrow to deal <span class=equipbuff>70</span> damage over 5 minutes. Does (75%Attack) damage on the initial hit. <span class=mana> 6 MP </span> <span class=sklvl> 3/3 </span> <span class=skpts>---</span> </span>  &nbsp;"
  }
  if (skillcb4 == 3) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi> Pine Infusion: </span>Infuses an arrow with a sharp pine needle to allow it to pierce <span class=equipbuff>20</span> Defense. <span class=mana> 8 MP </span> <span class=sklvl> 3/3 </span> <span class=skpts>---</span> </span> &nbsp; "
  }
  if (skillci1 == 0) {
    document.getElementById("moderate1").innerHTML = "<span class=lock><span class=lockbigboii>Adrenaline Infusion:</span>Gives the target <span class=lockequipbuff>Atk+5 Mag+5</span> for  <span class=lockequipbuff>10</span> minutes. <span class=lockmana> 5 MP </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=pricei1>8</span> </span> </span> <button class=unlock id=mhmi1> Unlock! </button>"
  }
  if (skillci2 == 0){
    document.getElementById("moderate2").innerHTML = "<span class=lock><span class=bigboi>Flame Infusion:</span> The arrowhead is engulfed in flames, given a <span class=lockequipbuff>50%</span> chance to burn the target. <span class=lockmana> 5 MP </span> <span class= locksklvl>0/3</span> <span class=lockskpts> 0/<span id=pricei2>8</span> </span> </span> <button class=unlock id=mhmi2> Unlock! </button>"
  } 
  if (skillci3 == 0){
    document.getElementById("moderate3").innerHTML = "<span class=lock><span class=bigboi>Boom Infusion:</span>This arrow explodes upon contact. <span class=lockequipbuff>10</span> metre knockback. <span class=lockmana> 7 MP </span> <span class= locksklvl>0/3</span> <span class=lockskpts> 0/<span id=pricei3>8</span> </span> </span> <button class=unlock id=mhmi3> Unlock! </button>"
  }
  if (skillci4 == 0){
    document.getElementById("moderate4").innerHTML = "<span class=lock><span class=bigboi>Medusa Infusion:</span>An enchanted arrow that turns an object or limb to stone for <span class=lockequipbuff>5</span> minutes.<span class=lockmana> 9 MP </span> <span class= locksklvl>0/3</span> <span class=lockskpts> 0/<span id=pricei4>8</span> </span> </span> <button class=unlock id=mhmi4> Unlock! </button>"
  }
  if (skillci1 == 1) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboii>Adrenaline Infusion:</span>Gives the target <span class=equipbuff>Atk+5 Mag+5</span> for  <span class=equipbuff>10</span> minutes. <span class=mana> 5 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=pricei1>12</span> </span> </span> <button class=upgrade id=mhmi1> Upgrade Boost! </button> <button class=upgrade id=mhmic> Upgrade Time! </button>"
  }
  if (skillci2 == 1){
    document.getElementById("moderate2").innerHTML = "<span class=white><span class=bigboi>Flame Infusion:</span> The arrowhead is engulfed in flames, given a <span class=equipbuff>50%</span> chance to burn the target. <span class=mana> 5 MP </span> <span class= sklvl>1/3</span> <span class=skpts> 0/<span id=pricei2>12</span> </span> </span> <button class=upgrade id=mhmi2> Upgrade! </button>"
  } 
  if (skillci3 == 1){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboi>Boom Infusion:</span>This arrow explodes upon contact. <span class=equipbuff>10</span> metre knockback. <span class=mana> 7 MP </span> <span class= sklvl>1/3</span> <span class=skpts> 0/<span id=pricei3>12</span> </span> </span> <button class=upgrade id=mhmi3> Upgrade! </button>"
  }
  if (skillci4 == 1){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboi>Medusa Infusion:</span>An enchanted arrow that turns an object or limb to stone for <span class=equipbuff>5</span> minutes.<span class=mana> 9 MP </span> <span class= sklvl>1/3</span> <span class=skpts> 0/<span id=pricei4>12</span> </span> </span> <button class=upgrade id=mhmi4>Upgrade! </button>"
  }
  if (skillci1 == 2) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboi>Adrenaline Infusion:</span>Gives the target <span class=equipbuff>Atk+10 Mag+10</span> for  10 minutes. <span class=mana> 5 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=pricei1>15</span> </span> </span> <button class=upgrade id=mhmi1> Upgrade! </button>"
  }
  if (skillci1 == 2.5) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboi>Adrenaline Infusion:</span>Gives the target Atk+5 Mag+5 for  <span class=equipbuff>18</span> minutes. <span class=mana> 5 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=pricei1>15</span> </span> </span> <button class=upgrade id=mhmi1> Upgrade! </button>"
  }
  if (skillci2 == 2){
    document.getElementById("moderate2").innerHTML = "<span class=white><span class=bigboi>Flame Infusion:</span> The arrowhead is engulfed in flames, given a <span class=equipbuff>70%</span> chance to burn the target. <span class=mana> 5 MP </span> <span class= sklvl>2/3</span> <span class=skpts> 0/<span id=pricei2>15</span> </span> </span> <button class=upgrade id=mhmi2> Upgrade! </button>"
  } 
  if (skillci3 == 2){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboi>Boom Infusion:</span>This arrow explodes upon contact. <span class=equipbuff>15</span> metre knockback. <span class=mana> 7 MP </span> <span class= sklvl>2/3</span> <span class=skpts> 0/<span id=pricei3>15</span> </span> </span> <button class=upgrade id=mhmi3> Upgrade! </button>"
  }
  if (skillci4 == 2){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboi>Medusa Infusion:</span>An enchanted arrow that turns an object or limb to stone for <span class=equipbuff>10</span> minutes.<span class=mana> 9 MP </span> <span class= sklvl>2/3</span> <span class=skpts> 0/<span id=pricei4>15</span> </span> </span> <button class=upgrade id=mhmi4> Upgrade! </button>"
  }
  if (skillci1 == 3) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboi>Adrenaline Infusion:</span>Gives the target <span class=equipbuff>Atk+15 Mag+15</span> for  10 minutes. <span class=mana> 9 MP </span> <span class=sklvl> 3/3 </span> <span class=skpts>---</span> </span>"
  }
  if (skillci1 == 3) {
    document.getElementById("moderate1").innerHTML = "<span class=white><span class=bigboi>Adrenaline Infusion:</span>Gives the target Atk+5 Mag+5 for  <span class=equipbuff>30</span> minutes. <span class=mana> 9 MP </span> <span class=sklvl> 3/3 </span> <span class=skpts>---</span> </span>"
  }
  if (skillci2 == 3){
    document.getElementById("moderate2").innerHTML = "<span class=white><span class=bigboi>Flame Infusion:</span> The arrowhead is engulfed in flames, given a <span class=equipbuff>70%</span> chance to burn the target. <span class=mana> 5 MP </span> <span class= sklvl>3/3</span> <span class=skpts>---</span> </span> </span> "
  } 
  if (skillci3 == 3){
    document.getElementById("moderate3").innerHTML = "<span class=white><span class=bigboi>Boom Infusion:</span>This arrow explodes upon contact. <span class=equipbuff>15</span> metre knockback. <span class=mana> 7 MP </span> <span class= sklvl>3/3</span> <span class=skpts>---</span> </span> </span> "
  }
  if (skillci4 == 3){
    document.getElementById("moderate4").innerHTML = "<span class=white><span class=bigboi>Medusa Infusion:</span>An enchanted arrow that turns an object or limb to stone for <span class=equipbuff>10</span> minutes.<span class=mana> 9 MP </span> <span class= sklvl>3/3</span> <span class=skpts>---</span> </span> "
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
