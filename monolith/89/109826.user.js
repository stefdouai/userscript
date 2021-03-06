// ==UserScript==
// @name          Doug's Google Calendar
// @namespace     http://design.aqueo.us
// @description	  Make Google Calendar more useable
// @author        Doug
// @include       http://www.google.com/calendar/*
// @include       https://www.google.com/calendar/*
// @exclude       http://www.google.com/calendar/embed*
// @exclude       https://www.google.com/calendar/embed*
// @version       1.5.1
// ==/UserScript==

(function() {
var css = ' #vr-header { /* Hide search bar at top */ width:100%; position: fixed !important; z-index: 3; background: rgba(255,255,255,.2) !important; border-bottom: rgba(212,72,54,.2) 5px solid !important; -moz-transition-duration: .2s; -webkit-transition-duration: .2s; } /* Keep #vr-header in place even when browser window is resized */ #calcontent #vr-header       {top: -37px;} #calcontent.eui-s #vr-header {top: -28px;padding-bottom:5px;} #calcontent.eui-t #vr-header {top: -11px;border-bottom-width:3px !important;} #vr-header:hover { /* Display search bar on hover */ top: 30px !important; border-bottom-color: rgba(212,72,54,1) !important; background: white !important; -moz-box-shadow: 4px 4px 6px rgba(0,0,0, 0.6) !important; -webkit-box-shadow: 4px 4px 6px rgba(0,0,0, 0.6) !important; box-shadow: 4px 4px 6px rgba(0,0,0, 0.6) !important; padding-bottom:0 !important; } #vr-nav { /* Move nav bar up slightly */ margin-top: 15px; } #ntowner table { /* Fix position of notification messages */ top:85px; position:fixed!important; } /* Adjust position of notification messages when browser window is resized */ #calcontent.eui-s #ntowner table {top: 78px;} #calcontent.eui-t #ntowner table {top: 64px;} #ntowner .mbox-t1, #ntowner .mbox-t2 { /* Adjust display style of notification messages */ display:none; } #ntowner .mbox-cont { /* Adjust display style of notification messages (continued) */ padding:2px 15px; border-radius:4px; -moz-box-shadow: 0 2px 4px rgba(0,0,0,.2); -webkit-box-shadow: 0 2px 4px rgba(0,0,0,.2); box-shadow: 0 2px 4px rgba(0,0,0,.2); } #nav { /* Hide sidebar tools */ background-color: white !important; border-right: #D44836 5px solid; opacity: .2 !important; margin-left:0; padding: 30px 20px 20px !important; width: 150px !important; position: fixed !important; z-index: 2; -moz-transition-duration: .2s; -webkit-transition-duration: .2s; } #calcontent #nav, #calcontent.eui-s #nav, #calcontent.eui-t #nav { /* Keep #nav in place even when browser window is resized */ left: -186px; margin-left:0; } #calcontent.eui-t #nav { /* Make a little extra room on small screens */ border-right-width:3px; left:-188px; } #nav:hover { /* Display sidebar tools on hover */ left: 0 !important; opacity: 1 !important; -moz-box-shadow: 4px 4px 6px rgba(0,0,0, 0.6) !important; -webkit-box-shadow: 4px 4px 6px rgba(0,0,0, 0.6) !important; box-shadow: 4px 4px 6px rgba(0,0,0, 0.6) !important; } #mainbody { /* Adjust main calendar to fill width of browser window */ margin: 0 0 0 15px !important; } #calcontent.eui-t #mainbody { /* Make a little extra room on small screens */ margin: 0 0 0 9px !important; } th.mv-dayname { /* Make weekday labels more prominent in month-view*/ font-size: 150% !important; font-weight: 500!important; } .st-bg,.st-dtitle,.mv-event-container { /* Make calendar gridlines a bit darker */ border-color:#c5c5c5; } .st-dtitle-today, .wk-today { /* Highlight today (title bar) */ background-color: rgba(77,144,254,.8) !important; border: none !important; color: #FFF !important; font-size: 140% !important; font-weight: bold !important; opacity: 1 !important; text-shadow: 0 0 4px #048 !important; } .st-bg-today, .tg-today, .bg-exists .tg-today, .st-bg-today { /* Highlight today (box) */ background-color: rgba(77,144,254,0.1) !important; border: 1px solid rgba(77,144,254,0.7) !important; -moz-box-shadow: 0px 0px 6px 0px #4d90fe!important; -webkit-box-shadow: 0px 0px 6px 0px #4d90fe!important; box-shadow: 0px 0px 6px 0px #4d90fe!important; } .tg-weekend, #weekViewAllDayBgwk td:first-child, #weekViewAllDayBgwk td:last-child, .st-bg:first-child, .st-bg:last-child { /* Shade weekend dates */ background-color: #f7f7f7 !important; } .gcal-popup { /* Fix positioning of quick add box */ left: 24px !important; } .date-top { /* Make calendar date bigger */ font-size:20px!important; } ';

if (typeof GM_addStyle != 'undefined') {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != 'undefined') {
	PRO_addStyle(css);
} else if (typeof addStyle != 'undefined') {
	addStyle(css);
} else {
	var heads = document.getElementsByTagName('head');
	if (heads.length > 0) {
		var node = document.createElement('style');
		node.type = 'text/css';
		node.appendChild(document.createTextNode(css));
		heads[0].appendChild(node);
	}
}
})();
