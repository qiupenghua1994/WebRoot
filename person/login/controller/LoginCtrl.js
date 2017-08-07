/**
 * Created by SEELE on 2017/8/7.
 */
(function (angular) {

    function LoginController($scope) {
        $scope.loginBtn = function () {

        };
    }

    function RegistController($scope) {

        $scope.registBtn = function () {
            window.location.href = "/index.html";
        }
    }

    angular.module('login')
        .controller('LoginController', LoginController)
        .controller('RegistController', RegistController)
}(window.angular))