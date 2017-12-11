function LoginCtrl($rootScope, LoginFactory, $location ) {
    var vm = this;
    
    vm.Submit = login;

    function login(){
         var userObj = {
            user : vm.username,
            pass : vm.password
        };

        var result = LoginFactory.validatorLogin( userObj );

        if (result) {
            $rootScope.loggedIn = true;
            $rootScope.usuario = vm.username;
            $location.path('/lista');
        }else{
            alert('Usuario ou senha invalidos!');
        }
    }
}

angular.module('appList')
        .controller('LoginCtrl', LoginCtrl);