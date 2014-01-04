'use strict';

angular.module('firebasepracticeApp')
  .directive('navbar', function () {
    return {
      template:
        '<nav class="navbar navbar-default navbar-fixed-top" role="navigation">'+
          '<!-- Brand and toggle get grouped for better mobile display -->'+
          '<div class="navbar-header">'+
            '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">'+
              '<span class="sr-only">Toggle navigation</span>'+
              '<span class="icon-bar"></span>'+
              '<span class="icon-bar"></span>'+
              '<span class="icon-bar"></span>'+
            '</button>'+
            '<a class="navbar-brand" href="#">Firebasepractice</a>'+
          '</div>'+
          '<!-- Collect the nav links, forms, and other content for toggling -->'+
          '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">'+
            '<ul class="nav navbar-nav">'+
              '<li itemhover><a href="#/foodrepository">Foods</a></li>'+
              '<li itemhover><a href="#/addfood">Add food</a></li>'+
            '</ul>'+
          '</div><!-- /.navbar-collapse -->'+
        '</nav>',
      restrict: 'E'
    };
  });
