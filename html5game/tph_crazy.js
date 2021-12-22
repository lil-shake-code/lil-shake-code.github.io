var b = 0;


function crazyStep() {
    if (b > 0) {
        b--;
        var c = "yes";
    } else var c = "no";
    return c;
}


function start() {
    window.crazysdk = window.CrazyGames.CrazySDK.getInstance();
    crazysdk.init();

}

function RadFinished() {
    b++;
    crazysdk.removeEventListener('adFinished', window.RadFinished);
}

function crazyAd_mid() {
    window.crazysdk.requestAd("midgame");

}

function crazyAd_reward() {
    window.crazysdk.requestAd("rewarded");
    crazysdk.addEventListener('adFinished', window.RadFinished);
}