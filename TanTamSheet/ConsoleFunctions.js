function ExpConsole() {
    if (input == "givexp") {
        yes = 1
    }
}

function GoldConsole() {
    if (input == "givegold") {
        yes = 2
    }
}

function ADMGConsole() {
    if (input == "giveadmg") {
        yes = 3
    }
}

function MDMGConsole() {
    if (input == "givemdmg") {
        yes = 4
    }
}

function RepConsole() {
    if (input == "giverep") {
        yes = 5
    }
}

function TDMGConsole() {
    if (input == "givetdmg") {
        yes = 6
    }
}

function ItemConsole() {
    if (input == "giveitem") {
        yes = 7
    }
}

function MultiConsole() {
    if (input == "givemulti") {
        yes = 8
    }
}

function EquipConsole() {
    if (input == "givequip") {
        yes = 9
    }
}

function BuffConsole() {
    if (input == "givebuff") {
        yes = 10
    }
}

function ThrowConsole() {
    if (input == "givethrow") {
        yes = 11
    }
}

function TakeConsole() {
    if (input == "takeitem") {
        yes = 12
    }
}

function ManaConsole() {
    if (input == "manaplus") {
        yes = 13
    }
}

function ammoConsole() {
    if (input == "pickammo") {
        yes = 14
    }
}

function pickAmmo() {
    if (yes == 14) {
        add = Number(document.getElementById("command").value)
        if (add != NaN) {
            ammo = add
            yes = 0
        } else {
            yes = 0
        }
    }
}

function GiveMana() {
    if (yes == 13) {
        add = Number(document.getElementById("command").value)
        if (add != NaN) {
            mp = mp + add
            if (mp > mmp) {
                mp = mmp
            }
            if (mp < 0) {
                mp = 0
            }
        }
        $("#mp").html(mp)
        yes = 0
    }
}

function TakeItem() {
    if (yes == 12.1) {
        add = document.getElementById("command").value
        $("#m" + add).html(Number(document.getElementById("m" + add).innerHTML) - store)
        if (Number(document.getElementById("m" + add).innerHTML) <= 0) {
            $("span#i" + add).html(" ")
            $("span#i" + add).replaceWith(" ")
        }
        yes = 0
    }
}

function TakeNumber() {
    if (yes == 12) {
        add = Number(document.getElementById("command").value)
        store = add
        yes = 12.1
    }
}

function GiveThrow() {
    if (yes == 11) {
        add = document.getElementById("command").value
        if (character == "alpha") {
            $("#throw").append(add)
        }
        if (character == "omega") {
            $("#othrow").append(add)
        }
        yes = 0
    }
    Update();
}

function CustomBuffOComplete() {
    if (yes == 10.005) {
        $("#ochars").append("<span id=o" + buffnum + ">" + buffname + "<br> </span>")
        $("#o" + buffnum).css("color", color)
        //    $("#" + buffnum).hover(CustomBuffODet, Nodet)
        sobuffnum = buffnum
        oCustomBuff();
        yes = 0
    }
}

function CustomBuffOWrite() {
    if (yes == 10.0049) {
        add = document.getElementById("command").value
        write = add
        yes = 10.005
    }
}

function CustomBuffORfx() {
    if (yes == 10.0048) {
        add = Number(document.getElementById("command").value)
        if (add != NaN) {
            ocrfx = add
            yes = 10.0049
        }
    }
}

function CustomBuffOAwr() {
    if (yes == 10.0047) {
        add = Number(document.getElementById("command").value)
        if (add != NaN) {
            ocawr = add
            yes = 10.0048
        }
    }
}

function CustomBuffOSth() {
    if (yes == 10.0046) {
        add = Number(document.getElementById("command").value)
        if (add != NaN) {
            ocsth = add
            yes = 10.0047
        }
    }
}

function CustomBuffOStr() {
    if (yes == 10.0045) {
        add = Number(document.getElementById("command").value)
        if (add != NaN) {
            ocstr = add
            yes = 10.0046
        }
    }
}

