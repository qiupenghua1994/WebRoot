/**
 * Created by SEELE on 2017/8/7.
 */
(function (angular) {


    function LoginController($scope, $cookies) {

        $scope.user = {
            account:'',
            pwd:''
        };
        $scope.loginBtn = function () {
            setCookie('user', {name: 'qph', age: 13});
            toIndex()
        };
        $scope.registBtn = function () {
            toIndex()
        };
        //设置cookie
        function setCookie(name, value) {
            if (value) {
                $cookies.putObject(name, value, {expires: new Date(new Date().getTime() + 5000000)});
                //$cookies.putObject(name,value);
            } else {
                $cookies.putObject(name, value, {expires: new Date(new Date().getTime() + 5000000)});
            }
        };
        //获取cookie
        function getCookie() {
            var user = $cookies.getObject("user");
            if (!user) {
                return;
            }
            if (user.account) {
                $scope.user = user;
                $scope.loginClick();
            }
        };
        //跳到首页
        function toIndex(){
            window.location.href = "/index.html";
        }
    }



    angular.module('login')
        .controller('LoginController', LoginController)
}(window.angular))