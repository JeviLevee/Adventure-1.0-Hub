function EquipUpdate() {
    eatk = 0
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
    oeatk = 0
    oeatkl = 0
    oeatkr = 0
    oemag = 0
    oedef = 0
    oeres = 0
    oespd = 0
    oestr = 0
    oesth = 0
    oeawr = 0
    oerfx = 0


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




    batk = atk + eatk + eatkl + eatkr
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
    qatk = batk + ratk 
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
    if (eatk + eatkl + eatkr + ratk != 0) {
        document.getElementById("batkl").innerHTML = qatk
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
            document.getElementById("batkl").innerHTML = qatk
            $("#albrktl").css("color", "#eeee21")
            $("#albrktr").css("color", "#eeee21")
            $("#batkl").css("color", "#eeee21")
        } else {
      $("#batkl").html(" ")
     }
    }
//    if (eatkr + ratkr != 0) {
//        document.getElementById("batkr").innerHTML = qatkr
//        $("#arbrktl").html("(")
//        $("#arbrktr").html(")")
//        if (eatkr + ratkr < 0) {
//            $("#arbrktl").css("color", "#c90a0a")
//            $("#arbrktr").css("color", "#c90a0a")
//            $("#batkr").css("color", "#c90a0a")
//        }
//    } else {
        $("#arbrktl").html(" ")
        $("#arbrktr").html(" ")
