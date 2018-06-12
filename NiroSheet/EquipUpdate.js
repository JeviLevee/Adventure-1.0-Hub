function EquipUpdate() {
  //eatk
  eatkl = 0
  eatkr = 0
  emag = 0
  edef = 0
  eres = 0
  espd = 0
  estr = 0
  esth = 0
  eawr = 0
  erfx = 0

  if (Number(document.getElementById("aleft").innerHTML) == 0) {
    $("#anleft").html(" ")
    $("#aleft").html(" ")
  } else {
    eatkl = eatkl + Number(document.getElementById("aleft").innerHTML)
    if (Number(document.getElementById("aleft").innerHTML) > 0) {
      $("#anleft").html(" Atk+")
      $("#anleft").css("color", "#00aa00")
      $("#aleft").css("color", "#00aa00")
    } else {
      $("#anleft").html(" Atk")
      $("#anleft").css("color", "#aa0000")
      $("#aleft").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("aright").innerHTML) == 0) {
    $("#anright").html(" ")
    $("#aright").html(" ")
  } else {
    eatkr = eatkr + Number(document.getElementById("aright").innerHTML)
    if (Number(document.getElementById("aright").innerHTML) > 0) {
      $("#anright").html(" Atk+")
      $("#anright").css("color", "#00aa00")
      $("#aright").css("color", "#00aa00")
    } else {
      $("#anright").html(" Atk")
      $("#anright").css("color", "#aa0000")
      $("#aright").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("ahelm").innerHTML) == 0) {
    $("#anhelm").html(" ")
    $("#ahelm").html(" ")
  } else {
    eatk = eatk + Number(document.getElementById("ahelm").innerHTML)
    if (Number(document.getElementById("ahelm").innerHTML) > 0) {
      $("#anhelm").html(" Atk+")
      $("#anhelm").css("color", "#00aa00")
      $("#ahelm").css("color", "#00aa00")
    } else {
      $("#anhelm").html(" Atk")
      $("#anhelm").css("color", "#aa0000")
      $("#ahelm").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("aplate").innerHTML) == 0) {
    $("#anplate").html(" ")
    $("#aplate").html(" ")
  } else {
    eatk = eatk + Number(document.getElementById("aplate").innerHTML)
    if (Number(document.getElementById("aplate").innerHTML) > 0) {
      $("#anplate").html(" Atk+")
      $("#anplate").css("color", "#00aa00")
      $("#aplate").css("color", "#00aa00")
    } else {
      $("#anplate").html(" Atk")
      $("#anplate").css("color", "#aa0000")
      $("#aplate").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("aleg").innerHTML) == 0) {
    $("#anleg").html(" ")
    $("#aleg").html(" ")
  } else {
    eatk = eatk + Number(document.getElementById("aleg").innerHTML)
    if (Number(document.getElementById("aleg").innerHTML) > 0) {
      $("#anleg").html(" Atk+")
      $("#anleg").css("color", "#00aa00")
      $("#aleg").css("color", "#00aa00")
    } else {
      $("#anleg").html(" Atk")
      $("#anleg").css("color", "#aa0000")
      $("#aleg").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("aboot").innerHTML) == 0) {
    $("#anboot").html(" ")
    $("#aboot").html(" ")
  } else {
    eatk = eatk + Number(document.getElementById("aboot").innerHTML)
    if (Number(document.getElementById("aboot").innerHTML) > 0) {
      $("#anboot").html(" Atk+")
      $("#anboot").css("color", "#00aa00")
      $("#aboot").css("color", "#00aa00")
    } else {
      $("#anboot").html(" Atk")
      $("#anboot").css("color", "#aa0000")
      $("#aboot").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("aacc1").innerHTML) == 0) {
    $("#anacc1").html(" ")
    $("#aacc1").html(" ")
  } else {
    eatk = eatk + Number(document.getElementById("aacc1").innerHTML)
    if (Number(document.getElementById("aacc1").innerHTML) > 0) {
      $("#anacc1").html(" Atk+")
      $("#anacc1").css("color", "#00aa00")
      $("#aacc1").css("color", "#00aa00")
    } else {
      $("#anacc1").html(" Atk")
      $("#anacc1").css("color", "#aa0000")
      $("#aacc1").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("aacc2").innerHTML) == 0) {
    $("#anacc2").html(" ")
    $("#aacc2").html(" ")
  } else {
    eatk = eatk + Number(document.getElementById("aacc2").innerHTML)
    if (Number(document.getElementById("aacc2").innerHTML) > 0) {
      $("#anacc2").html(" Atk+")
      $("#anacc2").css("color", "#00aa00")
      $("#aacc2").css("color", "#00aa00")
    } else {
      $("#anacc2").html(" Atk")
      $("#anacc2").css("color", "#aa0000")
      $("#aacc2").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("aacc3").innerHTML) == 0) {
    $("#anacc3").html(" ")
    $("#aacc3").html(" ")
  } else {
    eatk = eatk + Number(document.getElementById("aacc3").innerHTML)
    if (Number(document.getElementById("aacc3").innerHTML) > 0) {
      $("#anacc3").html(" Atk+")
      $("#anacc3").css("color", "#00aa00")
      $("#aacc3").css("color", "#00aa00")
    } else {
      $("#anacc3").html(" Atk")
      $("#anacc3").css("color", "#aa0000")
      $("#aacc3").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("aacc4").innerHTML) == 0) {
    $("#anacc4").html(" ")
    $("#aacc4").html(" ")
  } else {
    eatk = eatk + Number(document.getElementById("aacc4").innerHTML)
    if (Number(document.getElementById("aacc4").innerHTML) > 0) {
      $("#anacc4").html(" Atk+")
      $("#anacc4").css("color", "#00aa00")
      $("#aacc4").css("color", "#00aa00")
    } else {
      $("#anacc4").html(" Atk")
      $("#anacc4").css("color", "#aa0000")
      $("#aacc4").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("aacc5").innerHTML) == 0) {
    $("#anacc5").html(" ")
    $("#aacc5").html(" ")
  } else {
    eatk = eatk + Number(document.getElementById("aacc5").innerHTML)
    if (Number(document.getElementById("aacc5").innerHTML) > 0) {
      $("#anacc5").html(" Atk+")
      $("#anacc5").css("color", "#00aa00")
      $("#aacc5").css("color", "#00aa00")
    } else {
      $("#anacc5").html(" Atk")
      $("#anacc5").css("color", "#aa0000")
      $("#aacc5").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("acape").innerHTML) == 0) {
    $("#ancape").html(" ")
    $("#acape").html(" ")
  } else {
    eatk = eatk + Number(document.getElementById("acape").innerHTML)
    if (Number(document.getElementById("acape").innerHTML) > 0) {
      $("#ancape").html(" Atk+")
      $("#ancape").css("color", "#00aa00")
      $("#acape").css("color", "#00aa00")
    } else {
      $("#ancape").html(" Atk")
      $("#ancape").css("color", "#aa0000")
      $("#acape").css("color", "#aa0000")
    }
  }

  //emag

  if (Number(document.getElementById("mleft").innerHTML) == 0) {
    $("#mnleft").html(" ")
    $("#mleft").html(" ")
  } else {
    emag = emag + Number(document.getElementById("mleft").innerHTML)
    if (Number(document.getElementById("mleft").innerHTML) > 0) {
      $("#mnleft").html(" Mag+")
      $("#mnleft").css("color", "#00aa00")
      $("#mleft").css("color", "#00aa00")
    } else {
      $("#mnleft").html(" Mag")
      $("#mnleft").css("color", "#aa0000")
      $("#mleft").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("mright").innerHTML) == 0) {
    $("#mnright").html(" ")
    $("#mright").html(" ")
  } else {
    emag = emag + Number(document.getElementById("mright").innerHTML)
    if (Number(document.getElementById("mright").innerHTML) > 0) {
      $("#mnright").html(" Mag+")
      $("#mnright").css("color", "#00aa00")
      $("#mright").css("color", "#00aa00")
    } else {
      $("#mnright").html(" Mag")
      $("#mnright").css("color", "#aa0000")
      $("#mright").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("mhelm").innerHTML) == 0) {
    $("#mnhelm").html(" ")
    $("#mhelm").html(" ")
  } else {
    emag = emag + Number(document.getElementById("mhelm").innerHTML)
    if (Number(document.getElementById("mhelm").innerHTML) > 0) {
      $("#mnhelm").html(" Mag+")
      $("#mnhelm").css("color", "#00aa00")
      $("#mhelm").css("color", "#00aa00")
    } else {
      $("#mnhelm").html(" Mag")
      $("#mnhelm").css("color", "#aa0000")
      $("#mhelm").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("mplate").innerHTML) == 0) {
    $("#mnplate").html(" ")
    $("#mplate").html(" ")
  } else {
    emag = emag + Number(document.getElementById("mplate").innerHTML)
    if (Number(document.getElementById("mplate").innerHTML) > 0) {
      $("#mnplate").html(" Mag+")
      $("#mnplate").css("color", "#00aa00")
      $("#mplate").css("color", "#00aa00")
    } else {
      $("#mnplate").html(" Mag")
      $("#mnplate").css("color", "#aa0000")
      $("#mplate").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("mleg").innerHTML) == 0) {
    $("#mnleg").html(" ")
    $("#mleg").html(" ")
  } else {
    emag = emag + Number(document.getElementById("mleg").innerHTML)
    if (Number(document.getElementById("mleg").innerHTML) > 0) {
      $("#mnleg").html(" Mag+")
      $("#mnleg").css("color", "#00aa00")
      $("#mleg").css("color", "#00aa00")
    } else {
      $("#mnleg").html(" Mag")
      $("#mnleg").css("color", "#aa0000")
      $("#mleg").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("mboot").innerHTML) == 0) {
    $("#mnboot").html(" ")
    $("#mboot").html(" ")
  } else {
    emag = emag + Number(document.getElementById("mboot").innerHTML)
    if (Number(document.getElementById("mboot").innerHTML) > 0) {
      $("#mnboot").html(" Mag+")
      $("#mnboot").css("color", "#00aa00")
      $("#mboot").css("color", "#00aa00")
    } else {
      $("#mnboot").html(" Mag")
      $("#mnboot").css("color", "#aa0000")
      $("#mboot").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("macc1").innerHTML) == 0) {
    $("#mnacc1").html(" ")
    $("#macc1").html(" ")
  } else {
    emag = emag + Number(document.getElementById("macc1").innerHTML)
    if (Number(document.getElementById("macc1").innerHTML) > 0) {
      $("#mnacc1").html(" Mag+")
      $("#mnacc1").css("color", "#00aa00")
      $("#macc1").css("color", "#00aa00")
    } else {
      $("#mnacc1").html(" Mag")
      $("#mnacc1").css("color", "#aa0000")
      $("#macc1").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("macc2").innerHTML) == 0) {
    $("#mnacc2").html(" ")
    $("#macc2").html(" ")
  } else {
    emag = emag + Number(document.getElementById("macc2").innerHTML)
    if (Number(document.getElementById("macc2").innerHTML) > 0) {
      $("#mnacc2").html(" Mag+")
      $("#mnacc2").css("color", "#00aa00")
      $("#macc2").css("color", "#00aa00")
    } else {
      $("#mnacc2").html(" Mag")
      $("#mnacc2").css("color", "#aa0000")
      $("#macc2").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("macc3").innerHTML) == 0) {
    $("#mnacc3").html(" ")
    $("#macc3").html(" ")
  } else {
    emag = emag + Number(document.getElementById("macc3").innerHTML)
    if (Number(document.getElementById("macc3").innerHTML) > 0) {
      $("#mnacc3").html(" Mag+")
      $("#mnacc3").css("color", "#00aa00")
      $("#macc3").css("color", "#00aa00")
    } else {
      $("#mnacc3").html(" Mag")
      $("#mnacc3").css("color", "#aa0000")
      $("#macc3").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("macc4").innerHTML) == 0) {
    $("#mnacc4").html(" ")
    $("#macc4").html(" ")
  } else {
    emag = emag + Number(document.getElementById("macc4").innerHTML)
    if (Number(document.getElementById("macc4").innerHTML) > 0) {
      $("#mnacc4").html(" Mag+")
      $("#mnacc4").css("color", "#00aa00")
      $("#macc4").css("color", "#00aa00")
    } else {
      $("#mnacc4").html(" Mag")
      $("#mnacc4").css("color", "#aa0000")
      $("#macc4").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("macc5").innerHTML) == 0) {
    $("#mnacc5").html(" ")
    $("#macc5").html(" ")
  } else {
    emag = emag + Number(document.getElementById("macc5").innerHTML)
    if (Number(document.getElementById("macc5").innerHTML) > 0) {
      $("#mnacc5").html(" Mag+")
      $("#mnacc5").css("color", "#00aa00")
      $("#macc5").css("color", "#00aa00")
    } else {
      $("#mnacc5").html(" Mag")
      $("#mnacc5").css("color", "#aa0000")
      $("#macc5").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("mcape").innerHTML) == 0) {
    $("#mncape").html(" ")
    $("#mcape").html(" ")
  } else {
    emag = emag + Number(document.getElementById("mcape").innerHTML)
    if (Number(document.getElementById("mcape").innerHTML) > 0) {
      $("#mncape").html(" Mag+")
      $("#mncape").css("color", "#00aa00")
      $("#mcape").css("color", "#00aa00")
    } else {
      $("#mncape").html(" Mag")
      $("#mncape").css("color", "#aa0000")
      $("#mcape").css("color", "#aa0000")
    }
  }

  //edef

  if (Number(document.getElementById("dleft").innerHTML) == 0) {
    $("#dnleft").html(" ")
    $("#dleft").html(" ")
  } else {
    edef = edef + Number(document.getElementById("dleft").innerHTML)
    if (Number(document.getElementById("dleft").innerHTML) > 0) {
      $("#dnleft").html(" Def+")
      $("#dnleft").css("color", "#00aa00")
      $("#dleft").css("color", "#00aa00")
    } else {
      $("#dnleft").html(" Def")
      $("#dnleft").css("color", "#aa0000")
      $("#dleft").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("dright").innerHTML) == 0) {
    $("#dnright").html(" ")
    $("#dright").html(" ")
  } else {
    edef = edef + Number(document.getElementById("dright").innerHTML)
    if (Number(document.getElementById("dright").innerHTML) > 0) {
      $("#dnright").html(" Def+")
      $("#dnright").css("color", "#00aa00")
      $("#dright").css("color", "#00aa00")
    } else {
      $("#dnright").html(" Def")
      $("#dnright").css("color", "#aa0000")
      $("#dright").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("dhelm").innerHTML) == 0) {
    $("#dnhelm").html(" ")
    $("#dhelm").html(" ")
  } else {
    edef = edef + Number(document.getElementById("dhelm").innerHTML)
    if (Number(document.getElementById("dhelm").innerHTML) > 0) {
      $("#dnhelm").html(" Def+")
      $("#dnhelm").css("color", "#00aa00")
      $("#dhelm").css("color", "#00aa00")
    } else {
      $("#dnhelm").html(" Def")
      $("#dnhelm").css("color", "#aa0000")
      $("#dhelm").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("dplate").innerHTML) == 0) {
    $("#dnplate").html(" ")
    $("#dplate").html(" ")
  } else {
    edef = edef + Number(document.getElementById("dplate").innerHTML)
    if (Number(document.getElementById("dplate").innerHTML) > 0) {
      $("#dnplate").html(" Def+")
      $("#dnplate").css("color", "#00aa00")
      $("#dplate").css("color", "#00aa00")
    } else {
      $("#dnplate").html(" Def")
      $("#dnplate").css("color", "#aa0000")
      $("#dplate").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("dleg").innerHTML) == 0) {
    $("#dnleg").html(" ")
    $("#dleg").html(" ")
  } else {
    edef = edef + Number(document.getElementById("dleg").innerHTML)
    if (Number(document.getElementById("dleg").innerHTML) > 0) {
      $("#dnleg").html(" Def+")
      $("#dnleg").css("color", "#00aa00")
      $("#dleg").css("color", "#00aa00")
    } else {
      $("#dnleg").html(" Def")
      $("#dnleg").css("color", "#aa0000")
      $("#dleg").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("dboot").innerHTML) == 0) {
    $("#dnboot").html(" ")
    $("#dboot").html(" ")
  } else {
    edef = edef + Number(document.getElementById("dboot").innerHTML)
    if (Number(document.getElementById("dboot").innerHTML) > 0) {
      $("#dnboot").html(" Def+")
      $("#dnboot").css("color", "#00aa00")
      $("#dboot").css("color", "#00aa00")
    } else {
      $("#dnboot").html(" Def")
      $("#dnboot").css("color", "#aa0000")
      $("#dboot").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("dacc1").innerHTML) == 0) {
    $("#dnacc1").html(" ")
    $("#dacc1").html(" ")
  } else {
    edef = edef + Number(document.getElementById("dacc1").innerHTML)
    if (Number(document.getElementById("dacc1").innerHTML) > 0) {
      $("#dnacc1").html(" Def+")
      $("#dnacc1").css("color", "#00aa00")
      $("#dacc1").css("color", "#00aa00")
    } else {
      $("#dnacc1").html(" Def")
      $("#dnacc1").css("color", "#aa0000")
      $("#dacc1").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("dacc2").innerHTML) == 0) {
    $("#dnacc2").html(" ")
    $("#dacc2").html(" ")
  } else {
    edef = edef + Number(document.getElementById("dacc2").innerHTML)
    if (Number(document.getElementById("dacc2").innerHTML) > 0) {
      $("#dnacc2").html(" Def+")
      $("#dnacc2").css("color", "#00aa00")
      $("#dacc2").css("color", "#00aa00")
    } else {
      $("#dnacc2").html(" Def")
      $("#dnacc2").css("color", "#aa0000")
      $("#dacc2").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("dacc3").innerHTML) == 0) {
    $("#dnacc3").html(" ")
    $("#dacc3").html(" ")
  } else {
    edef = edef + Number(document.getElementById("dacc3").innerHTML)
    if (Number(document.getElementById("dacc3").innerHTML) > 0) {
      $("#dnacc3").html(" Def+")
      $("#dnacc3").css("color", "#00aa00")
      $("#dacc3").css("color", "#00aa00")
    } else {
      $("#dnacc3").html(" Def")
      $("#dnacc3").css("color", "#aa0000")
      $("#dacc3").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("dacc4").innerHTML) == 0) {
    $("#dnacc4").html(" ")
    $("#dacc4").html(" ")
  } else {
    edef = edef + Number(document.getElementById("dacc4").innerHTML)
    if (Number(document.getElementById("dacc4").innerHTML) > 0) {
      $("#dnacc4").html(" Def+")
      $("#dnacc4").css("color", "#00aa00")
      $("#dacc4").css("color", "#00aa00")
    } else {
      $("#dnacc4").html(" Def")
      $("#dnacc4").css("color", "#aa0000")
      $("#dacc4").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("dacc5").innerHTML) == 0) {
    $("#dnacc5").html(" ")
    $("#dacc5").html(" ")
  } else {
    edef = edef + Number(document.getElementById("dacc5").innerHTML)
    if (Number(document.getElementById("dacc5").innerHTML) > 0) {
      $("#dnacc5").html(" Def+")
      $("#dnacc5").css("color", "#00aa00")
      $("#dacc5").css("color", "#00aa00")
    } else {
      $("#dnacc5").html(" Def")
      $("#dnacc5").css("color", "#aa0000")
      $("#dacc5").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("dcape").innerHTML) == 0) {
    $("#dncape").html(" ")
    $("#dcape").html(" ")
  } else {
    edef = edef + Number(document.getElementById("dcape").innerHTML)
    if (Number(document.getElementById("dcape").innerHTML) > 0) {
      $("#dncape").html(" Def+")
      $("#dncape").css("color", "#00aa00")
      $("#dcape").css("color", "#00aa00")
    } else {
      $("#dncape").html(" Def")
      $("#dncape").css("color", "#aa0000")
      $("#dcape").css("color", "#aa0000")
    }
  }

  //eres

  if (Number(document.getElementById("rleft").innerHTML) == 0) {
    $("#rnleft").html(" ")
    $("#rleft").html(" ")
  } else {
    eres = eres + Number(document.getElementById("rleft").innerHTML)
    if (Number(document.getElementById("rleft").innerHTML) > 0) {
      $("#rnleft").html(" Res+")
      $("#rnleft").css("color", "#00aa00")
      $("#rleft").css("color", "#00aa00")
    } else {
      $("#rnleft").html(" Res")
      $("#rnleft").css("color", "#aa0000")
      $("#rleft").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("rright").innerHTML) == 0) {
    $("#rnright").html(" ")
    $("#rright").html(" ")
  } else {
    eres = eres + Number(document.getElementById("rright").innerHTML)
    if (Number(document.getElementById("rright").innerHTML) > 0) {
      $("#rnright").html(" Res+")
      $("#rnright").css("color", "#00aa00")
      $("#rright").css("color", "#00aa00")
    } else {
      $("#rnright").html(" Res")
      $("#rnright").css("color", "#aa0000")
      $("#rright").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("rhelm").innerHTML) == 0) {
    $("#rnhelm").html(" ")
    $("#rhelm").html(" ")
  } else {
    eres = eres + Number(document.getElementById("rhelm").innerHTML)
    if (Number(document.getElementById("rhelm").innerHTML) > 0) {
      $("#rnhelm").html(" Res+")
      $("#rnhelm").css("color", "#00aa00")
      $("#rhelm").css("color", "#00aa00")
    } else {
      $("#rnhelm").html(" Res")
      $("#rnhelm").css("color", "#aa0000")
      $("#rhelm").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("rplate").innerHTML) == 0) {
    $("#rnplate").html(" ")
    $("#rplate").html(" ")
  } else {
    eres = eres + Number(document.getElementById("rplate").innerHTML)
    if (Number(document.getElementById("rplate").innerHTML) > 0) {
      $("#rnplate").html(" Res+")
      $("#rnplate").css("color", "#00aa00")
      $("#rplate").css("color", "#00aa00")
    } else {
      $("#rnplate").html(" Res")
      $("#rnplate").css("color", "#aa0000")
      $("#rplate").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("rleg").innerHTML) == 0) {
    $("#rnleg").html(" ")
    $("#rleg").html(" ")
  } else {
    eres = eres + Number(document.getElementById("rleg").innerHTML)
    if (Number(document.getElementById("rleg").innerHTML) > 0) {
      $("#rnleg").html(" Res+")
      $("#rnleg").css("color", "#00aa00")
      $("#rleg").css("color", "#00aa00")
    } else {
      $("#rnleg").html(" Res")
      $("#rnleg").css("color", "#aa0000")
      $("#rleg").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("rboot").innerHTML) == 0) {
    $("#rnboot").html(" ")
    $("#rboot").html(" ")
  } else {
    eres = eres + Number(document.getElementById("rboot").innerHTML)
    if (Number(document.getElementById("rboot").innerHTML) > 0) {
      $("#rnboot").html(" Res+")
      $("#rnboot").css("color", "#00aa00")
      $("#rboot").css("color", "#00aa00")
    } else {
      $("#rnboot").html(" Res")
      $("#rnboot").css("color", "#aa0000")
      $("#rboot").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("racc1").innerHTML) == 0) {
    $("#rnacc1").html(" ")
    $("#racc1").html(" ")
  } else {
    eres = eres + Number(document.getElementById("racc1").innerHTML)
    if (Number(document.getElementById("racc1").innerHTML) > 0) {
      $("#rnacc1").html(" Res+")
      $("#rnacc1").css("color", "#00aa00")
      $("#racc1").css("color", "#00aa00")
    } else {
      $("#rnacc1").html(" Res")
      $("#rnacc1").css("color", "#aa0000")
      $("#racc1").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("racc2").innerHTML) == 0) {
    $("#rnacc2").html(" ")
    $("#racc2").html(" ")
  } else {
    eres = eres + Number(document.getElementById("racc2").innerHTML)
    if (Number(document.getElementById("racc2").innerHTML) > 0) {
      $("#rnacc2").html(" Res+")
      $("#rnacc2").css("color", "#00aa00")
      $("#racc2").css("color", "#00aa00")
    } else {
      $("#rnacc2").html(" Res")
      $("#rnacc2").css("color", "#aa0000")
      $("#racc2").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("racc3").innerHTML) == 0) {
    $("#rnacc3").html(" ")
    $("#racc3").html(" ")
  } else {
    eres = eres + Number(document.getElementById("racc3").innerHTML)
    if (Number(document.getElementById("racc3").innerHTML) > 0) {
      $("#rnacc3").html(" Res+")
      $("#rnacc3").css("color", "#00aa00")
      $("#racc3").css("color", "#00aa00")
    } else {
      $("#rnacc3").html(" Res")
      $("#rnacc3").css("color", "#aa0000")
      $("#racc3").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("racc4").innerHTML) == 0) {
    $("#rnacc4").html(" ")
    $("#racc4").html(" ")
  } else {
    eres = eres + Number(document.getElementById("racc4").innerHTML)
    if (Number(document.getElementById("racc4").innerHTML) > 0) {
      $("#rnacc4").html(" Res+")
      $("#rnacc4").css("color", "#00aa00")
      $("#racc4").css("color", "#00aa00")
    } else {
      $("#rnacc4").html(" Res")
      $("#rnacc4").css("color", "#aa0000")
      $("#racc4").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("racc5").innerHTML) == 0) {
    $("#rnacc5").html(" ")
    $("#racc5").html(" ")
  } else {
    eres = eres + Number(document.getElementById("racc5").innerHTML)
    if (Number(document.getElementById("racc5").innerHTML) > 0) {
      $("#rnacc5").html(" Res+")
      $("#rnacc5").css("color", "#00aa00")
      $("#racc5").css("color", "#00aa00")
    } else {
      $("#rnacc5").html(" Res")
      $("#rnacc5").css("color", "#aa0000")
      $("#racc5").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("rcape").innerHTML) == 0) {
    $("#rncape").html(" ")
    $("#rcape").html(" ")
  } else {
    eres = eres + Number(document.getElementById("rcape").innerHTML)
    if (Number(document.getElementById("rcape").innerHTML) > 0) {
      $("#rncape").html(" Res+")
      $("#rncape").css("color", "#00aa00")
      $("#rcape").css("color", "#00aa00")
    } else {
      $("#rncape").html(" Res")
      $("#rncape").css("color", "#aa0000")
      $("#rcape").css("color", "#aa0000")
    }
  }

  //espd

  if (Number(document.getElementById("sleft").innerHTML) == 0) {
    $("#snleft").html(" ")
    $("#sleft").html(" ")
  } else {
    espd = espd + Number(document.getElementById("sleft").innerHTML)
    if (Number(document.getElementById("sleft").innerHTML) > 0) {
      $("#snleft").html(" Spd+")
      $("#snleft").css("color", "#00aa00")
      $("#sleft").css("color", "#00aa00")
    } else {
      $("#snleft").html(" Spd")
      $("#snleft").css("color", "#aa0000")
      $("#sleft").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("sright").innerHTML) == 0) {
    $("#snright").html(" ")
    $("#sright").html(" ")
  } else {
    espd = espd + Number(document.getElementById("sright").innerHTML)
    if (Number(document.getElementById("sright").innerHTML) > 0) {
      $("#snright").html(" Spd+")
      $("#snright").css("color", "#00aa00")
      $("#sright").css("color", "#00aa00")
    } else {
      $("#snright").html(" Spd")
      $("#snright").css("color", "#aa0000")
      $("#sright").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("shelm").innerHTML) == 0) {
    $("#snhelm").html(" ")
    $("#shelm").html(" ")
  } else {
    espd = espd + Number(document.getElementById("shelm").innerHTML)
    if (Number(document.getElementById("shelm").innerHTML) > 0) {
      $("#snhelm").html(" Spd+")
      $("#snhelm").css("color", "#00aa00")
      $("#shelm").css("color", "#00aa00")
    } else {
      $("#snhelm").html(" Spd")
      $("#snhelm").css("color", "#aa0000")
      $("#shelm").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("splate").innerHTML) == 0) {
    $("#snplate").html(" ")
    $("#splate").html(" ")
  } else {
    espd = espd + Number(document.getElementById("splate").innerHTML)
    if (Number(document.getElementById("splate").innerHTML) > 0) {
      $("#snplate").html(" Spd+")
      $("#snplate").css("color", "#00aa00")
      $("#splate").css("color", "#00aa00")
    } else {
      $("#snplate").html(" Spd")
      $("#snplate").css("color", "#aa0000")
      $("#splate").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("sleg").innerHTML) == 0) {
    $("#snleg").html(" ")
    $("#sleg").html(" ")
  } else {
    espd = espd + Number(document.getElementById("sleg").innerHTML)
    if (Number(document.getElementById("sleg").innerHTML) > 0) {
      $("#snleg").html(" Spd+")
      $("#snleg").css("color", "#00aa00")
      $("#sleg").css("color", "#00aa00")
    } else {
      $("#snleg").html(" Spd")
      $("#snleg").css("color", "#aa0000")
      $("#sleg").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("sboot").innerHTML) == 0) {
    $("#snboot").html(" ")
    $("#sboot").html(" ")
  } else {
    espd = espd + Number(document.getElementById("sboot").innerHTML)
    if (Number(document.getElementById("sboot").innerHTML) > 0) {
      $("#snboot").html(" Spd+")
      $("#snboot").css("color", "#00aa00")
      $("#sboot").css("color", "#00aa00")
    } else {
      $("#snboot").html(" Spd")
      $("#snboot").css("color", "#aa0000")
      $("#sboot").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("sacc1").innerHTML) == 0) {
    $("#snacc1").html(" ")
    $("#sacc1").html(" ")
  } else {
    espd = espd + Number(document.getElementById("sacc1").innerHTML)
    if (Number(document.getElementById("sacc1").innerHTML) > 0) {
      $("#snacc1").html(" Spd+")
      $("#snacc1").css("color", "#00aa00")
      $("#sacc1").css("color", "#00aa00")
    } else {
      $("#snacc1").html(" Spd")
      $("#snacc1").css("color", "#aa0000")
      $("#sacc1").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("sacc2").innerHTML) == 0) {
    $("#snacc2").html(" ")
    $("#sacc2").html(" ")
  } else {
    espd = espd + Number(document.getElementById("sacc2").innerHTML)
    if (Number(document.getElementById("sacc2").innerHTML) > 0) {
      $("#snacc2").html(" Spd+")
      $("#snacc2").css("color", "#00aa00")
      $("#sacc2").css("color", "#00aa00")
    } else {
      $("#snacc2").html(" Spd")
      $("#snacc2").css("color", "#aa0000")
      $("#sacc2").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("sacc3").innerHTML) == 0) {
    $("#snacc3").html(" ")
    $("#sacc3").html(" ")
  } else {
    espd = espd + Number(document.getElementById("sacc3").innerHTML)
    if (Number(document.getElementById("sacc3").innerHTML) > 0) {
      $("#snacc3").html(" Spd+")
      $("#snacc3").css("color", "#00aa00")
      $("#sacc3").css("color", "#00aa00")
    } else {
      $("#snacc3").html(" Spd")
      $("#snacc3").css("color", "#aa0000")
      $("#sacc3").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("sacc4").innerHTML) == 0) {
    $("#snacc4").html(" ")
    $("#sacc4").html(" ")
  } else {
    espd = espd + Number(document.getElementById("sacc4").innerHTML)
    if (Number(document.getElementById("sacc4").innerHTML) > 0) {
      $("#snacc4").html(" Spd+")
      $("#snacc4").css("color", "#00aa00")
      $("#sacc4").css("color", "#00aa00")
    } else {
      $("#snacc4").html(" Spd")
      $("#snacc4").css("color", "#aa0000")
      $("#sacc4").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("sacc5").innerHTML) == 0) {
    $("#snacc5").html(" ")
    $("#sacc5").html(" ")
  } else {
    espd = espd + Number(document.getElementById("sacc5").innerHTML)
    if (Number(document.getElementById("sacc5").innerHTML) > 0) {
      $("#snacc5").html(" Spd+")
      $("#snacc5").css("color", "#00aa00")
      $("#sacc5").css("color", "#00aa00")
    } else {
      $("#snacc5").html(" Spd")
      $("#snacc5").css("color", "#aa0000")
      $("#sacc5").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("scape").innerHTML) == 0) {
    $("#sncape").html(" ")
    $("#scape").html(" ")
  } else {
    espd = espd + Number(document.getElementById("scape").innerHTML)
    if (Number(document.getElementById("scape").innerHTML) > 0) {
      $("#sncape").html(" Spd+")
      $("#sncape").css("color", "#00aa00")
      $("#scape").css("color", "#00aa00")
    } else {
      $("#sncape").html(" Spd")
      $("#sncape").css("color", "#aa0000")
      $("#scape").css("color", "#aa0000")
    }
  }

  //  estr
  if (Number(document.getElementById("ileft").innerHTML) == 0) {
    $("#inleft").html(" ")
    $("#ileft").html(" ")
  } else {
    estr = estr + Number(document.getElementById("ileft").innerHTML)
    if (Number(document.getElementById("ileft").innerHTML) > 0) {
      $("#inleft").html(" Str+")
      $("#inleft").css("color", "#00aa00")
      $("#ileft").css("color", "#00aa00")
    } else {
      $("#inleft").html(" Str")
      $("#inleft").css("color", "#aa0000")
      $("#ileft").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("iright").innerHTML) == 0) {
    $("#inright").html(" ")
    $("#iright").html(" ")
  } else {
    estr = estr + Number(document.getElementById("iright").innerHTML)
    if (Number(document.getElementById("iright").innerHTML) > 0) {
      $("#inright").html(" Str+")
      $("#inright").css("color", "#00aa00")
      $("#iright").css("color", "#00aa00")
    } else {
      $("#inright").html(" Str")
      $("#inright").css("color", "#aa0000")
      $("#iright").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("ihelm").innerHTML) == 0) {
    $("#inhelm").html(" ")
    $("#ihelm").html(" ")
  } else {
    estr = estr + Number(document.getElementById("ihelm").innerHTML)
    if (Number(document.getElementById("ihelm").innerHTML) > 0) {
      $("#inhelm").html(" Str+")
      $("#inhelm").css("color", "#00aa00")
      $("#ihelm").css("color", "#00aa00")
    } else {
      $("#inhelm").html(" Str")
      $("#inhelm").css("color", "#aa0000")
      $("#ihelm").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("iplate").innerHTML) == 0) {
    $("#inplate").html(" ")
    $("#iplate").html(" ")
  } else {
    estr = estr + Number(document.getElementById("iplate").innerHTML)
    if (Number(document.getElementById("iplate").innerHTML) > 0) {
      $("#inplate").html(" Str+")
      $("#inplate").css("color", "#00aa00")
      $("#iplate").css("color", "#00aa00")
    } else {
      $("#inplate").html(" Str")
      $("#inplate").css("color", "#aa0000")
      $("#iplate").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("ileg").innerHTML) == 0) {
    $("#inleg").html(" ")
    $("#ileg").html(" ")
  } else {
    estr = estr + Number(document.getElementById("ileg").innerHTML)
    if (Number(document.getElementById("ileg").innerHTML) > 0) {
      $("#inleg").html(" Str+")
      $("#inleg").css("color", "#00aa00")
      $("#ileg").css("color", "#00aa00")
    } else {
      $("#inleg").html(" Str")
      $("#inleg").css("color", "#aa0000")
      $("#ileg").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("iboot").innerHTML) == 0) {
    $("#inboot").html(" ")
    $("#iboot").html(" ")
  } else {
    estr = estr + Number(document.getElementById("iboot").innerHTML)
    if (Number(document.getElementById("iboot").innerHTML) > 0) {
      $("#inboot").html(" Str+")
      $("#inboot").css("color", "#00aa00")
      $("#iboot").css("color", "#00aa00")
    } else {
      $("#inboot").html(" Str")
      $("#inboot").css("color", "#aa0000")
      $("#iboot").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("iacc1").innerHTML) == 0) {
    $("#inacc1").html(" ")
    $("#iacc1").html(" ")
  } else {
    estr = estr + Number(document.getElementById("iacc1").innerHTML)
    if (Number(document.getElementById("iacc1").innerHTML) > 0) {
      $("#inacc1").html(" Str+")
      $("#inacc1").css("color", "#00aa00")
      $("#iacc1").css("color", "#00aa00")
    } else {
      $("#inacc1").html(" Str")
      $("#inacc1").css("color", "#aa0000")
      $("#iacc1").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("iacc2").innerHTML) == 0) {
    $("#inacc2").html(" ")
    $("#iacc2").html(" ")
  } else {
    estr = estr + Number(document.getElementById("iacc2").innerHTML)
    if (Number(document.getElementById("iacc2").innerHTML) > 0) {
      $("#inacc2").html(" Str+")
      $("#inacc2").css("color", "#00aa00")
      $("#iacc2").css("color", "#00aa00")
    } else {
      $("#inacc2").html(" Str")
      $("#inacc2").css("color", "#aa0000")
      $("#iacc2").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("iacc3").innerHTML) == 0) {
    $("#inacc3").html(" ")
    $("#iacc3").html(" ")
  } else {
    estr = estr + Number(document.getElementById("iacc3").innerHTML)
    if (Number(document.getElementById("iacc3").innerHTML) > 0) {
      $("#inacc3").html(" Str+")
      $("#inacc3").css("color", "#00aa00")
      $("#iacc3").css("color", "#00aa00")
    } else {
      $("#inacc3").html(" Str")
      $("#inacc3").css("color", "#aa0000")
      $("#iacc3").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("iacc4").innerHTML) == 0) {
    $("#inacc4").html(" ")
    $("#iacc4").html(" ")
  } else {
    estr = estr + Number(document.getElementById("iacc4").innerHTML)
    if (Number(document.getElementById("iacc4").innerHTML) > 0) {
      $("#inacc4").html(" Str+")
      $("#inacc4").css("color", "#00aa00")
      $("#iacc4").css("color", "#00aa00")
    } else {
      $("#inacc4").html(" Str")
      $("#inacc4").css("color", "#aa0000")
      $("#iacc4").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("iacc5").innerHTML) == 0) {
    $("#inacc5").html(" ")
    $("#iacc5").html(" ")
  } else {
    estr = estr + Number(document.getElementById("iacc5").innerHTML)
    if (Number(document.getElementById("iacc5").innerHTML) > 0) {
      $("#inacc5").html(" Str+")
      $("#inacc5").css("color", "#00aa00")
      $("#iacc5").css("color", "#00aa00")
    } else {
      $("#inacc5").html(" Str")
      $("#inacc5").css("color", "#aa0000")
      $("#iacc5").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("icape").innerHTML) == 0) {
    $("#incape").html(" ")
    $("#icape").html(" ")
  } else {
    estr = estr + Number(document.getElementById("icape").innerHTML)
    if (Number(document.getElementById("icape").innerHTML) > 0) {
      $("#incape").html(" Str+")
      $("#incape").css("color", "#00aa00")
      $("#icape").css("color", "#00aa00")
    } else {
      $("#incape").html(" Str")
      $("#incape").css("color", "#aa0000")
      $("#icape").css("color", "#aa0000")
    }
  }

  //  esth

  if (Number(document.getElementById("tleft").innerHTML) == 0) {
    $("#tnleft").html(" ")
    $("#tleft").html(" ")
  } else {
    esth = esth + Number(document.getElementById("tleft").innerHTML)
    if (Number(document.getElementById("tleft").innerHTML) > 0) {
      $("#tnleft").html(" Sth+")
      $("#tnleft").css("color", "#00aa00")
      $("#tleft").css("color", "#00aa00")
    } else {
      $("#tnleft").html(" Sth")
      $("#tnleft").css("color", "#aa0000")
      $("#tleft").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("tright").innerHTML) == 0) {
    $("#tnright").html(" ")
    $("#tright").html(" ")
  } else {
    esth = esth + Number(document.getElementById("tright").innerHTML)
    if (Number(document.getElementById("tright").innerHTML) > 0) {
      $("#tnright").html(" Sth+")
      $("#tnright").css("color", "#00aa00")
      $("#tright").css("color", "#00aa00")
    } else {
      $("#tnright").html(" Sth")
      $("#tnright").css("color", "#aa0000")
      $("#right").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("thelm").innerHTML) == 0) {
    $("#tnhelm").html(" ")
    $("#thelm").html(" ")
  } else {
    esth = esth + Number(document.getElementById("thelm").innerHTML)
    if (Number(document.getElementById("thelm").innerHTML) > 0) {
      $("#tnhelm").html(" Sth+")
      $("#tnhelm").css("color", "#00aa00")
      $("#thelm").css("color", "#00aa00")
    } else {
      $("#tnhelm").html(" Sth")
      $("#tnhelm").css("color", "#aa0000")
      $("#thelm").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("tplate").innerHTML) == 0) {
    $("#tnplate").html(" ")
    $("#tplate").html(" ")
  } else {
    esth = esth + Number(document.getElementById("tplate").innerHTML)
    if (Number(document.getElementById("tplate").innerHTML) > 0) {
      $("#tnplate").html(" Sth+")
      $("#tnplate").css("color", "#00aa00")
      $("#tplate").css("color", "#00aa00")
    } else {
      $("#tnplate").html(" Sth")
      $("#tnplate").css("color", "#aa0000")
      $("#tplate").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("tleg").innerHTML) == 0) {
    $("#tnleg").html(" ")
    $("#tleg").html(" ")
  } else {
    esth = esth + Number(document.getElementById("tleg").innerHTML)
    if (Number(document.getElementById("tleg").innerHTML) > 0) {
      $("#tnleg").html(" Sth+")
      $("#tnleg").css("color", "#00aa00")
      $("#tleg").css("color", "#00aa00")
    } else {
      $("#tnleg").html(" Sth")
      $("#tnleg").css("color", "#aa0000")
      $("#tleg").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("tboot").innerHTML) == 0) {
    $("#tnboot").html(" ")
    $("#tboot").html(" ")
  } else {
    esth = esth + Number(document.getElementById("tboot").innerHTML)
    if (Number(document.getElementById("tboot").innerHTML) > 0) {
      $("#tnboot").html(" Sth+")
      $("#tnboot").css("color", "#00aa00")
      $("#tboot").css("color", "#00aa00")
    } else {
      $("#tnboot").html(" Sth")
      $("#tnboot").css("color", "#aa0000")
      $("#tboot").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("tacc1").innerHTML) == 0) {
    $("#tnacc1").html(" ")
    $("#tacc1").html(" ")
  } else {
    esth = esth + Number(document.getElementById("tacc1").innerHTML)
    if (Number(document.getElementById("tacc1").innerHTML) > 0) {
      $("#tnacc1").html(" Sth+")
      $("#tnacc1").css("color", "#00aa00")
      $("#tacc1").css("color", "#00aa00")
    } else {
      $("#tnacc1").html(" Sth")
      $("#tnacc1").css("color", "#aa0000")
      $("#tacc1").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("tacc2").innerHTML) == 0) {
    $("#tnacc2").html(" ")
    $("#tacc2").html(" ")
  } else {
    esth = esth + Number(document.getElementById("tacc2").innerHTML)
    if (Number(document.getElementById("tacc2").innerHTML) > 0) {
      $("#tnacc2").html(" Sth+")
      $("#tnacc2").css("color", "#00aa00")
      $("#tacc2").css("color", "#00aa00")
    } else {
      $("#tnacc2").html(" Sth")
      $("#tnacc2").css("color", "#aa0000")
      $("#tacc2").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("tacc3").innerHTML) == 0) {
    $("#tnacc3").html(" ")
    $("#tacc3").html(" ")
  } else {
    esth = esth + Number(document.getElementById("tacc3").innerHTML)
    if (Number(document.getElementById("tacc3").innerHTML) > 0) {
      $("#tnacc3").html(" Sth+")
      $("#tnacc3").css("color", "#00aa00")
      $("#tacc3").css("color", "#00aa00")
    } else {
      $("#tnacc3").html(" Sth")
      $("#tnacc3").css("color", "#aa0000")
      $("#tacc3").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("tacc4").innerHTML) == 0) {
    $("#tnacc4").html(" ")
    $("#tacc4").html(" ")
  } else {
    esth = esth + Number(document.getElementById("tacc4").innerHTML)
    if (Number(document.getElementById("tacc4").innerHTML) > 0) {
      $("#tnacc4").html(" Sth+")
      $("#tnacc4").css("color", "#00aa00")
      $("#tacc4").css("color", "#00aa00")
    } else {
      $("#tnacc4").html(" Sth")
      $("#tnacc4").css("color", "#aa0000")
      $("#tacc4").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("tacc5").innerHTML) == 0) {
    $("#tnacc5").html(" ")
    $("#tacc5").html(" ")
  } else {
    esth = esth + Number(document.getElementById("tacc5").innerHTML)
    if (Number(document.getElementById("tacc5").innerHTML) > 0) {
      $("#tnacc5").html(" Sth+")
      $("#tnacc5").css("color", "#00aa00")
      $("#tacc5").css("color", "#00aa00")
    } else {
      $("#tnacc5").html(" Sth")
      $("#tnacc5").css("color", "#aa0000")
      $("#tacc5").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("tcape").innerHTML) == 0) {
    $("#tncape").html(" ")
    $("#tcape").html(" ")
  } else {
    esth = esth + Number(document.getElementById("tcape").innerHTML)
    if (Number(document.getElementById("tcape").innerHTML) > 0) {
      $("#tncape").html(" Sth+")
      $("#tncape").css("color", "#00aa00")
      $("#tcape").css("color", "#00aa00")
    } else {
      $("#tncape").html(" Sth")
      $("#tncape").css("color", "#aa0000")
      $("#tcape").css("color", "#aa0000")
    }
  }

  //  eawr

  if (Number(document.getElementById("wleft").innerHTML) == 0) {
    $("#wnleft").html(" ")
    $("#wleft").html(" ")
  } else {
    eawr = eawr + Number(document.getElementById("wleft").innerHTML)
    if (Number(document.getElementById("wleft").innerHTML) > 0) {
      $("#wnleft").html(" Awr+")
      $("#wnleft").css("color", "#00aa00")
      $("#wleft").css("color", "#00aa00")
    } else {
      $("#wnleft").html(" Awr")
      $("#wnleft").css("color", "#aa0000")
      $("#wleft").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("wright").innerHTML) == 0) {
    $("#wnright").html(" ")
    $("#wright").html(" ")
  } else {
    eawr = eawr + Number(document.getElementById("wright").innerHTML)
    if (Number(document.getElementById("wright").innerHTML) > 0) {
      $("#wnright").html(" Awr+")
      $("#wnright").css("color", "#00aa00")
      $("#wright").css("color", "#00aa00")
    } else {
      $("#wnright").html(" Awr")
      $("#wnright").css("color", "#aa0000")
      $("#wright").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("whelm").innerHTML) == 0) {
    $("#wnhelm").html(" ")
    $("#whelm").html(" ")
  } else {
    eawr = eawr + Number(document.getElementById("whelm").innerHTML)
    if (Number(document.getElementById("whelm").innerHTML) > 0) {
      $("#wnhelm").html(" Awr+")
      $("#wnhelm").css("color", "#00aa00")
      $("#whelm").css("color", "#00aa00")
    } else {
      $("#wnhelm").html(" Awr")
      $("#wnhelm").css("color", "#aa0000")
      $("#whelm").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("wplate").innerHTML) == 0) {
    $("#wnplate").html(" ")
    $("#wplate").html(" ")
  } else {
    eawr = eawr + Number(document.getElementById("wplate").innerHTML)
    if (Number(document.getElementById("wplate").innerHTML) > 0) {
      $("#wnplate").html(" Awr+")
      $("#wnplate").css("color", "#00aa00")
      $("#wplate").css("color", "#00aa00")
    } else {
      $("#wnplate").html(" Awr")
      $("#wnplate").css("color", "#aa0000")
      $("#wplate").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("wleg").innerHTML) == 0) {
    $("#wnleg").html(" ")
    $("#wleg").html(" ")
  } else {
    eawr = eawr + Number(document.getElementById("wleg").innerHTML)
    if (Number(document.getElementById("wleg").innerHTML) > 0) {
      $("#wnleg").html(" Awr+")
      $("#wnleg").css("color", "#00aa00")
      $("#wleg").css("color", "#00aa00")
    } else {
      $("#wnleg").html(" Awr")
      $("#wnleg").css("color", "#aa0000")
      $("#wleg").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("wboot").innerHTML) == 0) {
    $("#wnboot").html(" ")
    $("#wboot").html(" ")
  } else {
    eawr = eawr + Number(document.getElementById("wboot").innerHTML)
    if (Number(document.getElementById("wboot").innerHTML) > 0) {
      $("#wnboot").html(" Awr+")
      $("#wnboot").css("color", "#00aa00")
      $("#wboot").css("color", "#00aa00")
    } else {
      $("#wnboot").html(" Awr")
      $("#wnboot").css("color", "#aa0000")
      $("#wboot").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("wacc1").innerHTML) == 0) {
    $("#wnacc1").html(" ")
    $("#wacc1").html(" ")
  } else {
    eawr = eawr + Number(document.getElementById("wacc1").innerHTML)
    if (Number(document.getElementById("wacc1").innerHTML) > 0) {
      $("#wnacc1").html(" Awr+")
      $("#wnacc1").css("color", "#00aa00")
      $("#wacc1").css("color", "#00aa00")
    } else {
      $("#wnacc1").html(" Awr")
      $("#wnacc1").css("color", "#aa0000")
      $("#wacc1").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("wacc2").innerHTML) == 0) {
    $("#wnacc2").html(" ")
    $("#wacc2").html(" ")
  } else {
    eawr = eawr + Number(document.getElementById("wacc2").innerHTML)
    if (Number(document.getElementById("wacc2").innerHTML) > 0) {
      $("#wnacc2").html(" Awr+")
      $("#wnacc2").css("color", "#00aa00")
      $("#wacc2").css("color", "#00aa00")
    } else {
      $("#wnacc2").html(" Awr")
      $("#wnacc2").css("color", "#aa0000")
      $("#wacc2").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("wacc3").innerHTML) == 0) {
    $("#wnacc3").html(" ")
    $("#wacc3").html(" ")
  } else {
    eawr = eawr + Number(document.getElementById("wacc3").innerHTML)
    if (Number(document.getElementById("wacc3").innerHTML) > 0) {
      $("#wnacc3").html(" Awr+")
      $("#wnacc3").css("color", "#00aa00")
      $("#wacc3").css("color", "#00aa00")
    } else {
      $("#wnacc3").html(" Awr")
      $("#wnacc3").css("color", "#aa0000")
      $("#wacc3").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("wacc4").innerHTML) == 0) {
    $("#wnacc4").html(" ")
    $("#wacc4").html(" ")
  } else {
    eawr = eawr + Number(document.getElementById("wacc4").innerHTML)
    if (Number(document.getElementById("wacc4").innerHTML) > 0) {
      $("#wnacc4").html(" Awr+")
      $("#wnacc4").css("color", "#00aa00")
      $("#wacc4").css("color", "#00aa00")
    } else {
      $("#wnacc4").html(" Awr")
      $("#wnacc4").css("color", "#aa0000")
      $("#wacc4").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("wacc5").innerHTML) == 0) {
    $("#wnacc5").html(" ")
    $("#wacc5").html(" ")
  } else {
    eawr = eawr + Number(document.getElementById("wacc5").innerHTML)
    if (Number(document.getElementById("wacc5").innerHTML) > 0) {
      $("#wnacc5").html(" Awr+")
      $("#wnacc5").css("color", "#00aa00")
      $("#wacc5").css("color", "#00aa00")
    } else {
      $("#wnacc5").html(" Awr")
      $("#wnacc5").css("color", "#aa0000")
      $("#wacc5").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("wcape").innerHTML) == 0) {
    $("#wncape").html(" ")
    $("#wcape").html(" ")
  } else {
    eawr = eawr + Number(document.getElementById("wcape").innerHTML)
    if (Number(document.getElementById("wcape").innerHTML) > 0) {
      $("#wncape").html(" Awr+")
      $("#wncape").css("color", "#00aa00")
      $("#wcape").css("color", "#00aa00")
    } else {
      $("#wncape").html(" Awr")
      $("#wncape").css("color", "#aa0000")
      $("#wcape").css("color", "#aa0000")
    }
  }

  //  erfx

  if (Number(document.getElementById("xleft").innerHTML) == 0) {
    $("#xnleft").html(" ")
    $("#xleft").html(" ")
  } else {
    erfx = erfx + Number(document.getElementById("xleft").innerHTML)
    if (Number(document.getElementById("xleft").innerHTML) > 0) {
      $("#xnleft").html(" Rfx+")
      $("#xnleft").css("color", "#00aa00")
      $("#xleft").css("color", "#00aa00")
    } else {
      $("#xnleft").html(" Rfx")
      $("#xnleft").css("color", "#aa0000")
      $("#xleft").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("xright").innerHTML) == 0) {
    $("#xnright").html(" ")
    $("#xright").html(" ")
  } else {
    erfx = erfx + Number(document.getElementById("xright").innerHTML)
    if (Number(document.getElementById("xright").innerHTML) > 0) {
      $("#xnright").html(" Rfx+")
      $("#xnright").css("color", "#00aa00")
      $("#xright").css("color", "#00aa00")
    } else {
      $("#xnright").html(" Rfx")
      $("#xnright").css("color", "#aa0000")
      $("#xright").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("xhelm").innerHTML) == 0) {
    $("#xnhelm").html(" ")
    $("#xhelm").html(" ")
  } else {
    erfx = erfx + Number(document.getElementById("xhelm").innerHTML)
    if (Number(document.getElementById("xhelm").innerHTML) > 0) {
      $("#xnhelm").html(" Rfx+")
      $("#xnhelm").css("color", "#00aa00")
      $("#xhelm").css("color", "#00aa00")
    } else {
      $("#xnhelm").html(" Rfx")
      $("#xnhelm").css("color", "#aa0000")
      $("#xhelm").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("xplate").innerHTML) == 0) {
    $("#xnplate").html(" ")
    $("#xplate").html(" ")
  } else {
    erfx = erfx + Number(document.getElementById("xplate").innerHTML)
    if (Number(document.getElementById("xplate").innerHTML) > 0) {
      $("#xnplate").html(" Rfx+")
      $("#xnplate").css("color", "#00aa00")
      $("#xplate").css("color", "#00aa00")
    } else {
      $("#xnplate").html(" Rfx")
      $("#xnplate").css("color", "#aa0000")
      $("#xplate").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("xleg").innerHTML) == 0) {
    $("#xnleg").html(" ")
    $("#xleg").html(" ")
  } else {
    erfx = erfx + Number(document.getElementById("xleg").innerHTML)
    if (Number(document.getElementById("xleg").innerHTML) > 0) {
      $("#xnleg").html(" Rfx+")
      $("#xnleg").css("color", "#00aa00")
      $("#xleg").css("color", "#00aa00")
    } else {
      $("#xnleg").html(" Rfx")
      $("#xnleg").css("color", "#aa0000")
      $("#xleg").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("xboot").innerHTML) == 0) {
    $("#xnboot").html(" ")
    $("#xboot").html(" ")
  } else {
    erfx = erfx + Number(document.getElementById("xboot").innerHTML)
    if (Number(document.getElementById("xboot").innerHTML) > 0) {
      $("#xnboot").html(" Rfx+")
      $("#xnboot").css("color", "#00aa00")
      $("#xboot").css("color", "#00aa00")
    } else {
      $("#xnboot").html(" Rfx")
      $("#xnboot").css("color", "#aa0000")
      $("#xboot").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("xacc1").innerHTML) == 0) {
    $("#xnacc1").html(" ")
    $("#xacc1").html(" ")
  } else {
    erfx = erfx + Number(document.getElementById("xacc1").innerHTML)
    if (Number(document.getElementById("xacc1").innerHTML) > 0) {
      $("#xnacc1").html(" Rfx+")
      $("#xnacc1").css("color", "#00aa00")
      $("#xacc1").css("color", "#00aa00")
    } else {
      $("#xnacc1").html(" Rfx")
      $("#xnacc1").css("color", "#aa0000")
      $("#xacc1").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("xacc2").innerHTML) == 0) {
    $("#xnacc2").html(" ")
    $("#xacc2").html(" ")
  } else {
    erfx = erfx + Number(document.getElementById("xacc2").innerHTML)
    if (Number(document.getElementById("xacc2").innerHTML) > 0) {
      $("#xnacc2").html(" Rfx+")
      $("#xnacc2").css("color", "#00aa00")
      $("#xacc2").css("color", "#00aa00")
    } else {
      $("#xnacc2").html(" Rfx")
      $("#xnacc2").css("color", "#aa0000")
      $("#xacc2").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("xacc3").innerHTML) == 0) {
    $("#xnacc3").html(" ")
    $("#xacc3").html(" ")
  } else {
    erfx = erfx + Number(document.getElementById("xacc3").innerHTML)
    if (Number(document.getElementById("xacc3").innerHTML) > 0) {
      $("#xnacc3").html(" Rfx+")
      $("#xnacc3").css("color", "#00aa00")
      $("#xacc3").css("color", "#00aa00")
    } else {
      $("#xnacc3").html(" Rfx")
      $("#xnacc3").css("color", "#aa0000")
      $("#xacc3").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("xacc4").innerHTML) == 0) {
    $("#xnacc4").html(" ")
    $("#xacc4").html(" ")
  } else {
    erfx = erfx + Number(document.getElementById("xacc4").innerHTML)
    if (Number(document.getElementById("xacc4").innerHTML) > 0) {
      $("#xnacc4").html(" Rfx+")
      $("#xnacc4").css("color", "#00aa00")
      $("#xacc4").css("color", "#00aa00")
    } else {
      $("#xnacc4").html(" Rfx")
      $("#xnacc4").css("color", "#aa0000")
      $("#xacc4").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("xacc5").innerHTML) == 0) {
    $("#xnacc5").html(" ")
    $("#xacc5").html(" ")
  } else {
    erfx = erfx + Number(document.getElementById("xacc5").innerHTML)
    if (Number(document.getElementById("xacc5").innerHTML) > 0) {
      $("#xnacc5").html(" Rfx+")
      $("#xnacc5").css("color", "#00aa00")
      $("#xacc5").css("color", "#00aa00")
    } else {
      $("#xnacc5").html(" Rfx")
      $("#xnacc5").css("color", "#aa0000")
      $("#xacc5").css("color", "#aa0000")
    }
  }

  if (Number(document.getElementById("xcape").innerHTML) == 0) {
    $("#xncape").html(" ")
    $("#xcape").html(" ")
  } else {
    erfx = erfx + Number(document.getElementById("xcape").innerHTML)
    if (Number(document.getElementById("xcape").innerHTML) > 0) {
      $("#xncape").html(" Rfx+")
      $("#xncape").css("color", "#00aa00")
      $("#xcape").css("color", "#00aa00")
    } else {
      $("#xncape").html(" Rfx")
      $("#xncape").css("color", "#aa0000")
      $("#xcape").css("color", "#aa0000")
    }
  }




  //   batk = atk + eatk
  batkl = atk + eatk + eatkl
  batkr = atk + eatk + eatkr
  bmag = mag + emag
  bdef = def + edef
  bres = res + eres
  bspd = spd + espd
  bstr = stg + estr
  bsth = sth + esth
  bawr = awr + eawr
  brfx = rfx + erfx



  //BuffStatChanges
  //  qatk = batk + ratk 
  qatkl = batkl + ratkl
  qatkr = batkr + ratkr
  qmag = bmag + rmag
  qdef = bdef + rdef
  qres = bres + rres
  qspd = bspd + rspd
  qstr = bstr + rstr
  qsth = bsth + rsth
  qawr = bawr + rawr
  qrfx = brfx + rrfx
  //Setting Shown Values
  //  document.getElementById("batk").innerHTML = qatk
  if (eatkl + ratkl != 0) {
    document.getElementById("batkl").innerHTML = qatkl
    $("#albrktl").html("(")
    $("#albrktr").html(")")
    $("#albrktl").css("color", "#0ac90a")
    $("#albrktr").css("color", "#0ac90a")
    $("#batkl").css("color", "#0ac90a")
    if (eatkl + ratkl < 0) {
      $("#albrktl").css("color", "#c90a0a")
      $("#albrktr").css("color", "#c90a0a")
      $("#batkl").css("color", "#c90a0a")
    }
  } else {
    $("#albrktl").html(" ")
    $("#albrktr").html(" ")
    if (eatkl != 0 && ratkl != 0) {
      $("#albrktl").html("(")
      $("#albrktr").html(")")
      document.getElementById("batkl").innerHTML = qatkl
      $("#albrktl").css("color", "#eeee21")
      $("#albrktr").css("color", "#eeee21")
      $("#batkl").css("color", "#eeee21")
    } else {
      $("#batkl").html(" ")
    }
  }
  if (eatkr + ratkr != 0) {
    document.getElementById("batkr").innerHTML = qatkr
    $("#arbrktl").html("(")
    $("#arbrktr").html(")")
    $("#arbrktl").css("color", "#0ac90a")
    $("#arbrktr").css("color", "#0ac90a")
    $("#batkr").css("color", "#0ac90a")
    if (eatkr + ratkr < 0) {
      $("#arbrktl").css("color", "#c90a0a")
      $("#arbrktr").css("color", "#c90a0a")
      $("#batkr").css("color", "#c90a0a")
    }
  } else {
    $("#arbrktl").html(" ")
    $("#arbrktr").html(" ")
    if (eatkr != 0 && ratkr != 0) {
      $("#arbrktl").html("(")
      $("#arbrktr").html(")")
      document.getElementById("batkr").innerHTML = qatkr
      $("#arbrktl").css("color", "#eeee21")
      $("#arbrktr").css("color", "#eeee21")
      $("#batkr").css("color", "#eeee21")
    } else {
      $("#batkr").html(" ")
    }
  }
  if (emag + rmag != 0) {
    document.getElementById("bmag").innerHTML = qmag
    $("#mbrktl").html("(")
    $("#mbrktr").html(")")
    $("#mbrktl").css("color", "#0ac90a")
    $("#mbrktr").css("color", "#0ac90a")
    $("#bmag").css("color", "#0ac90a")
    if (emag + rmag < 0) {
      $("#mbrktl").css("color", "#c90a0a")
      $("#mbrktr").css("color", "#c90a0a")
      $("#bmag").css("color", "#c90a0a")
    }
  } else {
    $("#mbrktl").html(" ")
    $("#mbrktr").html(" ")
    if (emag != 0 && rmag != 0) {
      $("#mbrktl").html("(")
      $("#mbrktr").html(")")
      document.getElementById("bmag").innerHTML = qmag
      $("#mbrktl").css("color", "#eeee21")
      $("#mbrktr").css("color", "#eeee21")
      $("#bmag").css("color", "#eeee21")
    } else {
      $("#bmag").html(" ")
    }
  }
  if (edef + rdef != 0) {
    document.getElementById("bdef").innerHTML = qdef
    $("#dbrktl").html("(")
    $("#dbrktr").html(")")
    $("#dbrktl").css("color", "#0ac90a")
    $("#dbrktr").css("color", "#0ac90a")
    $("#bdef").css("color", "#0ac90a")
    if (edef + rdef < 0) {
      $("#dbrktl").css("color", "#c90a0a")
      $("#dbrktr").css("color", "#c90a0a")
      $("#bdef").css("color", "#c90a0a")
    }
  } else {
    $("#dbrktl").html(" ")
    $("#dbrktr").html(" ")
    if (edef != 0 && rdef != 0) {
      $("#dbrktl").html("(")
      $("#dbrktr").html(")")
      document.getElementById("bdef").innerHTML = qdef
      $("#dbrktl").css("color", "#eeee21")
      $("#dbrktr").css("color", "#eeee21")
      $("#bdef").css("color", "#eeee21")
    } else {
      $("#bdef").html(" ")
    }
  }
  if (eres + rres != 0) {
    document.getElementById("bres").innerHTML = qres
    $("#rbrktl").html("(")
    $("#rbrktr").html(")")
    $("#rbrktl").css("color", "#0ac90a")
    $("#rbrktr").css("color", "#0ac90a")
    $("#bres").css("color", "#0ac90a")
    if (eres + rres < 0) {
      $("#rbrktl").css("color", "#c90a0a")
      $("#rbrktr").css("color", "#c90a0a")
      $("#bres").css("color", "#c90a0a")
    }
  } else {
    $("#rbrktl").html(" ")
    $("#rbrktr").html(" ")
    if (eres != 0 && rres != 0) {
      $("#rbrktl").html("(")
      $("#rbrktr").html(")")
      document.getElementById("bres").innerHTML = qres
      $("#rbrktl").css("color", "#eeee21")
      $("#rbrktr").css("color", "#eeee21")
      $("#bres").css("color", "#eeee21")
    } else {
      $("#bres").html(" ")
    }
  }
  if (espd + rspd != 0) {
    document.getElementById("bspd").innerHTML = qspd
    $("#sbrktl").html("(")
    $("#sbrktr").html(")")
    $("#sbrktl").css("color", "#0ac90a")
    $("#sbrktr").css("color", "#0ac90a")
    $("#bspd").css("color", "#0ac90a")
    if (espd + rspd < 0) {
      $("#sbrktl").css("color", "#c90a0a")
      $("#sbrktr").css("color", "#c90a0a")
      $("#bspd").css("color", "#c90a0a")
    }
  } else {
    $("#sbrktl").html(" ")
    $("#sbrktr").html(" ")
    if (espd != 0 && rspd != 0) {
      $("#sbrktl").html("(")
      $("#sbrktr").html(")")
      document.getElementById("bspd").innerHTML = qspd
      $("#sbrktl").css("color", "#eeee21")
      $("#sbrktr").css("color", "#eeee21")
      $("#bspd").css("color", "#eeee21")
    } else {
      $("#bspd").html(" ")
    }
  }
  if (estr + rstr != 0) {
    document.getElementById("bstr").innerHTML = qstr
    $("#ibrktl").html("(")
    $("#ibrktr").html(")")
    $("#ibrktl").css("color", "#0ac90a")
    $("#ibrktr").css("color", "#0ac90a")
    $("#bstr").css("color", "#0ac90a")
    if (estr + rstr < 0) {
      $("#ibrktl").css("color", "#c90a0a")
      $("#ibrktr").css("color", "#c90a0a")
      $("#bstr").css("color", "#c90a0a")
    }
  } else {
    $("#ibrktl").html(" ")
    $("#ibrktr").html(" ")
    if (estr != 0 && rstr != 0) {
      $("#ibrktl").html("(")
      $("#ibrktr").html(")")
      document.getElementById("bstr").innerHTML = qstr
      $("#ibrktl").css("color", "#eeee21")
      $("#ibrktr").css("color", "#eeee21")
      $("#bstr").css("color", "#eeee21")
    } else {
      $("#bstr").html(" ")
    }
  }
  if (esth + rsth != 0) {
    document.getElementById("bsth").innerHTML = qsth
    $("#tbrktl").html("(")
    $("#tbrktr").html(")")
    $("#tbrktl").css("color", "#0ac90a")
    $("#tbrktr").css("color", "#0ac90a")
    $("#bsth").css("color", "#0ac90a")
    if (esth + rsth < 0) {
      $("#tbrktl").css("color", "#c90a0a")
      $("#tbrktr").css("color", "#c90a0a")
      $("#bsth").css("color", "#c90a0a")
    }
  } else {
    $("#tbrktl").html(" ")
    $("#tbrktr").html(" ")
    if (esth != 0 && rsth != 0) {
      $("#tbrktl").html("(")
      $("#tbrktr").html(")")
      document.getElementById("bsth").innerHTML = qsth
      $("#tbrktl").css("color", "#eeee21")
      $("#tbrktr").css("color", "#eeee21")
      $("#bsth").css("color", "#eeee21")
    } else {
      $("#bsth").html(" ")
    }
  }
  if (eawr + rawr != 0) {
    document.getElementById("bawr").innerHTML = qawr
    $("#wbrktl").html("(")
    $("#wbrktr").html(")")
    $("#wbrktl").css("color", "#0ac90a")
    $("#wbrktr").css("color", "#0ac90a")
    $("#bawr").css("color", "#0ac90a")
    if (eawr + rawr < 0) {
      $("#wbrktl").css("color", "#c90a0a")
      $("#wbrktr").css("color", "#c90a0a")
      $("#bawr").css("color", "#c90a0a")
    }
  } else {
    $("#wbrktl").html(" ")
    $("#wbrktr").html(" ")
    if (eawr != 0 && rawr != 0) {
      $("#wbrktl").html("(")
      $("#wbrktr").html(")")
      document.getElementById("bawr").innerHTML = qawr
      $("#wbrktl").css("color", "#eeee21")
      $("#wbrktr").css("color", "#eeee21")
      $("#bawr").css("color", "#eeee21")
    } else {
      $("#bawr").html(" ")
    }
  }
  if (erfx + rrfx != 0) {
    document.getElementById("brfx").innerHTML = qrfx
    $("#xbrktl").html("(")
    $("#xbrktr").html(")")
    $("#xbrktl").css("color", "#0ac90a")
    $("#xbrktr").css("color", "#0ac90a")
    $("#brfx").css("color", "#0ac90a")
    if (erfx + rrfx < 0) {
      $("#xbrktl").css("color", "#c90a0a")
      $("#xbrktr").css("color", "#c90a0a")
      $("#brfx").css("color", "#c90a0a")
    }
  } else {
    $("#xbrktl").html(" ")
    $("#xbrktr").html(" ")
    if (erfx != 0 && rrfx != 0) {
      $("#xbrktl").html("(")
      $("#xbrktr").html(")")
      document.getElementById("brfx").innerHTML = qrfx
      $("#xbrktl").css("color", "#eeee21")
      $("#xbrktr").css("color", "#eeee21")
      $("#brfx").css("color", "#eeee21")
    } else {
      $("#brfx").html(" ")
    }
  }
  if (closeacc == 0) {
    $("#closes").css("color", "#444444")
  }
  if (midacc == 0) {
    $("#fars").css("color", "#444444")
  }
  if (faracc == 0) {
    $("#fars").css("color", "#444444")
  }
}
