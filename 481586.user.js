// ==UserScript==
// @name    bongacamsKillAds
// @description Kill ads & banners on bongacams.com
// @version 1.0.0
// @author  Max Max
// @license MIT
// @include http://bongacams.com/ 
// @include http://*.bongacams.com/
// @include http://*.bongacams.com/*
// @match   http://bongacams.com/ 
// @match   http://*.bongacams.com/
// @match   http://*.bongacams.com/*
// @icon    http://i.bongacams.com/images/apple/apple-touch-icon-60x60.png
// ==/UserScript==

// [1] не запускаем скрипт во фреймах
if (window.self!=window.top) {return}
// [2] дополнительно подсказка хромиуму
if (!window.location.href.match(/bongacams\.com/)) {return}	
// [3] для уникальности проверяем тег
if (!document.getElementById('header')) {return} 
var banner,popup;removeElementById("member_join_popup_trigger");removeElementById("member_join_popup");removeElementById("fancybox-tmp");removeElementById("fancybox-loading");removeElementById("fancybox-overlay");removeElementById("fancybox-wrap");removeElementById("fancybox-content");removeElementById("fancybox-outer");removeElementById("goldone_popup_trigger");removeElementById("goldtwo_popup_trigger");removeElementById("goldtree_popup_trigger");removeElementById("goldlast_popup_trigger");removeElementById("goldone_popup");removeElementById("goldtwo_popup");removeElementById("goldtree_popup");removeElementById("goldlast_popup");_removeElByPath('//div[@class="top_banner"]');removeElementById("warning_popup_mask");removeElementById("warning_popup");_removeElByPath('//div[@class="warning_popup_content"]');removeElementById("fancybox-outer");removeElementById("fancybox-wrap");removeElementById("fancybox-content");banner=_NodeByXPath('//div[@class="right_banner"]');if(banner){banner.innerHTML="";banner.style.width="0";}if(window.location.href.match(/chat/)){_removeElByPath('//div[@class="navbar"]');_removeElByPath('//div[@class="quick_mls_panel"]');_removeElByPath('//div[@class="mls_inner"]');}if(window.location.href.match(/bongacams\.com/)){t=setInterval(function(){popup=_NodeByXPath('//a[@class="popup_hide"]');if(popup){click(popup);}removeElementById("fancybox-overlay");removeElementById("fancybox-wrap");banner=_NodeByXPath('//div[@class="data_item"]');if(!banner){popup=_NodeByXPath('//div[@class="chatbox chatbox_green"]');if(popup){popup.style.display="none";}}},1000);}function _NodesByXPath(a){return document.evaluate(a,document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);}function _NodeByXPath(a){return _NodesByXPath(a).snapshotItem(0);}function _removeElByPath(a){var d=_NodesByXPath(a);if(d.snapshotLength>0){for(var b=0;b<d.snapshotLength;b++){var c=d.snapshotItem(b);c.parentNode.removeChild(c);}}}function removeElementById(b){var a=document.getElementById(b);if(a){a.parentNode.removeChild(a);}}function click(b){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",true,true,window,0,1,1,1,1,false,false,false,false,0,null);b.dispatchEvent(a);}function show_note(e){if(!e){return;}var d,b="",a="",c;d=document.getElementById("note");if(d){d.parentNode.removeChild(d);}d=document.createElement("div");c="data:image/gif;base64,R0lGODlhEAAQAJEDAICAgKCgpP///wAAACH5BAEAAAMALAAAAAAQABAAAAIvnI+py70AI3yi2goUEOH2nGxc1QkgInKlqVnBeh5iWcbGto72kF6sJok4hsSiogAAOw==";b="position: absolute;";b+="z-index: 6001;";b+="top: 0;";b+="left: 0;";b+="right: 0;";b+="background: #fde073;";b+="text-align: center;";b+="color:#333;";b+="line-height: 2.5;";b+="overflow: hidden;";b+="—moz—opacity:0.9; —khtml—opacity: 0.9; -webkit-opacity: 0.9; opacity: 0.9;";b+="-webkit-box-shadow: 0 0 5px black; -moz-box-shadow: 0 0 5px black; box-shadow: 0 0 5px black;";a="position: absolute;";a+="right: 10px;";a+="top: 9px;";a+="text-indent: -9999px;";a+="background: url("+c+");";a+="height: 16px;";a+="width: 16px;";a+="cursor: pointer;";d.setAttribute("id","note");d.setAttribute("style",b);d.innerHTML=""+e+' <a id="close" style="'+a+'">[закрыть]</a>';document.body.insertBefore(d,document.body.firstChild);close=document.getElementById("close");close.addEventListener("click",function(){d=document.getElementById("note");if(d){d.parentNode.removeChild(d);}},false);}if(document.getElementById("header")){show_note("KILL ADS ON!");}