import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
angular.module('socially', [
  angularMeteor
  ])
  .controller('PartiesListCtrl', function($scope, $reactive) {
    'ngInject';
    
    this.helpers({
      parties() {
        return Parties.find({});
      }
    })
  });