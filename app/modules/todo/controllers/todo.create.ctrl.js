function TodoCreateCtrl( $state, TodoService, TodoFactory ) {
    var vm = this;
    vm.pageTitle = 'Cadastro Funcionário';   
    vm.user = {};

    vm.createUser = _createUser;

    _init();

    function _init() {
        
    }
    
    function _createUser(){
        TodoService.createUserApi( vm.user ).then(_successPost, _errorPost );
        
    }

    function _successPost(response){
        $state.go('main.todo');
    }

    function _errorPost(error){
        alert(error);
    }
    
}

 angular.module('appList')
.controller('TodoCreateCtrl', TodoCreateCtrl);