// ==UserScript==
// @name           Board Overclockzone post email every 10 minute
// @include        http://www.overclockzone.com/forums/showthread.php/*
// @include        http://www.overclockzone.com/forums/showthread.php/*
// ==/UserScript==

// comment text box
var textarea_ch = document.getElementById('vB_Editor_QR_textarea');

// function for post comment on Forum
function postComment() {


// define message that random 10 styles for post on forum
var myArray = new Array();
myArray[0] = "ดันๆครับ  Charka design";
myArray[1] = "Charka design";
myArray[2] = "www.facebook.com/charkadesign";
myArray[3] = "++  Charka design";
myArray[4] = "Charka design T-shirt สวยๆ ลายโดนๆ";
myArray[5] = "สนใจเสื้อ charka design ติดต่อได้ครับ";
myArray[6] = "Charka design ขายส่ง - ปลีก";
myArray[7] = "สนใจติดต่อได้ทาง Charkadesign@gmail.com";
myArray[8] = "ลายเสื้อ Charka design สามารถดูเพิ่มเติมได้ที่เว็บไซต์หลักครับ";
myArray[9] = "contact us on e-mail: charkadesign.com หรือทาง facebook.com/charkadesign";
myArray[10] = "contact us on e-mail: charkadesign.com หรือทาง facebook.com/charkadesign";

// set textbox message 
textarea_ch.value = myArray[Math.floor(Math.random()*11)];
document.getElementById('qr_submit').click();                  // click post comment

}

// function for login to website
function loginForm(){
var username_ch = document.getElementById('navbar_username');
var pass_ch = document.getElementById('navbar_password_hint');
username_ch.value = 'charka';      // username
pass_ch.value = 'someone';         // password
document.getElementById('navbar_loginform').submit();       // submit form
}

// check if login or not by check textarea
setTimeout(function() {
   if(textarea_ch == null) {
      loginForm();
      postComment();
   } else {
      postComment();
   }
} , 1000);