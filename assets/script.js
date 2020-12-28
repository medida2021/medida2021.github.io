// --- Slider --- //
var slider        = document.querySelector(".slider"),
    sliderPadding = 0,
    windowWidth   = window.innerWidth;
window.addEventListener("load", function() {
    if (windowWidth > 1023) {
        resizeSlider(windowWidth);
    }
});
window.addEventListener("resize", function() {
    windowWidth = window.innerWidth
    if (windowWidth > 1024) {
        resizeSlider(windowWidth);
    } else {
        slider.style.paddingRight = "16px";
        slider.style.marginRight  = "-16px";
    }
});
function resizeSlider( width ) {
    var padding = (width - 1548)/2;
    slider.style.paddingRight = padding+"px";
    slider.style.marginRight  = -Math.abs(padding)+"px";
}
// --- Cookie Bar --- //
function fadeIn(elem, display){
    var el = document.getElementById(elem);
    el.style.opacity = 0;
    el.style.display = display || "block";

    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .02) > 1)) {
        el.style.opacity = val;
        requestAnimationFrame(fade);
        }
    })();
};
function fadeOut(elem){
    var el = document.getElementById(elem);
    el.style.opacity = 1;

    (function fade() {
        if ((el.style.opacity -= .02) < 0) {
        el.style.display = "none";
        } else {
        requestAnimationFrame(fade);
        }
    })();
};
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}
function cookieConsent() {
    if (!getCookie('cookieDismiss')) {
        document.body.innerHTML += '<div class="cookieConsent" id="cookieConsent"><p>Medida uses cookies to ensure that we give you the best experience while you visit our website. If you continue we assume that you consent to receive all cookies on this website.</p><button class="accept" onClick="cookieDismiss(2);">Got it</button><button class="close" aria-label="Close cookie bar" onClick="cookieDismiss(1);"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path id="cancel" d="M3.768,2.727a1.031,1.031,0,0,0-.729,1.76l7.242,7.24-7.242,7.24A1.031,1.031,0,0,0,4.5,20.425l7.242-7.24,7.242,7.24a1.045,1.045,0,0,0,.729.3,1.021,1.021,0,0,0,.729-.3,1.036,1.036,0,0,0,0-1.458L13.2,11.727l7.242-7.24a1.031,1.031,0,0,0-1.458-1.458l-7.242,7.24L4.5,3.029a1.034,1.034,0,0,0-.729-.3Z" transform="translate(-2.739 -2.727)" fill="currentColor" /></svg></button></div>';
        fadeIn("cookieConsent");
    }
}
function cookieDismiss(value) {
    setCookie('cookieDismiss',value,7);
    fadeOut("cookieConsent");
}
window.onload = function() { cookieConsent(); };