// ==UserScript==
// @name         Yahoo And Old Orkut Smileys
// @namespace    Vinayak prabhu
// @description  With This Script You Can Use The Famous Yahoo Smileys And The OLD Orkut Smileys In ORKUT! :D
// @include      http://*.orkut.*/*
// ==/UserScript==

addEventListener('load', function(event) {
function getTextArea(n) {
	return document.getElementsByTagName('textarea')[n];
}


function prabhu(){
	var vinu = this.getElementsByTagName('img')[0].getAttribute("src");
	getTextArea(this.getAttribute("gult")).focus();
	getTextArea(this.getAttribute("gult")).value += "<img src="+vinu+">";
}

function dip() {
	var vinayak = new Array();	
	vinayak["Happy"]="http://lh5.ggpht.com/_Z_CdHVH07U0/S6TcWNYsFsI/AAAAAAAAAZU/JOKP_EtHoDk/1.gif";
	vinayak["Sad"]="http://lh6.ggpht.com/_Z_CdHVH07U0/S6TcWFNd5GI/AAAAAAAAAZY/las5QnVus_M/2.gif";
	vinayak["Wink"]="http://lh5.ggpht.com/_Z_CdHVH07U0/S6TcWVV3FII/AAAAAAAAAZc/07o2mZfcpwE/3.gif";
	vinayak["Broad Smile"]="http://lh5.ggpht.com/_Z_CdHVH07U0/S6TcWtNaV4I/AAAAAAAAAZg/YsfU__bhr6A/4.gif";
	vinayak["Batting Eyelashes"]="http://lh3.ggpht.com/_Z_CdHVH07U0/S6TcWxU7r9I/AAAAAAAAAZk/h2uvf1IMOXg/5.gif";
	vinayak["Big Hug"]="http://lh3.ggpht.com/_Z_CdHVH07U0/S6TcdI0eLiI/AAAAAAAAAZo/pmX02172aXU/6.gif";
	vinayak["What? :S"]="http://lh3.ggpht.com/_Z_CdHVH07U0/S6TcdY_90cI/AAAAAAAAAZs/ekNBDdy_GzI/7.gif";
	vinayak["Love Struck"]="http://lh4.ggpht.com/_Z_CdHVH07U0/S6Tcdap-CXI/AAAAAAAAAZw/u8qx7_Ly3tY/8.gif";
	vinayak["Blushhh"]="http://lh3.ggpht.com/_Z_CdHVH07U0/S6Tcd6p3MTI/AAAAAAAAAZ0/wNB1gQRlZ28/9.gif";
	vinayak["Foooll"]="http://lh6.ggpht.com/_Z_CdHVH07U0/S6TceEUlJqI/AAAAAAAAAZ4/ovb1AjeSv2w/10.gif";
	vinayak["Kisss"]="http://lh5.ggpht.com/_Z_CdHVH07U0/S6TciEg8WnI/AAAAAAAAAZ8/tzw-6UnHD_o/11.gif";
	vinayak["Broken Heart"]="http://lh6.ggpht.com/_Z_CdHVH07U0/S6TciZeAgoI/AAAAAAAAAaA/mpe_SM_IL4k/12.gif";
	vinayak["WHat A Surprise"]="http://lh6.ggpht.com/_Z_CdHVH07U0/S6Tci6AWBoI/AAAAAAAAAaE/rH-w5wqtjEI/13.gif";
	vinayak["Angryy"]="http://lh6.ggpht.com/_Z_CdHVH07U0/S6Tci0VSrQI/AAAAAAAAAaI/rNap3TbvZgw/14.gif";
	vinayak["Smirk"]="http://lh3.ggpht.com/_Z_CdHVH07U0/S6TcjHGao2I/AAAAAAAAAaM/sNqI4hTS22s/15.gif";
	vinayak["Cool"]="http://lh6.ggpht.com/_Z_CdHVH07U0/S6TcnKCR3LI/AAAAAAAAAaQ/sNb3fbQ9COo/16.gif";
	vinayak["In Tension"]="http://lh5.ggpht.com/_Z_CdHVH07U0/S6Tcnfvv4fI/AAAAAAAAAaU/eDbPiHBo-tU/17.gif";
	vinayak["Hasssshhh"]="http://lh5.ggpht.com/_Z_CdHVH07U0/S6TcnW27qhI/AAAAAAAAAaY/omeRHBfwvxM/18.gif";
	vinayak["Evil"]="http://lh4.ggpht.com/_Z_CdHVH07U0/S6Tcnp3l44I/AAAAAAAAAac/I3r-DugC-1o/19.gif";
	vinayak["Crying"]="http://lh6.ggpht.com/_Z_CdHVH07U0/S6Tcnym2bXI/AAAAAAAAAag/uUrQhy7vUi0/20.gif";
	vinayak["Laughing"]="http://lh5.ggpht.com/_Z_CdHVH07U0/S6Tcs4rxSjI/AAAAAAAAAak/djQuWREcpc4/21.gif";
	vinayak["Straight Face"]="http://lh4.ggpht.com/_Z_CdHVH07U0/S6TctPrr-yI/AAAAAAAAAao/S0hZKIZuyxw/22.gif";
	vinayak["Haannnn"]="http://lh4.ggpht.com/_Z_CdHVH07U0/S6TctM8PF8I/AAAAAAAAAas/jGJV1B0PTHY/23.gif";
	vinayak["ROFL"]="http://lh3.ggpht.com/_Z_CdHVH07U0/S6Tctb1ZhQI/AAAAAAAAAaw/SuOlKauef2E/24.gif";
	vinayak["Angel"]="http://lh5.ggpht.com/_Z_CdHVH07U0/S6TctgayTrI/AAAAAAAAAa0/N8ESuHs-IrU/25.gif";
	vinayak["Dork"]="http://lh6.ggpht.com/_Z_CdHVH07U0/S6TcyjOjrqI/AAAAAAAAAa4/jN549QovRp0/26.gif";
	vinayak["Talk to the hand"]="http://lh3.ggpht.com/_Z_CdHVH07U0/S6TczCeqrgI/AAAAAAAAAa8/Q5GklbyHhKU/27.gif";
	vinayak["Asleep"]="http://lh5.ggpht.com/_Z_CdHVH07U0/S6TczDco4QI/AAAAAAAAAbA/2WEmfPCCjf8/28.gif";
	vinayak["Drooling"]="http://lh5.ggpht.com/_Z_CdHVH07U0/S6TczUA76gI/AAAAAAAAAbE/IL9CAjvCt9s/29.gif";
	vinayak["Looser"]="http://lh3.ggpht.com/_Z_CdHVH07U0/S6TczRqxYsI/AAAAAAAAAbI/c-sEaBVIklU/30.gif";
	vinayak["Puking"]="http://lh3.ggpht.com/_Z_CdHVH07U0/S6Tc7P6GvFI/AAAAAAAAAbM/jUReTBS63U8/31.gif";
	vinayak["Silent"]="http://lh4.ggpht.com/_Z_CdHVH07U0/S6Tc7diCKOI/AAAAAAAAAbQ/fF4jzOU3XZk/32.gif";
	vinayak["NoNo"]="http://lh3.ggpht.com/_Z_CdHVH07U0/S6Tc7WpBsZI/AAAAAAAAAbU/Qstnw16AWBQ/33.gif";
	vinayak["Silly"]="http://lh3.ggpht.com/_Z_CdHVH07U0/S6Tc7mEA42I/AAAAAAAAAbY/DE-CSX02QXQ/35.gif";
	vinayak["Joker"]="http://lh4.ggpht.com/_Z_CdHVH07U0/S6Tc718s19I/AAAAAAAAAbc/fPodEA8Xw4c/34.gif";
	vinayak["Partyy"]="http://lh6.ggpht.com/_Z_CdHVH07U0/S6Tc_0F2ovI/AAAAAAAAAbg/V5k9NY4hHf8/36.gif";
	vinayak["Sleepy"]="http://lh5.ggpht.com/_Z_CdHVH07U0/S6TdAFeETFI/AAAAAAAAAbk/jJiDIcrWOAM/37.gif";
	vinayak["Drooling"]="http://lh6.ggpht.com/_Z_CdHVH07U0/S6TdA5gaumI/AAAAAAAAAbo/TrBbSYepf88/38.gif";
	vinayak["Thinking"]="http://lh4.ggpht.com/_Z_CdHVH07U0/S6TdBcMWBsI/AAAAAAAAAbw/OP4dSIwvdUQ/39.gif";
	vinayak["Duh"]="http://lh3.ggpht.com/_Z_CdHVH07U0/S6TdBG1i9pI/AAAAAAAAAbs/XvwShYtYM4w/40.gif";
	vinayak["Applause"]="http://lh5.ggpht.com/_Z_CdHVH07U0/S6TdF_KJQ6I/AAAAAAAAAb0/2vS2HIsy4YE/41.gif";
	vinayak["Nail Biting"]="http://lh4.ggpht.com/_Z_CdHVH07U0/S6TdGCWDJpI/AAAAAAAAAb4/i4EG2_yeo0s/42.gif";
	vinayak["Hypnotized"]="http://lh4.ggpht.com/_Z_CdHVH07U0/S6TdGOTTFzI/AAAAAAAAAb8/UvGNSjwO8uA/43.gif";
	vinayak["Pinocheo"]="http://lh4.ggpht.com/_Z_CdHVH07U0/S6TdGeFGICI/AAAAAAAAAcA/LoHlppvGVqE/44.gif";
	vinayak["Waiting"]="http://lh6.ggpht.com/_Z_CdHVH07U0/S6TdGgu37JI/AAAAAAAAAcE/QwaZU15H-Bg/45.gif";
	vinayak["Sigh"]="http://lh4.ggpht.com/_Z_CdHVH07U0/S6TdKgYdAoI/AAAAAAAAAcI/JkcHOzYXH9A/46.gif";
	vinayak["Idiot"]="http://lh6.ggpht.com/_Z_CdHVH07U0/S6TdK9LKKEI/AAAAAAAAAcM/FXRb8x0dm2U/47.gif";
	vinayak["I'm Super cool"]="http://lh4.ggpht.com/_Z_CdHVH07U0/S6TdLJ1rLwI/AAAAAAAAAcQ/KfYr540jMlQ/48.gif";
	vinayak["Pig"]="http://lh4.ggpht.com/_Z_CdHVH07U0/S6TdLJQL4gI/AAAAAAAAAcU/kbriTdt6yVs/49.gif";
	vinayak["Cow"]="http://lh4.ggpht.com/_Z_CdHVH07U0/S6TdLfLCXSI/AAAAAAAAAcY/Tb1feRGV7W8/50.gif";
	vinayak["Monkey"]="http://lh5.ggpht.com/_Z_CdHVH07U0/S6TdPrYCKLI/AAAAAAAAAcc/ta1X2HFS_mg/51.gif";
	vinayak["Hen"]="http://lh3.ggpht.com/_Z_CdHVH07U0/S6TdPgLsrTI/AAAAAAAAAcg/TJ7VBujDy7c/52.gif";
	vinayak["Rose"]="http://lh5.ggpht.com/_Z_CdHVH07U0/S6TdP5uFbMI/AAAAAAAAAck/JPanA4KN_gU/53.gif";
	vinayak["Leaf"]="http://lh6.ggpht.com/_Z_CdHVH07U0/S6TdP_GC53I/AAAAAAAAAco/F2vn4kgPIkA/54.gif";
	vinayak["USA"]="http://lh5.ggpht.com/_Z_CdHVH07U0/S6TdPyS9ZqI/AAAAAAAAAcs/OxtMWr0Iqy0/55.gif";
	vinayak["Haloween"]="http://lh6.ggpht.com/_Z_CdHVH07U0/S6TdWGBdTCI/AAAAAAAAAcw/Pp-d1FK_z84/56.gif";
	vinayak["Cup of Tea"]="http://lh6.ggpht.com/_Z_CdHVH07U0/S6TdWQ18I6I/AAAAAAAAAc0/wNGiqyMJlo8/57.gif";
	vinayak["Ideaaa!"]="http://lh5.ggpht.com/_Z_CdHVH07U0/S6TdWToXjII/AAAAAAAAAc4/Taj2ZdAyB4U/58.gif";
	vinayak["Skull"]="http://lh6.ggpht.com/_Z_CdHVH07U0/S6TdWx5qVQI/AAAAAAAAAc8/ENmPV2qVymY/59.gif";
	vinayak["Alien"]="http://lh6.ggpht.com/_Z_CdHVH07U0/S6TdW8mqJNI/AAAAAAAAAdA/OdYtUwtCypY/60.gif";
	vinayak["WTF alien:O"]="http://lh3.ggpht.com/_Z_CdHVH07U0/S6TddoxciqI/AAAAAAAAAdE/iCmKYox4I4k/61.gif";
	vinayak["Buzz Of"]="http://lh5.ggpht.com/_Z_CdHVH07U0/S6TddxSJiUI/AAAAAAAAAdI/JX_E3krxykQ/62.gif";
	vinayak["Praying"]="http://lh3.ggpht.com/_Z_CdHVH07U0/S6Tdd4WbbDI/AAAAAAAAAdM/XHzXYjhEGzE/63.gif";
	vinayak["Moneeyyy"]="http://lh3.ggpht.com/_Z_CdHVH07U0/S6Tdd8EDlyI/AAAAAAAAAdQ/e99Vriufpio/64.gif";
	vinayak["Lalalalala"]="http://lh6.ggpht.com/_Z_CdHVH07U0/S6TdeON5bvI/AAAAAAAAAdU/MVGsNW7rdwc/65.gif";
	vinayak["Stupid"]="http://lh4.ggpht.com/_Z_CdHVH07U0/S6Tdh5KkaKI/AAAAAAAAAdY/pttDRwomCWk/66.gif";
	vinayak["Nice Work"]="http://lh4.ggpht.com/_Z_CdHVH07U0/S6TdiAMPZNI/AAAAAAAAAdc/9omNZh5KBI8/67.gif";
	vinayak["Na na na"]="http://lh4.ggpht.com/_Z_CdHVH07U0/S6TdiFKXWyI/AAAAAAAAAdg/5YNUQVeP13s/68.gif";
	vinayak["Dancing"]="http://lh3.ggpht.com/_Z_CdHVH07U0/S6TdiZPFM_I/AAAAAAAAAdk/r5AcpWV13iY/69.gif";
	vinayak["Bring It On!"]="http://lh5.ggpht.com/_Z_CdHVH07U0/S6TdiWIvk_I/AAAAAAAAAdo/hjoGB_QtzhI/70.gif";
	vinayak["hehehe"]="http://lh4.ggpht.com/_Z_CdHVH07U0/S6Tdmc3ywkI/AAAAAAAAAds/YrogTDm0Ddk/71.gif";
	vinayak["Cool Boy"]="http://lh4.ggpht.com/_Z_CdHVH07U0/S6TdmmO5IwI/AAAAAAAAAdw/b0T3OwFkeBs/72.gif";
	vinayak["Cool Girl"]="http://lh3.ggpht.com/_Z_CdHVH07U0/S6TdmnQoTSI/AAAAAAAAAd0/YEp0-LGr-Pk/73.gif";
	vinayak["Girl"]="http://lh3.ggpht.com/_Z_CdHVH07U0/S6Tdm0SnDvI/AAAAAAAAAd4/0SnmYo3nqBo/74.gif";
	vinayak["FengShui"]="http://lh6.ggpht.com/_Z_CdHVH07U0/S6Tdm9wy6II/AAAAAAAAAd8/XAEfOg_TjRQ/75.gif";
	vinayak["Chatter Box"]="http://lh4.ggpht.com/_Z_CdHVH07U0/S6TdtNY3HvI/AAAAAAAAAeA/7z1WWRdyz-4/76.gif";
	vinayak["Your great"]="http://lh6.ggpht.com/_Z_CdHVH07U0/S6TdtTY08BI/AAAAAAAAAeE/ZYBZ2sSEMD0/77.gif";
	vinayak["Go On"]="http://lh4.ggpht.com/_Z_CdHVH07U0/S6Tdtn_lPeI/AAAAAAAAAeI/-3KhjjAOPUc/78.gif";
	vinayak["Star"]="http://lh5.ggpht.com/_Z_CdHVH07U0/S6TdtmZyBdI/AAAAAAAAAeM/PR2qddzQM3c/79.gif";
	vinayak["On Call"]="http://lh5.ggpht.com/_Z_CdHVH07U0/S6Tdt5v1bKI/AAAAAAAAAeQ/8bM4nLhCpEM/100.gif";
	vinayak["Call Me"]="http://lh6.ggpht.com/_Z_CdHVH07U0/S6Td4k4bnlI/AAAAAAAAAeU/wM2gL4Gurbg/101.gif";
	vinayak["Getting Mad"]="http://lh4.ggpht.com/_Z_CdHVH07U0/S6Td4wf8N2I/AAAAAAAAAeY/BBszMHEUx9k/102.gif";
	vinayak["Tata"]="http://lh6.ggpht.com/_Z_CdHVH07U0/S6Td45wqb2I/AAAAAAAAAec/bbo5AF00Q6I/103.gif";
	vinayak["Time Out"]="http://lh6.ggpht.com/_Z_CdHVH07U0/S6Td5QmwnzI/AAAAAAAAAeg/BczV1OT9mts/104.gif";
	vinayak["Day Dreaming"]="http://lh4.ggpht.com/_Z_CdHVH07U0/S6Td5l0tg6I/AAAAAAAAAek/8HB7ps8gnow/105.gif";
	vinayak["Ya So?"]="http://lh5.ggpht.com/_Z_CdHVH07U0/S6TeBPrs8OI/AAAAAAAAAeo/tgV7YhSFpy0/106.gif";
	vinayak["Stip It"]="http://lh5.ggpht.com/_Z_CdHVH07U0/S6TeBR1jmBI/AAAAAAAAAes/ljCnFDxSGg8/107.gif";
	vinayak["Doggy"]="http://lh4.ggpht.com/_Z_CdHVH07U0/S6TeBbieaCI/AAAAAAAAAew/JY4G3qo74t0/108.gif";
	vinayak["Gross"]="http://lh6.ggpht.com/_Z_CdHVH07U0/S6TeBwwWhvI/AAAAAAAAAe0/PNliTWTALWY/109.gif";
	vinayak["Your Late"]="http://lh3.ggpht.com/_Z_CdHVH07U0/S6TeB1TTCeI/AAAAAAAAAe4/3UDIuUZDljQ/110.gif";
	vinayak["Rock On"]="http://lh4.ggpht.com/_Z_CdHVH07U0/S6TeI8a0B2I/AAAAAAAAAe8/thZ6YrCU9p8/111.gif";
	vinayak["You Suck"]="http://lh5.ggpht.com/_Z_CdHVH07U0/S6TeIzQV2eI/AAAAAAAAAfA/B4TNqnVlPsI/112.gif";
	vinayak["Congo"]="http://lh4.ggpht.com/_Z_CdHVH07U0/S6TeJJ9X6wI/AAAAAAAAAfE/qmUUPMRSsSU/113.gif";
	vinayak["Not Mee"]="http://lh6.ggpht.com/_Z_CdHVH07U0/S6TeJCp5wcI/AAAAAAAAAfI/n1J_BZSw6Cc/114.gif";
	vinayak["Buzz"]="http://lh4.ggpht.com/_Z_CdHVH07U0/S6TeJdwiOOI/AAAAAAAAAfM/hebAJtKseCU/115.gif";
	vinayak["I Cool"]="http://static1.orkut.com/img/i_cool.gif";
	vinayak["I Sad"]="http://static4.orkut.com/img/i_sad.gif";
	vinayak["I Angry"]="http://static2.orkut.com/img/i_angry.gif";
	vinayak["I Smile"]="http://static1.orkut.com/img/i_smile.gif";
	vinayak["I Wink"]="http://static3.orkut.com/img/i_wink.gif";
	vinayak["I BigSmile"]="http://static4.orkut.com/img/i_bigsmile.gif";
	vinayak["I Surprise"]="http://static1.orkut.com/img/i_surprise.gif";
	vinayak["I Funny"]="http://static3.orkut.com/img/i_funny.gif";
	vinayak["I Confuse"]="http://static3.orkut.com/img/i_confuse.gif";



	var oug = document.getElementsByTagName('textarea');
	for(i=0;i<oug.length;i++){
		text=oug[i];
		if (!text) return;
		c=text.parentNode;
		d=document.createElement("div");
		d.className="T";
		d.style.fontSize="11px";
		d.align="left";
		
	        
	    d.style.marginTop="10px";
		c.appendChild(d);
		
		for(title in vinayak){
			mm=document.createElement("a");
			mm.href="javascript:;";
			mm.setAttribute("gult",i);
			mm.innerHTML="<img src='"+vinayak[title]+"' title='"+title+"'>";
			mm.addEventListener("click", prabhu, true);
			d.appendChild(mm);
		}
	}	
}
dip();
}, false);