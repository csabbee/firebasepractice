'use strict';

angular.module('firebasepracticeApp')
  .directive('foodmodal', function () {
    return {
      template:
        '<div ng-controller="ModalCtrl">'+
          '<script type="text/ng-template" id="myModalContent.html">'+
            '<div class="modal-header">'+
              '<h3>I am a modal!</h3>'+
            '</div>'+
            '<div class="modal-body">'+
              '<ul>'+
                '<li ng-repeat="item in items">'+
                  '<a ng-click="selected.item = item">{{ item }}</a>'+
                '</li>'+
              '</ul>'+
              'Selected: <b>{{ selected.item }}</b>'+
            '</div>'+
            '<div class="modal-footer">'+
              '<button class="btn btn-primary" ng-click="ok()">OK</button>'+
              '<button class="btn btn-warning" ng-click="cancel()">Cancel</button>'+
            '</div>'+
          '</script>'+
          '<button class="btn btn-default" ng-click="open()">Open me!</button>'+
          '<div ng-show="selected">Selection from a modal: {{ selected }}</div>'+
        '</div>',
      restrict: 'E'
    };
  });
