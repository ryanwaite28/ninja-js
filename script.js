var ninja = new Ninja();

ninja.spy('ninjaScript', function(scope){

  console.log(scope);

  scope.demo = 'yes';

  scope.gool = function() {
    alert('Gool');
  }



  ninja.set();

});
