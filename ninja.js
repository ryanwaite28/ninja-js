(function(win, doc){

  // Error Messages
  function error(message) {
    this.message = message;
    this.name = "error";
  }


  // Master Ninja (Main Closure)
  win.Ninja = function(){
    this.ctrlObj = {};
  }

  // Scope Object That View And Model Can Share
  Ninja.prototype.spy = function(controlName, func) {
    console.log(this);
    var ctrlElm = document.querySelector('[nj-controller="' + controlName + '"]');

    if(ctrlElm == null || ctrlElm == undefined) {
      throw new error("No Element Found!");
    }

    this.ctrlObj = {
      ctrlElm: ctrlElm,
    }

    return func(this.ctrlObj);

  }

  //
  Ninja.prototype.set = function(func) {

    var databindRegex = /\(\(([a-zA-Z0-9\s\?\&\=\#\.\_\/\-\%\\]{1,})\)\)/;
    var body = document.querySelector('body').innerHTML;

    

  }

})(window, document);
