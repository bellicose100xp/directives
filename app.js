/**
 * Created by admin on 2/2/2015.
 */

angular.module('myApp',[]);

angular.module('myApp').controller('myController', function () {
    var mc = this;
    mc.user = {
        name: 'Bellicose Agnostic',
        address: {
            street: '123 Street',
            city: 'my city',
            zip: 56223
        }
    }
});

angular
.module('myApp')
.directive('userInfoCard', function () {
        return {
            template: '<div ng-show="!!mc.user.name">Name: {{mc.user.name}}</div>Address <br> Street: {{mc.user.address.street}} ',
            restrict: 'E'
        }
    });
