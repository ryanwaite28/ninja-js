/*

	Ninja.JS
	MicroFramework

*/

(function(window, document) {
	'use strict';

	// Error Messages
	function error(message) {
		this.message = message;
		this.name = "error";
	}

	function getNJelm(ctrlName) {
		return document.querySelector('[nj-controller="' + ctrlName + '"]');
	}


	// Master Ninja (Main Closure)
	var Ninja = function() {
		var ninja = this;
		var body = document.querySelector('body');
		var bodyHTML = body.innerHTML;

		var CtrlObj = function(){

		};

		ninja.scopes = [];

		// Scope Object That View And Model Can Share
		Ninja.prototype.spy = function(ctrlName, func) {
			// console.log(self);

			for(var key in ninja.scopes) {
				if (ninja.scopes[key].ctrlName == ctrlName) {
					throw new error("Duplicate Controllers Are Not Allowed!");
				}
			}

			var ctrlElm = document.querySelector('[nj-controller="' + ctrlName + '"]');

			if (ctrlElm == null || ctrlElm == undefined) {
				throw new error("No DOM Element Found!");
			}

			var ctrlObj = new CtrlObj();
			ctrlObj.ctrlName = ctrlName;
			ctrlObj.ctrlElm = ctrlElm;
			ctrlObj.ctrlTemplate = ctrlElm.innerHTML;

			ninja.scopes.push(ctrlObj);

			return func(ctrlObj);

		}

		//
		CtrlObj.prototype.refresh = function(func) {
			var self = this;
			var databindRegex = /\(\((.*?)\)\)/g;
			var regexONE = /[a-zA-Z0-9\_\-\.]{1,}/;
			var regexTWO = /[a-zA-Z0-9\_\-\.\(\)\{\[\}\]\'\"\s\/\\]{1,}/;
			var dom = getNJelm(self.ctrlName);
			var template = self.ctrlTemplate;

			self.ctrlTemplate.match(databindRegex, 'h', 't').forEach(function(h, t) {
				var val = h.replace('((', '').replace('))', '').trim().toString();
				
				if (self.hasOwnProperty(val)) {
          if( typeof self[val] === 'function' ) {
						// console.log('function');
            template = template.replace(h , self[val]());
          }
          else {
            // console.log('not function');
            template = template.replace(h , self[val]);
          }
				}
        else {
					// console.log(false);
				}
			});

			dom.innerHTML = template;

		}



	}

	window.Ninja = Ninja;

})(window, document);
