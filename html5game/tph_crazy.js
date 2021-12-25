var b = 0;
var madStarted = 0

function crazyStep() {
    if (b > 0) {
        b--;
        var c = "yes";
    } else var c = "no";
    return c;
}

function MadStep() {
    if (madStarted > 0) {
        madStarted--;
        var c = "yes";
    } else var c = "no";
    return c;
}


function start() {
    window.crazysdk = window.CrazyGames.CrazySDK.getInstance();
    crazysdk.init();

}

function MadStarted() {
    madStarted++;
    crazysdk.removeEventListener('adStarted', window.MadStarted);
}

function MadError() {
    // c++;
    crazysdk.removeEventListener('adError', window.MadError);
}

function RadError() {
    // c++;
    crazysdk.removeEventListener('adError', window.RadError);
}






function RadStarted() {
    b++;
    crazysdk.removeEventListener('adStarted', window.RadStarted);
}





// MIDGAME AND REWARD CALL CODE
function crazyAd_mid() {
    window.crazysdk.requestAd("midgame");
    crazysdk.addEventListener('adStarted', window.MadStarted);
    crazysdk.addEventListener('adError', window.MadError);

}

function crazyAd_reward() {
    window.crazysdk.requestAd("rewarded");
    crazysdk.addEventListener('adStarted', window.RadStarted);
    crazysdk.addEventListener('adError', window.RadError);
}