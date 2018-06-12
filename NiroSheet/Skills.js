
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

function SkillsA() {
  document.getElementById("category").innerHTML = "Blade"
  if (skillab1 == 1) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Stance Shift:</span> Switches attack and speeds effects for <span class=equipbuff>3 mins</span>. <span class=mana>2 MP</span> <span class=sklvl>1/3</span> <span class=skpts>0/<span id=b1spend>8</span></span><span> &nbsp; <button class=upgrade id=yesb1>Upgrade!</button>"
  }
  if (skillab2 == 0) {
    document.getElementById("begin2").innerHTML = "<span class=lock><span class=bigboi>Chip:</span> Can penetrate <span class=lockequipbuff>10 Def</span> of armour. <span class=lockmana>2 MP</span> <span class=locksklvl>0/3</span> <span class=lockskpts>0/<span id=b2spend>5</span></span></span> &nbsp; <button class=unlock id=yesb2>Unlock!</button> "
  }
  if (skillab3 == 0) {
    document.getElementById("begin3").innerHTML = "<span class=lock><span class=bigboi>Swift Strike:</span> <span class=lockequipbuff>Speed*1.5</span> for one attack. <span class=lockmana> 3 MP</span><span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=b3spend>5</span> </span></span> &nbsp; <button class=unlock id=yesb3>Unlock!</button>"
  }
  if (skillab4 == 0) {
    document.getElementById("begin4").innerHTML = "<span class=lock><span class=bigboi>Keen Eye:</span> Identifies and strikes a target's weak point. <span class=lockequipbuff>(Effect to be determined) </span><span class=lockmana>3 MP </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=b4spend>5</span></span> </span> &nbsp; <button class=unlock id=yesb4>Unlock!</button>"
  }
  if (skillab2 == 1) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi>Chip:</span> Can penetrate <span class=equipbuff>10 Def</span> of armour. <span class=mana>2 MP</span> <span class=sklvl>1/3</span> <span class=skpts>0/<span id=b2spend>8</span></span></span> <button class=upgrade id=yesb2>Upgrade!</button> "
  }
  if (skillab3 == 1) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi>Swift Strike:</span> <span class=equipbuff>Speed*1.5</span> for one attack. <span class=mana> 3 MP</span><span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=b3spend>8</span> </span></span> <button class=upgrade id=yesb3>Upgrade!</button>"
  }
  if (skillab4 == 1) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi>Keen Eye:</span> Identifies and strikes a target's weak point. <span class=equipbuff>(Effect to be determined) </span><span class=mana>3 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=b4spend>8</span> </span> </span> <button class=upgrade id=yesb4>Upgrade!</button>"
  }
  if (skillab1 == 2) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Stance Shift:</span> Switches attack and speeds effects for <span class=equipbuff>4 mins</span>. <span class=mana>2 MP</span> <span class=sklvl>2/3</span> <span class=skpts>0/<span id=b1spend>12</span></span><span> &nbsp; <button class=upgrade id=yesb1>Upgrade!</button>"
  }
  if (skillab2 == 2) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi>Chip:</span> Can penetrate <span class=equipbuff>15 Def</span> of armour. <span class=mana>2 MP</span> <span class=sklvl>2/3</span> <span class=skpts>0/<span id=b2spend>12</span></span></span> <button class=upgrade id=yesb2>Upgrade!</button> "
  }
  if (skillab3 == 2) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi>Swift Strike:</span> <span class=equipbuff>Speed*2</span> for one attack. <span class=mana> 3 MP</span><span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=b3spend>12</span> </span></span> <button class=upgrade id=yesb3>Upgrade!</button>"
  }
  if (skillab4 == 2) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi>Keen Eye:</span> Identifies and strikes a target's weak point. <span class=equipbuff>(Effect to be determined+) </span><span class=mana>3 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=b4spend>12</span> </span> </span> <button class=upgrade id=yesb4>Upgrade!</button>"
  }
  if (skillab1 == 3) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Stance Shift:</span> Switches attack and speeds effects for <span class=equipbuff>5 mins</span>. <span class=mana>2 MP</span> <span class=sklvl>Max</span> <span class=skpts>---</span><span> &nbsp;"
  }
  if (skillab2 == 3) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi>Chip:</span> Can penetrate <span class=equipbuff>20 Def</span> of armour. <span class=mana>2 MP</span> <span class=sklvl>Max</span> <span class=skpts>---</span></span> "
  }
  if (skillab3 == 3) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi>Swift Strike:</span> <span class=equipbuff>Speed*2.5</span> for one attack. <span class=mana> 3 MP</span><span class=sklvl> Max </span> <span class=skpts> --- </span></span>"
  }
  if (skillab4 == 3) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi>Keen Eye:</span> Identifies and strikes a target's weak point. <span class=equipbuff>(Effect to be determined++) </span><span class=mana>3 MP </span> <span class=sklvl> Max </span> <span class=skpts> --- </span> </span>"
  }
  $("#yesb1").on("click", AB1upgrade)
  $("#yesb2").on("click", AB2upgrade)
  $("#yesb3").on("click", AB3upgrade)
  $("#yesb4").on("click", AB4upgrade)
}