function CustomBuffOSpd() {
    if (yes == 10.0044) {
        add = Number(document.getElementById("command").value)
        if (add != NaN) {
            ocspd = add
            yes = 10.0045
        }
    }
}

function CustomBuffORes() {
    if (yes == 10.0043) {
        add = Number(document.getElementById("command").value)
        if (add != NaN) {
            ocres = add
            yes = 10.0044
        }
    }
}

function CustomBuffODef() {
    if (yes == 10.0042) {
        add = Number(document.getElementById("command").value)
        if (add != NaN) {
            ocdef = add
            yes = 10.0043
        }
    }
}

function CustomBuffOMag() {
    if (yes == 10.0041) {
        add = Number(document.getElementById("command").value)
        if (add != NaN) {
            ocmag = add
            yes = 10.0042
        }
    }
}

function CustomBuffOAtk() {
    if (yes == 10.004) {
        add = Number(document.getElementById("command").value)
        if (add != NaN) {
            ocatk = add
            ocatkl = add
            ocatkr = add
            yes = 10.0041
        }
    }
}

function CustomBuffONum() {
    if (yes == 10.003) {
        add = document.getElementById("command").value
        buffnum = add
        yes = 10.004
    }
}

function CustomBuffOName() {
    if (yes == 10.002) {
        add = document.getElementById("command").value
        buffname = add
        yes = 10.003
    }
}

function CustomBuffOColor() {
    if (yes == 10.001) {
        add = document.getElementById("command").value
        color = add
        yes = 10.002
    }
}


function CustomBuffComplete() {
    if (yes == 10.5) {
        $("#chars").append("<span id=" + buffnum + ">" + buffname + "<br> </span>")
        $("#" + buffnum).css("color", color)
        $("#" + buffnum).hover(CustomBuffDet, Nodet)
        sbuffnum = buffnum
        customBuff();
        yes = 0
    }
}

function CustomBuffWrite() {
    if (yes == 10.49) {
        add = document.getElementById("command").value
        write = add
        yes = 10.5
    }
}

function CustomBuffRfx() {
    if (yes == 10.48) {
        add = Number(document.getElementById("command").value)
        if (add != NaN) {
            crfx = add
            yes = 10.49
        }
    }
}

function CustomBuffAwr() {
    if (yes == 10.47) {
        add = Number(document.getElementById("command").value)
        if (add != NaN) {
            cawr = add
            yes = 10.48
        }
    }
}

function CustomBuffSth() {
    if (yes == 10.46) {
        add = Number(document.getElementById("command").value)
        if (add != NaN) {
            csth = add
            yes = 10.47
        }
    }
}

function CustomBuffStr() {
    if (yes == 10.45) {
        add = Number(document.getElementById("command").value)
        if (add != NaN) {
            cstr = add
            yes = 10.46
        }
    }
}

function CustomBuffSpd() {
    if (yes == 10.44) {
        add = Number(document.getElementById("command").value)
        if (add != NaN) {
            cspd = add
            yes = 10.45
        }
    }
}

function CustomBuffRes() {
    if (yes == 10.43) {
        add = Number(document.getElementById("command").value)
        if (add != NaN) {
            cres = add
            yes = 10.44
        }
    }
}

function CustomBuffDef() {
    if (yes == 10.42) {
        add = Number(document.getElementById("command").value)
        if (add != NaN) {
            cdef = add
            yes = 10.43
        }
    }
}

function CustomBuffMag() {
    if (yes == 10.41) {
        add = Number(document.getElementById("command").value)
        if (add != NaN) {
            cmag = add
            yes = 10.42
        }
    }
}

function CustomBuffAtk() {
    if (yes == 10.4) {
        add = Number(document.getElementById("command").value)
        if (add != NaN) {
            catk = add
            catkl = add
            catkr = add
            yes = 10.41
        }
    }
}

function CustomBuffNum() {
    if (yes == 10.3) {
        add = document.getElementById("command").value
        buffnum = add
        yes = 10.4
    }
}

