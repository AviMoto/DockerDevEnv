YUI.add("moodle-atto_table-button",function(e,t){var n="atto_table",r={BORDERSTYLE:"none",BORDERWIDTH:"1"},i={WIDTH:"480px"},s='<form class="{{CSS.FORM}}"><div class="m-b-1 form-group row-fluid"><div class="col-sm-4 span4"><label for="{{elementid}}_atto_table_caption">{{get_string "caption" component}}</label></div><div class="col-sm-8 span8"><input type="text" class="form-control {{CSS.CAPTION}}" id="{{elementid}}_atto_table_caption" required /></div></div><div class="m-b-1 form-group row-fluid"><div class="col-sm-4 span4"><label for="{{elementid}}_atto_table_captionposition">{{get_string "captionposition" component}}</label></div><div class="col-sm-8 span8"><select class="custom-select {{CSS.CAPTIONPOSITION}}" id="{{elementid}}_atto_table_captionposition"><option value=""></option><option value="top">{{get_string "top" "editor"}}</option><option value="bottom">{{get_string "bottom" "editor"}}</option></select></div></div><div class="m-b-1 form-group row-fluid"><div class="col-sm-4 span4"><label for="{{elementid}}_atto_table_headers">{{get_string "headers" component}}</label></div><div class="col-sm-8 span8"><select class="custom-select {{CSS.HEADERS}}" id="{{elementid}}_atto_table_headers"><option value="columns">{{get_string "columns" component}}</option><option value="rows">{{get_string "rows" component}}</option><option value="both">{{get_string "both" component}}</option></select></div></div>{{#if nonedit}}<div class="m-b-1 form-group row-fluid"><div class="col-sm-4 span4"><label for="{{elementid}}_atto_table_rows">{{get_string "numberofrows" component}}</label></div><div class="col-sm-8 span8"><input class="form-control w-auto {{CSS.ROWS}}" type="number" value="3" id="{{elementid}}_atto_table_rows" size="8" min="1" max="50"/></div></div><div class="m-b-1 form-group row-fluid"><div class="col-sm-4 span4"><label for="{{elementid}}_atto_table_columns" >{{get_string "numberofcolumns" component}}</label></div><div class="col-sm-8 span8"><input class="form-control w-auto {{CSS.COLUMNS}}" type="number" value="3" id="{{elementid}}_atto_table_columns"size="8" min="1" max="20"/></div></div>{{/if}}{{#if allowStyling}}<fieldset><legend class="mdl-align">{{get_string "appearance" component}}</legend>{{#if allowBorders}}<div class="m-b-1 form-group row-fluid"><div class="col-sm-4 span4"><label for="{{elementid}}_atto_table_borders">{{get_string "borders" component}}</label></div><div class="col-sm-8 span8"><select name="borders" class="custom-select {{CSS.BORDERS}}" id="{{elementid}}_atto_table_borders"><option value="default">{{get_string "themedefault" component}}</option><option value="outer">{{get_string "outer" component}}</option><option value="all">{{get_string "all" component}}</option></select></div></div><div class="m-b-1 form-group row-fluid"><div class="col-sm-4 span4"><label for="{{elementid}}_atto_table_borderstyle">{{get_string "borderstyles" component}}</label></div><div class="col-sm-8 span8"><select name="borderstyles" class="custom-select {{CSS.BORDERSTYLE}}" id="{{elementid}}_atto_table_borderstyle">{{#each borderStyles}}<option value="{{this}}">{{get_string this ../component}}</option>{{/each}}</select></div></div><div class="m-b-1 form-group row-fluid"><div class="col-sm-4 span4"><label for="{{elementid}}_atto_table_bordersize">{{get_string "bordersize" component}}</label></div><div class="col-sm-8 span8"><div class="form-inline"><input name="bordersize" id="{{elementid}}_atto_table_bordersize" class="form-control w-auto m-r-1 {{CSS.BORDERSIZE}}"type="number" value="1" size="8" min="1" max="50"/><label>{{CSS.BORDERSIZEUNIT}}</label></div></div></div><div class="m-b-1 form-group row-fluid"><div class="col-sm-4 span4"><label for="{{elementid}}_atto_table_bordercolour">{{get_string "bordercolour" component}}</label></div><div class="col-sm-8 span8"><div id="{{elementid}}_atto_table_bordercolour"class="form-inline {{CSS.BORDERCOLOUR}} {{CSS.AVAILABLECOLORS}}" size="1"><div class="tablebordercolor" style="background-color:transparent;color:transparent"><input id="{{../elementid}}_atto_table_bordercolour_-1"type="radio" class="m-0" name="borderColour" value="none" checked="checked"title="{{get_string "themedefault" component}}"></input><label for="{{../elementid}}_atto_table_bordercolour_-1" class="accesshide">{{get_string "themedefault" component}}</label></div>{{#each availableColours}}<div class="tablebordercolor" style="background-color:{{this}};color:{{this}}"><input id="{{../elementid}}_atto_table_bordercolour_{{@index}}"type="radio" class="m-0" name="borderColour" value="{{this}}" title="{{this}}"><label for="{{../elementid}}_atto_table_bordercolour_{{@index}}" class="accesshide">{{this}}</label></div>{{/each}}</div></div></div>{{/if}}{{#if allowBackgroundColour}}<div class="m-b-1 form-group row-fluid"><div class="col-sm-4 span4"><label for="{{elementid}}_atto_table_backgroundcolour">{{get_string "backgroundcolour" component}}</label></div><div class="col-sm-8 span8"><div id="{{elementid}}_atto_table_backgroundcolour"class="form-inline {{CSS.BACKGROUNDCOLOUR}} {{CSS.AVAILABLECOLORS}}" size="1"><div class="tablebackgroundcolor" style="background-color:transparent;color:transparent"><input id="{{../elementid}}_atto_table_backgroundcolour_-1"type="radio" class="m-0" name="backgroundColour" value="none" checked="checked"title="{{get_string "themedefault" component}}"></input><label for="{{../elementid}}_atto_table_backgroundcolour_-1" class="accesshide">{{get_string "themedefault" component}}</label></div>{{#each availableColours}}<div class="tablebackgroundcolor" style="background-color:{{this}};color:{{this}}"><input id="{{../elementid}}_atto_table_backgroundcolour_{{@index}}"type="radio" class="m-0" name="backgroundColour" value="{{this}}" title="{{this}}"><label for="{{../elementid}}_atto_table_backgroundcolour_{{@index}}" class="accesshide">{{this}}</label></div>{{/each}}</div></div></div>{{/if}}{{#if allowWidth}}<div class="m-b-1 form-group row-fluid"><div class="col-sm-4 span4"><label for="{{elementid}}_atto_table_width">{{get_string "width" component}}</label></div><div class="col-sm-8 span8"><div class="form-inline"><input name="width" id="{{elementid}}_atto_table_width" class="form-control w-auto m-r-1 {{CSS.WIDTH}}" size="8" type="number" min="0" max="100"/><label>{{CSS.WIDTHUNIT}}</label></div></div></div>{{/if}}</fieldset>{{/if}}<div class="mdl-align"><br/>{{#if edit}}<button class="btn btn-default submit" type="submit">{{get_string "updatetable" component}}</button>{{/if}}{{#if nonedit}}<button class="btn btn-default submit" type="submit">{{get_string "createtable" component}}</button>{{/if}}</div></form>'
,o={CAPTION:"caption",CAPTIONPOSITION:"captionposition",HEADERS:"headers",ROWS:"rows",COLUMNS:"columns",SUBMIT:"submit",FORM:"atto_form",BORDERS:"borders",BORDERSIZE:"bordersize",BORDERSIZEUNIT:"px",BORDERCOLOUR:"bordercolour",BORDERSTYLE:"borderstyle",BACKGROUNDCOLOUR:"backgroundcolour",WIDTH:"customwidth",WIDTHUNIT:"%",AVAILABLECOLORS:"availablecolors",COLOURROW:"colourrow"},u={CAPTION:"."+o.CAPTION,CAPTIONPOSITION:"."+o.CAPTIONPOSITION,HEADERS:"."+o.HEADERS,ROWS:"."+o.ROWS,COLUMNS:"."+o.COLUMNS,SUBMIT:"."+o.SUBMIT,BORDERS:"."+o.BORDERS,BORDERSIZE:"."+o.BORDERSIZE,BORDERCOLOURS:"."+o.BORDERCOLOUR+' input[name="borderColour"]',SELECTEDBORDERCOLOUR:"."+o.BORDERCOLOUR+' input[name="borderColour"]:checked',BORDERSTYLE:"."+o.BORDERSTYLE,BACKGROUNDCOLOURS:"."+o.BACKGROUNDCOLOUR+' input[name="backgroundColour"]',SELECTEDBACKGROUNDCOLOUR:"."+o.BACKGROUNDCOLOUR+' input[name="backgroundColour"]:checked',FORM:".atto_form",WIDTH:"."+o.WIDTH,AVAILABLECOLORS:"."+o.AVAILABLECOLORS};e.namespace("M.atto_table").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{_currentSelection:null,_contextMenu:null,_lastTarget:null,_menuOptions:null,initializer:function(){this.addButton({icon:"e/table",callback:this._displayTableEditor,tags:"table"}),e.UA.gecko&&(document.execCommand("enableInlineTableEditing",!1,!1),document.execCommand("enableObjectResizing",!1,!1))},_displayDialogue:function(){this._currentSelection=this.get("host").getSelection();if(this._currentSelection!==!1&&!this._currentSelection.collapsed){var e=this.getDialogue({headerContent:M.util.get_string("createtable",n),focusAfterHide:!0,focusOnShowSelector:u.CAPTION,width:i.WIDTH});e.set("bodyContent",this._getDialogueContent(!1)).show(),this._updateAvailableSettings()}},_displayTableEditor:function(e){var t=this._getSuitableTableCell();return t?(e.tableCell=t,this._showTableMenu(e)):this._displayDialogue(e)},_stopAtContentEditableFilter:function(e){return this.editor.contains(e)},_getDialogueContent:function(t){var r=e.Handlebars.compile(s),i=this.get("allowBorders");return this._content=e.Node.create(r({CSS:o,elementid:this.get("host").get("elementid"),component:n,edit:t,nonedit:!t,allowStyling:this.get("allowStyling"),allowBorders:i,borderStyles:this.get("borderStyles"),allowBackgroundColour:this.get("allowBackgroundColour"),availableColours:this.get("availableColors"),allowWidth:this.get("allowWidth")})),t?this._content.one(".submit").on("click",this._updateTable,this):this._content.one(".submit").on("click",this._setTable,this),i&&this._content.one('[name="borders"]').on("change",this._updateAvailableSettings,this),this._content},_updateAvailableSettings:function(){var e=this._content,t=e.one('[name="borders"]'),n=e.one('[name="borderstyles"]'),r=e.one('[name="bordersize"]'),i=e.all('[name="borderColour"]'),s="removeAttribute";if(!t)return;t.get("value")==="default"&&(s="setAttribute"),n&&n[s]("disabled"),r&&r[s]("disabled"),i&&i[s]("disabled")},_getSuitableTableCell:function(){var t=null,n=this.get("host"),r=e.bind(this._stopAtContentEditableFilter,this);n.getSelectedNodes().some(function(e){if(e.ancestor("td, th, caption",!0,r)){t=e;var n=e.ancestor("caption",!0,r);if(n){var i=n.get("parentNode");i&&(t=i.one("td, th"))}return!0}});if(t){var i=n.getSelectionFromNode(t);n.setSelection(i)}return t},_changeNodeType:function(t,n){var r=e.Node.create("<"+n+"></"+n+">");return r.setAttrs(t.getAttrs()),t.get("childNodes").each(function(e){r.append(e.remove())}),t.replace(r),r},_updateTable:function(t){var n,r,i,s,o,a,f,l,c,h,p;t.preventDefault(),this.getDialogue({focusAfterHide:null}).hide(),n=t.currentTarget.ancestor(u.FORM).one(u.CAPTION),r=t.currentTarget.ancestor(u.FORM).one(u.CAPTIONPOSITION),i=t.currentTarget.ancestor(u.FORM).one(u.HEADERS),s=t.currentTarget.ancestor(u.FORM).one(u.BORDERS),o=t.currentTarget.ancestor(u.FORM).one(u.BORDERSIZE),f=t.currentTarget.ancestor(u.FORM).one(u.SELECTEDBORDERCOLOUR),a=t.currentTarget.ancestor(u.FORM).one(u.BORDERSTYLE),l=t.currentTarget.ancestor(u.FORM).one(u.SELECTEDBACKGROUNDCOLOUR),h=t.currentTarget.ancestor(u.FORM).one(u.WIDTH),c=this._lastTarget.ancestor("table"),this._setAppearance(c,{width:h,borders:s,borderColour:f,borderSize:o,borderStyle:a,backgroundColour:l}),p=c.one("caption"),p||(p=e.Node.create("<caption></caption>"),c.insert(p,0)),p.setHTML(n.get("value")),p.setStyle("caption-side",r.get("value")),p.getAttribute("style")||p.removeAttribute("style"),(i.get("value")==="rows"||i.get("value")==="both")&&c.all("tr").each(function(e){var t=e.all("th, td"),n=t.shift(),r;n.get("tagName")==="TD"?(r=this._changeNodeType(n,"th"),r.setAttribute("scope","row")):n.setAttribute("scope","row"),t.each(function(e){e.get("tagName")==="TH"&&(r=this._changeNodeType(e,"td"),r.removeAttribute("scope"))},this)},this);if(i.get("value")==="columns"||i.get("value")==="both"){var d=c.all("tr"),v=d.shift(),m;v.all("td, th").each(function(e){e.get("tagName")==="TD"?(m=this._changeNodeType(e,"th"),m.setAttribute("scope","col")):e.setAttribute("scope","col")},this),d.each(function(e){var t=e.all("th, td");i.get("value")==="both"&&t.shift(),t.each(function(e){e.get("tagName")==="TH"&&(m=this._changeNodeType(e,"td"),m.removeAttribute("scope"))},this)},this)}this.markUpdated()},_setTable:function(t){var n,r,i,s,o,a,f,l,c,h,p,d,v,m;t.preventDefault(),this.getDialogue({focusAfterHide:null}).hide(),n=t.currentTarget.ancestor(u.FORM).one(u.CAPTION),r=t.currentTarget.ancestor(u.FORM).one(u.CAPTIONPOSITION),i=t.currentTarget.ancestor(u.FORM).one(u.BORDERS),s=t.currentTarget.ancestor(u.FORM).one(u.BORDERSIZE),a=t.currentTarget.ancestor(u.FORM).one(u.SELECTEDBORDERCOLOUR),o=t.currentTarget.ancestor(u.FORM).one(u.BORDERSTYLE),p=t.currentTarget.ancestor(u.FORM).one(u.SELECTEDBACKGROUNDCOLOUR),f=t.currentTarget.ancestor(u.FORM).one(u.ROWS),l=t.currentTarget.ancestor(u.FORM).one(u.COLUMNS),c=t.currentTarget.ancestor(u.FORM).one(u.HEADERS),d=t.currentTarget.ancestor(u.FORM).one(u.WIDTH),this.get("host").setSelection(this._currentSelection
);var g="\n",y=e.guid();h="<br/>"+g+'<table id="'+y+'">'+g;var b="";r.get("value")&&(b=' style="caption-side: '+r.get("value")+'"'),h+="<caption"+b+">"+e.Escape.html(n.get("value"))+"</caption>"+g,v=0;if(c.get("value")==="columns"||c.get("value")==="both"){v=1,h+="<thead>"+g+"<tr>"+g;for(m=0;m<parseInt(l.get("value"),10);m++)h+='<th scope="col"></th>'+g;h+="</tr>"+g+"</thead>"+g}h+="<tbody>"+g;for(;v<parseInt(f.get("value"),10);v++){h+="<tr>"+g;for(m=0;m<parseInt(l.get("value"),10);m++)m!==0||c.get("value")!=="rows"&&c.get("value")!=="both"?h+="<td ></td>"+g:h+='<th scope="row"></th>'+g;h+="</tr>"+g}h+="</tbody>"+g,h+="</table>"+g+"<br/>",this.get("host").insertContentAtFocusPoint(h);var w=e.one("#"+y);this._setAppearance(w,{width:d,borders:i,borderColour:a,borderSize:s,borderStyle:o,backgroundColour:p}),w.removeAttribute("id"),this.markUpdated()},_findColumnCells:function(){var t=this._getColumnIndex(this._lastTarget),n=this._lastTarget.ancestor("table").all("tr"),r=new e.NodeList,i=new e.NodeList,s=new e.NodeList;return n.each(function(e){var n=e.all("td, th"),o=n.item(t),u=n.item(t-1),a=n.item(t+1);r.push(o),u&&i.push(u),a&&s.push(a)}),{current:r,prev:i,next:s}},_hideInvalidEntries:function(e){var t=this._lastTarget.ancestor("table"),n=this._lastTarget.ancestor("tr"),r=t.all("tr"),i=r.indexOf(n),s=r.item(i-1),o=s?s.one("td"):null;!n||!o?e.one('[data-change="moverowup"]').hide():e.one('[data-change="moverowup"]').show();var u=r.item(i+1),a=n?n.one("td"):!1;!n||!u||!a?e.one('[data-change="moverowdown"]').hide():e.one('[data-change="moverowdown"]').show();var f=this._findColumnCells();f.prev.filter("td").size()>0?e.one('[data-change="movecolumnleft"]').show():e.one('[data-change="movecolumnleft"]').hide();var l=f.current.filter("td").size()>0;f.next.size()>0&&l?e.one('[data-change="movecolumnright"]').show():e.one('[data-change="movecolumnright"]').hide(),f.current.filter("td").size()>0?e.one('[data-change="deletecolumn"]').show():e.one('[data-change="deletecolumn"]').hide(),!n||!n.one("td")?e.one('[data-change="deleterow"]').hide():e.one('[data-change="deleterow"]').show()},_showTableMenu:function(t){t.preventDefault();var r;this._contextMenu||(this._menuOptions=[{text:M.util.get_string("addcolumnafter",n),data:{change:"addcolumnafter"}},{text:M.util.get_string("addrowafter",n),data:{change:"addrowafter"}},{text:M.util.get_string("moverowup",n),data:{change:"moverowup"}},{text:M.util.get_string("moverowdown",n),data:{change:"moverowdown"}},{text:M.util.get_string("movecolumnleft",n),data:{change:"movecolumnleft"}},{text:M.util.get_string("movecolumnright",n),data:{change:"movecolumnright"}},{text:M.util.get_string("deleterow",n),data:{change:"deleterow"}},{text:M.util.get_string("deletecolumn",n),data:{change:"deletecolumn"}},{text:M.util.get_string("edittable",n),data:{change:"edittable"}}],this._contextMenu=new e.M.editor_atto.Menu({items:this._menuOptions}),r=this._contextMenu.get("boundingBox"),r.delegate("click",this._handleTableChange,"a",this)),r=this._contextMenu.get("boundingBox"),this._lastTarget=t.tableCell.ancestor(".editor_atto_content td, .editor_atto_content th",!0),this._hideInvalidEntries(r),e.Array.each(this.get("host").openMenus,function(e){e.set("focusAfterHide",null)});var i=this.buttons[this.name];this.get("host")._setTabFocus(i),this._contextMenu.show(),this._contextMenu.align(this.buttons.table,[e.WidgetPositionAlign.TL,e.WidgetPositionAlign.BL]),this._contextMenu.set("focusAfterHide",i),r.one("a")&&r.one("a").focus(),this.get("host").openMenus=[this._contextMenu]},_handleTableChange:function(e){e.preventDefault(),this._contextMenu.set("focusAfterHide",this.get("host").editor),this._contextMenu.hide(e);switch(e.target.getData("change")){case"addcolumnafter":this._addColumnAfter();break;case"addrowafter":this._addRowAfter();break;case"deleterow":this._deleteRow();break;case"deletecolumn":this._deleteColumn();break;case"edittable":this._editTable();break;case"moverowdown":this._moveRowDown();break;case"moverowup":this._moveRowUp();break;case"movecolumnleft":this._moveColumnLeft();break;case"movecolumnright":this._moveColumnRight()}},_getRowIndex:function(e){var t=e.ancestor("table"),n=e.ancestor("tr");if(!t||!n)return;var r=t.all("tr");return r.indexOf(n)},_getColumnIndex:function(e){var t=e.ancestor("tr");if(!t)return;var n=t.all("td, th");return n.indexOf(e)},_deleteRow:function(){var e=this._lastTarget.ancestor("tr");e&&e.one("td")&&e.remove(!0),this.markUpdated()},_moveRowUp:function(){var e=this._lastTarget.ancestor("tr"),t=e.previous("tr");if(!e||!t)return;e.swap(t),this.markUpdated()},_moveColumnLeft:function(){var e=this._findColumnCells();if(e.current.size()>0&&e.prev.size()>0&&e.current.size()===e.prev.size()){var t=0;for(t=0;t<e.current.size();t++){var n=e.current.item(t),r=e.prev.item(t);n.swap(r)}}this.markUpdated()},_addCaption:function(){var t=this._lastTarget.ancestor("table"),n=t.one("caption");n||t.insert(e.Node.create("<caption>&nbsp;</caption>"),1)},_removeCaption:function(){var e=this._lastTarget.ancestor("table"),t=e.one("caption");t&&t.remove(!0)},_moveColumnRight:function(){var e=this._findColumnCells();if(e.next.size()>0&&e.current.size()===e.next.size()&&e.current.filter("td").size()>0){var t=0;for(t=0;t<e.current.size();t++){var n=e.current.item(t),r=e.next.item(t);n.swap(r)}}this.markUpdated()},_moveRowDown:function(){var e=this._lastTarget.ancestor("tr"),t=e.next("tr");if(!e||!t||!e.one("td"))return;e.swap(t),this.markUpdated()},_getBorderConfiguration:function(t){var n=t.cloneNode(!0),r=n.getStyle("borderStyle"),i=n.getStyle("borderColor"),s=n.getStyle("borderWidth");if(r||i||s){var o=e.Color.toHex(i),u=parseInt(s,10);return{borderStyle:r,borderColor:o==="#"?null:o,borderWidth:isNaN(u)?null:u}}return!1},_setAppearance:function(e,t){var n,r,i,s;t.borderColour&&(n=t.borderColour.get("value")),t.borderSize&&(r=t.borderSize.get("value")),t.borderStyle&&(i=t.borderStyle.get("value")),t.backgroundColour&&(s=t.backgroundColour.get("value")),e.
removeAttribute("style"),e.all("td, th").each(function(e){e.removeAttribute("style")},this),t.borders&&(t.borders.get("value")==="outer"?(e.setStyle("borderWidth",r+o.BORDERSIZEUNIT),e.setStyle("borderStyle",i),n!=="none"&&e.setStyle("borderColor",n)):t.borders.get("value")==="all"&&e.all("td, th").each(function(e){e.setStyle("borderWidth",r+o.BORDERSIZEUNIT),e.setStyle("borderStyle",i),n!=="none"&&e.setStyle("borderColor",n)},this)),s!=="none"&&e.setStyle("backgroundColor",s),t.width&&t.width.get("value")&&e.setStyle("width",t.width.get("value")+o.WIDTHUNIT)},_editTable:function(){var t=this.getDialogue({headerContent:M.util.get_string("edittable",n),focusAfterHide:!1,focusOnShowSelector:u.CAPTION,width:i.WIDTH}),s=this._getDialogueContent(!0),o=s.one(u.CAPTION),a=s.one(u.CAPTIONPOSITION),f=s.one(u.HEADERS),l=s.one(u.BORDERS),c=s.one(u.BORDERSTYLE),h=s.all(u.BORDERCOLOURS),p=s.one(u.BORDERSIZE),d=s.all(u.BACKGROUNDCOLOURS),v=s.one(u.WIDTH),m=this._lastTarget.ancestor("table"),g=m.one("caption"),y,b;g?o.set("value",g.getHTML()):o.set("value",""),v&&m.getStyle("width").indexOf("px")===-1&&v.set("value",parseInt(m.getStyle("width"),10)),a&&g&&g.getAttribute("style")?a.set("value",g.getStyle("caption-side")):a.set("value",""),m.getStyle("backgroundColor")&&this.get("allowBackgroundColour")&&(y=e.Color.toHex(m.getStyle("backgroundColor")),b=d.filter('[value="'+y+'"]'),b&&b.set("checked",!0));if(this.get("allowBorders")){var w="default",E=this._getBorderConfiguration(m);E?w="outer":(E=this._getBorderConfiguration(m.one("td")),E&&(w="all"));if(E){var S=E.borderStyle||r.BORDERSTYLE,x=E.borderWidth||r.BORDERWIDTH;c.set("value",S),p.set("value",x),l.set("value",w),y=E.borderColor,b=h.filter('[value="'+y+'"]'),b&&b.set("checked",!0)}}var T="columns";m.one('th[scope="row"]')&&(T="rows",m.one('th[scope="col"]')&&(T="both")),f.set("value",T),t.set("bodyContent",s).show(),this._updateAvailableSettings()},_deleteColumn:function(){var t=this._getColumnIndex(this._lastTarget),n=this._lastTarget.ancestor("table"),r=n.all("tr"),i=new e.NodeList,s=!1;r.each(function(e){var n=e.all("td, th"),r=n.item(t);r.get("tagName")==="TD"&&(s=!0),i.push(r)}),s&&i.remove(!0),this.markUpdated()},_addRowAfter:function(){var t=this._lastTarget.ancestor("tr"),n=this._lastTarget.ancestor("table").one("tbody");n||(n=this._lastTarget.ancestor("table"));var r=n.one("tr");r||(r=this._lastTarget.ancestor("table").one("tr"));if(!r)return;var i=r.cloneNode(!0);i.all("th, td").each(function(t){if(t.get("tagName")==="TH"&&t.getAttribute("scope")!=="row"){var n=e.Node.create("<td></td>");t.replace(n),t=n}t.setHTML("&nbsp;")}),t.ancestor("thead")?(t=r,n.insert(i,t)):t.insert(i,"after"),this.markUpdated()},_addColumnAfter:function(){var t=this._findColumnCells(),n=!0,r=t.next;t.next.size()<=0&&(n=!1,r=t.current),e.each(r,function(e){var t=e.cloneNode();t.setHTML("&nbsp;"),n?e.get("parentNode").insert(t,e):(e.get("parentNode").insert(t,e),e.swap(t))},this),this.markUpdated()}},{ATTRS:{allowBorders:{value:!0},borderStyles:{value:["none","solid","dashed","dotted"]},allowBackgroundColour:{value:!0},allowWidth:{value:!0},allowStyling:{readOnly:!0,getter:function(){return this.get("allowBorders")||this.get("allowBackgroundColour")||this.get("allowWidth")}},availableColors:{value:["#FFFFFF","#EF4540","#FFCF35","#98CA3E","#7D9FD3","#333333"],readOnly:!0}}})},"@VERSION@",{requires:["moodle-editor_atto-plugin","moodle-editor_atto-menu","event","event-valuechange"]});