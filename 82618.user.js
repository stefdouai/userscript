// ==UserScript==
// @name           Notenspiegelsortierer + Durschnittsberechner HS-ALBSIG
// @namespace      tag:trwps@email.com,2012-05:Notenspiegelsortierer+DurschnittsberechnerHS-ALBSIG
// @description    Sortiert die QIS-Notentabelle bei Klick auf die Spaltenueberschriften und berechnet die Gesamtdurchschnittsnote aller bestandenen Module 
// @include        https://qis.hs-albsig.de/qisserver/rds*state=notenspiegelStudent&next=list.vm*
// @include        https://qis.hs-albsig.de/qisserver/rds*state=notenspiegelStudentbe&next=list.vm*
// ==/UserScript==
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// version 3 as published by the Free Software Foundation.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You can receive a copy of the GNU General Public License by
// visiting http://www.gnu.org/licenses/gpl-3.0.html

(function()
{
    var summe_ects = 0;
    var summe_noten_gewichtet = 0;
    
    var table = document.getElementsByTagName('table')[5];
    var thead = table.rows[0];

    if (thead.innerHTML.match(/<th.*colspan="10".*>/)) {
        thead.parentNode.removeChild(thead);
        thead.childNodes[0].removeAttribute('colspan');

        var tab = document.createElement('table');
        tab.border = 0;
        tab.appendChild(thead);
        tab.setAttribute('width', '100%');
        table.parentNode.insertBefore(tab, table);
    }

    table.id = 'sorttable';
    table.className = 'sortable';

    // Entferne zuerst alle leere Zeilen aus dem teilweise fehlerhaften HTML (<tr><tr>)
    for (var i = table.rows.length - 1; i >= 0 ; --i) {
        if (table.rows[i].cells[0] == undefined) table.deleteRow(i)
    }

    for (var i = 1; i < table.rows.length; ++i) {
        var tdSemester = table.rows[i].cells[2];
        var sortkey = tdSemester.textContent;
        sortkey = sortkey.replace(/\/.*/, '');
        sortkey = sortkey.replace(/(Wintersemester )(\w*)/, '$2W');
        sortkey = sortkey.replace(/(Sommersemester )(\w*)/, '$2S');
        sortkey = sortkey.replace(/(Wintersem\. )(\w*)/, '$2W');
        sortkey = sortkey.replace(/(Sommersem\. )(\w*)/, '$2S');        
        sortkey = sortkey.replace(/^\s+|\s+$/g, '');
        tdSemester.setAttribute('sorttable_customkey', sortkey);
        
        var tdPruefungsnr = table.rows[i].cells[0].textContent.trim();
        var tdNote = table.rows[i].cells[3].textContent.trim();
        var tdECTS = table.rows[i].cells[5].textContent.trim();
        if (/^[0-9]+[1-9]0{2}$/.test(tdPruefungsnr)) {
            summe_noten_gewichtet += parseCommaFloat(tdNote) * parseCommaFloat(tdECTS);
            summe_ects += parseCommaFloat(tdECTS);
        }
    }

    unsafeWindow.presortSemester = function() {
        var table = document.getElementById('sorttable');
        var cell = table.rows[0].cells[2];
        var evt = document.createEvent('MouseEvents');
        evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        cell.dispatchEvent(evt);
        cell.dispatchEvent(evt);
    }     
   
    var newScript = document.createElement('script');
    newScript.type = 'text/javascript';

    // Sortier-Code von http://www.kryogenix.org/code/browser/sorttable/sorttable.js mittels escape() als lokaler String kodiert, damit kein externer Code geladen werden muss.
    newScript.text = unescape('/*%0A%20%20SortTable%0A%20%20version%202%0A%20%207th%20April%202007%0A%20%20Stuart%20Langridge%2C%20http%3A//www.kryogenix.org/code/browser/sorttable/%0A%20%20%0A%20%20Instructions%3A%0A%20%20Download%20this%20file%0A%20%20Add%20%3Cscript%20src%3D%22sorttable.js%22%3E%3C/script%3E%20to%20your%20HTML%0A%20%20Add%20class%3D%22sortable%22%20to%20any%20table%20you%27d%20like%20to%20make%20sortable%0A%20%20Click%20on%20the%20headers%20to%20sort%0A%20%20%0A%20%20Thanks%20to%20many%2C%20many%20people%20for%20contributions%20and%20suggestions.%0A%20%20Licenced%20as%20X11%3A%20http%3A//www.kryogenix.org/code/browser/licence.html%0A%20%20This%20basically%20means%3A%20do%20what%20you%20want%20with%20it.%0A*/%0A%0A%20%0Avar%20stIsIE%20%3D%20/*@cc_on%21@*/false%3B%0A%0Asorttable%20%3D%20%7B%0A%20%20init%3A%20function%28%29%20%7B%0A%20%20%20%20//%20quit%20if%20this%20function%20has%20already%20been%20called%0A%20%20%20%20if%20%28arguments.callee.done%29%20return%3B%0A%20%20%20%20//%20flag%20this%20function%20so%20we%20don%27t%20do%20the%20same%20thing%20twice%0A%20%20%20%20arguments.callee.done%20%3D%20true%3B%0A%20%20%20%20//%20kill%20the%20timer%0A%20%20%20%20if%20%28_timer%29%20clearInterval%28_timer%29%3B%0A%20%20%20%20%0A%20%20%20%20if%20%28%21document.createElement%20%7C%7C%20%21document.getElementsByTagName%29%20return%3B%0A%20%20%20%20%0A%20%20%20%20sorttable.DATE_RE%20%3D%20/%5E%28%5Cd%5Cd%3F%29%5B%5C/%5C.-%5D%28%5Cd%5Cd%3F%29%5B%5C/%5C.-%5D%28%28%5Cd%5Cd%29%3F%5Cd%5Cd%29%24/%3B%0A%20%20%20%20%0A%20%20%20%20forEach%28document.getElementsByTagName%28%27table%27%29%2C%20function%28table%29%20%7B%0A%20%20%20%20%20%20if%20%28table.className.search%28/%5Cbsortable%5Cb/%29%20%21%3D%20-1%29%20%7B%0A%20%20%20%20%20%20%20%20sorttable.makeSortable%28table%29%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%29%3B%0A%20%20%20%20%0A%20%20%7D%2C%0A%20%20%0A%20%20makeSortable%3A%20function%28table%29%20%7B%0A%20%20%20%20if%20%28table.getElementsByTagName%28%27thead%27%29.length%20%3D%3D%200%29%20%7B%0A%20%20%20%20%20%20//%20table%20doesn%27t%20have%20a%20tHead.%20Since%20it%20should%20have%2C%20create%20one%20and%0A%20%20%20%20%20%20//%20put%20the%20first%20table%20row%20in%20it.%0A%20%20%20%20%20%20the%20%3D%20document.createElement%28%27thead%27%29%3B%0A%20%20%20%20%20%20the.appendChild%28table.rows%5B0%5D%29%3B%0A%20%20%20%20%20%20table.insertBefore%28the%2Ctable.firstChild%29%3B%0A%20%20%20%20%7D%0A%20%20%20%20//%20Safari%20doesn%27t%20support%20table.tHead%2C%20sigh%0A%20%20%20%20if%20%28table.tHead%20%3D%3D%20null%29%20table.tHead%20%3D%20table.getElementsByTagName%28%27thead%27%29%5B0%5D%3B%0A%20%20%20%20%0A%20%20%20%20if%20%28table.tHead.rows.length%20%21%3D%201%29%20return%3B%20//%20can%27t%20cope%20with%20two%20header%20rows%0A%20%20%20%20%0A%20%20%20%20//%20Sorttable%20v1%20put%20rows%20with%20a%20class%20of%20%22sortbottom%22%20at%20the%20bottom%20%28as%0A%20%20%20%20//%20%22total%22%20rows%2C%20for%20example%29.%20This%20is%20B%26R%2C%20since%20what%20you%27re%20supposed%0A%20%20%20%20//%20to%20do%20is%20put%20them%20in%20a%20tfoot.%20So%2C%20if%20there%20are%20sortbottom%20rows%2C%0A%20%20%20%20//%20for%20backwards%20compatibility%2C%20move%20them%20to%20tfoot%20%28creating%20it%20if%20needed%29.%0A%20%20%20%20sortbottomrows%20%3D%20%5B%5D%3B%0A%20%20%20%20for%20%28var%20i%3D0%3B%20i%3Ctable.rows.length%3B%20i++%29%20%7B%0A%20%20%20%20%20%20if%20%28table.rows%5Bi%5D.className.search%28/%5Cbsortbottom%5Cb/%29%20%21%3D%20-1%29%20%7B%0A%20%20%20%20%20%20%20%20sortbottomrows%5Bsortbottomrows.length%5D%20%3D%20table.rows%5Bi%5D%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20if%20%28sortbottomrows%29%20%7B%0A%20%20%20%20%20%20if%20%28table.tFoot%20%3D%3D%20null%29%20%7B%0A%20%20%20%20%20%20%20%20//%20table%20doesn%27t%20have%20a%20tfoot.%20Create%20one.%0A%20%20%20%20%20%20%20%20tfo%20%3D%20document.createElement%28%27tfoot%27%29%3B%0A%20%20%20%20%20%20%20%20table.appendChild%28tfo%29%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20for%20%28var%20i%3D0%3B%20i%3Csortbottomrows.length%3B%20i++%29%20%7B%0A%20%20%20%20%20%20%20%20tfo.appendChild%28sortbottomrows%5Bi%5D%29%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20delete%20sortbottomrows%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20//%20work%20through%20each%20column%20and%20calculate%20its%20type%0A%20%20%20%20headrow%20%3D%20table.tHead.rows%5B0%5D.cells%3B%0A%20%20%20%20for%20%28var%20i%3D0%3B%20i%3Cheadrow.length%3B%20i++%29%20%7B%0A%20%20%20%20%20%20//%20manually%20override%20the%20type%20with%20a%20sorttable_type%20attribute%0A%20%20%20%20%20%20if%20%28%21headrow%5Bi%5D.className.match%28/%5Cbsorttable_nosort%5Cb/%29%29%20%7B%20//%20skip%20this%20col%0A%20%20%20%20%20%20%20%20mtch%20%3D%20headrow%5Bi%5D.className.match%28/%5Cbsorttable_%28%5Ba-z0-9%5D+%29%5Cb/%29%3B%0A%20%20%20%20%20%20%20%20if%20%28mtch%29%20%7B%20override%20%3D%20mtch%5B1%5D%3B%20%7D%0A%09%20%20%20%20%20%20if%20%28mtch%20%26%26%20typeof%20sorttable%5B%22sort_%22+override%5D%20%3D%3D%20%27function%27%29%20%7B%0A%09%20%20%20%20%20%20%20%20headrow%5Bi%5D.sorttable_sortfunction%20%3D%20sorttable%5B%22sort_%22+override%5D%3B%0A%09%20%20%20%20%20%20%7D%20else%20%7B%0A%09%20%20%20%20%20%20%20%20headrow%5Bi%5D.sorttable_sortfunction%20%3D%20sorttable.guessType%28table%2Ci%29%3B%0A%09%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20//%20make%20it%20clickable%20to%20sort%0A%09%20%20%20%20%20%20headrow%5Bi%5D.sorttable_columnindex%20%3D%20i%3B%0A%09%20%20%20%20%20%20headrow%5Bi%5D.sorttable_tbody%20%3D%20table.tBodies%5B0%5D%3B%0A%09%20%20%20%20%20%20dean_addEvent%28headrow%5Bi%5D%2C%22click%22%2C%20function%28e%29%20%7B%0A%0A%20%20%20%20%20%20%20%20%20%20if%20%28this.className.search%28/%5Cbsorttable_sorted%5Cb/%29%20%21%3D%20-1%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20if%20we%27re%20already%20sorted%20by%20this%20column%2C%20just%20%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20reverse%20the%20table%2C%20which%20is%20quicker%0A%20%20%20%20%20%20%20%20%20%20%20%20sorttable.reverse%28this.sorttable_tbody%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20this.className%20%3D%20this.className.replace%28%27sorttable_sorted%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%27sorttable_sorted_reverse%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20this.removeChild%28document.getElementById%28%27sorttable_sortfwdind%27%29%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20sortrevind%20%3D%20document.createElement%28%27span%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20sortrevind.id%20%3D%20%22sorttable_sortrevind%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20sortrevind.innerHTML%20%3D%20stIsIE%20%3F%20%27%26nbsp%3Cfont%20face%3D%22webdings%22%3E5%3C/font%3E%27%20%3A%20%27%26nbsp%3B%26%23x25B4%3B%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20this.appendChild%28sortrevind%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20if%20%28this.className.search%28/%5Cbsorttable_sorted_reverse%5Cb/%29%20%21%3D%20-1%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20if%20we%27re%20already%20sorted%20by%20this%20column%20in%20reverse%2C%20just%20%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20re-reverse%20the%20table%2C%20which%20is%20quicker%0A%20%20%20%20%20%20%20%20%20%20%20%20sorttable.reverse%28this.sorttable_tbody%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20this.className%20%3D%20this.className.replace%28%27sorttable_sorted_reverse%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%27sorttable_sorted%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20this.removeChild%28document.getElementById%28%27sorttable_sortrevind%27%29%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20sortfwdind%20%3D%20document.createElement%28%27span%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20sortfwdind.id%20%3D%20%22sorttable_sortfwdind%22%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20sortfwdind.innerHTML%20%3D%20stIsIE%20%3F%20%27%26nbsp%3Cfont%20face%3D%22webdings%22%3E6%3C/font%3E%27%20%3A%20%27%26nbsp%3B%26%23x25BE%3B%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20this.appendChild%28sortfwdind%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20//%20remove%20sorttable_sorted%20classes%0A%20%20%20%20%20%20%20%20%20%20theadrow%20%3D%20this.parentNode%3B%0A%20%20%20%20%20%20%20%20%20%20forEach%28theadrow.childNodes%2C%20function%28cell%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28cell.nodeType%20%3D%3D%201%29%20%7B%20//%20an%20element%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20cell.className%20%3D%20cell.className.replace%28%27sorttable_sorted_reverse%27%2C%27%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20cell.className%20%3D%20cell.className.replace%28%27sorttable_sorted%27%2C%27%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%29%3B%0A%20%20%20%20%20%20%20%20%20%20sortfwdind%20%3D%20document.getElementById%28%27sorttable_sortfwdind%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20if%20%28sortfwdind%29%20%7B%20sortfwdind.parentNode.removeChild%28sortfwdind%29%3B%20%7D%0A%20%20%20%20%20%20%20%20%20%20sortrevind%20%3D%20document.getElementById%28%27sorttable_sortrevind%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20if%20%28sortrevind%29%20%7B%20sortrevind.parentNode.removeChild%28sortrevind%29%3B%20%7D%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20this.className%20+%3D%20%27%20sorttable_sorted%27%3B%0A%20%20%20%20%20%20%20%20%20%20sortfwdind%20%3D%20document.createElement%28%27span%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20sortfwdind.id%20%3D%20%22sorttable_sortfwdind%22%3B%0A%20%20%20%20%20%20%20%20%20%20sortfwdind.innerHTML%20%3D%20stIsIE%20%3F%20%27%26nbsp%3Cfont%20face%3D%22webdings%22%3E6%3C/font%3E%27%20%3A%20%27%26nbsp%3B%26%23x25BE%3B%27%3B%0A%20%20%20%20%20%20%20%20%20%20this.appendChild%28sortfwdind%29%3B%0A%0A%09%20%20%20%20%20%20%20%20//%20build%20an%20array%20to%20sort.%20This%20is%20a%20Schwartzian%20transform%20thing%2C%0A%09%20%20%20%20%20%20%20%20//%20i.e.%2C%20we%20%22decorate%22%20each%20row%20with%20the%20actual%20sort%20key%2C%0A%09%20%20%20%20%20%20%20%20//%20sort%20based%20on%20the%20sort%20keys%2C%20and%20then%20put%20the%20rows%20back%20in%20order%0A%09%20%20%20%20%20%20%20%20//%20which%20is%20a%20lot%20faster%20because%20you%20only%20do%20getInnerText%20once%20per%20row%0A%09%20%20%20%20%20%20%20%20row_array%20%3D%20%5B%5D%3B%0A%09%20%20%20%20%20%20%20%20col%20%3D%20this.sorttable_columnindex%3B%0A%09%20%20%20%20%20%20%20%20rows%20%3D%20this.sorttable_tbody.rows%3B%0A%09%20%20%20%20%20%20%20%20for%20%28var%20j%3D0%3B%20j%3Crows.length%3B%20j++%29%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20row_array%5Brow_array.length%5D%20%3D%20%5Bsorttable.getInnerText%28rows%5Bj%5D.cells%5Bcol%5D%29%2C%20rows%5Bj%5D%5D%3B%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20/*%20If%20you%20want%20a%20stable%20sort%2C%20uncomment%20the%20following%20line%20*/%0A%09%20%20%20%20%20%20%20%20//sorttable.shaker_sort%28row_array%2C%20this.sorttable_sortfunction%29%3B%0A%09%20%20%20%20%20%20%20%20/*%20and%20comment%20out%20this%20one%20*/%0A%09%20%20%20%20%20%20%20%20row_array.sort%28this.sorttable_sortfunction%29%3B%0A%09%20%20%20%20%20%20%20%20%0A%09%20%20%20%20%20%20%20%20tb%20%3D%20this.sorttable_tbody%3B%0A%09%20%20%20%20%20%20%20%20for%20%28var%20j%3D0%3B%20j%3Crow_array.length%3B%20j++%29%20%7B%0A%09%20%20%20%20%20%20%20%20%20%20tb.appendChild%28row_array%5Bj%5D%5B1%5D%29%3B%0A%09%20%20%20%20%20%20%20%20%7D%0A%09%20%20%20%20%20%20%20%20%0A%09%20%20%20%20%20%20%20%20delete%20row_array%3B%0A%09%20%20%20%20%20%20%7D%29%3B%0A%09%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20%0A%20%20guessType%3A%20function%28table%2C%20column%29%20%7B%0A%20%20%20%20//%20guess%20the%20type%20of%20a%20column%20based%20on%20its%20first%20non-blank%20row%0A%20%20%20%20sortfn%20%3D%20sorttable.sort_alpha%3B%0A%20%20%20%20for%20%28var%20i%3D0%3B%20i%3Ctable.tBodies%5B0%5D.rows.length%3B%20i++%29%20%7B%0A%20%20%20%20%20%20text%20%3D%20sorttable.getInnerText%28table.tBodies%5B0%5D.rows%5Bi%5D.cells%5Bcolumn%5D%29%3B%0A%20%20%20%20%20%20if%20%28text%20%21%3D%20%27%27%29%20%7B%0A%20%20%20%20%20%20%20%20if%20%28text.match%28/%5E-%3F%5B%A3%24%A4%5D%3F%5B%5Cd%2C.%5D+%25%3F%24/%29%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20return%20sorttable.sort_numeric%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20//%20check%20for%20a%20date%3A%20dd/mm/yyyy%20or%20dd/mm/yy%20%0A%20%20%20%20%20%20%20%20//%20can%20have%20/%20or%20.%20or%20-%20as%20separator%0A%20%20%20%20%20%20%20%20//%20can%20be%20mm/dd%20as%20well%0A%20%20%20%20%20%20%20%20possdate%20%3D%20text.match%28sorttable.DATE_RE%29%0A%20%20%20%20%20%20%20%20if%20%28possdate%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20//%20looks%20like%20a%20date%0A%20%20%20%20%20%20%20%20%20%20first%20%3D%20parseInt%28possdate%5B1%5D%29%3B%0A%20%20%20%20%20%20%20%20%20%20second%20%3D%20parseInt%28possdate%5B2%5D%29%3B%0A%20%20%20%20%20%20%20%20%20%20if%20%28first%20%3E%2012%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20definitely%20dd/mm%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20sorttable.sort_ddmm%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%20else%20if%20%28second%20%3E%2012%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20sorttable.sort_mmdd%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20looks%20like%20a%20date%2C%20but%20we%20can%27t%20tell%20which%2C%20so%20assume%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20that%20it%27s%20dd/mm%20%28English%20imperialism%21%29%20and%20keep%20looking%0A%20%20%20%20%20%20%20%20%20%20%20%20sortfn%20%3D%20sorttable.sort_ddmm%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20return%20sortfn%3B%0A%20%20%7D%2C%0A%20%20%0A%20%20getInnerText%3A%20function%28node%29%20%7B%0A%20%20%20%20//%20gets%20the%20text%20we%20want%20to%20use%20for%20sorting%20for%20a%20cell.%0A%20%20%20%20//%20strips%20leading%20and%20trailing%20whitespace.%0A%20%20%20%20//%20this%20is%20*not*%20a%20generic%20getInnerText%20function%3B%20it%27s%20special%20to%20sorttable.%0A%20%20%20%20//%20for%20example%2C%20you%20can%20override%20the%20cell%20text%20with%20a%20customkey%20attribute.%0A%20%20%20%20//%20it%20also%20gets%20.value%20for%20%3Cinput%3E%20fields.%0A%20%20%20%20%0A%20%20%20%20hasInputs%20%3D%20%28typeof%20node.getElementsByTagName%20%3D%3D%20%27function%27%29%20%26%26%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20node.getElementsByTagName%28%27input%27%29.length%3B%0A%20%20%20%20%0A%20%20%20%20if%20%28node.getAttribute%28%22sorttable_customkey%22%29%20%21%3D%20null%29%20%7B%0A%20%20%20%20%20%20return%20node.getAttribute%28%22sorttable_customkey%22%29%3B%0A%20%20%20%20%7D%0A%20%20%20%20else%20if%20%28typeof%20node.textContent%20%21%3D%20%27undefined%27%20%26%26%20%21hasInputs%29%20%7B%0A%20%20%20%20%20%20return%20node.textContent.replace%28/%5E%5Cs+%7C%5Cs+%24/g%2C%20%27%27%29%3B%0A%20%20%20%20%7D%0A%20%20%20%20else%20if%20%28typeof%20node.innerText%20%21%3D%20%27undefined%27%20%26%26%20%21hasInputs%29%20%7B%0A%20%20%20%20%20%20return%20node.innerText.replace%28/%5E%5Cs+%7C%5Cs+%24/g%2C%20%27%27%29%3B%0A%20%20%20%20%7D%0A%20%20%20%20else%20if%20%28typeof%20node.text%20%21%3D%20%27undefined%27%20%26%26%20%21hasInputs%29%20%7B%0A%20%20%20%20%20%20return%20node.text.replace%28/%5E%5Cs+%7C%5Cs+%24/g%2C%20%27%27%29%3B%0A%20%20%20%20%7D%0A%20%20%20%20else%20%7B%0A%20%20%20%20%20%20switch%20%28node.nodeType%29%20%7B%0A%20%20%20%20%20%20%20%20case%203%3A%0A%20%20%20%20%20%20%20%20%20%20if%20%28node.nodeName.toLowerCase%28%29%20%3D%3D%20%27input%27%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20node.value.replace%28/%5E%5Cs+%7C%5Cs+%24/g%2C%20%27%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20case%204%3A%0A%20%20%20%20%20%20%20%20%20%20return%20node.nodeValue.replace%28/%5E%5Cs+%7C%5Cs+%24/g%2C%20%27%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20break%3B%0A%20%20%20%20%20%20%20%20case%201%3A%0A%20%20%20%20%20%20%20%20case%2011%3A%0A%20%20%20%20%20%20%20%20%20%20var%20innerText%20%3D%20%27%27%3B%0A%20%20%20%20%20%20%20%20%20%20for%20%28var%20i%20%3D%200%3B%20i%20%3C%20node.childNodes.length%3B%20i++%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20innerText%20+%3D%20sorttable.getInnerText%28node.childNodes%5Bi%5D%29%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20return%20innerText.replace%28/%5E%5Cs+%7C%5Cs+%24/g%2C%20%27%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20break%3B%0A%20%20%20%20%20%20%20%20default%3A%0A%20%20%20%20%20%20%20%20%20%20return%20%27%27%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20%0A%20%20reverse%3A%20function%28tbody%29%20%7B%0A%20%20%20%20//%20reverse%20the%20rows%20in%20a%20tbody%0A%20%20%20%20newrows%20%3D%20%5B%5D%3B%0A%20%20%20%20for%20%28var%20i%3D0%3B%20i%3Ctbody.rows.length%3B%20i++%29%20%7B%0A%20%20%20%20%20%20newrows%5Bnewrows.length%5D%20%3D%20tbody.rows%5Bi%5D%3B%0A%20%20%20%20%7D%0A%20%20%20%20for%20%28var%20i%3Dnewrows.length-1%3B%20i%3E%3D0%3B%20i--%29%20%7B%0A%20%20%20%20%20%20%20tbody.appendChild%28newrows%5Bi%5D%29%3B%0A%20%20%20%20%7D%0A%20%20%20%20delete%20newrows%3B%0A%20%20%7D%2C%0A%20%20%0A%20%20/*%20sort%20functions%0A%20%20%20%20%20each%20sort%20function%20takes%20two%20parameters%2C%20a%20and%20b%0A%20%20%20%20%20you%20are%20comparing%20a%5B0%5D%20and%20b%5B0%5D%20*/%0A%20%20sort_numeric%3A%20function%28a%2Cb%29%20%7B%0A%20%20%20%20aa%20%3D%20parseFloat%28a%5B0%5D.replace%28/%5B%5E0-9.-%5D/g%2C%27%27%29%29%3B%0A%20%20%20%20if%20%28isNaN%28aa%29%29%20aa%20%3D%200%3B%0A%20%20%20%20bb%20%3D%20parseFloat%28b%5B0%5D.replace%28/%5B%5E0-9.-%5D/g%2C%27%27%29%29%3B%20%0A%20%20%20%20if%20%28isNaN%28bb%29%29%20bb%20%3D%200%3B%0A%20%20%20%20return%20aa-bb%3B%0A%20%20%7D%2C%0A%20%20sort_alpha%3A%20function%28a%2Cb%29%20%7B%0A%20%20%20%20if%20%28a%5B0%5D%3D%3Db%5B0%5D%29%20return%200%3B%0A%20%20%20%20if%20%28a%5B0%5D%3Cb%5B0%5D%29%20return%20-1%3B%0A%20%20%20%20return%201%3B%0A%20%20%7D%2C%0A%20%20sort_ddmm%3A%20function%28a%2Cb%29%20%7B%0A%20%20%20%20mtch%20%3D%20a%5B0%5D.match%28sorttable.DATE_RE%29%3B%0A%20%20%20%20y%20%3D%20mtch%5B3%5D%3B%20m%20%3D%20mtch%5B2%5D%3B%20d%20%3D%20mtch%5B1%5D%3B%0A%20%20%20%20if%20%28m.length%20%3D%3D%201%29%20m%20%3D%20%270%27+m%3B%0A%20%20%20%20if%20%28d.length%20%3D%3D%201%29%20d%20%3D%20%270%27+d%3B%0A%20%20%20%20dt1%20%3D%20y+m+d%3B%0A%20%20%20%20mtch%20%3D%20b%5B0%5D.match%28sorttable.DATE_RE%29%3B%0A%20%20%20%20y%20%3D%20mtch%5B3%5D%3B%20m%20%3D%20mtch%5B2%5D%3B%20d%20%3D%20mtch%5B1%5D%3B%0A%20%20%20%20if%20%28m.length%20%3D%3D%201%29%20m%20%3D%20%270%27+m%3B%0A%20%20%20%20if%20%28d.length%20%3D%3D%201%29%20d%20%3D%20%270%27+d%3B%0A%20%20%20%20dt2%20%3D%20y+m+d%3B%0A%20%20%20%20if%20%28dt1%3D%3Ddt2%29%20return%200%3B%0A%20%20%20%20if%20%28dt1%3Cdt2%29%20return%20-1%3B%0A%20%20%20%20return%201%3B%0A%20%20%7D%2C%0A%20%20sort_mmdd%3A%20function%28a%2Cb%29%20%7B%0A%20%20%20%20mtch%20%3D%20a%5B0%5D.match%28sorttable.DATE_RE%29%3B%0A%20%20%20%20y%20%3D%20mtch%5B3%5D%3B%20d%20%3D%20mtch%5B2%5D%3B%20m%20%3D%20mtch%5B1%5D%3B%0A%20%20%20%20if%20%28m.length%20%3D%3D%201%29%20m%20%3D%20%270%27+m%3B%0A%20%20%20%20if%20%28d.length%20%3D%3D%201%29%20d%20%3D%20%270%27+d%3B%0A%20%20%20%20dt1%20%3D%20y+m+d%3B%0A%20%20%20%20mtch%20%3D%20b%5B0%5D.match%28sorttable.DATE_RE%29%3B%0A%20%20%20%20y%20%3D%20mtch%5B3%5D%3B%20d%20%3D%20mtch%5B2%5D%3B%20m%20%3D%20mtch%5B1%5D%3B%0A%20%20%20%20if%20%28m.length%20%3D%3D%201%29%20m%20%3D%20%270%27+m%3B%0A%20%20%20%20if%20%28d.length%20%3D%3D%201%29%20d%20%3D%20%270%27+d%3B%0A%20%20%20%20dt2%20%3D%20y+m+d%3B%0A%20%20%20%20if%20%28dt1%3D%3Ddt2%29%20return%200%3B%0A%20%20%20%20if%20%28dt1%3Cdt2%29%20return%20-1%3B%0A%20%20%20%20return%201%3B%0A%20%20%7D%2C%0A%20%20%0A%20%20shaker_sort%3A%20function%28list%2C%20comp_func%29%20%7B%0A%20%20%20%20//%20A%20stable%20sort%20function%20to%20allow%20multi-level%20sorting%20of%20data%0A%20%20%20%20//%20see%3A%20http%3A//en.wikipedia.org/wiki/Cocktail_sort%0A%20%20%20%20//%20thanks%20to%20Joseph%20Nahmias%0A%20%20%20%20var%20b%20%3D%200%3B%0A%20%20%20%20var%20t%20%3D%20list.length%20-%201%3B%0A%20%20%20%20var%20swap%20%3D%20true%3B%0A%0A%20%20%20%20while%28swap%29%20%7B%0A%20%20%20%20%20%20%20%20swap%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20for%28var%20i%20%3D%20b%3B%20i%20%3C%20t%3B%20++i%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28%20comp_func%28list%5Bi%5D%2C%20list%5Bi+1%5D%29%20%3E%200%20%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20q%20%3D%20list%5Bi%5D%3B%20list%5Bi%5D%20%3D%20list%5Bi+1%5D%3B%20list%5Bi+1%5D%20%3D%20q%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20swap%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%20//%20for%0A%20%20%20%20%20%20%20%20t--%3B%0A%0A%20%20%20%20%20%20%20%20if%20%28%21swap%29%20break%3B%0A%0A%20%20%20%20%20%20%20%20for%28var%20i%20%3D%20t%3B%20i%20%3E%20b%3B%20--i%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28%20comp_func%28list%5Bi%5D%2C%20list%5Bi-1%5D%29%20%3C%200%20%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20q%20%3D%20list%5Bi%5D%3B%20list%5Bi%5D%20%3D%20list%5Bi-1%5D%3B%20list%5Bi-1%5D%20%3D%20q%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20swap%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%20//%20for%0A%20%20%20%20%20%20%20%20b++%3B%0A%0A%20%20%20%20%7D%20//%20while%28swap%29%0A%20%20%7D%20%20%0A%7D%0A%0A/*%20******************************************************************%0A%20%20%20Supporting%20functions%3A%20bundled%20here%20to%20avoid%20depending%20on%20a%20library%0A%20%20%20******************************************************************%20*/%0A%0A//%20Dean%20Edwards/Matthias%20Miller/John%20Resig%0A%0A/*%20for%20Mozilla/Opera9%20*/%0Aif%20%28document.addEventListener%29%20%7B%0A%20%20%20%20document.addEventListener%28%22DOMContentLoaded%22%2C%20sorttable.init%2C%20false%29%3B%0A%7D%0A%0A/*%20for%20Internet%20Explorer%20*/%0A/*@cc_on%20@*/%0A/*@if%20%28@_win32%29%0A%20%20%20%20document.write%28%22%3Cscript%20id%3D__ie_onload%20defer%20src%3Djavascript%3Avoid%280%29%3E%3C%5C/script%3E%22%29%3B%0A%20%20%20%20var%20script%20%3D%20document.getElementById%28%22__ie_onload%22%29%3B%0A%20%20%20%20script.onreadystatechange%20%3D%20function%28%29%20%7B%0A%20%20%20%20%20%20%20%20if%20%28this.readyState%20%3D%3D%20%22complete%22%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20sorttable.init%28%29%3B%20//%20call%20the%20onload%20handler%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A/*@end%20@*/%0A%0A/*%20for%20Safari%20*/%0Aif%20%28/WebKit/i.test%28navigator.userAgent%29%29%20%7B%20//%20sniff%0A%20%20%20%20var%20_timer%20%3D%20setInterval%28function%28%29%20%7B%0A%20%20%20%20%20%20%20%20if%20%28/loaded%7Ccomplete/.test%28document.readyState%29%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20sorttable.init%28%29%3B%20//%20call%20the%20onload%20handler%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%2010%29%3B%0A%7D%0A%0A/*%20for%20other%20browsers%20*/%0Awindow.onload%20%3D%20sorttable.init%3B%0A%0A//%20written%20by%20Dean%20Edwards%2C%202005%0A//%20with%20input%20from%20Tino%20Zijdel%2C%20Matthias%20Miller%2C%20Diego%20Perini%0A%0A//%20http%3A//dean.edwards.name/weblog/2005/10/add-event/%0A%0Afunction%20dean_addEvent%28element%2C%20type%2C%20handler%29%20%7B%0A%09if%20%28element.addEventListener%29%20%7B%0A%09%09element.addEventListener%28type%2C%20handler%2C%20false%29%3B%0A%09%7D%20else%20%7B%0A%09%09//%20assign%20each%20event%20handler%20a%20unique%20ID%0A%09%09if%20%28%21handler.%24%24guid%29%20handler.%24%24guid%20%3D%20dean_addEvent.guid++%3B%0A%09%09//%20create%20a%20hash%20table%20of%20event%20types%20for%20the%20element%0A%09%09if%20%28%21element.events%29%20element.events%20%3D%20%7B%7D%3B%0A%09%09//%20create%20a%20hash%20table%20of%20event%20handlers%20for%20each%20element/event%20pair%0A%09%09var%20handlers%20%3D%20element.events%5Btype%5D%3B%0A%09%09if%20%28%21handlers%29%20%7B%0A%09%09%09handlers%20%3D%20element.events%5Btype%5D%20%3D%20%7B%7D%3B%0A%09%09%09//%20store%20the%20existing%20event%20handler%20%28if%20there%20is%20one%29%0A%09%09%09if%20%28element%5B%22on%22%20+%20type%5D%29%20%7B%0A%09%09%09%09handlers%5B0%5D%20%3D%20element%5B%22on%22%20+%20type%5D%3B%0A%09%09%09%7D%0A%09%09%7D%0A%09%09//%20store%20the%20event%20handler%20in%20the%20hash%20table%0A%09%09handlers%5Bhandler.%24%24guid%5D%20%3D%20handler%3B%0A%09%09//%20assign%20a%20global%20event%20handler%20to%20do%20all%20the%20work%0A%09%09element%5B%22on%22%20+%20type%5D%20%3D%20handleEvent%3B%0A%09%7D%0A%7D%3B%0A//%20a%20counter%20used%20to%20create%20unique%20IDs%0Adean_addEvent.guid%20%3D%201%3B%0A%0Afunction%20removeEvent%28element%2C%20type%2C%20handler%29%20%7B%0A%09if%20%28element.removeEventListener%29%20%7B%0A%09%09element.removeEventListener%28type%2C%20handler%2C%20false%29%3B%0A%09%7D%20else%20%7B%0A%09%09//%20delete%20the%20event%20handler%20from%20the%20hash%20table%0A%09%09if%20%28element.events%20%26%26%20element.events%5Btype%5D%29%20%7B%0A%09%09%09delete%20element.events%5Btype%5D%5Bhandler.%24%24guid%5D%3B%0A%09%09%7D%0A%09%7D%0A%7D%3B%0A%0Afunction%20handleEvent%28event%29%20%7B%0A%09var%20returnValue%20%3D%20true%3B%0A%09//%20grab%20the%20event%20object%20%28IE%20uses%20a%20global%20event%20object%29%0A%09event%20%3D%20event%20%7C%7C%20fixEvent%28%28%28this.ownerDocument%20%7C%7C%20this.document%20%7C%7C%20this%29.parentWindow%20%7C%7C%20window%29.event%29%3B%0A%09//%20get%20a%20reference%20to%20the%20hash%20table%20of%20event%20handlers%0A%09var%20handlers%20%3D%20this.events%5Bevent.type%5D%3B%0A%09//%20execute%20each%20event%20handler%0A%09for%20%28var%20i%20in%20handlers%29%20%7B%0A%09%09this.%24%24handleEvent%20%3D%20handlers%5Bi%5D%3B%0A%09%09if%20%28this.%24%24handleEvent%28event%29%20%3D%3D%3D%20false%29%20%7B%0A%09%09%09returnValue%20%3D%20false%3B%0A%09%09%7D%0A%09%7D%0A%09return%20returnValue%3B%0A%7D%3B%0A%0Afunction%20fixEvent%28event%29%20%7B%0A%09//%20add%20W3C%20standard%20event%20methods%0A%09event.preventDefault%20%3D%20fixEvent.preventDefault%3B%0A%09event.stopPropagation%20%3D%20fixEvent.stopPropagation%3B%0A%09return%20event%3B%0A%7D%3B%0AfixEvent.preventDefault%20%3D%20function%28%29%20%7B%0A%09this.returnValue%20%3D%20false%3B%0A%7D%3B%0AfixEvent.stopPropagation%20%3D%20function%28%29%20%7B%0A%20%20this.cancelBubble%20%3D%20true%3B%0A%7D%0A%0A//%20Dean%27s%20forEach%3A%20http%3A//dean.edwards.name/base/forEach.js%0A/*%0A%09forEach%2C%20version%201.0%0A%09Copyright%202006%2C%20Dean%20Edwards%0A%09License%3A%20http%3A//www.opensource.org/licenses/mit-license.php%0A*/%0A%0A//%20array-like%20enumeration%0Aif%20%28%21Array.forEach%29%20%7B%20//%20mozilla%20already%20supports%20this%0A%09Array.forEach%20%3D%20function%28array%2C%20block%2C%20context%29%20%7B%0A%09%09for%20%28var%20i%20%3D%200%3B%20i%20%3C%20array.length%3B%20i++%29%20%7B%0A%09%09%09block.call%28context%2C%20array%5Bi%5D%2C%20i%2C%20array%29%3B%0A%09%09%7D%0A%09%7D%3B%0A%7D%0A%0A//%20generic%20enumeration%0AFunction.prototype.forEach%20%3D%20function%28object%2C%20block%2C%20context%29%20%7B%0A%09for%20%28var%20key%20in%20object%29%20%7B%0A%09%09if%20%28typeof%20this.prototype%5Bkey%5D%20%3D%3D%20%22undefined%22%29%20%7B%0A%09%09%09block.call%28context%2C%20object%5Bkey%5D%2C%20key%2C%20object%29%3B%0A%09%09%7D%0A%09%7D%0A%7D%3B%0A%0A//%20character%20enumeration%0AString.forEach%20%3D%20function%28string%2C%20block%2C%20context%29%20%7B%0A%09Array.forEach%28string.split%28%22%22%29%2C%20function%28chr%2C%20index%29%20%7B%0A%09%09block.call%28context%2C%20chr%2C%20index%2C%20string%29%3B%0A%09%7D%29%3B%0A%7D%3B%0A%0A//%20globally%20resolve%20forEach%20enumeration%0Avar%20forEach%20%3D%20function%28object%2C%20block%2C%20context%29%20%7B%0A%09if%20%28object%29%20%7B%0A%09%09var%20resolve%20%3D%20Object%3B%20//%20default%0A%09%09if%20%28object%20instanceof%20Function%29%20%7B%0A%09%09%09//%20functions%20have%20a%20%22length%22%20property%0A%09%09%09resolve%20%3D%20Function%3B%0A%09%09%7D%20else%20if%20%28object.forEach%20instanceof%20Function%29%20%7B%0A%09%09%09//%20the%20object%20implements%20a%20custom%20forEach%20method%20so%20use%20that%0A%09%09%09object.forEach%28block%2C%20context%29%3B%0A%09%09%09return%3B%0A%09%09%7D%20else%20if%20%28typeof%20object%20%3D%3D%20%22string%22%29%20%7B%0A%09%09%09//%20the%20object%20is%20a%20string%0A%09%09%09resolve%20%3D%20String%3B%0A%09%09%7D%20else%20if%20%28typeof%20object.length%20%3D%3D%20%22number%22%29%20%7B%0A%09%09%09//%20the%20object%20is%20array-like%0A%09%09%09resolve%20%3D%20Array%3B%0A%09%09%7D%0A%09%09resolve.forEach%28object%2C%20block%2C%20context%29%3B%0A%09%7D%0A%7D%3B%0A');
    // Alternative: newScript.src = 'http://www.kryogenix.org/code/browser/sorttable/sorttable.js'; -- birgt aber das Risiko eines MITM-Angriffs und erfordert in aktuellen Browsern eine explizite Bestätigung, um Inhalte von unverschlüsselter Quelle (HTTP anstatt HTTPS) nachzuladen.
    
    newScript.setAttribute('onload', 'setTimeout(presortSemester, 500)');
    document.getElementsByTagName('head')[0].appendChild(newScript);    
  
    var durchschnitt = Math.round((summe_noten_gewichtet / summe_ects) * 100) / 100;
    var auswahlseite_button = document.getElementsByName("auswahlButton")[0];
    var text = document.createTextNode(('Gesamtdurchschnittsnote: ' + durchschnitt).replace('.', ','));
    auswahlseite_button.parentNode.insertBefore(text, auswahlseite_button);
    auswahlseite_button.parentNode.insertBefore(document.createElement('br'), auswahlseite_button);
    auswahlseite_button.parentNode.insertBefore(document.createElement('br'), auswahlseite_button);
    
    function parseCommaFloat(num) {
        return +(num.replace(',', '.'));
    }

})();