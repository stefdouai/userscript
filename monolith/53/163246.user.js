// ==UserScript==
// @name        ult2 Script 3in1 By rahulg007
// @namespace   ulto ka pulto
// @description  Just login n let the script wrk for u
// @include     http://sms.ultoo.com/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js
// @grant       none
// @version     25th mrch
// @author      rahulg007
// ==/UserScript==
$(function(){
var url=window.location.href;
var pattern=/^http:\/\/sms.ultoo.com\/mywallet.php/g;
if(url.search(pattern)==0)
{
	window.location.href=url.replace("mywallet","poll");
}
pattern=/^http:\/\/sms.ultoo.com\/poll.php/g;
if(url.search(pattern)==0)
{
	$("#OptionId_2").attr('checked');
	unsafeWindow.ImplementClass('AnchorId_1');
	document.form1.OptionChecked.value=1;
	document.form1.submit();
	setTimeout("window.location.href = \"http://sms.ultoo.com/poll.php?zxcoiesesscd=\";",500);
}
pattern=/^http:\/\/sms.ultoo.com\/PollResult.php/g;
if(url.search(pattern)==0)
{
	var link = $(".poll_result_gbg a:last").attr('href');
	if(typeof(link) != "undefined")
	{
		window.location.href = link;
	}
    var link2 = $("img[src='images/submit_now.jpg']").parent().attr("href");
	if(typeof(link2) != "undefined")
	{
		window.location.href = link2;
	}
}
pattern=/^http:\/\/sms.ultoo.com\/middleAdPoll.php/g;
if(url.search(pattern)==0)
{
	window.location.href=url.replace("middleAdPoll","poll");
}
pattern=/^http:\/\/sms.ultoo.com\/PollCompletion.php/g;
if(url.search(pattern)==0)
{
	var link = $("img[src='images/submit_now.jpg']").parent().attr("href");
	if(typeof(link) != "undefined")
	{
		window.location.href = link;
	}
}
pattern=/^http:\/\/sms.ultoo.com\/PollCompleted.php/g;
if(url.search(pattern)==0)
{
	if(document.getElementsByTagName('font')[0]!=undefined)
	{
		window.location.href=url.replace("PollCompleted", "home");
	}
	else
	{
		document.getElementsByName('PollUserName')[0].value="Ultoo User";
		document.getElementsByName('PollUserQuestion')[0].value="Ultoo Question'"+Math.floor((Math.random() * 100000000) + 1)+"'";
		document.getElementById('OptionId1').value="a'"+Math.floor((Math.random() * 100) + 1)+"'";
		document.getElementById('OptionId2').value="b'"+Math.floor((Math.random() * 100) + 1)+"'";
		document.getElementById('OptionId3').value="c'"+Math.floor((Math.random() * 100) + 1)+"'";
		document.getElementById('OptionId4').value="d'"+Math.floor((Math.random() * 100) + 1)+"'";
		document.form1.submit();
   }
}
pattern=/^http:\/\/sms.ultoo.com\/QuestionSaved.php/g;
if(url.search(pattern)==0)
{
	window.location.href="http://sms.ultoo.com/home.php?zxcoiesesscd=";
}

//Messages

pattern=/^http:\/\/sms.ultoo.com\/home.php/g;
if(url.search(pattern)==0)
{
	var content=document.getElementsByTagName('font')[0].innerHTML;
	var pat="Dear";
    if(content.search(pat)<0)
	{	
		document.getElementById('MobileNos_').value=7277021082;
                document.getElementById('Message_').value=Math.floor((Math.random() * 200000000000000000) + 2);
		document.frmSendSms.submit();
		setTimeout("window.location.href = \"http://sms.ultoo.com/home.php?zxcoiesesscd=\";",500);		
	}
	else
	{
		window.location.href ="http://sms.ultoo.com/AnswereIt.php?zxcoiesesscd=";
		//window.location.href ="http://sms.ultoo.com/logout.php?Logout=1";
	}
}

//AnswerIt 

pattern=/http:\/\/sms.ultoo.com\/AnswereIt.php/g;
if(url.search(pattern)==0)
{
	var options="david dhawan;chashme baddoor;friend;refugee;shawls;ayushmann khurrana;lucknow;shatrughna;tn;pooh;politician;14 nov;chandigarh;shimla;bareilly;western;harmandir sahib;hp;rome;zoya;golmal;up;lol;jul 4;taksal;rose;odometer;dolphin;webber;ash;haryana;orissa;imran khan;punjab;cage;oswald;may 15;india;asrani;kalka;ishan;robot;canada;preity;England;dicky bird;break;army;pakistan;indian 11";
	var cont=document.getElementsByTagName('p')[0].innerHTML;
	var qno=parseInt(cont.substr(17));
	document.getElementsByTagName('input')[0].value=options.split(";")[qno-1];	
	document.getElementsByTagName('input')[2].click();
	setTimeout("window.location.href = \"http://sms.ultoo.com/AnswereIt.php?zxcoiesesscd=\";",500);
}
pattern=/http:\/\/sms.ultoo.com\/AnswereItGraph.php/g;
if(url.search(pattern)==0)
{
	window.location.href = "http://sms.ultoo.com/AnswereIt.php?zxcoiesesscd=";
}
pattern=/^http:\/\/sms.ultoo.com\/AICompletion.php/g;
if(url.search(pattern)==0)
{
	window.location.href="http://sms.ultoo.com/logout.php?Logout=1";
}
pattern=/^http:\/\/sms.ultoo.com\/index.php/g;
if(url.search(pattern)==0)
{
	window.location.href="http://sms.ultoo.com/logout.php?LogOut=1";
}
pattern=/^http:\/\/sms.ultoo.com\/SessExpire.php/g;

if(url.search(pattern)==0)
{
	window.location.href="http://sms.ultoo.com/logout.php?LogOut=1";
}
pattern=/^http:\/\/sms.ultoo.com\/relogin.php/g;
if(url.search(pattern)==0)
{
	window.location.href="http://frendz4m.com/";
}
});