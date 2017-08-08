/**
 * Created by SEELE on 2017/8/7.
 */
(function (angular) {

    var $cookies;

    function toIndex(){
        window.location.href = "/index.html";
    }

    //初始化$cookies
    function setCookies(cook) {
        if (!$cookies) {
            $cookies = cook;
        }
    }

    //设置cookie
    var setCookie = function (name, value) {
        if (value) {
            $cookies.putObject(name, value, {expires: new Date(new Date().getTime() + 5000000)});
            //$cookies.putObject(name,value);
        } else {
            $cookies.putObject(name, value, {expires: new Date(new Date().getTime() + 5000000)});
        }
    };
    //获取cookie
    var getCookie = function () {
        var user = $cookies.getObject("user");
        if (!user) {
            return;
        }
        if (user.account) {
            $scope.user = user;
            $scope.loginClick();
        }
    };

    function LoginController($scope, $cookies) {
        setCookies($cookies);

        $scope.loginBtn = function () {
            setCookie('user', {name: 'qph', age: 13});
            toIndex()
        };
    }

    function RegistController($scope, $cookies) {
        setCookies($cookies);

        $scope.registBtn = function () {
            toIndex()
        }
    }

    angular.module('login')
        .controller('LoginController', LoginController)
        .controller('RegistController', RegistController)
}(window.angular))