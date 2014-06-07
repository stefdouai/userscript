// USO, meet Markdown. One day Userscripts.org used plain HTML for writing comments and guides,
// little did he know about a young lass that called herself Markdown.
// Userscripts.org fell madly in love.

// ==UserScript==  
// @name           USO, meet Markdown.  
// @namespace      http://userscripts.org/users/tim  
// @description    Markdown gets married to Userscript.org  
// @include        http://userscripts.org/topics/*  
// @require        http://userscripts.org/scripts/source/70908.user.js  
// @require        http://userscripts.org/scripts/source/104570.user.js  
// ==/UserScript==

// Some ideas in this script originated from SizzleMcTwizzle's comment fix script: 
// http://userscripts.org/scripts/show/24464
//
// Kudos to him!

// The MIT License
// Copyright (c) 2011 Tim Smart and friends.
// 
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files
// (the "Software"), to deal in the Software without restriction,
// including without limitation the rights to use, copy, modify, merge,
// publish, distribute, sublicense, and/or sell copies of the Software, and
// to permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
// 
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
// IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
// CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
// TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
// SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// Generated by CoffeeScript 1.6.3
var Editor, Guide, Page, Post, htmlToMarkdown, markdownToHtml, page, showdown;

Post = (function() {
  function Post(page, element) {
    this.page = page;
    this.element = element;
    if ('TR' === this.element.nodeName) {
      this.initFromTopic();
    } else if ('DIV' === this.element.nodeName) {
      this.initFromGuide();
    }
  }

  Post.prototype.element = null;

  Post.prototype.initFromTopic = function() {
    var authorCont, linkCont, nameLink, useragent,
      _this = this;
    authorCont = this.element.getElementsByClassName('author')[0];
    nameLink = authorCont.getElementsByClassName('fn')[0].getElementsByTagName('a')[0];
    useragent = authorCont.getElementsByClassName('useragent')[0];
    linkCont = authorCont.getElementsByTagName('p')[0];
    if (!linkCont || useragent !== linkCont.nextElementSibling) {
      linkCont = document.createElement('p');
      authorCont.insertBefore(linkCont, useragent);
    }
    this.id = /\d+$/.exec(this.element.id)[0];
    this.userId = nameLink.getAttribute('user_id');
    this.userName = nameLink.textContent;
    this.userHref = nameLink.href;
    this.body = this.element.getElementsByClassName('body')[0].innerHTML;
    this.belongsToUser = authorCont.getElementsByClassName('edit')[0] ? true : false;
    return this.insertUtility('Quote', linkCont, function() {
      return _this.quote();
    });
  };

  Post.prototype.insertUtility = function(name, cont, callback) {
    var link, span;
    if ('function' === typeof cont) {
      callback = cont;
      cont = null;
    }
    span = document.createElement('span');
    span.style.display = 'block';
    span.className = 'edit';
    link = document.createElement('a');
    link.style.fontSize = '12px';
    link.textContent = name;
    link.href = '#';
    link.className = 'utility';
    link.addEventListener('click', function(event) {
      event.preventDefault();
      return callback(event);
    }, false);
    span.appendChild(link);
    if (!cont) {
      return this.element.getElementsByClassName('author')[0].getElementsByTagName('p')[0].appendChild(span);
    } else {
      return cont.appendChild(span);
    }
  };

  Post.prototype.quote = function() {
    var element, fragment, holder, html, properSelection, range, selection;
    selection = window.getSelection();
    html = '';
    if ('' === selection.toString()) {
      html = this.body;
    } else {
      range = selection.getRangeAt(0);
      element = range.commonAncestorContainer;
      while (element) {
        if ('TD' === element.nodeName && 0 === element.id.indexOf('post-body-')) {
          if ('post-body-' + this.id === element.id) {
            properSelection = true;
          }
          break;
        }
        element = element.parentNode;
      }
      if (properSelection) {
        fragment = range.cloneContents();
        holder = document.createElement('div');
        holder.appendChild(fragment);
        html = holder.innerHTML;
        range.detach();
        holder = range = fragment = null;
      } else {
        html = this.body;
      }
    }
    return page.editor.insertQuote(html, this.userName, this.userId, this.id);
  };

  return Post;

})();

Guide = (function() {
  function Guide(page, element) {
    this.page = page;
  }

  return Guide;

})();

