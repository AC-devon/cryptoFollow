let adMob = null;

export function initAd() {
  adMob = window.plugins.AdMob || window.AdMob;
  if (/(android)/i.test(navigator.userAgent) && adMob) {
    adMob.banner.config({
      id: "ca-app-pub-3573266602081114/2845803467",
      autoShow: false,
      isTesting: process.env.NODE_ENV === "production" ? false : true
    });
    adMob.banner.prepare();

    adMob.interstitial.config({
      id: "ca-app-pub-3573266602081114/4514108356",
      autoShow: false,
      isTesting: process.env.NODE_ENV === "production" ? false : true
    });
    adMob.interstitial.prepare();
  }
}

export function showInterstitial() {
  if (adMob) adMob.interstitial.show();
}

export function showAd() {
  if (adMob) adMob.banner.show();
}