//        if (eatkr != 0 && ratkr != 0) {
//            $("#arbrktl").html("(")
//            $("#arbrktr").html(")")
//            document.getElementById("batkr").innerHTML = qatkr
//            $("#arbrktl").css("color", "#eeee21")
//            $("#arbrktr").css("color", "#eeee21")
//            $("#batkr").css("color", "#eeee21")
//        }
//    }
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
        $("#closes").css("color", "#664444")
    }
    if (midacc == 0) {
        $("#mids").css("color", "#664444")
    }
    if (faracc == 0) {
        $("#fars").css("color", "#664444")
    }

    if (Number(document.getElementById("oaleft").innerHTML) == 0) {
        $("#oanleft").html(" ")
        $("#oaleft").html(" ")
    } else {
        oeatkl = oeatkl + Number(document.getElementById("oaleft").innerHTML)
        if (Number(document.getElementById("oaleft").innerHTML) > 0) {
            $("#oanleft").html(" Atk+")
            $("#oanleft").css("color", "#00aa00")
            $("#oaleft").css("color", "#00aa00")
        } else {
            $("#oanleft").html(" Atk")
            $("#oanleft").css("color", "#aa0000")
            $("#oaleft").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oaright").innerHTML) == 0) {
        $("#oanright").html(" ")
        $("#oaright").html(" ")
    } else {
        oeatkr = oeatkr + Number(document.getElementById("oaright").innerHTML)
        if (Number(document.getElementById("oaright").innerHTML) > 0) {
            $("#oanright").html(" Atk+")
            $("#oanright").css("color", "#00aa00")
            $("#oaright").css("color", "#00aa00")
        } else {
            $("#oanright").html(" Atk")
            $("#oanright").css("color", "#aa0000")
            $("#oaright").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oahelm").innerHTML) == 0) {
        $("#oanhelm").html(" ")
        $("#oahelm").html(" ")
    } else {
        oeatk = oeatk + Number(document.getElementById("oahelm").innerHTML)
        if (Number(document.getElementById("oahelm").innerHTML) > 0) {
            $("#oanhelm").html(" Atk+")
            $("#oanhelm").css("color", "#00aa00")
            $("#oahelm").css("color", "#00aa00")
        } else {
            $("#oanhelm").html(" Atk")
            $("#oanhelm").css("color", "#aa0000")
            $("#oahelm").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oaplate").innerHTML) == 0) {
        $("#oanplate").html(" ")
        $("#oaplate").html(" ")
    } else {
        oeatk = oeatk + Number(document.getElementById("oaplate").innerHTML)
        if (Number(document.getElementById("oaplate").innerHTML) > 0) {
            $("#oanplate").html(" Atk+")
            $("#oanplate").css("color", "#00aa00")
            $("#oaplate").css("color", "#00aa00")
        } else {
            $("#oanplate").html(" Atk")
            $("#oanplate").css("color", "#aa0000")
            $("#oaplate").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oaleg").innerHTML) == 0) {
        $("#oanleg").html(" ")
        $("#oaleg").html(" ")
    } else {
        oeatk = oeatk + Number(document.getElementById("oaleg").innerHTML)
        if (Number(document.getElementById("oaleg").innerHTML) > 0) {
            $("#oanleg").html(" Atk+")
            $("#oanleg").css("color", "#00aa00")
            $("#oaleg").css("color", "#00aa00")
        } else {
            $("#oanleg").html(" Atk")
            $("#oanleg").css("color", "#aa0000")
            $("#oaleg").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oaboot").innerHTML) == 0) {
        $("#oanboot").html(" ")
        $("#oaboot").html(" ")
    } else {
        oeatk = oeatk + Number(document.getElementById("oaboot").innerHTML)
        if (Number(document.getElementById("oaboot").innerHTML) > 0) {
            $("#oanboot").html(" Atk+")
            $("#oanboot").css("color", "#00aa00")
            $("#oaboot").css("color", "#00aa00")
        } else {
            $("#oanboot").html(" Atk")
            $("#oanboot").css("color", "#aa0000")
            $("#oaboot").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oaacc1").innerHTML) == 0) {
        $("#oanacc1").html(" ")
        $("#oaacc1").html(" ")
    } else {
        oeatk = oeatk + Number(document.getElementById("oaacc1").innerHTML)
        if (Number(document.getElementById("oaacc1").innerHTML) > 0) {
            $("#oanacc1").html(" Atk+")
            $("#oanacc1").css("color", "#00aa00")
            $("#oaacc1").css("color", "#00aa00")
        } else {
            $("#oanacc1").html(" Atk")
            $("#oanacc1").css("color", "#aa0000")
            $("#oaacc1").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oaacc2").innerHTML) == 0) {
        $("#oanacc2").html(" ")
        $("#oaacc2").html(" ")
    } else {
        oeatk = oeatk + Number(document.getElementById("oaacc2").innerHTML)
        if (Number(document.getElementById("oaacc2").innerHTML) > 0) {
            $("#oanacc2").html(" Atk+")
            $("#oanacc2").css("color", "#00aa00")
            $("#oaacc2").css("color", "#00aa00")
        } else {
            $("#oanacc2").html(" Atk")
            $("#oanacc2").css("color", "#aa0000")
            $("#oaacc2").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oaacc3").innerHTML) == 0) {
        $("#oanacc3").html(" ")
        $("#oaacc3").html(" ")
    } else {
        oeatk = oeatk + Number(document.getElementById("oaacc3").innerHTML)
        if (Number(document.getElementById("oaacc3").innerHTML) > 0) {
            $("#oanacc3").html(" Atk+")
            $("#oanacc3").css("color", "#00aa00")
            $("#oaacc3").css("color", "#00aa00")
        } else {
            $("#oanacc3").html(" Atk")
            $("#oanacc3").css("color", "#aa0000")
            $("#oaacc3").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oaacc4").innerHTML) == 0) {
        $("#oanacc4").html(" ")
        $("#oaacc4").html(" ")
    } else {
        oeatk = oeatk + Number(document.getElementById("oaacc4").innerHTML)
        if (Number(document.getElementById("oaacc4").innerHTML) > 0) {
            $("#oanacc4").html(" Atk+")
            $("#oanacc4").css("color", "#00aa00")
            $("#oaacc4").css("color", "#00aa00")
        } else {
            $("#oanacc4").html(" Atk")
            $("#oanacc4").css("color", "#aa0000")
            $("#oaacc4").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oaacc5").innerHTML) == 0) {
        $("#oanacc5").html(" ")
        $("#oaacc5").html(" ")
    } else {
        oeatk = oeatk + Number(document.getElementById("oaacc5").innerHTML)
        if (Number(document.getElementById("oaacc5").innerHTML) > 0) {
            $("#oanacc5").html(" Atk+")
            $("#oanacc5").css("color", "#00aa00")
            $("#oaacc5").css("color", "#00aa00")
        } else {
            $("#oanacc5").html(" Atk")
            $("#oanacc5").css("color", "#aa0000")
            $("#oaacc5").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oacape").innerHTML) == 0) {
        $("#oancape").html(" ")
        $("#oacape").html(" ")
    } else {
        oeatk = oeatk + Number(document.getElementById("oacape").innerHTML)
        if (Number(document.getElementById("oacape").innerHTML) > 0) {
            $("#oancape").html(" Atk+")
            $("#oancape").css("color", "#00aa00")
            $("#oacape").css("color", "#00aa00")
        } else {
            $("#oancape").html(" Atk")
            $("#oancape").css("color", "#aa0000")
            $("#oacape").css("color", "#aa0000")
        }
    }

    //emag

    if (Number(document.getElementById("omleft").innerHTML) == 0) {
        $("#omnleft").html(" ")
        $("#omleft").html(" ")
    } else {
        oemag = oemag + Number(document.getElementById("omleft").innerHTML)
        if (Number(document.getElementById("omleft").innerHTML) > 0) {
            $("#omnleft").html(" Mag+")
            $("#omnleft").css("color", "#00aa00")
            $("#omleft").css("color", "#00aa00")
        } else {
            $("#omnleft").html(" Mag")
            $("#omnleft").css("color", "#aa0000")
            $("#omleft").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("omright").innerHTML) == 0) {
        $("#omnright").html(" ")
        $("#omright").html(" ")
    } else {
        oemag = oemag + Number(document.getElementById("omright").innerHTML)
        if (Number(document.getElementById("omright").innerHTML) > 0) {
            $("#omnright").html(" Mag+")
            $("#omnright").css("color", "#00aa00")
            $("#omright").css("color", "#00aa00")
        } else {
            $("#omnright").html(" Mag")
            $("#omnright").css("color", "#aa0000")
            $("#omright").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("omhelm").innerHTML) == 0) {
        $("#omnhelm").html(" ")
        $("#omhelm").html(" ")
    } else {
        oemag = oemag + Number(document.getElementById("omhelm").innerHTML)
        if (Number(document.getElementById("omhelm").innerHTML) > 0) {
            $("#omnhelm").html(" Mag+")
            $("#omnhelm").css("color", "#00aa00")
            $("#omhelm").css("color", "#00aa00")
        } else {
            $("#omnhelm").html(" Mag")
            $("#omnhelm").css("color", "#aa0000")
            $("#omhelm").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("omplate").innerHTML) == 0) {
        $("#omnplate").html(" ")
        $("#omplate").html(" ")
    } else {
        oemag = oemag + Number(document.getElementById("omplate").innerHTML)
        if (Number(document.getElementById("omplate").innerHTML) > 0) {
            $("#omnplate").html(" Mag+")
            $("#omnplate").css("color", "#00aa00")
            $("#omplate").css("color", "#00aa00")
        } else {
            $("#omnplate").html(" Mag")
            $("#omnplate").css("color", "#aa0000")
            $("#omplate").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("omleg").innerHTML) == 0) {
        $("#omnleg").html(" ")
        $("#omleg").html(" ")
    } else {
        oemag = oemag + Number(document.getElementById("omleg").innerHTML)
        if (Number(document.getElementById("omleg").innerHTML) > 0) {
            $("#omnleg").html(" Mag+")
            $("#omnleg").css("color", "#00aa00")
            $("#omleg").css("color", "#00aa00")
        } else {
            $("#omnleg").html(" Mag")
            $("#omnleg").css("color", "#aa0000")
            $("#omleg").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("omboot").innerHTML) == 0) {
        $("#omnboot").html(" ")
        $("#omboot").html(" ")
    } else {
        oemag = oemag + Number(document.getElementById("omboot").innerHTML)
        if (Number(document.getElementById("omboot").innerHTML) > 0) {
            $("#omnboot").html(" Mag+")
            $("#omnboot").css("color", "#00aa00")
            $("#omboot").css("color", "#00aa00")
        } else {
            $("#omnboot").html(" Mag")
            $("#omnboot").css("color", "#aa0000")
            $("#omboot").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("omacc1").innerHTML) == 0) {
        $("#omnacc1").html(" ")
        $("#omacc1").html(" ")
    } else {
        oemag = oemag + Number(document.getElementById("omacc1").innerHTML)
        if (Number(document.getElementById("omacc1").innerHTML) > 0) {
            $("#omnacc1").html(" Mag+")
            $("#omnacc1").css("color", "#00aa00")
            $("#omacc1").css("color", "#00aa00")
        } else {
            $("#omnacc1").html(" Mag")
            $("#omnacc1").css("color", "#aa0000")
            $("#omacc1").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("omacc2").innerHTML) == 0) {
        $("#omnacc2").html(" ")
        $("#omacc2").html(" ")
    } else {
        oemag = oemag + Number(document.getElementById("omacc2").innerHTML)
        if (Number(document.getElementById("omacc2").innerHTML) > 0) {
            $("#omnacc2").html(" Mag+")
            $("#omnacc2").css("color", "#00aa00")
            $("#omacc2").css("color", "#00aa00")
        } else {
            $("#omnacc2").html(" Mag")
            $("#omnacc2").css("color", "#aa0000")
            $("#omacc2").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("omacc3").innerHTML) == 0) {
        $("#omnacc3").html(" ")
        $("#omacc3").html(" ")
    } else {
        oemag = oemag + Number(document.getElementById("omacc3").innerHTML)
        if (Number(document.getElementById("omacc3").innerHTML) > 0) {
            $("#omnacc3").html(" Mag+")
            $("#omnacc3").css("color", "#00aa00")
            $("#omacc3").css("color", "#00aa00")
        } else {
            $("#omnacc3").html(" Mag")
            $("#omnacc3").css("color", "#aa0000")
            $("#omacc3").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("omacc4").innerHTML) == 0) {
        $("#omnacc4").html(" ")
        $("#omacc4").html(" ")
    } else {
        oemag = oemag + Number(document.getElementById("omacc4").innerHTML)
        if (Number(document.getElementById("omacc4").innerHTML) > 0) {
            $("#omnacc4").html(" Mag+")
            $("#omnacc4").css("color", "#00aa00")
            $("#omacc4").css("color", "#00aa00")
        } else {
            $("#omnacc4").html(" Mag")
            $("#omnacc4").css("color", "#aa0000")
            $("#omacc4").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("omacc5").innerHTML) == 0) {
        $("#omnacc5").html(" ")
        $("#omacc5").html(" ")
    } else {
        oemag = oemag + Number(document.getElementById("omacc5").innerHTML)
        if (Number(document.getElementById("omacc5").innerHTML) > 0) {
            $("#omnacc5").html(" Mag+")
            $("#omnacc5").css("color", "#00aa00")
            $("#omacc5").css("color", "#00aa00")
        } else {
            $("#omnacc5").html(" Mag")
            $("#omnacc5").css("color", "#aa0000")
            $("#omacc5").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("omcape").innerHTML) == 0) {
        $("#omncape").html(" ")
        $("#omcape").html(" ")
    } else {
        oemag = oemag + Number(document.getElementById("omcape").innerHTML)
        if (Number(document.getElementById("omcape").innerHTML) > 0) {
            $("#omncape").html(" Mag+")
            $("#omncape").css("color", "#00aa00")
            $("#omcape").css("color", "#00aa00")
        } else {
            $("#omncape").html(" Mag")
            $("#omncape").css("color", "#aa0000")
            $("#omcape").css("color", "#aa0000")
        }
    }

    //edef

    if (Number(document.getElementById("odleft").innerHTML) == 0) {
        $("#odnleft").html(" ")
        $("#odleft").html(" ")
    } else {
        oedef = oedef + Number(document.getElementById("odleft").innerHTML)
        if (Number(document.getElementById("odleft").innerHTML) > 0) {
            $("#odnleft").html(" Def+")
            $("#odnleft").css("color", "#00aa00")
            $("#odleft").css("color", "#00aa00")
        } else {
            $("#odnleft").html(" Def")
            $("#odnleft").css("color", "#aa0000")
            $("#odleft").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("odright").innerHTML) == 0) {
        $("#odnright").html(" ")
        $("#odright").html(" ")
    } else {
        oedef = oedef + Number(document.getElementById("odright").innerHTML)
        if (Number(document.getElementById("odright").innerHTML) > 0) {
            $("#odnright").html(" Def+")
            $("#odnright").css("color", "#00aa00")
            $("#odright").css("color", "#00aa00")
        } else {
            $("#odnright").html(" Def")
            $("#odnright").css("color", "#aa0000")
            $("#odright").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("odhelm").innerHTML) == 0) {
        $("#odnhelm").html(" ")
        $("#odhelm").html(" ")
    } else {
        oedef = oedef + Number(document.getElementById("odhelm").innerHTML)
        if (Number(document.getElementById("odhelm").innerHTML) > 0) {
            $("#odnhelm").html(" Def+")
            $("#odnhelm").css("color", "#00aa00")
            $("#odhelm").css("color", "#00aa00")
        } else {
            $("#odnhelm").html(" Def")
            $("#odnhelm").css("color", "#aa0000")
            $("#odhelm").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("odplate").innerHTML) == 0) {
        $("#odnplate").html(" ")
        $("#odplate").html(" ")
    } else {
        oedef = oedef + Number(document.getElementById("odplate").innerHTML)
        if (Number(document.getElementById("odplate").innerHTML) > 0) {
            $("#odnplate").html(" Def+")
            $("#odnplate").css("color", "#00aa00")
            $("#odplate").css("color", "#00aa00")
        } else {
            $("#odnplate").html(" Def")
            $("#odnplate").css("color", "#aa0000")
            $("#odplate").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("odleg").innerHTML) == 0) {
        $("#odnleg").html(" ")
        $("#odleg").html(" ")
    } else {
        oedef = oedef + Number(document.getElementById("odleg").innerHTML)
        if (Number(document.getElementById("odleg").innerHTML) > 0) {
            $("#odnleg").html(" Def+")
            $("#odnleg").css("color", "#00aa00")
            $("#odleg").css("color", "#00aa00")
        } else {
            $("#odnleg").html(" Def")
            $("#odnleg").css("color", "#aa0000")
            $("#odleg").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("odboot").innerHTML) == 0) {
        $("#odnboot").html(" ")
        $("#odboot").html(" ")
    } else {
        oedef = oedef + Number(document.getElementById("odboot").innerHTML)
        if (Number(document.getElementById("odboot").innerHTML) > 0) {
            $("#odnboot").html(" Def+")
            $("#odnboot").css("color", "#00aa00")
            $("#odboot").css("color", "#00aa00")
        } else {
            $("#odnboot").html(" Def")
            $("#odnboot").css("color", "#aa0000")
            $("#odboot").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("odacc1").innerHTML) == 0) {
        $("#odnacc1").html(" ")
        $("#odacc1").html(" ")
    } else {
        oedef = oedef + Number(document.getElementById("odacc1").innerHTML)
        if (Number(document.getElementById("odacc1").innerHTML) > 0) {
            $("#odnacc1").html(" Def+")
            $("#odnacc1").css("color", "#00aa00")
            $("#odacc1").css("color", "#00aa00")
        } else {
            $("#odnacc1").html(" Def")
            $("#odnacc1").css("color", "#aa0000")
            $("#odacc1").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("odacc2").innerHTML) == 0) {
        $("#odnacc2").html(" ")
        $("#odacc2").html(" ")
    } else {
        oedef = oedef + Number(document.getElementById("odacc2").innerHTML)
        if (Number(document.getElementById("odacc2").innerHTML) > 0) {
            $("#odnacc2").html(" Def+")
            $("#odnacc2").css("color", "#00aa00")
            $("#odacc2").css("color", "#00aa00")
        } else {
            $("#odnacc2").html(" Def")
            $("#odnacc2").css("color", "#aa0000")
            $("#odacc2").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("odacc3").innerHTML) == 0) {
        $("#odnacc3").html(" ")
        $("#odacc3").html(" ")
    } else {
        oedef = oedef + Number(document.getElementById("odacc3").innerHTML)
        if (Number(document.getElementById("odacc3").innerHTML) > 0) {
            $("#odnacc3").html(" Def+")
            $("#odnacc3").css("color", "#00aa00")
            $("#odacc3").css("color", "#00aa00")
        } else {
            $("#odnacc3").html(" Def")
            $("#odnacc3").css("color", "#aa0000")
            $("#odacc3").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("odacc4").innerHTML) == 0) {
        $("#odnacc4").html(" ")
        $("#odacc4").html(" ")
    } else {
        oedef = oedef + Number(document.getElementById("odacc4").innerHTML)
        if (Number(document.getElementById("odacc4").innerHTML) > 0) {
            $("#odnacc4").html(" Def+")
            $("#odnacc4").css("color", "#00aa00")
            $("#odacc4").css("color", "#00aa00")
        } else {
            $("#odnacc4").html(" Def")
            $("#odnacc4").css("color", "#aa0000")
            $("#odacc4").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("odacc5").innerHTML) == 0) {
        $("#odnacc5").html(" ")
        $("#odacc5").html(" ")
    } else {
        oedef = oedef + Number(document.getElementById("odacc5").innerHTML)
        if (Number(document.getElementById("odacc5").innerHTML) > 0) {
            $("#odnacc5").html(" Def+")
            $("#odnacc5").css("color", "#00aa00")
            $("#odacc5").css("color", "#00aa00")
        } else {
            $("#odnacc5").html(" Def")
            $("#odnacc5").css("color", "#aa0000")
            $("#odacc5").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("odcape").innerHTML) == 0) {
        $("#odncape").html(" ")
        $("#odcape").html(" ")
    } else {
        oedef = oedef + Number(document.getElementById("odcape").innerHTML)
        if (Number(document.getElementById("odcape").innerHTML) > 0) {
            $("#odncape").html(" Def+")
            $("#odncape").css("color", "#00aa00")
            $("#odcape").css("color", "#00aa00")
        } else {
            $("#odncape").html(" Def")
            $("#odncape").css("color", "#aa0000")
            $("#odcape").css("color", "#aa0000")
        }
    }

    //eres

    if (Number(document.getElementById("orleft").innerHTML) == 0) {
        $("#ornleft").html(" ")
        $("#orleft").html(" ")
    } else {
        oeres = oeres + Number(document.getElementById("orleft").innerHTML)
        if (Number(document.getElementById("orleft").innerHTML) > 0) {
            $("#ornleft").html(" Res+")
            $("#ornleft").css("color", "#00aa00")
            $("#orleft").css("color", "#00aa00")
        } else {
            $("#ornleft").html(" Res")
            $("#ornleft").css("color", "#aa0000")
            $("#orleft").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("orright").innerHTML) == 0) {
        $("#ornright").html(" ")
        $("#orright").html(" ")
    } else {
        oeres = oeres + Number(document.getElementById("orright").innerHTML)
        if (Number(document.getElementById("orright").innerHTML) > 0) {
            $("#ornright").html(" Res+")
            $("#ornright").css("color", "#00aa00")
            $("#orright").css("color", "#00aa00")
        } else {
            $("#ornright").html(" Res")
            $("#ornright").css("color", "#aa0000")
            $("#orright").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("orhelm").innerHTML) == 0) {
        $("#ornhelm").html(" ")
        $("#orhelm").html(" ")
    } else {
        oeres = oeres + Number(document.getElementById("orhelm").innerHTML)
        if (Number(document.getElementById("orhelm").innerHTML) > 0) {
            $("#ornhelm").html(" Res+")
            $("#ornhelm").css("color", "#00aa00")
            $("#orhelm").css("color", "#00aa00")
        } else {
            $("#ornhelm").html(" Res")
            $("#ornhelm").css("color", "#aa0000")
            $("#orhelm").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("orplate").innerHTML) == 0) {
        $("#ornplate").html(" ")
        $("#orplate").html(" ")
    } else {
        oeres = oeres + Number(document.getElementById("orplate").innerHTML)
        if (Number(document.getElementById("orplate").innerHTML) > 0) {
            $("#ornplate").html(" Res+")
            $("#ornplate").css("color", "#00aa00")
            $("#orplate").css("color", "#00aa00")
        } else {
            $("#ornplate").html(" Res")
            $("#ornplate").css("color", "#aa0000")
            $("#orplate").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("orleg").innerHTML) == 0) {
        $("#ornleg").html(" ")
        $("#orleg").html(" ")
    } else {
        oeres = oeres + Number(document.getElementById("orleg").innerHTML)
        if (Number(document.getElementById("orleg").innerHTML) > 0) {
            $("#ornleg").html(" Res+")
            $("#ornleg").css("color", "#00aa00")
            $("#orleg").css("color", "#00aa00")
        } else {
            $("#ornleg").html(" Res")
            $("#ornleg").css("color", "#aa0000")
            $("#orleg").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("orboot").innerHTML) == 0) {
        $("#ornboot").html(" ")
        $("#orboot").html(" ")
    } else {
        oeres = oeres + Number(document.getElementById("orboot").innerHTML)
        if (Number(document.getElementById("orboot").innerHTML) > 0) {
            $("#ornboot").html(" Res+")
            $("#ornboot").css("color", "#00aa00")
            $("#orboot").css("color", "#00aa00")
        } else {
            $("#ornboot").html(" Res")
            $("#ornboot").css("color", "#aa0000")
            $("#orboot").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oracc1").innerHTML) == 0) {
        $("#ornacc1").html(" ")
        $("#oracc1").html(" ")
    } else {
        oeres = oeres + Number(document.getElementById("oracc1").innerHTML)
        if (Number(document.getElementById("oracc1").innerHTML) > 0) {
            $("#ornacc1").html(" Res+")
            $("#ornacc1").css("color", "#00aa00")
            $("#oracc1").css("color", "#00aa00")
        } else {
            $("#ornacc1").html(" Res")
            $("#ornacc1").css("color", "#aa0000")
            $("#oracc1").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oracc2").innerHTML) == 0) {
        $("#ornacc2").html(" ")
        $("#oracc2").html(" ")
    } else {
        oeres = oeres + Number(document.getElementById("oracc2").innerHTML)
        if (Number(document.getElementById("oracc2").innerHTML) > 0) {
            $("#ornacc2").html(" Res+")
            $("#ornacc2").css("color", "#00aa00")
            $("#oracc2").css("color", "#00aa00")
        } else {
            $("#ornacc2").html(" Res")
            $("#ornacc2").css("color", "#aa0000")
            $("#oracc2").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oracc3").innerHTML) == 0) {
        $("#ornacc3").html(" ")
        $("#oracc3").html(" ")
    } else {
        oeres = oeres + Number(document.getElementById("oracc3").innerHTML)
        if (Number(document.getElementById("oracc3").innerHTML) > 0) {
            $("#ornacc3").html(" Res+")
            $("#ornacc3").css("color", "#00aa00")
            $("#oracc3").css("color", "#00aa00")
        } else {
            $("#ornacc3").html(" Res")
            $("#ornacc3").css("color", "#aa0000")
            $("#oracc3").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oracc4").innerHTML) == 0) {
        $("#ornacc4").html(" ")
        $("#oracc4").html(" ")
    } else {
        oeres = oeres + Number(document.getElementById("oracc4").innerHTML)
        if (Number(document.getElementById("oracc4").innerHTML) > 0) {
            $("#ornacc4").html(" Res+")
            $("#ornacc4").css("color", "#00aa00")
            $("#oracc4").css("color", "#00aa00")
        } else {
            $("#ornacc4").html(" Res")
            $("#ornacc4").css("color", "#aa0000")
            $("#oracc4").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oracc5").innerHTML) == 0) {
        $("#ornacc5").html(" ")
        $("#oracc5").html(" ")
    } else {
        oeres = oeres + Number(document.getElementById("oracc5").innerHTML)
        if (Number(document.getElementById("oracc5").innerHTML) > 0) {
            $("#ornacc5").html(" Res+")
            $("#ornacc5").css("color", "#00aa00")
            $("#oracc5").css("color", "#00aa00")
        } else {
            $("#ornacc5").html(" Res")
            $("#ornacc5").css("color", "#aa0000")
            $("#oracc5").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("orcape").innerHTML) == 0) {
        $("#orncape").html(" ")
        $("#orcape").html(" ")
    } else {
        oeres = oeres + Number(document.getElementById("orcape").innerHTML)
        if (Number(document.getElementById("orcape").innerHTML) > 0) {
            $("#orncape").html(" Res+")
            $("#orncape").css("color", "#00aa00")
            $("#orcape").css("color", "#00aa00")
        } else {
            $("#orncape").html(" Res")
            $("#orncape").css("color", "#aa0000")
            $("#orcape").css("color", "#aa0000")
        }
    }

    //espd

    if (Number(document.getElementById("osleft").innerHTML) == 0) {
        $("#osnleft").html(" ")
        $("#osleft").html(" ")
    } else {
        oespd = oespd + Number(document.getElementById("osleft").innerHTML)
        if (Number(document.getElementById("osleft").innerHTML) > 0) {
            $("#osnleft").html(" Spd+")
            $("#osnleft").css("color", "#00aa00")
            $("#osleft").css("color", "#00aa00")
        } else {
            $("#osnleft").html(" Spd")
            $("#osnleft").css("color", "#aa0000")
            $("#osleft").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("osright").innerHTML) == 0) {
        $("#osnright").html(" ")
        $("#osright").html(" ")
    } else {
        oespd = oespd + Number(document.getElementById("osright").innerHTML)
        if (Number(document.getElementById("osright").innerHTML) > 0) {
            $("#osnright").html(" Spd+")
            $("#osnright").css("color", "#00aa00")
            $("#osright").css("color", "#00aa00")
        } else {
            $("#osnright").html(" Spd")
            $("#osnright").css("color", "#aa0000")
            $("#osright").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oshelm").innerHTML) == 0) {
        $("#osnhelm").html(" ")
        $("#oshelm").html(" ")
    } else {
        oespd = oespd + Number(document.getElementById("oshelm").innerHTML)
        if (Number(document.getElementById("oshelm").innerHTML) > 0) {
            $("#osnhelm").html(" Spd+")
            $("#osnhelm").css("color", "#00aa00")
            $("#oshelm").css("color", "#00aa00")
        } else {
            $("#osnhelm").html(" Spd")
            $("#osnhelm").css("color", "#aa0000")
            $("#oshelm").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("osplate").innerHTML) == 0) {
        $("#osnplate").html(" ")
        $("#osplate").html(" ")
    } else {
        oespd = oespd + Number(document.getElementById("osplate").innerHTML)
        if (Number(document.getElementById("osplate").innerHTML) > 0) {
            $("#osnplate").html(" Spd+")
            $("#osnplate").css("color", "#00aa00")
            $("#osplate").css("color", "#00aa00")
        } else {
            $("#osnplate").html(" Spd")
            $("#osnplate").css("color", "#aa0000")
            $("#osplate").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("osleg").innerHTML) == 0) {
        $("#osnleg").html(" ")
        $("#osleg").html(" ")
    } else {
        oespd = oespd + Number(document.getElementById("osleg").innerHTML)
        if (Number(document.getElementById("osleg").innerHTML) > 0) {
            $("#osnleg").html(" Spd+")
            $("#osnleg").css("color", "#00aa00")
            $("#osleg").css("color", "#00aa00")
        } else {
            $("#osnleg").html(" Spd")
            $("#osnleg").css("color", "#aa0000")
            $("#osleg").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("osboot").innerHTML) == 0) {
        $("#osnboot").html(" ")
        $("#osboot").html(" ")
    } else {
        oespd = oespd + Number(document.getElementById("osboot").innerHTML)
        if (Number(document.getElementById("osboot").innerHTML) > 0) {
            $("#osnboot").html(" Spd+")
            $("#osnboot").css("color", "#00aa00")
            $("#osboot").css("color", "#00aa00")
        } else {
            $("#osnboot").html(" Spd")
            $("#osnboot").css("color", "#aa0000")
            $("#osboot").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("osacc1").innerHTML) == 0) {
        $("#osnacc1").html(" ")
        $("#osacc1").html(" ")
    } else {
        oespd = oespd + Number(document.getElementById("osacc1").innerHTML)
        if (Number(document.getElementById("osacc1").innerHTML) > 0) {
            $("#osnacc1").html(" Spd+")
            $("#osnacc1").css("color", "#00aa00")
            $("#osacc1").css("color", "#00aa00")
        } else {
            $("#osnacc1").html(" Spd")
            $("#osnacc1").css("color", "#aa0000")
            $("#osacc1").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("osacc2").innerHTML) == 0) {
        $("#osnacc2").html(" ")
        $("#osacc2").html(" ")
    } else {
        oespd = oespd + Number(document.getElementById("osacc2").innerHTML)
        if (Number(document.getElementById("osacc2").innerHTML) > 0) {
            $("#osnacc2").html(" Spd+")
            $("#osnacc2").css("color", "#00aa00")
            $("#osacc2").css("color", "#00aa00")
        } else {
            $("#osnacc2").html(" Spd")
            $("#osnacc2").css("color", "#aa0000")
            $("#osacc2").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("osacc3").innerHTML) == 0) {
        $("#osnacc3").html(" ")
        $("#osacc3").html(" ")
    } else {
        oespd = oespd + Number(document.getElementById("osacc3").innerHTML)
        if (Number(document.getElementById("osacc3").innerHTML) > 0) {
            $("#osnacc3").html(" Spd+")
            $("#osnacc3").css("color", "#00aa00")
            $("#osacc3").css("color", "#00aa00")
        } else {
            $("#osnacc3").html(" Spd")
            $("#osnacc3").css("color", "#aa0000")
            $("#osacc3").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("osacc4").innerHTML) == 0) {
        $("#osnacc4").html(" ")
        $("#osacc4").html(" ")
    } else {
        oespd = oespd + Number(document.getElementById("osacc4").innerHTML)
        if (Number(document.getElementById("osacc4").innerHTML) > 0) {
            $("#osnacc4").html(" Spd+")
            $("#osnacc4").css("color", "#00aa00")
            $("#osacc4").css("color", "#00aa00")
        } else {
            $("#osnacc4").html(" Spd")
            $("#osnacc4").css("color", "#aa0000")
            $("#osacc4").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("osacc5").innerHTML) == 0) {
        $("#osnacc5").html(" ")
        $("#osacc5").html(" ")
    } else {
        oespd = oespd + Number(document.getElementById("osacc5").innerHTML)
        if (Number(document.getElementById("osacc5").innerHTML) > 0) {
            $("#osnacc5").html(" Spd+")
            $("#osnacc5").css("color", "#00aa00")
            $("#osacc5").css("color", "#00aa00")
        } else {
            $("#osnacc5").html(" Spd")
            $("#osnacc5").css("color", "#aa0000")
            $("#osacc5").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oscape").innerHTML) == 0) {
        $("#osncape").html(" ")
        $("#oscape").html(" ")
    } else {
        oespd = oespd + Number(document.getElementById("oscape").innerHTML)
        if (Number(document.getElementById("oscape").innerHTML) > 0) {
            $("#osncape").html(" Spd+")
            $("#osncape").css("color", "#00aa00")
            $("#oscape").css("color", "#00aa00")
        } else {
            $("#osncape").html(" Spd")
            $("#osncape").css("color", "#aa0000")
            $("#oscape").css("color", "#aa0000")
        }
    }

    //  oestr
    if (Number(document.getElementById("oileft").innerHTML) == 0) {
        $("#oinleft").html(" ")
        $("#oileft").html(" ")
    } else {
        oestr = oestr + Number(document.getElementById("oileft").innerHTML)
        if (Number(document.getElementById("oileft").innerHTML) > 0) {
            $("#oinleft").html(" Str+")
            $("#oinleft").css("color", "#00aa00")
            $("#oileft").css("color", "#00aa00")
        } else {
            $("#oinleft").html(" Str")
            $("#oinleft").css("color", "#aa0000")
            $("#oileft").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oiright").innerHTML) == 0) {
        $("#oinright").html(" ")
        $("#oiright").html(" ")
    } else {
        oestr = oestr + Number(document.getElementById("oiright").innerHTML)
        if (Number(document.getElementById("oiright").innerHTML) > 0) {
            $("#oinright").html(" Str+")
            $("#oinright").css("color", "#00aa00")
            $("#oiright").css("color", "#00aa00")
        } else {
            $("#oinright").html(" Str")
            $("#oinright").css("color", "#aa0000")
            $("#oiright").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oihelm").innerHTML) == 0) {
        $("#oinhelm").html(" ")
        $("#oihelm").html(" ")
    } else {
        oestr = oestr + Number(document.getElementById("oihelm").innerHTML)
        if (Number(document.getElementById("oihelm").innerHTML) > 0) {
            $("#oinhelm").html(" Str+")
            $("#oinhelm").css("color", "#00aa00")
            $("#oihelm").css("color", "#00aa00")
        } else {
            $("#oinhelm").html(" Str")
            $("#oinhelm").css("color", "#aa0000")
            $("#oihelm").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oiplate").innerHTML) == 0) {
        $("#oinplate").html(" ")
        $("#oiplate").html(" ")
    } else {
        oestr = oestr + Number(document.getElementById("oiplate").innerHTML)
        if (Number(document.getElementById("oiplate").innerHTML) > 0) {
            $("#oinplate").html(" Str+")
            $("#oinplate").css("color", "#00aa00")
            $("#oiplate").css("color", "#00aa00")
        } else {
            $("#oinplate").html(" Str")
            $("#oinplate").css("color", "#aa0000")
            $("#oiplate").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oileg").innerHTML) == 0) {
        $("#oinleg").html(" ")
        $("#oileg").html(" ")
    } else {
        oestr = oestr + Number(document.getElementById("oileg").innerHTML)
        if (Number(document.getElementById("oileg").innerHTML) > 0) {
            $("#oinleg").html(" Str+")
            $("#oinleg").css("color", "#00aa00")
            $("#oileg").css("color", "#00aa00")
        } else {
            $("#oinleg").html(" Str")
            $("#oinleg").css("color", "#aa0000")
            $("#oileg").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oiboot").innerHTML) == 0) {
        $("#oinboot").html(" ")
        $("#oiboot").html(" ")
    } else {
        oestr = oestr + Number(document.getElementById("oiboot").innerHTML)
        if (Number(document.getElementById("oiboot").innerHTML) > 0) {
            $("#oinboot").html(" Str+")
            $("#oinboot").css("color", "#00aa00")
            $("#oiboot").css("color", "#00aa00")
        } else {
            $("#oinboot").html(" Str")
            $("#oinboot").css("color", "#aa0000")
            $("#oiboot").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oiacc1").innerHTML) == 0) {
        $("#oinacc1").html(" ")
        $("#oiacc1").html(" ")
    } else {
        oestr = oestr + Number(document.getElementById("oiacc1").innerHTML)
        if (Number(document.getElementById("oiacc1").innerHTML) > 0) {
            $("#oinacc1").html(" Str+")
            $("#oinacc1").css("color", "#00aa00")
            $("#oiacc1").css("color", "#00aa00")
        } else {
            $("#oinacc1").html(" Str")
            $("#oinacc1").css("color", "#aa0000")
            $("#oiacc1").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oiacc2").innerHTML) == 0) {
        $("#oinacc2").html(" ")
        $("#oiacc2").html(" ")
    } else {
        oestr = oestr + Number(document.getElementById("oiacc2").innerHTML)
        if (Number(document.getElementById("oiacc2").innerHTML) > 0) {
            $("#oinacc2").html(" Str+")
            $("#oinacc2").css("color", "#00aa00")
            $("#oiacc2").css("color", "#00aa00")
        } else {
            $("#oinacc2").html(" Str")
            $("#oinacc2").css("color", "#aa0000")
            $("#oiacc2").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oiacc3").innerHTML) == 0) {
        $("#oinacc3").html(" ")
        $("#oiacc3").html(" ")
    } else {
        oestr = oestr + Number(document.getElementById("oiacc3").innerHTML)
        if (Number(document.getElementById("oiacc3").innerHTML) > 0) {
            $("#oinacc3").html(" Str+")
            $("#oinacc3").css("color", "#00aa00")
            $("#oiacc3").css("color", "#00aa00")
        } else {
            $("#oinacc3").html(" Str")
            $("#oinacc3").css("color", "#aa0000")
            $("#oiacc3").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oiacc4").innerHTML) == 0) {
        $("#oinacc4").html(" ")
        $("#oiacc4").html(" ")
    } else {
        oestr = oestr + Number(document.getElementById("oiacc4").innerHTML)
        if (Number(document.getElementById("oiacc4").innerHTML) > 0) {
            $("#oinacc4").html(" Str+")
            $("#oinacc4").css("color", "#00aa00")
            $("#oiacc4").css("color", "#00aa00")
        } else {
            $("#oinacc4").html(" Str")
            $("#oinacc4").css("color", "#aa0000")
            $("#oiacc4").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oiacc5").innerHTML) == 0) {
        $("#oinacc5").html(" ")
        $("#oiacc5").html(" ")
    } else {
        oestr = oestr + Number(document.getElementById("oiacc5").innerHTML)
        if (Number(document.getElementById("oiacc5").innerHTML) > 0) {
            $("#oinacc5").html(" Str+")
            $("#oinacc5").css("color", "#00aa00")
            $("#oiacc5").css("color", "#00aa00")
        } else {
            $("#oinacc5").html(" Str")
            $("#oinacc5").css("color", "#aa0000")
            $("#oiacc5").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oicape").innerHTML) == 0) {
        $("#oincape").html(" ")
        $("#oicape").html(" ")
    } else {
        oestr = oestr + Number(document.getElementById("oicape").innerHTML)
        if (Number(document.getElementById("oicape").innerHTML) > 0) {
            $("#oincape").html(" Str+")
            $("#oincape").css("color", "#00aa00")
            $("#oicape").css("color", "#00aa00")
        } else {
            $("#oincape").html(" Str")
            $("#oincape").css("color", "#aa0000")
            $("#oicape").css("color", "#aa0000")
        }
    }

    //  oesth

    if (Number(document.getElementById("otleft").innerHTML) == 0) {
        $("#otnleft").html(" ")
        $("#otleft").html(" ")
    } else {
        oesth = oesth + Number(document.getElementById("otleft").innerHTML)
        if (Number(document.getElementById("otleft").innerHTML) > 0) {
            $("#otnleft").html(" Sth+")
            $("#otnleft").css("color", "#00aa00")
            $("#otleft").css("color", "#00aa00")
        } else {
            $("#otnleft").html(" Sth")
            $("#otnleft").css("color", "#aa0000")
            $("#otleft").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("otright").innerHTML) == 0) {
        $("#otnright").html(" ")
        $("#otright").html(" ")
    } else {
        oesth = oesth + Number(document.getElementById("otright").innerHTML)
        if (Number(document.getElementById("otright").innerHTML) > 0) {
            $("#otnright").html(" Sth+")
            $("#otnright").css("color", "#00aa00")
            $("#otright").css("color", "#00aa00")
        } else {
            $("#otnright").html(" Sth")
            $("#otnright").css("color", "#aa0000")
            $("#oright").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("othelm").innerHTML) == 0) {
        $("#otnhelm").html(" ")
        $("#othelm").html(" ")
    } else {
        oesth = oesth + Number(document.getElementById("othelm").innerHTML)
        if (Number(document.getElementById("othelm").innerHTML) > 0) {
            $("#otnhelm").html(" Sth+")
            $("#otnhelm").css("color", "#00aa00")
            $("#othelm").css("color", "#00aa00")
        } else {
            $("#otnhelm").html(" Sth")
            $("#otnhelm").css("color", "#aa0000")
            $("#othelm").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("otplate").innerHTML) == 0) {
        $("#otnplate").html(" ")
        $("#otplate").html(" ")
    } else {
        oesth = oesth + Number(document.getElementById("otplate").innerHTML)
        if (Number(document.getElementById("otplate").innerHTML) > 0) {
            $("#otnplate").html(" Sth+")
            $("#otnplate").css("color", "#00aa00")
            $("#otplate").css("color", "#00aa00")
        } else {
            $("#otnplate").html(" Sth")
            $("#otnplate").css("color", "#aa0000")
            $("#otplate").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("otleg").innerHTML) == 0) {
        $("#otnleg").html(" ")
        $("#otleg").html(" ")
    } else {
        oesth = oesth + Number(document.getElementById("otleg").innerHTML)
        if (Number(document.getElementById("otleg").innerHTML) > 0) {
            $("#otnleg").html(" Sth+")
            $("#otnleg").css("color", "#00aa00")
            $("#otleg").css("color", "#00aa00")
        } else {
            $("#otnleg").html(" Sth")
            $("#otnleg").css("color", "#aa0000")
            $("#otleg").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("otboot").innerHTML) == 0) {
        $("#otnboot").html(" ")
        $("#otboot").html(" ")
    } else {
        oesth = oesth + Number(document.getElementById("otboot").innerHTML)
        if (Number(document.getElementById("otboot").innerHTML) > 0) {
            $("#otnboot").html(" Sth+")
            $("#otnboot").css("color", "#00aa00")
            $("#otboot").css("color", "#00aa00")
        } else {
            $("#otnboot").html(" Sth")
            $("#otnboot").css("color", "#aa0000")
            $("#otboot").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("otacc1").innerHTML) == 0) {
        $("#otnacc1").html(" ")
        $("#otacc1").html(" ")
    } else {
        oesth = oesth + Number(document.getElementById("otacc1").innerHTML)
        if (Number(document.getElementById("otacc1").innerHTML) > 0) {
            $("#otnacc1").html(" Sth+")
            $("#otnacc1").css("color", "#00aa00")
            $("#otacc1").css("color", "#00aa00")
        } else {
            $("#otnacc1").html(" Sth")
            $("#otnacc1").css("color", "#aa0000")
            $("#otacc1").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("otacc2").innerHTML) == 0) {
        $("#otnacc2").html(" ")
        $("#otacc2").html(" ")
    } else {
        oesth = oesth + Number(document.getElementById("otacc2").innerHTML)
        if (Number(document.getElementById("otacc2").innerHTML) > 0) {
            $("#otnacc2").html(" Sth+")
            $("#otnacc2").css("color", "#00aa00")
            $("#otacc2").css("color", "#00aa00")
        } else {
            $("#otnacc2").html(" Sth")
            $("#otnacc2").css("color", "#aa0000")
            $("#otacc2").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("otacc3").innerHTML) == 0) {
        $("#otnacc3").html(" ")
        $("#otacc3").html(" ")
    } else {
        oesth = oesth + Number(document.getElementById("otacc3").innerHTML)
        if (Number(document.getElementById("otacc3").innerHTML) > 0) {
            $("#otnacc3").html(" Sth+")
            $("#otnacc3").css("color", "#00aa00")
            $("#otacc3").css("color", "#00aa00")
        } else {
            $("#otnacc3").html(" Sth")
            $("#otnacc3").css("color", "#aa0000")
            $("#otacc3").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("otacc4").innerHTML) == 0) {
        $("#otnacc4").html(" ")
        $("#otacc4").html(" ")
    } else {
        oesth = oesth + Number(document.getElementById("otacc4").innerHTML)
        if (Number(document.getElementById("otacc4").innerHTML) > 0) {
            $("#otnacc4").html(" Sth+")
            $("#otnacc4").css("color", "#00aa00")
            $("#otacc4").css("color", "#00aa00")
        } else {
            $("#otnacc4").html(" Sth")
            $("#otnacc4").css("color", "#aa0000")
            $("#otacc4").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("otacc5").innerHTML) == 0) {
        $("#otnacc5").html(" ")
        $("#otacc5").html(" ")
    } else {
        oesth = oesth + Number(document.getElementById("otacc5").innerHTML)
        if (Number(document.getElementById("otacc5").innerHTML) > 0) {
            $("#otnacc5").html(" Sth+")
            $("#otnacc5").css("color", "#00aa00")
            $("#otacc5").css("color", "#00aa00")
        } else {
            $("#otnacc5").html(" Sth")
            $("#otnacc5").css("color", "#aa0000")
            $("#otacc5").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("otcape").innerHTML) == 0) {
        $("#otncape").html(" ")
        $("#otcape").html(" ")
    } else {
        oesth = oesth + Number(document.getElementById("otcape").innerHTML)
        if (Number(document.getElementById("otcape").innerHTML) > 0) {
            $("#otncape").html(" Sth+")
            $("#otncape").css("color", "#00aa00")
            $("#otcape").css("color", "#00aa00")
        } else {
            $("#otncape").html(" Sth")
            $("#otncape").css("color", "#aa0000")
            $("#otcape").css("color", "#aa0000")
        }
    }

    //  oeawr

    if (Number(document.getElementById("owleft").innerHTML) == 0) {
        $("#ownleft").html(" ")
        $("#owleft").html(" ")
    } else {
        oeawr = oeawr + Number(document.getElementById("owleft").innerHTML)
        if (Number(document.getElementById("owleft").innerHTML) > 0) {
            $("#ownleft").html(" Awr+")
            $("#ownleft").css("color", "#00aa00")
            $("#owleft").css("color", "#00aa00")
        } else {
            $("#ownleft").html(" Awr")
            $("#ownleft").css("color", "#aa0000")
            $("#owleft").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("owright").innerHTML) == 0) {
        $("#ownright").html(" ")
        $("#owright").html(" ")
    } else {
        oeawr = oeawr + Number(document.getElementById("owright").innerHTML)
        if (Number(document.getElementById("owright").innerHTML) > 0) {
            $("#ownright").html(" Awr+")
            $("#ownright").css("color", "#00aa00")
            $("#owright").css("color", "#00aa00")
        } else {
            $("#ownright").html(" Awr")
            $("#ownright").css("color", "#aa0000")
            $("#owright").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("owhelm").innerHTML) == 0) {
        $("#ownhelm").html(" ")
        $("#owhelm").html(" ")
    } else {
        oeawr = oeawr + Number(document.getElementById("owhelm").innerHTML)
        if (Number(document.getElementById("owhelm").innerHTML) > 0) {
            $("#ownhelm").html(" Awr+")
            $("#ownhelm").css("color", "#00aa00")
            $("#owhelm").css("color", "#00aa00")
        } else {
            $("#ownhelm").html(" Awr")
            $("#ownhelm").css("color", "#aa0000")
            $("#owhelm").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("owplate").innerHTML) == 0) {
        $("#ownplate").html(" ")
        $("#owplate").html(" ")
    } else {
        oeawr = oeawr + Number(document.getElementById("owplate").innerHTML)
        if (Number(document.getElementById("owplate").innerHTML) > 0) {
            $("#ownplate").html(" Awr+")
            $("#ownplate").css("color", "#00aa00")
            $("#owplate").css("color", "#00aa00")
        } else {
            $("#ownplate").html(" Awr")
            $("#ownplate").css("color", "#aa0000")
            $("#owplate").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("owleg").innerHTML) == 0) {
        $("#ownleg").html(" ")
        $("#owleg").html(" ")
    } else {
        oeawr = oeawr + Number(document.getElementById("owleg").innerHTML)
        if (Number(document.getElementById("owleg").innerHTML) > 0) {
            $("#ownleg").html(" Awr+")
            $("#ownleg").css("color", "#00aa00")
            $("#owleg").css("color", "#00aa00")
        } else {
            $("#ownleg").html(" Awr")
            $("#ownleg").css("color", "#aa0000")
            $("#owleg").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("owboot").innerHTML) == 0) {
        $("#ownboot").html(" ")
        $("#owboot").html(" ")
    } else {
        oeawr = oeawr + Number(document.getElementById("owboot").innerHTML)
        if (Number(document.getElementById("owboot").innerHTML) > 0) {
            $("#ownboot").html(" Awr+")
            $("#ownboot").css("color", "#00aa00")
            $("#owboot").css("color", "#00aa00")
        } else {
            $("#ownboot").html(" Awr")
            $("#ownboot").css("color", "#aa0000")
            $("#owboot").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("owacc1").innerHTML) == 0) {
        $("#ownacc1").html(" ")
        $("#owacc1").html(" ")
    } else {
        oeawr = oeawr + Number(document.getElementById("owacc1").innerHTML)
        if (Number(document.getElementById("owacc1").innerHTML) > 0) {
            $("#ownacc1").html(" Awr+")
            $("#ownacc1").css("color", "#00aa00")
            $("#owacc1").css("color", "#00aa00")
        } else {
            $("#ownacc1").html(" Awr")
            $("#ownacc1").css("color", "#aa0000")
            $("#owacc1").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("owacc2").innerHTML) == 0) {
        $("#ownacc2").html(" ")
        $("#owacc2").html(" ")
    } else {
        oeawr = oeawr + Number(document.getElementById("owacc2").innerHTML)
        if (Number(document.getElementById("owacc2").innerHTML) > 0) {
            $("#ownacc2").html(" Awr+")
            $("#ownacc2").css("color", "#00aa00")
            $("#owacc2").css("color", "#00aa00")
        } else {
            $("#ownacc2").html(" Awr")
            $("#ownacc2").css("color", "#aa0000")
            $("#owacc2").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("owacc3").innerHTML) == 0) {
        $("#ownacc3").html(" ")
        $("#owacc3").html(" ")
    } else {
        oeawr = oeawr + Number(document.getElementById("owacc3").innerHTML)
        if (Number(document.getElementById("owacc3").innerHTML) > 0) {
            $("#ownacc3").html(" Awr+")
            $("#ownacc3").css("color", "#00aa00")
            $("#owacc3").css("color", "#00aa00")
        } else {
            $("#ownacc3").html(" Awr")
            $("#ownacc3").css("color", "#aa0000")
            $("#owacc3").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("owacc4").innerHTML) == 0) {
        $("#ownacc4").html(" ")
        $("#owacc4").html(" ")
    } else {
        oeawr = oeawr + Number(document.getElementById("owacc4").innerHTML)
        if (Number(document.getElementById("owacc4").innerHTML) > 0) {
            $("#ownacc4").html(" Awr+")
            $("#ownacc4").css("color", "#00aa00")
            $("#owacc4").css("color", "#00aa00")
        } else {
            $("#ownacc4").html(" Awr")
            $("#ownacc4").css("color", "#aa0000")
            $("#owacc4").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("owacc5").innerHTML) == 0) {
        $("#ownacc5").html(" ")
        $("#owacc5").html(" ")
    } else {
        oeawr = oeawr + Number(document.getElementById("owacc5").innerHTML)
        if (Number(document.getElementById("owacc5").innerHTML) > 0) {
            $("#ownacc5").html(" Awr+")
            $("#ownacc5").css("color", "#00aa00")
            $("#owacc5").css("color", "#00aa00")
        } else {
            $("#ownacc5").html(" Awr")
            $("#ownacc5").css("color", "#aa0000")
            $("#owacc5").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("owcape").innerHTML) == 0) {
        $("#owncape").html(" ")
        $("#owcape").html(" ")
    } else {
        oeawr = oeawr + Number(document.getElementById("owcape").innerHTML)
        if (Number(document.getElementById("owcape").innerHTML) > 0) {
            $("#owncape").html(" Awr+")
            $("#owncape").css("color", "#00aa00")
            $("#owcape").css("color", "#00aa00")
        } else {
            $("#owncape").html(" Awr")
            $("#owncape").css("color", "#aa0000")
            $("#owcape").css("color", "#aa0000")
        }
    }

    //  oerfx

    if (Number(document.getElementById("oxleft").innerHTML) == 0) {
        $("#oxnleft").html(" ")
        $("#oxleft").html(" ")
    } else {
        oerfx = oerfx + Number(document.getElementById("oxleft").innerHTML)
        if (Number(document.getElementById("oxleft").innerHTML) > 0) {
            $("#oxnleft").html(" Rfx+")
            $("#oxnleft").css("color", "#00aa00")
            $("#oxleft").css("color", "#00aa00")
        } else {
            $("#oxnleft").html(" Rfx")
            $("#oxnleft").css("color", "#aa0000")
            $("#oxleft").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oxright").innerHTML) == 0) {
        $("#oxnright").html(" ")
        $("#oxright").html(" ")
    } else {
        oerfx = oerfx + Number(document.getElementById("oxright").innerHTML)
        if (Number(document.getElementById("oxright").innerHTML) > 0) {
            $("#oxnright").html(" Rfx+")
            $("#oxnright").css("color", "#00aa00")
            $("#oxright").css("color", "#00aa00")
        } else {
            $("#oxnright").html(" Rfx")
            $("#oxnright").css("color", "#aa0000")
            $("#oxright").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oxhelm").innerHTML) == 0) {
        $("#oxnhelm").html(" ")
        $("#oxhelm").html(" ")
    } else {
        oerfx = oerfx + Number(document.getElementById("oxhelm").innerHTML)
        if (Number(document.getElementById("oxhelm").innerHTML) > 0) {
            $("#oxnhelm").html(" Rfx+")
            $("#oxnhelm").css("color", "#00aa00")
            $("#oxhelm").css("color", "#00aa00")
        } else {
            $("#oxnhelm").html(" Rfx")
            $("#oxnhelm").css("color", "#aa0000")
            $("#oxhelm").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oxplate").innerHTML) == 0) {
        $("#oxnplate").html(" ")
        $("#oxplate").html(" ")
    } else {
        oerfx = oerfx + Number(document.getElementById("oxplate").innerHTML)
        if (Number(document.getElementById("oxplate").innerHTML) > 0) {
            $("#oxnplate").html(" Rfx+")
            $("#oxnplate").css("color", "#00aa00")
            $("#oxplate").css("color", "#00aa00")
        } else {
            $("#oxnplate").html(" Rfx")
            $("#oxnplate").css("color", "#aa0000")
            $("#oxplate").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oxleg").innerHTML) == 0) {
        $("#oxnleg").html(" ")
        $("#oxleg").html(" ")
    } else {
        oerfx = oerfx + Number(document.getElementById("oxleg").innerHTML)
        if (Number(document.getElementById("oxleg").innerHTML) > 0) {
            $("#oxnleg").html(" Rfx+")
            $("#oxnleg").css("color", "#00aa00")
            $("#oxleg").css("color", "#00aa00")
        } else {
            $("#oxnleg").html(" Rfx")
            $("#oxnleg").css("color", "#aa0000")
            $("#oxleg").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oxboot").innerHTML) == 0) {
        $("#oxnboot").html(" ")
        $("#oxboot").html(" ")
    } else {
        oerfx = oerfx + Number(document.getElementById("oxboot").innerHTML)
        if (Number(document.getElementById("oxboot").innerHTML) > 0) {
            $("#oxnboot").html(" Rfx+")
            $("#oxnboot").css("color", "#00aa00")
            $("#oxboot").css("color", "#00aa00")
        } else {
            $("#oxnboot").html(" Rfx")
            $("#oxnboot").css("color", "#aa0000")
            $("#oxboot").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oxacc1").innerHTML) == 0) {
        $("#oxnacc1").html(" ")
        $("#oxacc1").html(" ")
    } else {
        oerfx = oerfx + Number(document.getElementById("oxacc1").innerHTML)
        if (Number(document.getElementById("oxacc1").innerHTML) > 0) {
            $("#oxnacc1").html(" Rfx+")
            $("#oxnacc1").css("color", "#00aa00")
            $("#oxacc1").css("color", "#00aa00")
        } else {
            $("#oxnacc1").html(" Rfx")
            $("#oxnacc1").css("color", "#aa0000")
            $("#oxacc1").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oxacc2").innerHTML) == 0) {
        $("#oxnacc2").html(" ")
        $("#oxacc2").html(" ")
    } else {
        oerfx = oerfx + Number(document.getElementById("oxacc2").innerHTML)
        if (Number(document.getElementById("oxacc2").innerHTML) > 0) {
            $("#oxnacc2").html(" Rfx+")
            $("#oxnacc2").css("color", "#00aa00")
            $("#oxacc2").css("color", "#00aa00")
        } else {
            $("#oxnacc2").html(" Rfx")
            $("#oxnacc2").css("color", "#aa0000")
            $("#oxacc2").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oxacc3").innerHTML) == 0) {
        $("#oxnacc3").html(" ")
        $("#oxacc3").html(" ")
    } else {
        oerfx = oerfx + Number(document.getElementById("oxacc3").innerHTML)
        if (Number(document.getElementById("oxacc3").innerHTML) > 0) {
            $("#oxnacc3").html(" Rfx+")
            $("#oxnacc3").css("color", "#00aa00")
            $("#oxacc3").css("color", "#00aa00")
        } else {
            $("#oxnacc3").html(" Rfx")
            $("#oxnacc3").css("color", "#aa0000")
            $("#oxacc3").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oxacc4").innerHTML) == 0) {
        $("#oxnacc4").html(" ")
        $("#oxacc4").html(" ")
    } else {
        oerfx = oerfx + Number(document.getElementById("oxacc4").innerHTML)
        if (Number(document.getElementById("oxacc4").innerHTML) > 0) {
            $("#oxnacc4").html(" Rfx+")
            $("#oxnacc4").css("color", "#00aa00")
            $("#oxacc4").css("color", "#00aa00")
        } else {
            $("#oxnacc4").html(" Rfx")
            $("#oxnacc4").css("color", "#aa0000")
            $("#oxacc4").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oxacc5").innerHTML) == 0) {
        $("#oxnacc5").html(" ")
        $("#oxacc5").html(" ")
    } else {
        oerfx = oerfx + Number(document.getElementById("oxacc5").innerHTML)
        if (Number(document.getElementById("oxacc5").innerHTML) > 0) {
            $("#oxnacc5").html(" Rfx+")
            $("#oxnacc5").css("color", "#00aa00")
            $("#oxacc5").css("color", "#00aa00")
        } else {
            $("#oxnacc5").html(" Rfx")
            $("#oxnacc5").css("color", "#aa0000")
            $("#oxacc5").css("color", "#aa0000")
        }
    }

    if (Number(document.getElementById("oxcape").innerHTML) == 0) {
        $("#oxncape").html(" ")
        $("#oxcape").html(" ")
    } else {
        oerfx = oerfx + Number(document.getElementById("oxcape").innerHTML)
        if (Number(document.getElementById("oxcape").innerHTML) > 0) {
            $("#oxncape").html(" Rfx+")
            $("#oxncape").css("color", "#00aa00")
            $("#oxcape").css("color", "#00aa00")
        } else {
            $("#oxncape").html(" Rfx")
            $("#oxncape").css("color", "#aa0000")
            $("#oxcape").css("color", "#aa0000")
        }
    }



    oeatk = oeatk + oeatkl + oeatkr
    obatk = oatk + oeatk
    obatkl = oatk + oeatk + oeatkl
    obatkr = oatk + oeatk + oeatkr
    obmag = omag + oemag
    obdef = odef + oedef
    obres = ores + oeres
    obspd = ospd + oespd
    obstr = ostg + oestr
    obsth = osth + oesth
    obawr = oawr + oeawr
    obrfx = orfx + oerfx


    //BuffStatChanges
    oqatk = obatk + oratk
    oqatkl = obatkl + oratkl
    oqatkr = obatkr + oratkr
    oqmag = obmag + ormag
    oqdef = obdef + ordef
    oqres = obres + orres
    oqspd = obspd + orspd
    oqstr = obstr + orstr
    oqsth = obsth + orsth
    oqawr = obawr + orawr
    oqrfx = obrfx + orrfx
    //Setting Shown Values
    if (oeatk + oratk != 0) {
        document.getElementById("obatkl").innerHTML = oqatk
        $("#oalbrktl").html("(")
        $("#oalbrktr").html(")")
        $("#oalbrktl").css("color", "#0ac90a")
        $("#oalbrktr").css("color", "#0ac90a")
        $("#obatk").css("color", "#0ac90a")
        if (oeatkl + oratkl < 0) {
            $("#oalbrktl").css("color", "#c90a0a")
            $("#oalbrktr").css("color", "#c90a0a")
            $("#obatk").css("color", "#c90a0a")
        }
    } else {
        $("#oalbrktl").html(" ")
        $("#oalbrktr").html(" ")
        if (oeatk != 0 && oratk != 0) {
            $("#oalbrktl").html("(")
            $("#oalbrktr").html(")")
            document.getElementById("obatkl").innerHTML = oqatk
            $("#oalbrktl").css("color", "#eeee21")
            $("#oalbrktr").css("color", "#eeee21")
            $("#obatk").css("color", "#eeee21")
        } else {
      $("#obatkl").html(" ")
    }
    }
//if (oeatkl + oratkl != 0) {
//    document.getElementById("obatkl").innerHTML = oqatkl
//    $("#oalbrktl").html("(")
//    $("#oalbrktr").html(")")
//    $("#oalbrktl").css("color", "#0ac90a")
//    $("#oalbrktr").css("color", "#0ac90a")
//    $("#obatkl").css("color", "#0ac90a")
//    if (oeatkl + oratkl < 0) {
//        $("#oalbrktl").css("color", "#c90a0a")
//        $("#oalbrktr").css("color", "#c90a0a")
//        $("#obatkl").css("color", "#c90a0a")
//    }
//} else {
//    $("#oalbrktl").html(" ")
//    $("#oalbrktr").html(" ")
//    if (oeatkl != 0 && oratkl != 0) {
//        $("#oalbrktl").html("(")
//        $("#oalbrktr").html(")")
//        document.getElementById("obatkl").innerHTML = oqatkl
//        $("#oalbrktl").css("color", "#eeee21")
//        $("#oalbrktr").css("color", "#eeee21")
//        $("#obatkl").css("color", "#eeee21")
//    } else {
//      $("#obatkl").html(" ")
//    }
//}
if (oeatkr + oratkr != 0) {
    document.getElementById("obatkr").innerHTML = oqatkr
    $("#oarbrktl").html("(")
    $("#oarbrktr").html(")")
    $("#oarbrktl").css("color", "#0ac90a")
    $("#oarbrktr").css("color", "#0ac90a")
    $("#obatkr").css("color", "#0ac90a")
    if (oeatkr + oratkr < 0) {
        $("#oarbrktl").css("color", "#c90a0a")
        $("#oarbrktr").css("color", "#c90a0a")
        $("#obatkr").css("color", "#c90a0a")
    }
} else {
    $("#oarbrktl").html(" ")
    $("#oarbrktr").html(" ")
    if (oeatkr != 0 && oratkr != 0) {
        $("#oarbrktl").html("(")
        $("#oarbrktr").html(")")
        document.getElementById("obatkr").innerHTML = oqatkr
        $("#oarbrktl").css("color", "#eeee21")
        $("#oarbrktr").css("color", "#eeee21")
        $("#obatkr").css("color", "#eeee21")
    } else {
      $("#obatkr").html(" ")
    }
}
if (oemag + ormag != 0) {
    document.getElementById("obmag").innerHTML = oqmag
    $("#ombrktl").html("(")
    $("#ombrktr").html(")")
    $("#ombrktl").css("color", "#0ac90a")
    $("#ombrktr").css("color", "#0ac90a")
    $("#obmag").css("color", "#0ac90a")
    if (oemag + ormag < 0) {
        $("#ombrktl").css("color", "#c90a0a")
        $("#ombrktr").css("color", "#c90a0a")
        $("#obmag").css("color", "#c90a0a")
    }
} else {
    $("#ombrktl").html(" ")
    $("#ombrktr").html(" ")
    if (oemag != 0 && ormag != 0) {
        $("#ombrktl").html("(")
        $("#ombrktr").html(")")
        document.getElementById("obmag").innerHTML = oqmag
        $("#ombrktl").css("color", "#eeee21")
        $("#ombrktr").css("color", "#eeee21")
        $("#obmag").css("color", "#eeee21")
    } else {
      $("#obmag").html(" ")
    }
}
if (oedef + ordef != 0) {
    document.getElementById("obdef").innerHTML = oqdef
    $("#odbrktl").html("(")
    $("#odbrktr").html(")")
    $("#odbrktl").css("color", "#0ac90a")
    $("#odbrktr").css("color", "#0ac90a")
    $("#obdef").css("color", "#0ac90a")
    if (oedef + ordef < 0) {
        $("#odbrktl").css("color", "#c90a0a")
        $("#odbrktr").css("color", "#c90a0a")
        $("#obdef").css("color", "#c90a0a")
    }
} else {
    $("#odbrktl").html(" ")
    $("#odbrktr").html(" ")
    if (oedef != 0 && ordef != 0) {
        $("#odbrktl").html("(")
        $("#odbrktr").html(")")
        document.getElementById("obdef").innerHTML = oqdef
        $("#odbrktl").css("color", "#eeee21")
        $("#odbrktr").css("color", "#eeee21")
        $("#obdef").css("color", "#eeee21")
    } else {
      $("#obdef").html(" ")
    }
}
if (oeres + orres != 0) {
    document.getElementById("obres").innerHTML = oqres
    $("#orbrktl").html("(")
    $("#orbrktr").html(")")
    $("#orbrktl").css("color", "#0ac90a")
    $("#orbrktr").css("color", "#0ac90a")
    $("#obres").css("color", "#0ac90a")
    if (oeres + orres < 0) {
        $("#orbrktl").css("color", "#c90a0a")
        $("#orbrktr").css("color", "#c90a0a")
        $("#obres").css("color", "#c90a0a")
    }
} else {
    $("#orbrktl").html(" ")
    $("#orbrktr").html(" ")
    if (oeres != 0 && orres != 0) {
        $("#orbrktl").html("(")
        $("#orbrktr").html(")")
        document.getElementById("obres").innerHTML = oqres
        $("#orbrktl").css("color", "#eeee21")
        $("#orbrktr").css("color", "#eeee21")
        $("#obres").css("color", "#eeee21")
    } else {
      $("#obres").html(" ")
    }
}
if (oespd + orspd != 0) {
    document.getElementById("obspd").innerHTML = oqspd
    $("#osbrktl").html("(")
    $("#osbrktr").html(")")
    $("#osbrktl").css("color", "#0ac90a")
    $("#osbrktr").css("color", "#0ac90a")
    $("#obspd").css("color", "#0ac90a")
    if (oespd + orspd < 0) {
        $("#osbrktl").css("color", "#c90a0a")
        $("#osbrktr").css("color", "#c90a0a")
        $("#obspd").css("color", "#c90a0a")
    }
} else {
    $("#osbrktl").html(" ")
    $("#osbrktr").html(" ")
    if (oespd != 0 && orspd != 0) {
        $("#osbrktl").html("(")
        $("#osbrktr").html(")")
        document.getElementById("obspd").innerHTML = oqspd
        $("#osbrktl").css("color", "#eeee21")
        $("#osbrktr").css("color", "#eeee21")
        $("#obspd").css("color", "#eeee21")
    } else {
      $("#obspd").html(" ")
    }
}
if (oestr + orstr != 0) {
    document.getElementById("obstr").innerHTML = oqstr
    $("#oibrktl").html("(")
    $("#oibrktr").html(")")
    $("#oibrktl").css("color", "#0ac90a")
    $("#oibrktr").css("color", "#0ac90a")
    $("#obstr").css("color", "#0ac90a")
    if (oestr + orstr < 0) {
        $("#oibrktl").css("color", "#c90a0a")
        $("#oibrktr").css("color", "#c90a0a")
        $("#obstr").css("color", "#c90a0a")
    }
} else {
    $("#oibrktl").html(" ")
    $("#oibrktr").html(" ")
    if (oestr != 0 && orstr != 0) {
        $("#oibrktl").html("(")
        $("#oibrktr").html(")")
        document.getElementById("obstr").innerHTML = oqstr
        $("#oibrktl").css("color", "#eeee21")
        $("#oibrktr").css("color", "#eeee21")
        $("#obstr").css("color", "#eeee21")
    } else {
      $("#obstr").html(" ")
    }
}
if (oesth + orsth != 0) {
    document.getElementById("obsth").innerHTML = oqsth
    $("#otbrktl").html("(")
    $("#otbrktr").html(")")
    $("#otbrktl").css("color", "#0ac90a")
    $("#otbrktr").css("color", "#0ac90a")
    $("#obsth").css("color", "#0ac90a")
    if (oesth + orsth < 0) {
        $("#otbrktl").css("color", "#c90a0a")
        $("#otbrktr").css("color", "#c90a0a")
        $("#obsth").css("color", "#c90a0a")
    }
} else {
    $("#otbrktl").html(" ")
    $("#otbrktr").html(" ")
    if (oesth != 0 && orsth != 0) {
        $("#otbrktl").html("(")
        $("#otbrktr").html(")")
        document.getElementById("obsth").innerHTML = oqsth
        $("#otbrktl").css("color", "#eeee21")
        $("#otbrktr").css("color", "#eeee21")
        $("#obsth").css("color", "#eeee21")
    } else {
      $("#obsth").html(" ")
    }
}
if (oeawr + orawr != 0) {
    document.getElementById("obawr").innerHTML = oqawr
    $("#owbrktl").html("(")
    $("#owbrktr").html(")")
    $("#owbrktl").css("color", "#0ac90a")
    $("#owbrktr").css("color", "#0ac90a")
    $("#obawr").css("color", "#0ac90a")
    if (oeawr + orawr < 0) {
        $("#owbrktl").css("color", "#c90a0a")
        $("#owbrktr").css("color", "#c90a0a")
        $("#obawr").css("color", "#c90a0a")
    }
} else {
    $("#owbrktl").html(" ")
    $("#owbrktr").html(" ")
    if (oeawr != 0 && orawr != 0) {
        $("#owbrktl").html("(")
        $("#owbrktr").html(")")
        document.getElementById("obawr").innerHTML = oqawr
        $("#owbrktl").css("color", "#eeee21")
        $("#owbrktr").css("color", "#eeee21")
        $("#obawr").css("color", "#eeee21")
    } else {
      $("#obawr").html(" ")
    }
}
if (oerfx + orrfx != 0) {
    document.getElementById("obrfx").innerHTML = oqrfx
    $("#oxbrktl").html("(")
    $("#oxbrktr").html(")")
    $("#oxbrktl").css("color", "#0ac90a")
    $("#oxbrktr").css("color", "#0ac90a")
    $("#obrfx").css("color", "#0ac90a")
    if (oerfx + orrfx < 0) {
        $("#oxbrktl").css("color", "#c90a0a")
        $("#oxbrktr").css("color", "#c90a0a")
        $("#obrfx").css("color", "#c90a0a")
    }
} else {
    $("#oxbrktl").html(" ")
    $("#oxbrktr").html(" ")
    if (oerfx != 0 && orrfx != 0) {
        $("#oxbrktl").html("(")
        $("#oxbrktr").html(")")
        document.getElementById("obrfx").innerHTML = oqrfx
        $("#oxbrktl").css("color", "#eeee21")
        $("#oxbrktr").css("color", "#eeee21")
        $("#obrfx").css("color", "#eeee21")
    } else {
      $("#obrfx").html(" ")
    }
}
if (ocloseacc == 0) {
    $("#ocloses").css("color", "#444466")
}
if (omidacc == 0) {
    $("#omids").css("color", "#444466")
}
if (ofaracc == 0) {
    $("#ofars").css("color", "#444466")
}
}