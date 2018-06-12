$("#campaign").change(campaignSelect)
season1();

function campaignSelect() {
    if ($("#campaign").val() == "season1") {
        season1();
    }
    if ($("#campaign").val() == "aoabook1") {
        aoabook1();
    }
}

function season1() {
    $("#winner").html("<span class=jevicolor> <a href=NiroSheet.html target = _blank>Niro the Ninja (Jevi)</a> </span> <br> <span class=rodrigocolor> <a href=TurntSNACOSheet.html target = _blank>TurntSNACO the Archer (Rodrigo) </a> </span> <br> <span class=cannacolor> <a href=BobSheet.html target = _blank>Bob the Ninja (Connor) </a> </span> <br> <span class=kjellcolor> <a href=KrassSheet.html target = _blank>Krass the Tank (Kjell) </a> </span> <br>")
}

function aoabook1() {
    $("#winner").html("<span class=kjellcolor> <a href=QuinnSheet.html target = _blank>Quinn the Archer (Kjell) </a> </span> <br> <span class=rodrigocolor> <a href=LokiSheet.html target = _blank>Loki the Knight (Rodrigo) </a> </span> <br> <span class=jevicolor> <a href=TanTamSheet.html target = _blank>Tan and Tam the Duo (Jevi) </a> </span> <br>") 
}
