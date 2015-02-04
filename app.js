/**
 * Created by admin on 2/2/2015.
 */

angular.module('myApp', []);

angular.module('myApp').controller('myController', function () {
    var mc = this;
    mc.user1 = {
        name: 'Bellicose Agnostic',
        address: {
            street: '123 Street',
            city: 'my city',
            zip: 56223
        },
        friends: [
            'Han',
            'Leia',
            'Chewbacca'
        ]
    };
    mc.user2 = {
        name: 'Random Guy',
        address: {
            street: '123 Street',
            city: 'my city',
            zip: 91605
        },
        friends: [
            'rand 1',
            'rand 2',
            'rand 3'
        ]
    };

});

angular
    .module('myApp')
    .directive('userInfoCard', function () {
        return {
            templateUrl: 'userInfoCardTemplate.html',
            restrict: 'E',
            scope: {
                user: '=',
                collapsed: "@"
            },
            controller: function ($scope) {
                //console.log($scope.collapsed);
                var uc = this;
                console.log();
                uc.knight = function (user) {
                    user.rank = 'Knight';
                    console.log(user);
                };

                uc.collapsed = ($scope.collapsed === 'true');

                uc.collapse = function () {
                    uc.collapsed = !uc.collapsed;
                };
            },
            controllerAs: 'uc'
        }
    });

angular
.module('myApp')
.directive('removeFriend', function () {
        return {
            templateUrl: 'remove-friend.html',
            controller: function ($scope) {
                var rf = this;
                rf.removing = false;
                rf.startRemove = function () {
                    rf.removing = true;
                };
                rf.cancelRemove = function () {
                    rf.removing = false;
                };
                rf.removeFriend = function (friend) {
                    var idx = $scope.user.friends.indexOf(friend);
                    if(idx > -1){
                        $scope.user.friends.splice(idx,1);
                    }
                };
            },
            controllerAs: 'rf'
        }
    });

angular
    .module('myApp')
    .directive('address', function () {
        return {
            templateUrl: 'address.html',
            controller: function () {
                var ad = this;
                ad.collapsed = false;

                ad.expandAddress = function () {
                    ad.collapsed = false;
                };

                ad.collapseAddress = function () {
                    ad.collapsed = true;
                }
            },
            controllerAs: 'ad'
        }
    });