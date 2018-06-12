function flameDebuff() {
  if (character == "alpha") {
  firetick = Math.round(mtlf / 8)
  $("#chars").append("<span id=debuff3> Flaming <br> </span> ")
  $("#debuff3").css("color", "#a92311")
  }
  if (character == "omega") {
  ofiretick = Math.round(omlf / 8)
  $("#ochars").append("<span id=odebuff3> Flaming <br> </span> ")
  $("#odebuff3").css("color", "#a92311")
  }
}

function noFlameDebuff() {
  if (character == "alpha") {
  firetick = 0
  $("#debuff3").html(" ")
  $("span#debuff3").replaceWith(" ")
  }
  if (character == "omega") {
  ofiretick = 0
  $("#odebuff3").html(" ")
  $("span#odebuff3").replaceWith(" ")
  }
}

function poisonDebuff() {
  if (character == "alpha") {
  poisonturn = 1
  poisontick = Math.round(mtlf / 16) * poisonturn
  $("#chars").append("<span id=debuff6> Poisoned <br> </span> ")
  $("#debuff6").css("color", "#015b13")
  }
  if (character == "omega") {
  poisonturn = 1
  poisontick = Math.round(omlf / 16) * poisonturn
  $("#ochars").append("<span id=odebuff6> Poisoned <br> </span> ")
  $("#odebuff6").css("color", "#015b13")
  }
}

function noPoisonDebuff() {
  if (character == "alpha") {
  poisonturn = 0
  poisontick = 0
  $("#debuff6").html(" ")
  $("span#debuff6").replaceWith(" ")
  }
  if (character == "omega") {
  opoisonturn = 0
  opoisontick = 0
  $("#odebuff6").html(" ")
  $("span#odebuff6").replaceWith(" ")
  }
}

function blindDebuff() {
  if (character == "alpha") {
  $("#closesight").html("0")
  $("#midsight").html("0")
  $("#farsight").html("0")
  $("#closes").css("color", "#664444")
  $("#mids").css("color", "#664444")
  $("#fars").css("color", "#664444")
  $("#chars").append("<span id=debuff1> Blinded <br> </span> ")
  $("#debuff1").css("color", "#878b91")
  }
  if (character == "omega") {
  $("#oclosesight").html("0")
  $("#omidsight").html("0")
  $("#ofarsight").html("0")
  $("#ocloses").css("color", "#444466")
  $("#omids").css("color", "#444466")
  $("#ofars").css("color", "#444466")
  $("#ochars").append("<span id=odebuff1> Blinded <br> </span> ")
  $("#odebuff1").css("color", "#878b91")
  }
}

function noBlindDebuff() {
  if (character == "alpha") {
  $("#closesight").html(closeacc)
  $("#midsight").html(midacc)
  $("#farsight").html(faracc)
  $("#closes").css("color", "#e50d0d")
  $("#mids").css("color", "#e50d0d")
  $("#fars").css("color", "#e50d0d")
  $("#debuff1").html(" ")
  $("span#debuff1").replaceWith(" ")
  }
  if (character == "omega") {
  $("#oclosesight").html(ocloseacc)
  $("#omidsight").html(omidacc)
  $("#ofarsight").html(ofaracc)
  $("#ocloses").css("color", "#0d0de5")
  $("#omids").css("color", "#0d0de5")
  $("#ofars").css("color", "#0d0de5")
  $("#odebuff1").html(" ")
  $("span#odebuff1").replaceWith(" ")
  }
}

function breathPatternIOne() {
  ratk = ratk - 5
  ratkl = ratkl - 5
  ratkr = ratkr - 5
  rspd = rspd + 5
  breath = 11
  EquipUpdate();
}

function breathPatternITwo() {
  ratk = ratk - 5
  ratkl = ratkl - 5
  ratkr = ratkr - 5
  rspd = rspd + 10
  breath = 12
  EquipUpdate();
}

function breathPatternIThree() {
  ratk = ratk - 10
  ratkl = ratkl - 10
  ratkr = ratkr - 10
  rspd = rspd + 20
  breath = 13
  EquipUpdate();
}

function breathPatternZero() {
  if (breath == 11) {
    ratk = ratk + 5
    ratkl = ratkl + 5
    ratkr = ratkr + 5
    rspd = rspd - 5
    $("#buff2").html(" ")
    $("span#buff2").replaceWith(" ")
  }
  if (breath == 12) {
    ratk = ratk + 5
    ratkl = ratkl + 5
    ratkr = ratkr + 5
    rspd = rspd - 10
    $("#buff2").html(" ")
    $("span#buff2").replaceWith(" ")
  }
  if (breath == 13) {
    ratk = ratk + 10
    ratkl = ratkl + 10
    ratkr = ratkr + 10
    rspd = rspd - 20
    $("#buff2").html(" ")
    $("span#buff2").replaceWith(" ")
  }
  breath = 0
  EquipUpdate();
}

function customBuff() {
  ratk = catk + ratk
//  ratkl = catkl + ratkl
//  ratkr = catkr + ratkr
  rmag = cmag + rmag
  rdef = cdef + rdef
  rres = cres + rres
  rspd = cspd + rspd
  rstr = cstr + rstr
  rsth = csth + rsth
  rawr = cawr + rawr
  rrfx = crfx + rrfx
}

function oCustomBuff() {
  oratk = ocatk + oratk
//  oratkl = ocatkl + oratkl
//  oratkr = ocatkr + oratkr
  ormag = ocmag + ormag
  ordef = ocdef + ordef
  orres = ocres + orres
  orspd = ocspd + orspd
  orstr = ocstr + orstr
  orsth = ocsth + orsth
  orawr = ocawr + orawr
  orrfx = ocrfx + orrfx
}

function noCustomBuff() {
  ratk = ratk - catk
//  ratkl = ratkl - catkl
//  ratkr = ratkr - catkr
  rmag = rmag - cmag
  rdef = rdef - cdef
  rres = rres - cres
  rspd = rspd - cspd
  rstr = rstr - cstr
  rsth = rsth - csth
  rawr = rawr - cawr
  rrfx = rrfx - crfx
  $("#" + sbuffnum).html(" ")
  $("span#" + sbuffnum).replaceWith(" ")
}

function noOCustomBuff() {
  oratk = oratk - ocatk
//  oratkl = oratkl - ocatkl
//  oratkr = oratkr - ocatkr
  ormag = ormag - ocmag
  ordef = ordef - ocdef
  orres = orres - ocres
  orspd = orspd - ocspd
  orstr = orstr - ocstr
  orsth = orsth - ocsth
  orawr = orawr - ocawr
  orrfx = orrfx - ocrfx
  $("#o" + sobuffnum).html(" ")
  $("span#o" + sobuffnum).replaceWith(" ")
}
