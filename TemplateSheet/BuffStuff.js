function flameDebuff() {
  firetick = Math.round(mlf / 8)
}

function noFlameDebuff() {
  firetick = 0
}

function poisonDebuff() {
  poisonturn = 1
  poisontick = Math.round(mlf / 16) * poisonturn
}

function noPoisonDebuff() {
  poisonturn = 0
  poisontick = 0
}

function blindDebuff() {
  $("#closesight").html("0")
  $("#midsight").html("0")
  $("#farsight").html("0")
  $("#closes").css("color", "#444444")
  $("#mids").css("color", "#444444")
  $("#fars").css("color", "#444444")
}

function noBlindDebuff() {
  $("#closesight").html(closeacc)
  $("#midsight").html(midacc)
  $("#farsight").html(faracc)
  $("#closes").css("color", "#ffffff")
  $("#mids").css("color", "#ffffff")
  $("#fars").css("color", "#ffffff")
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
  ratkl = catkl + ratkl
  ratkr = catkr + ratkr
  rmag = cmag + rmag
  rdef = cdef + rdef
  rres = cres + rres
  rspd = cspd + rspd
  rstr = cstr + rstr
  rsth = csth + rsth
  rawr = cawr + rawr
  rrfx = crfx + rrfx
}

function noCustomBuff() {
  ratk = ratk - catk
  ratkl = ratkl - catkl
  ratkr = ratkr - catkr
  rmag = rmag - cmag
  rdef = rdef - cdef
  rres = rres - cres
  rspd = rspd - cspd
  rstr = rstr - cstr
  rsth = rsth - csth
  rawr = rawr - cawr
  rrfx = rrfx - crfx
}