function SkillsB() {
  document.getElementById("category").innerHTML = "Stealth"
  if (skillbb1 == 1) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Slant:</span> Allows the user to walk up a <span class=equipbuff> 60 </span> Degree slope by  (Speed/2 Metres)  <span class=mana> (Passive) </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=costb1>8</span> &nbsp; <button class=upgrade id=yab1>Upgrade!</button>"
  }
  if (skillbb2 == 0) {
    document.getElementById("begin2").innerHTML = "<span class=lock><span class=bigboi> Dark Alliance: </span> When fighting in shadows, accuracy is increased by <span class=lockequipbuff>10%</span> for you, and lowered by <span class=equipbuff>10%</span> (When attacking you) for your opponent. <span class=lockmana> (Passive) </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=costb2>5</span> </span> &nbsp; <button class=unlock id=yab2>Unlock!</button> "
  }
  if (skillbb3 == 0) {
    document.getElementById("begin3").innerHTML = "<span class=lock><span class=bigboi> Eagle Eyes:</span> Sharpens eyesight to let you see <span class=lockequipbuff>a kilometre</span> away. <span class=lockmana> (Passive) </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=costb3>5</span> &nbsp; <button class=unlock id=yab3>Unlock!</button>"
  }
  if (skillbb4 == 0) {
    document.getElementById("begin4").innerHTML = "<span class=lock><span class=bigboi> Breathing Pattern I: </span> A breathing pattern that lowers Atk by <span class=lockequipbuff>5</span> and increases your Spd by <span class=lockequipbuff>5</span>.<br> Can be disrupted. <span class=lockmana> 2 MP </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=costb4>5</span> &nbsp; <button class=unlock id=yab4>Unlock!</button>"
  }
  if (skillbb2 == 1) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi> Dark Alliance: </span> When fighting in shadows, accuracy is increased by <span class=equipbuff>10%</span> for you, and lowered by <span class=equipbuff>10%</span> (When attacking you) for your opponent. <span class=mana> (Passive) </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=costb2>8</span> </span> &nbsp; <button class=upgrade id=yab2>Upgrade!</button> "
  }
  if (skillbb3 == 1) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi> Eagle Eyes:</span> Sharpens eyesight to let you see <span class=equipbuff>a kilometre</span> away. <span class=mana> (Passive) </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=costb3>8</span> &nbsp; <button class=upgrade id=yab3>Upgrade!</button>"
  }
  if (skillbb4 == 1) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi> Breathing Pattern I: </span> A breathing pattern that lowers Atk by <span class=equipbuff>5</span> and increases your Spd by <span class=equipbuff>5</span>.<br> Can be disrupted. <span class=mana> 2 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=costb4>8</span> &nbsp; <button class=upgrade id=yab4>Upgrade!</button>"
  }
  if (skillbb1 == 2) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Slant:</span> Allows the user to walk up a <span class=equipbuff> 90 </span> Degree slope by  (Speed/2 Metres)  <span class=mana> (Passive) </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=costb1>12</span> &nbsp; <button class=upgrade id=yab1>Upgrade!</button>"
  }
  if (skillbb2 == 2) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi> Dark Alliance: </span> When fighting in shadows, accuracy is increased by <span class=equipbuff>20%</span> for you, and lowered by <span class=equipbuff>20%</span> (When attacking you) for your opponent. <span class=mana> (Passive) </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=costb2>12</span> </span> &nbsp; <button class=upgrade id=yab2>Upgrade!</button> "
  }
  if (skillbb3 == 2) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi> Eagle Eyes:</span> Sharpens eyesight to let you see <span class=equipbuff>2 kilometres</span> away. <span class=mana> (Passive) </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=costb3>12</span> &nbsp; <button class=upgrade id=yab3>Upgrade!</button>"
  }
  if (skillbb4 == 2) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi> Breathing Pattern I: </span> A breathing pattern that lowers Atk by <span class=equipbuff>5</span> and increases your Spd by <span class=equipbuff>10</span>.<br> Can be disrupted. <span class=mana> 2 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=costb4>12</span> &nbsp; <button class=upgrade id=yab4>Upgrade!</button>"
  }
  if (skillbb1 == 3) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Slant:</span> Allows the user to walk up a <span class=equipbuff> 120 </span> Degree slope by  (Speed/2 Metres)  <span class=mana> (Passive) </span> <span class=sklvl> 3/3 </span> <span class=skpts>---</span> &nbsp; "
  }
  if (skillbb2 == 3) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi> Dark Alliance: </span> When fighting in shadows, accuracy is increased by <span class=equipbuff>30%</span> for you, and lowered by <span class=equipbuff>30%</span> (When attacking you) for your opponent. <span class=mana> (Passive) </span> <span class=sklvl> 3/3 </span> <span class=skpts>---</span> &nbsp; "
  }
  if (skillbb3 == 3) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi> Eagle Eyes:</span> Sharpens eyesight to let you see <span class=equipbuff>four kilometres</span> away. <span class=mana> (Passive) </span> <span class=sklvl> 3/3 </span> <span class=skpts>---</span> &nbsp;"
  }
  if (skillbb4 == 3) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi> Breathing Pattern I: </span> A breathing pattern that lowers Atk by <span class=equipbuff>10</span> and increases your Spd by <span class=equipbuff>20</span>.<br> Can be disrupted. <span class=mana> 4 MP </span> <span class=sklvl>3/3 </span> <span class=skpts>---</span> &nbsp; "
  }


  $("#yab1").on("click", BB1upgrade)
  $("#yab2").on("click", BB2upgrade)
  $("#yab3").on("click", BB3upgrade)
  $("#yab4").on("click", BB4upgrade)
}