function CustomBuffName() {
    if (yes == 10.2) {
        add = document.getElementById("command").value
        buffname = add
        yes = 10.3
    }
}

function CustomBuffColor() {
    if (yes == 10.1) {
        add = document.getElementById("command").value
        color = add
        yes = 10.2
    }
}

function GiveBuff() {
    if (yes == 10) {
        add = document.getElementById("command").value
        if (add == "negaeffect") {
            //Unknown
            $("#chars").append("UNKNOWN")
            $("#debuff0").caa("color", "#441177")
        }

        if (add == "custom") {
            if (character == "alpha") {
                yes = 10.1
            }
            if (character == "omega") {
                yes = 10.001
            }
        }
        //DEBUFFS
        if (add == "blind") {
            blindDebuff();
        }
        if (add == "silence") {
            $("#chars").append("<span id=debuff2> Silenced <br> </span> ")
            $("#debuff2").css("color", "#221166")
            $("#ochars").append("<span id=odebuff2> Silenced <br> </span> ")
            $("#odebuff2").css("color", "#221166")
            $("#manapts").css("color", "#446688")
        }
        if (add == "flame") {
            flameDebuff();
        }
        if (add == "stun") {
            if (character == "alpha") {
                $("#chars").append("<span id=debuff4> Stunned <br> </span> ")
                $("#debuff4").css("color", "#cada02")
            }
            if (character == "omega") {
                $("#ochars").append("<span id=odebuff4> Stunned <br> </span> ")
                $("#odebuff4").css("color", "#cada02")
            }
        }
        if (add == "smite") {
            //Ooof.
            $("#chars").append("<span id=debuff5> SMOTE <br> </span> ")
            $("#debuff5").css("color", "#420710")
            $("#ochars").append("<span id=odebuff5> SMOTE <br> </span> ")
            $("#odebuff5").css("color", "#420710")
        }
        if (add == "poison") {
            poisonDebuff();
        }
        // REMOVE DEBUFFS
        if (add == "noblind") {
            noBlindDebuff();
        }
        if (add == "nosilence") {
            //Remove Silence
            $("#debuff2").html(" ")
            $("span#debuff2").replaceWith(" ")
            $("#odebuff2").html(" ")
            $("span#odebuff2").replaceWith(" ")
            $("#manapts").css("color", "#00bbff")
        }
        if (add == "noflame") {
            noFlameDebuff();
        }
        if (add == "nostun") {
            //Remove Stun
            if (character == "alpha") {
                $("#debuff4").html(" ")
                $("span#debuff4").replaceWith(" ")
            }
            if (character == "omega") {
                $("#odebuff4").html(" ")
                $("span#odebuff4").replaceWith(" ")
            }
        }
        if (add == "nosmite") {
            //Remove Smite
            $("#debuff5").html(" ")
            $("span#debuff5").replaceWith(" ")
            $("#odebuff5").html(" ")
            $("span#odebuff5").replaceWith(" ")
        }
        if (add == "nopoison") {
            noPoisonDebuff();
        }
        //BUFFS
        if (add == "stanceshift") {
            //Switch Atk and Spd
            $("#chars").append("<span id=buff1> Stance Shift <br> </span> ")
            $("#buff1").css("color", "#11d7ff")
        }
        if (add == "breath11") {
            breathPatternZero();
            breathPatternIOne();
            $("#chars").append("<span id=buff2> Breathing Pattern I (1/3) <br> </span> ")
            $("#buff2").css("color", "#54ffb5")
        }
        if (add == "breath12") {
            breathPatternZero();
            breathPatternITwo();
            $("#chars").append("<span id=buff2> Breathing Pattern I (2/3) <br> </span> ")
            $("#buff2").css("color", "#54ffb5")
        }
        if (add == "breath13") {
            breathPatternZero();
            breathPatternIThree();
            $("#chars").append("<span id=buff2> Breathing Pattern I (3/3) <br> </span> ")
            $("#buff2").css("color", "#54ffb5")
        }
        //REMOVE BUFFS
        if (add == "nostanceshift") {
            $("#buff1").html(" ")
            $("span#buff1").replaceWith(" ")
        }
        if (add == "nobreath1") {
            breathPatternZero();
            $("#buff2").html(" ")
            $("span#buff2").replaceWith(" ")
        }
        if (add == "nocustom") {
            if (character == "alpha") {
                noCustomBuff();

            }
            if (character == "omega") {
                noOCustomBuff();

            }
        }



    }
}

