var ninja = new Ninja();

ninja.spy('ninja', function(scope){

  console.log(scope);

  scope.demo = 'yes';

  scope.test = 'admit one';

  scope.gool = function() {
    alert('Gool');
  }

  scope.func = function() {
    return 'function';
  }

  scope.refresh();

  setTimeout(function(){
    scope.demo = 'cool';
    scope.refresh();
  } , 3000)

});

ninja.spy('assassin', function(scope){

  console.log(scope);

  scope.ken = 'power';

  scope.mar = 'dynamic';

  scope.gool = function() {
    alert('Gool');
  }

  scope.Genj = function() {
    return 'Ninpo';
  }

  scope.refresh();

  setTimeout(function(){
    scope.ken = 'strike';
    scope.refresh();
  } , 3000)

});
