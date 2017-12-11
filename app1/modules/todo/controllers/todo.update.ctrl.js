function TodoUpdateCtrl( $state, $stateParams, TodoService, TodoFactory ) {
    var vm = this;
    vm.pageTitle    = 'Editar Funcionário';   
    vm.user         = {};
    vm.updateUser   = _updateUser;

    _init();

    function _init() {
      
        if( angular.isUndefined( $stateParams.id ) ){
            $state.go('main.todo');
        }

        TodoService.findUserApi($stateParams.id).then( _successFind, _errorFind );
    }
    
    function _successFind( response ){
        vm.user = TodoFactory.getUserApiToView(response);
    }

    function _errorFind(error){
        alert(error);
    }

    function _updateUser(){
        
        var user = TodoFactory.setUserViewToApi( vm.user );
        
        TodoService.updateUserApi( user._id, user ).then(_successUpdate, _errorUpdate );
    }

    function _successUpdate(response){
        $state.go('main.todo');
    }

    function _errorUpdate(error){
        alert(error);
    }
    


}

angular.module('appList')
    .controller('TodoUpdateCtrl', TodoUpdateCtrl);