// ==UserScript==
// @name           Health Notifier
// @namespace      com.erepublik.healthnotifier
// @include        http://www.erepublik.com/*
// @include        http://economy.erepublik.com/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// ==/UserScript==
jQuery.fn.contentChange=function(callback){var elms=jQuery(this);elms.each(function(i){var elm=jQuery(this);elm.data("lastContents",elm.html());window.watchContentChange=window.watchContentChange?window.watchContentChange:[];window.watchContentChange.push({"element":elm,"callback":callback});});return elms;}
setInterval(function(){
  if(window.watchContentChange){
    for(i in window.watchContentChange){
      if(typeof window.watchContentChange[i].element != "undefined"){
        if(window.watchContentChange[i].element.data("lastContents") != window.watchContentChange[i].element.html()){
          window.watchContentChange[i].callback.apply(window.watchContentChange[i].element);
          window.watchContentChange[i].element.data("lastContents", window.watchContentChange[i].element.html());
        }
      }
    }
  }
},500);

var Notifier = {
  check:   function(){return (window.webkitNotifications.checkPermission()>0)},
  request: function(callback){window.webkitNotifications.requestPermission(callback)},
  create:  function(i,t,b){return window.webkitNotifications.createNotification(i,t,b)},
  notify:  function(i,t,b,c){if(Notifier.check()){Notifier.request(c);}else{var popup=Notifier.create(i,t,b);popup.show();setTimeout(function(){popup.cancel();},'10000');}}
}

function HealthPopup(){
  var image = 'data:image/png;base64,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';
  var title = 'Health Notifier';
  var body = "You recovered 100 Health Points\nCurrent : "+jQuery('strong#current_health').html()+" - Recover : "+jQuery('big.tooltip_health_limit').html().replace(/\s/g,"");
  
  Notifier.notify(image,title,body,HealthPopup);
}

jQuery(document).ready(function(){
  if(typeof window.webkitNotifications == 'undefined'){
    alert("Your version of Firefox does not support HTML 5 notifications.\nPlease install the following plug-in : http://code.google.com/p/ff-html5notifications/");
    return false;
  }
  jQuery('#foodResetHours').contentChange(function(){if(jQuery(this).html()=='00:00:01'){setTimeout(HealthPopup,1001);}});
});