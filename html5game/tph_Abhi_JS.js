var lastMessage = "nothingyet";
var old_ads = [];

var b = 0;


function Step() {
    if (b > 0) {
        b--;
        var c = "yes";
    } else var c = "no";
    return c;
}








function breakDone(p) {

    console.log(JSON.stringify(p));
    lastMessage = JSON.stringify(p);

    if (p.breakStatus == 'viewed') {
        //this code works
        if (p.breakType == "reward") {
            b++;
        }



    }
}


function showRWP(showAdFn) {

    showAdFn();
}




function AdsenseReward(num) {


    adBreak({
        type: 'reward',
        name: (num).toString(),
        beforeAd: () => {},
        afterAd: () => {},
        beforeReward: showRWP,
        adDismissed: () => {},
        adViewed: () => {},
        adBreakDone: breakDone,
    });

    return lastMessage;
}


function AdsenseInterstitial() {

    adBreak({
        type: 'next', // The type of this placement
        name: '1_in_4_respawns', // A descriptive name for this placement
        beforeAd: () => {}, // Prepare for the ad. Mute and pause the game flow
        afterAd: () => {}, // Resume the game and un-mute the sound
        adBreakDone: breakDone, // Always called (if provided) even if an ad didn't show
    });

}