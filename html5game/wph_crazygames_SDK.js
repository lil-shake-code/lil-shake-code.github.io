function Init_crazygames() {
    const crazysdk = window.CrazyGames.CrazySDK.getInstance(); //Getting the SDK
    crazysdk.init(); //Initializing the SDK, call as early as possible
}

function crazyReward() {

    crazysdk.requestAd('rewarded');

}



function crazyInterstitial() {
    crazysdk.requestAd('midgame');
}