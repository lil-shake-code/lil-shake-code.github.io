function gdAdAsyncCallback(ev, ad, stat) {
    var map = {};
    map["id"] = "gamedistribution";
    map["event"] = ev;
    map["ad_slot"] = ad;
    map["status"] =  stat;
    GMS_API.send_async_event_social(map);
}

function gd_debug_mode(d) {

    // From GML boolean to Javascript boolean <<
    if (d>=0.5) {
        GD_OPTIONS.debug = true;
    } else {
        GD_OPTIONS.debug = false;
    }

}

function gd_open_console() {
    gdsdk.openConsole();
}

 function gd_ads_available() {
    if (typeof gdsdk !== 'undefined' && gdsdk.showAd !== 'undefined') {
         return true;
    }

    return false;
 }

 function gd_rewarded_available() {
    
     if (gdsdk !== 'undefined' && gdsdk.preloadAd !== 'undefined') {
        return true;
     } 
     return false;
 }

 function gd_ads_show() {

    if (gd_ads_available()) {
        gdsdk.showAd().then(function(res){
            gdAdAsyncCallback("SHOW_ADS", "interstitial", 1);
        })
        .catch(function(err){
          gdAdAsyncCallback("SHOW_ADS", "interstitial", 0);
        });

    }
 }

 function gd_rewarded_preload(ad) {
    if (gd_rewarded_available()) {
        gdsdk.preloadAd(ad)
        .then(response => {
            gdAdAsyncCallback("PRELOAD_REWARDED", ad, 1);
        })
        .catch(error => {
          gdAdAsyncCallback("PRELOAD_REWARDED", ad, 0);
        });
    } else {
        gdAdAsyncCallback("PRELOAD_REWARDED", ad, -1 );
    }
 }

function gd_rewarded_show(ad) {

    if (gd_ads_available() && gd_rewarded_available()) {
        gdsdk.showAd(ad).then(function(res){
            gdAdAsyncCallback("SHOW_REWARDED", ad, 1);
        })
        .catch(function(err){
          gdAdAsyncCallback("SHOW_REWARDED", ad, 0);
        });
    }   

}