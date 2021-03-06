// Generated by CoffeeScript 1.3.3
/*
// ==UserScript==
// @name        pix18plus
// @namespace   http://www.atomer.sakura.ne.jp
// @description pixivの検索ワードに「R-18」を付加して再検索
// @include     http://www.pixiv.net/*
// @version     0.1
// ==/UserScript==
*/

(function() {
  var KEYWORD, box, btn, form, input;
  KEYWORD = " R-18";
  input = document.querySelector("#suggest-input");
  form = (function() {
    form = input;
    while (true) {
      form = form.parentNode;
      if (!form || form.tagName === "FORM") {
        break;
      }
    }
    return form;
  })();
  if (!input || !form)) {
    return;
  }
  box = document.createElement("div");
  btn = document.createElement("a");
  box.style.position = "absolute";
  box.style.top = "0.5em";
  box.style.right = "-3.3em";
  btn.href = "#";
  btn.innerHTML = "+R-18";
  btn.addEventListener("click", function(e) {
    e.preventDefault();
    input.value += KEYWORD;
    form.submit();
  }, false);
  box.appendChild(btn);
  input.parentNode.appendChild(box);
})();
