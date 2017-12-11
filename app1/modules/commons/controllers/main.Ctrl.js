function MainCtrl($rootScope) {
    var vm = this;
    vm.usuario = $rootScope.usuario;
}

angular.module('appList')
        .controller('MainCtrl', MainCtrl);