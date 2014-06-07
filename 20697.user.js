// ==UserScript==
// @name           FeedBurner NoQuestions
// @namespace      http://all4wm.net/
// @description    Убирает вопросики %) Какие-то проблемы? Жду тебя на http://blog.all4wm.net/
// @include        http://feedburner.com/fb/*
// @include        http://www.feedburner.com/fb/*
// @include        https://feedburner.com/fb/*
// @include        https://www.feedburner.com/fb/*
// ==/UserScript==

//Какие-то проблемы? Жду тебя на http://blog.all4wm.net/

Feeds = new Array();

//Имена твоих фидов. Новые фиды нужно добавлять вручную, по аналогии с существующими. Существующие можно удалить.
//Если одно имя полностью содержит в себе другое, то его нужно добавить первее.
//Например, "Комментарии для Всё для вебмастера" должны быть раньше, чем "Всё для вебмастера"
Feeds.push("Комментарии для Всё для вебмастера");
Feeds.push("Комментарии для Конкурсы для вебмастера");
Feeds.push("Всё для вебмастера");
Feeds.push("Конкурсы для вебмастера");

//Дальше редактировать не нужно.

//Проходим по всем именам фидов
for (i = 0; i < Feeds.length; i++)
{
   //Формируем маску текущего имени. Имя, в котором все русские буквы заменены вопросиками.
   //Вопросики экранируем обратными слэшами, чтобы потом использовать эту маску как шаблон регулярного выражения.
   var Mask = Feeds[i].replace(/[а-яё]/gi, "\\?");
   
   //В коде вокруг имени фида могут быть пробелы, кавычки или символы больше/меньше. Если другой символ, то заменяться строка не будет.
   Mask = "([ >\"])" + Mask + "([ <\"])";
   
   //Делаем из нашей маски шаблон для регулярного выражения. Пусть заменяются все совпадения
   var Pattern = new RegExp(Mask, "g");
   
   //Заменяем в коде страницы все строки из вопросиков, совпадающие с маской, на имя фида.
   document.body.innerHTML = document.body.innerHTML.replace(Pattern, "$1" + Feeds[i] + "$2");
}