function pickEquip() {
    if (yes == 9.5) {
        add = Number(document.getElementById("command").value)
        if (add != NaN) {
            if (character == "alpha") {
                $("#" + store).html(eqnam[add])
                $("#a" + store).html(Number(eqatk[add]))
                $("#m" + store).html(Number(eqmag[add]))
                $("#d" + store).html(Number(eqdef[add]))
                $("#r" + store).html(Number(eqres[add]))
                $("#s" + store).html(Number(eqspd[add]))
                $("#i" + store).html(Number(eqstr[add]))
                $("#t" + store).html(Number(eqsth[add]))
                $("#w" + store).html(Number(eqawr[add]))
                $("#x" + store).html(Number(eqrfx[add]))
            }
            if (character == "omega") {
                $("#o" + store).html(eqnam[add])
                $("#oa" + store).html(Number(eqatk[add]))
                $("#om" + store).html(Number(eqmag[add]))
                $("#od" + store).html(Number(eqdef[add]))
                $("#or" + store).html(Number(eqres[add]))
                $("#os" + store).html(Number(eqspd[add]))
                $("#oi" + store).html(Number(eqstr[add]))
                $("#ot" + store).html(Number(eqsth[add]))
                $("#ow" + store).html(Number(eqawr[add]))
                $("#ox" + store).html(Number(eqrfx[add]))
            }
            yes = 0
        }
    }
    Update();
}

function pickSlot() {
    if (yes == 9) {
        add = Number(document.getElementById("command").value)
        store = add
        if (add != NaN) {

            if (store == 1) {
                store = "left"
            }
            if (store == 2) {
                store = "right"
            }
            if (store == 3) {
                store = "helm"
            }
            if (store == 4) {
                store = "plate"
            }
            if (store == 5) {
                store = "leg"
            }
            if (store == 6) {
                store = "boot"
            }
            if (store == 7) {
                store = "acc1"
            }
            if (store == 8) {
                store = "acc2"
            }
            if (store == 9) {
                store = "acc3"
            }
            if (store == 10) {
                store = "acc4"
            }
            if (store == 11) {
                store = "acc5"
            }
            if (store == 12) {
                store = "cape"
            }
            yes = 9.5
        }
    }
}

function GiveMulti2() {
    if (yes == 8.1) {
        add = Number(document.getElementById("command").value)
        if (add == NaN) {
            yes = 0
        } else {
            document.getElementById("m" + store).innerHTML = Number(document.getElementById("m" + store).innerHTML) + add
            yes = 0
        }
    }
    Update();
}

function GiveMulti() {
    if (yes == 8) {
        add = document.getElementById("command").value
        store = add
        yes = 8.1
    }
    Update();
}

function GiveItem() {
    if (yes == 7) {
        add = document.getElementById("command").value
        if (add != NaN) {
            $("#bagbro").append(items[add])
            yes = 0
        }
    }
    Update();
}

