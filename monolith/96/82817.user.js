// ==UserScript==
// @name           Google News: Remove Fast Flip
// @namespace      googleNewsRemoveFastFlip
// @description    Remove fast flip from Google News
// @include        *news.google.com*
// @include        http://www.google.com/news*
// @author         Manish Vij, based on code by camdo2
// @version			   1.0
// @license			   GPL; http://www.gnu.org/copyleft/gpl.html
// @datecreated		 2010-08-02
// @lastupdated		 2010-08-02
// ==/UserScript==

removeContent(':FAST_FLIP_HOMEPAGE_h');
removeClass('gadget-iframe-contents');

function removeContent(id) {

  var node = document.getElementById(id);

  if (node) {
	  node.parentNode.removeChild(node);
	  node = null;
  }
}

function removeClass(cls) {
  
  var cool = document.getElementsByClassName(cls);
 
  if (cool.length > 0) {
    for(var d = 0; d < cool.length; d++) {
      cool[d].parentNode.removeChild(cool[d]);
      cool[d] = null;
    }
  }
}

document.getElementsByClassName = function(clsName){
    var retVal = new Array();
    var elements = document.getElementsByTagName("*");
    for(var i = 0;i < elements.length;i++){
        if(elements[i].className.indexOf(" ") >= 0){
            var classes = elements[i].className.split(" ");
            for(var j = 0;j < classes.length;j++){
                if(classes[j] == clsName)
                    retVal.push(elements[i]);
            }
        }
        else if(elements[i].className == clsName)
            retVal.push(elements[i]);
    }
    return retVal;
}