Editor = (function() {
  function Editor(page, element) {
    this.page = page;
    this.element = element;
    if ('DIV' === element.nodeName) {
      this.initFromReply();
    }
  }

  Editor.prototype.element = null;

  Editor.prototype.initFromReply = function() {
    var oldReplyInit, oldSetReplyId, textarea,
      _this = this;
    oldSetReplyId = unsafeWindow.EditForm.setReplyId;
    unsafeWindow.EditForm.setReplyId = function() {
      var textarea;
      oldSetReplyId.apply(unsafeWindow.EditForm, arguments);
      _this.element = document.getElementById('edit');
      _this.textarea = document.getElementById('edit_post_body');
      textarea = _this.textarea;
      return _this.addShortcuts(_this.textarea);
    };
    textarea = document.getElementById('post_body');
    this.addShortcuts(textarea);
    oldReplyInit = unsafeWindow.ReplyForm.init;
    unsafeWindow.ReplyForm.init = function() {
      oldReplyInit.call(unsafeWindow.ReplyForm);
      _this.element = document.getElementById('reply');
      return _this.textarea = document.getElementById('post_body');
    };
    return this.element = null;
  };

  Editor.prototype.insertQuote = function(html, username, userId, postId) {
    var modify, previous;
    if (this.ensureElement()) {
      previous = markdownToHtml(this.textarea.value);
      modify = function(html) {
        return previous + html;
      };
    }
    html = html.replace(/<!--.+-->/, '').trim();
    html = ("<blockquote><p><strong><a href='/users/" + userId + "'>" + username + "</a></strong>") + ("&nbsp;<a href='" + (location.pathname + location.search) + "#posts-" + postId + "'>wrote</a>:</p>" + html + "</blockquote>");
    if (modify) {
      html = modify(html);
    }
    this.textarea.value = htmlToMarkdown(html);
    return this;
  };

  Editor.prototype.insertAtCaret = function(text) {
    var end, start;
    start = this.textarea.selectionStart;
    end = this.textarea.selectionEnd;
    if ('number' !== typeof start || 'number' !== typeof end) {
      start = end = this.textarea.value.length;
    }
    this.insertText(text, start, end);
    return this;
  };

  Editor.prototype.insertText = function(text, start, end) {
    var pos, val;
    end || (end = start);
    pos = this.textarea.selectionStart;
    val = this.textarea.value;
    val = val.slice(0, start) + text + val.slice(end);
    this.textarea.value = val;
    if ('number' === typeof pos) {
      this.textarea.selectionStart = this.textarea.selectionEnd = pos + text.length;
    }
    return this;
  };

  Editor.prototype.ensureElement = function() {
    if (!this.element) {
      this.openReply();
      return false;
    } else if ('none' === this.element.style.display) {
      this.openReply();
      return false;
    } else {
      return true;
    }
  };

  Editor.prototype.openReply = function() {
    return unsafeWindow.ReplyForm.init();
  };

  Editor.prototype.addShortcuts = function(textarea) {
    var editor;
    editor = this;
    return textarea.addEventListener('keydown', function(event) {
      switch (event.keyCode) {
        case 9:
          event.preventDefault();
          return editor.insertAtCaret('  ');
        case 13:
          event.preventDefault();
          return editor.newline();
      }
    }, false);
  };

  Editor.prototype.newline = function() {
    var indent, last_line, pos;
    pos = this.textarea.selectionStart;
    if (pos < 1) {
      return this.insertAtCaret('\n');
    }
    last_line = (this.textarea.value.slice(0, pos)).lastIndexOf('\n');
    indent = /^(?:\s|>)*/.exec(this.textarea.value.slice(last_line + 1, pos));
    return this.insertAtCaret('\n' + indent);
  };

  return Editor;

})();

Page = (function() {
  function Page() {}

  Page.prototype.init = function() {
    var path;
    path = location.pathname;
    if (0 === path.indexOf('/topics')) {
      return this.initFromTopic();
    }
  };

  Page.prototype.comments = [];

  Page.prototype.editor = null;

  Page.prototype.title = document.title;

  Page.prototype.initFromTopic = function() {
    var post, postElements, _i, _len;
    postElements = document.getElementsByClassName('post');
    this.editor = new Editor(this, document.getElementById('reply'));
    for (_i = 0, _len = postElements.length; _i < _len; _i++) {
      post = postElements[_i];
      this.comments.push(new Post(this, post));
    }
    return this.title = document.getElementById('topic-title').firstChild.textContent.trim().replace(/\s+/g, ' ');
  };

  return Page;

})();

showdown = new Showdown.converter();

htmlToMarkdown = function(html, callback) {
  var div;
  div = document.createElement('div');
  div.innerHTML = html;
  return USO.dom2markdown(div);
};

markdownToHtml = function(markdown) {
  return showdown.makeHtml(markdown);
};

page = new Page();

page.init();