function GiveTDMG() {
    if (yes == 6) {
        add = Number(document.getElementById("command").value)
        if (add == NaN) {
            yes = 0
        } else {
            if (character == "alpha") {
                tlf = tlf - Math.round(add)
                if (tlf > Number(document.getElementById("mtlf").innerHTML)) {
                    tlf = Number(document.getElementById("mtlf").innerHTML)
                    document.getElementById("tlf").innerHTML = Number(document.getElementById("mtlf").innerHTML)
                }
                document.getElementById("tlf").innerHTML = tlf
                yes = 0
                if (tlf <= 0) {
                    tlf = 0
                    document.getElementById("lf").innerHTML = lf
                    document.getElementById("tlf").innerHTML = tlf
                    document.getElementById("liv").style.color = "#000000"
                    document.getElementById("partyboost").style.color = "#000000"
                }
            }
        }
        if (character == "omega") {
            olf = olf - Math.round(add)
            if (olf > Number(document.getElementById("mlf").innerHTML)) {
                olf = Number(document.getElementById("mlf").innerHTML)
                document.getElementById("lf").innerHTML = Number(document.getElementById("mlf").innerHTML)
            }
            document.getElementById("lf").innerHTML = olf
            yes = 0
            if (olf <= 0) {
                olf = 0
                tlf = 0
                document.getElementById("lf").innerHTML = lf
                document.getElementById("tlf").innerHTML = tlf
                document.getElementById("liv").style.color = "#000000"
                document.getElementById("partyboost").style.color = "#000000"
            }
        }
    }
    Update();
}

function GiveRep() {
    if (yes == 5) {
        add = Number(document.getElementById("command").value)
        if (add == NaN) {
            yes = 0
        } else {
            if (character == "alpha") {
                rep = rep + add
                document.getElementById("rep").innerHTML = rep
            }
            if (character == "omega") {
                orep = orep + add
                document.getElementById("orep").innerHTML = orep
            }
            yes = 0
        }
    }
    Update();
}

function GiveMDMG() {
    if (yes == 4) {
        add = Number(document.getElementById("command").value)
        if (add == NaN) {
            yes = 0
        } else {
            if (character == "alpha") {
                let testlf = tlf - Math.round(add - qres * block / 100)
                if (testlf > tlf) {
                    yes = 0
                } else {
                    tlf = tlf - Math.round(add - qres * block / 100)
                    block = block - stagger
                    $("#blockeff").html(block)
                    if (tlf > Number(document.getElementById("mtlf").innerHTML)) {
                        tlf = Number(document.getElementById("mtlf").innerHTML)
                        document.getElementById("tlf").innerHTML = Number(document.getElementById("mtlf").innerHTML)
                    }
                    document.getElementById("tlf").innerHTML = tlf
                    yes = 0
                    if (tlf <= 0) {
                        tlf = 0
                        document.getElementById("lf").innerHTML = lf
                        document.getElementById("tlf").innerHTML = tlf
                        document.getElementById("liv").style.color = "#000000"
                        document.getElementById("partyboost").style.color = "#000000"
                    }
                }
            }
            if (character == "omega") {
                let testlf = olf - Math.round(add - oqres * oblock / 100)
                if (testlf > olf) {
                    yes = 0
                } else {
                    olf = olf - Math.round(add - oqres * oblock / 100)
                    oblock = oblock - stagger
                    $("#oblockeff").html(oblock)
                    if (olf > Number(document.getElementById("mlf").innerHTML)) {
                        olf = Number(document.getElementById("mlf").innerHTML)
                        document.getElementById("lf").innerHTML = Number(document.getElementById("mlf").innerHTML)
                    }
                    document.getElementById("lf").innerHTML = olf
                    yes = 0
                    if (olf <= 0) {
                        olf = 0
                        tlf = 0
                        document.getElementById("lf").innerHTML = lf
                        document.getElementById("tlf").innerHTML = tlf
                        document.getElementById("liv").style.color = "#000000"
                        document.getElementById("partyboost").style.color = "#000000"
                    }
                }
            }
        }
    }
    Update();
}

