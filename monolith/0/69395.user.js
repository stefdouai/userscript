// ==UserScript==
// @name           Refresh CommMsgs
// @description    This script have a function of refreshing the page CommMsgs
// @dccmm          http://www.orkut.com.br/Community?cmm=95689255
// @include        *.orkut.*/CommMsgs*
// @include        *.orkut.*/Main#CommMsgs*
// ==/UserScript==


var segundos = 10; //Voce pode mudar os segundos que voce queira que atualize

segundos = segundos * 1000; //NAO MEXA, multiply the seconds per thousand to convert to milliseconds

var ajax = new XMLHttpRequest; //Define variable ajax for class XMLHttpRequest

setInterval(function()
		{
			ajax.open("GET",location.href.replace(/Main#/ig,""), false); //Open a url replacing the 'main' of url
			ajax.send(null); //Send the null value
			if (ajax.responseText != document.body.innerHTML) //If the HTML Code of response Ajax is differs of the body HTML
			{
				document.body.innerHTML = ajax.responseText; //Written the html in page
			}
		}, segundos);
Because it's your web