/*
 * Konami-JS
 * http://snaptortoise.com/konami-js
 * Copyright (c) 2009 George Mandis (georgemandis.com)
 * Version: 1.0.8 (05/08/2009)
 * Licensed under the Artistic License/GPL
 * http://dev.perl.org/licenses/
 * Tested in: Safari 4, Firefox 3, IE7
 */

var konami = {
	input:"",
	pattern:"3838404037393739666513",
	clear:setTimeout('konami.clear_input()',2000),
	load: function(link) {
		window.document.onkeydown = function(e) {
			konami.input+= e ? e.keyCode : event.keyCode;
			if (konami.input == konami.pattern) {
				konami.code(link);
				clearTimeout(konami.clear);
				return;
				}
			clearTimeout(konami.clear);
			konami.clear = setTimeout("konami.clear_input()",2000);
			}
	},
	code: function(link) { window.location=link},
	clear_input: function() {
		konami.input="";
		clearTimeout(konami.clear);
	}
}