function SkillsC() {
   document.getElementById("category").innerHTML = "Fire Magic (Blade)"
  if (skillcb1 == 1) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Ignite:</span> <span class=equipbuff> 10% </span> chance to burn on hit. <span class=mana> (Passive) </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=pricec1>8</span> &nbsp; <button class=upgrade id=mhmb1>Upgrade!</button>"
  }
  if (skillcb2 == 0) {
    document.getElementById("begin2").innerHTML = "<span class=lock><span class=bigboi> Heat Wave: </span> Mid range fire elemental slash. <span class=lockequipbuff>(Atk + Mag/3)</span> <span class=lockmana> 3 MP </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=pricec2>5</span> </span> &nbsp; <button class=unlock id=mhmb2>Unlock!</button> "
  }
  if (skillcb3 == 0) {
    document.getElementById("begin3").innerHTML = "<span class=lock><span class=bigboi> Blade Burn:</span> A searing strike that softens an opponents weapon. Fire elemental.<br> (Drops the weapon's damage by <span class=lockequipbuff>15%</span> for 2 minutes)  <span class=lockmana> 5 MP </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=pricec3>5</span> &nbsp; <button class=unlock id=mhmb3>Unlock!</button>"
  }
  if (skillcb4 == 0) {
    document.getElementById("begin4").innerHTML = "<span class=lock><span class=bigboi> Smoke Screen: </span> Burns the ground to summon smoke around the user that  make enemies <br> attack one of <span class=lockequipbuff>2</span> positions instead of players in the smoke until they attack again.<span class=lockmana> 2 MP </span> <span class=locksklvl> 0/3 </span> <span class=lockskpts> 0/<span id=pricec4>5</span> &nbsp; <button class=unlock id=mhmb4>Unlock!</button>"
  }
  if (skillcb2 == 1) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi> Heat Wave: </span> Mid range fire elemental slash. <span class=equipbuff>(Atk + Mag/3)</span> <span class=mana> 3 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=pricec2>8</span> </span> &nbsp; <button class=upgrade id=mhmb2>Upgrade!</button> "
  }
  if (skillcb3 == 1) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi> Blade Burn:</span> A searing strike that softens an opponents weapon. Fire elemental.<br> (Drops the weapon's damage by <span class=equipbuff>15%</span> for 2 minutes) <span class=mana> 5 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=pricec3>8</span> &nbsp; <button class=upgrade id=mhmb3>Upgrade!</button>"
  }
  if (skillcb4 == 1) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi> Smoke Screen: </span> Burns the ground to summon smoke around the user that  make enemies <br> attack one of <span class=equipbuff>2</span> positions instead of players in the smoke until they attack again.<span class=mana> 2 MP </span> <span class=sklvl> 1/3 </span> <span class=skpts> 0/<span id=pricec4>8</span> &nbsp; <button class=upgrade id=mhmb4>Upgrade!</button>"
  }
  if (skillcb1 == 2) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Ignite:</span> <span class=equipbuff> 25% </span> chance to burn on hit. <span class=mana> (Passive) </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=pricec1>12</span> &nbsp; <button class=upgrade id=mhmb1>Upgrade!</button>"
  }
  if (skillcb2 == 2) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi>Heat Wave: </span> Mid range fire elemental slash. <span class=equipbuff>(Atk + Mag/2)</span> <span class=mana> 3 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=pricec2>12</span> </span> &nbsp; <button class=upgrade id=mhmb2>Upgrade!</button> "
  }
  if (skillcb3 == 2) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi> Blade Burn:</span> A searing strike that softens an opponents weapon. Fire elemental. <br> (Drops the weapon's damage by <span class=equipbuff>25%</span> for 2 minutes) <span class=mana> 5 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=pricec3>12</span> &nbsp; <button class=upgrade id=mhmb3>Upgrade!</button>"
  }
  if (skillcb4 == 2) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi> Smoke Screen: </span> Burns the ground to summon smoke around the user that  make enemies <br> attack one of <span class=equipbuff>3</span> positions instead of players in the smoke until they attack again.<span class=mana> 2 MP </span> <span class=sklvl> 2/3 </span> <span class=skpts> 0/<span id=pricec4>12</span> &nbsp; <button class=upgrade id=mhmb4>Upgrade!</button>"
  }
  if (skillcb1 == 3) {
    document.getElementById("begin1").innerHTML = "<span class=white><span class=bigboi>Ignite:</span> <span class=equipbuff> 50% </span> chance to burn on hit. <span class=mana> (Passive) </span> <span class=sklvl> 3/3 </span> <span class=skpts>---</span> &nbsp; "
  }
  if (skillcb2 == 3) {
    document.getElementById("begin2").innerHTML = "<span class=white><span class=bigboi>Heat Wave: </span> Mid range fire elemental slash. <span class=equipbuff>(Atk + Mag)</span> <span class=mana> 5 MP </span> <span class=sklvl> 3/3 </span> <span class=skpts>---</span> &nbsp; "
  }
  if (skillcb3 == 3) {
    document.getElementById("begin3").innerHTML = "<span class=white><span class=bigboi> Blade Burn:</span> A searing strike that softens an opponents weapon. Fire elemental. <br> (Drops the weapon's damage by <span class=equipbuff>40%</span> for 2 minutes and disables weapon enchantments) <span class=mana> 8 MP </span> <span class=sklvl> 3/3 </span> <span class=skpts>---</span> &nbsp;"
  }
  if (skillcb4 == 3) {
    document.getElementById("begin4").innerHTML = "<span class=white><span class=bigboi> Smoke Screen: </span> Burns the ground to summon smoke around the user that make enemies <br> attack one of <span class=equipbuff>4</span> positions instead of players in the smoke until they attack again.<span class=mana> 4 MP </span> <span class=sklvl>3/3 </span> <span class=skpts>---</span> &nbsp; "
  }


  $("#mhmb1").on("click", CB1upgrade)
  $("#mhmb2").on("click", CB2upgrade)
  $("#mhmb3").on("click", CB3upgrade)
  $("#mhmb4").on("click", CB4upgrade)
}
