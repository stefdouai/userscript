// ==UserScript==
// @author Farbdose edited by elcharro/stalingrad
// @name Tribalwars Scripting Team Timer
// @namespace http://forum.tribalwars.ae/member.php?13919-elcharro
// @include http://*/game.php*screen=place&target=*
// @include http://*/game.php*screen=place
// @include http://*/game.php*screen=place&mode=command*
// ==/UserScript==


(function()
{

 //var dstime=document.getElementById("serverTime").innerHTML;
 //if(dstime==GM_getValue("starttime", "25:00:00:000"))
 //{  getElementsByName('attack').click(); }


function start()
{
 var dstime=document.getElementById("serverTime").innerHTML;
 
 window.dtime=prompt('الاجزاء:الثواني:الدقيقه:الساعه\n مثال :\n08:14:36:100');
 window.setInterval(function() {
 var dstime=document.getElementById("serverTime").innerHTML;
 if(dstime==window.dtime)
 {  window.setTimeout(document.getElementsByName('attack')[0].click(),window.dtimev*400) }
 }, 200);
}

var l = document.createElement('a');
var nl = document.createElement('br');
l.href="javascript:;";
l.addEventListener('click',start,true);
l.innerHTML = 'الوقت المراد فيه الضغط على "هجوم"';
document.forms[0].appendChild(nl)
document.forms[0].appendChild(l)


}());


(function()
{

 //var dstime=document.getElementById("serverTime").innerHTML;
 //if(dstime==GM_getValue("starttime", "25:00:00:000"))
 //{  getElementsByName('attack').click(); }


function start()
{
 var dstime=document.getElementById("serverTime").innerHTML;
 
 window.dtime=prompt('الاجزاء:الثواني:الدقيقه:الساعه\n مثال :\n08:14:36:100');
 window.setInterval(function() {
 var dstime=document.getElementById("serverTime").innerHTML;
 if(dstime==window.dtime)
 {  window.setTimeout(document.getElementsByName('attack')[0].click(),window.dtimev*400) }
 }, 200);
}

var l = document.createElement('a');
var nl = document.createElement('br');
l.href="javascript:;";
l.addEventListener('click',start,true);
l.innerHTML = 'الوقت المراد فيه الضغط على "دعم"';
document.forms[0].appendChild(nl)
document.forms[0].appendChild(l)


var l3 = document.createElement('a');
var n3 = document.createElement('br');
l3.href="http://forum.tribalwars.ae/member.php?13919-elcharro";
l3.innerHTML = 'elcharro/stalingrad';
document.forms[0].appendChild(n3)
document.forms[0].appendChild(l3)


}());