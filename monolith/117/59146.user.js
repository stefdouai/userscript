// ==UserScript==
// @name           Facebook gift myself
// @author         frank38
// @version        1.0
// @namespace      
// @description    Facebook gift myself
// @require        http://jqueryjs.googlecode.com/files/jquery-1.3.2.min.js
// @include		   *facebook.com/*
// ==/UserScript==

$(document).ready(function () {
	var fbID;
	try { fbID = unsafeWindow.channelManager.user; }
	catch (x) {	return;	}
	//friend selector 1
	if($("#friends").length) {
		htm = "<li userid=\"" + fbID + "\">";
		htm += "<a onclick=\"fs.click(this.parentNode); return false;\" href=\"#\">";
		htm += "<span class=\"square\" style=\"background-image: url(http://static.ak.fbcdn.net/pics/q_silhouette.gif); \"></span/>";
		htm += "</span><strong>* MYSELF *</strong><br/><span class=\"*\"/></a></li>";
		$("#friends").prepend(htm);
	}
	//friend selector 2
	if($(".unselected_list").length) {
		htm1 = "<label class=\"clearfix\">";
		htm1 += "<input id=\"ids[]\" class=\"inputcheckbox\" type=\"checkbox\" fb_protected=\"true\" value=\"" + fbID + "\" name=\"ids[]\"/><span>*** MYSELF *** </span>";
		htm1 += "</label>";
		$(".unselected_list").prepend(htm1);
	}
});

/**********************************************************************/