function GiveADMG() {
    if (yes == 3) {
        add = Number(document.getElementById("command").value)
        if (add == NaN) {
            yes = 0
        } else {
            let testlf = tlf - Math.round(add - qdef * block / 100)
            if (testlf > tlf) {
                yes = 0
            } else {
                if (character == "alpha") {
                    let testlf = tlf - Math.round(add - qdef * block / 100)
                    if (testlf > tlf) {
                        yes = 0
                    } else {
                        tlf = tlf - Math.round(add - qdef * block / 100)
                        block = block - stagger
                        $("#blockeff").html(block)
                        if (tlf > Number(document.getElementById("mtlf").innerHTML)) {
                            tlf = Number(document.getElementById("mtlf").innerHTML)
                            document.getElementById("tlf").innerHTML = Number(document.getElementById("mtlf").innerHTML)
                        }
                        document.getElementById("tlf").innerHTML = tlf
                        yes = 0
                        if (tlf <= 0) {
                            tlf = 0
                            document.getElementById("lf").innerHTML = lf
                            document.getElementById("tlf").innerHTML = tlf
                            document.getElementById("liv").style.color = "#000000"
                            document.getElementById("partyboost").style.color = "#000000"
                        }
                    }
                }
                if (character == "omega") {
                    let testlf = olf - Math.round(add - oqdef * oblock / 100)
                    if (testlf > olf) {
                        yes = 0
                    } else {
                        olf = olf - Math.round(add - oqdef * oblock / 100)
                        oblock = oblock - stagger
                        $("#oblockeff").html(oblock)
                        if (olf > Number(document.getElementById("mlf").innerHTML)) {
                            olf = Number(document.getElementById("mlf").innerHTML)
                            document.getElementById("lf").innerHTML = Number(document.getElementById("mlf").innerHTML)
                        }
                        document.getElementById("lf").innerHTML = olf
                        yes = 0
                        if (olf <= 0) {
                            olf = 0
                            tlf = 0
                            document.getElementById("lf").innerHTML = lf
                            document.getElementById("tlf").innerHTML = tlf
                            document.getElementById("liv").style.color = "#000000"
                            document.getElementById("partyboost").style.color = "#000000"
                        }
                    }
                }
            }
        }
        Update();
    }
}

function GiveGold() {
    if (yes == 2) {
        add = Number(document.getElementById("command").value)
        if (add == NaN) {
            yes = 0
        } else {
            coin = coin + add
            document.getElementById("coin").innerHTML = Number(document.getElementById("coin").innerHTML) + coin
            yes = 0
        }
        Update();
    }
}

function SaveExp() {
    if (input == "savexp") {
        document.getElementById("command").value = fullxp
    }
}

function GiveExp() {
    if (yes == 1) {
        add = Number(document.getElementById("command").value)
        if (add == NaN) {
            yes = 0
        } else {
            holdxp = holdxp + add
            fullxp = fullxp + add
            yes = 0
        }
        Update();
    }
}

function GiveEquip() {
    pickEquip();
    pickSlot();
}

function GiveCustomBuff() {
    CustomBuffComplete();
    CustomBuffWrite();
    CustomBuffRfx();
    CustomBuffAwr();
    CustomBuffSth();
    CustomBuffStr();
    CustomBuffSpd();
    CustomBuffRes();
    CustomBuffDef();
    CustomBuffMag();
    CustomBuffAtk();
    CustomBuffNum();
    CustomBuffName();
    CustomBuffColor();
}

function GiveOCustomBuff() {
    CustomBuffOComplete();
    CustomBuffOWrite();
    CustomBuffORfx();
    CustomBuffOAwr();
    CustomBuffOSth();
    CustomBuffOStr();
    CustomBuffOSpd();
    CustomBuffORes();
    CustomBuffODef();
    CustomBuffOMag();
    CustomBuffOAtk();
    CustomBuffONum();
    CustomBuffOName();
    CustomBuffOColor();
}

function useAmmo() {
    document.getElementById("ammonum" + ammo).innerHTML = Number(document.getElementById("ammonum" + ammo).innerHTML) - 1
    if (Number(document.getElementById("ammonum" + ammo).innerHTML) == 0) {
        $("span#ammonum" + ammo).replaceWith(" ")
        $("span#ammoslot" + ammo).replaceWith(" ")
    }
}

function getAmmo() {
    document.getElementById("ammonum" + ammo).innerHTML = Number(document.getElementById("ammonum" + ammo).innerHTML) + 1
}
