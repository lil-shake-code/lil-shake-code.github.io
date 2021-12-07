function start() {
    window.crazysdk = window.CrazyGames.CrazySDK.getInstance();
    crazysdk.init();
}

function crazyAd_mid() {
    window.crazysdk.requestAd("midgame");
}

function crazyAd_reward() {
    window.crazysdk.requestAd("rewarded");
}