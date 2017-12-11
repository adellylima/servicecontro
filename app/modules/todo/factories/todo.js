function TodoFactory(){
    var factory = {
        //getApiGitToView : _getApiGitToView,
        getApiToView        : _getApiToView,
        getUserApiToView    : _getUserApiToView,
        setUserViewToApi    : _setUserViewToApi
    };

    return factory;

    function _getApiToView(res){
        if( angular.isUndefined(res) ){
            return;
        }
        if( angular.isUndefined(res.data) ){
            return;
        }
        if( angular.isUndefined(res.data.users) ){
            return;
        }
        var data   = res.data.users;
        var result = [];

        angular.forEach(data, function(item){
            result.push( _convertApi( item ) );
        });

        return result;
    }

    function _convertApi( data ){
        var result = {};
        if( angular.isUndefined(data) ){
            return;
        }
        if( angular.isDefined(data._id) ){
            result.id = data._id;
        }
        if( angular.isDefined(data.name) ){
            result.name = data.name;
        }
        if( angular.isDefined(data.email) ){
            result.email = data.email;
        }
        if( angular.isDefined(data.cpf) ){
            result.cpf = data.cpf;
        }
        if( angular.isDefined(data.email) ){
            result.rg = data.rg;
        }
        if( angular.isDefined(data.email) ){
            result.cargo = data.cargo;
        }
        return result;
    }

    function _getUserApiToView( res ){
        var data = {};
        var result = {};
        if( angular.isUndefined(res) ){
            return;
        }
        if( angular.isUndefined(res.data) ){
            return;
        }
        if( angular.isUndefined(res.data.user) ){
            return;
        }
        // Atribuindo o valor de "res.data.user" para o "data"
        data = res.data.user;

        if( angular.isDefined(data._id) ){
            result.id = data._id;
        }
        if( angular.isDefined(data.name) ){
            result.name = data.name;
        }
        if( angular.isDefined(data.email) ){
            result.email = data.email;
        }
        if( angular.isDefined(data.cpf) ){
            result.cpf = data.cpf;
        }
        if( angular.isDefined(data.email) ){
            result.rg = data.rg;
        }
        if( angular.isDefined(data.email) ){
            result.cargo = data.cargo;
        }
        return result;
    }

    function _setUserViewToApi( data ){
        var result = {};
        if( angular.isDefined(data.id) ){
            result._id = data.id;
        }
        if( angular.isDefined(data.name) ){
            result.name = data.name;
        }
        if( angular.isDefined(data.email) ){
            result.email = data.email;
        }
        if( angular.isDefined(data.cpf) ){
            result.cpf = data.cpf;
        }
        if( angular.isDefined(data.email) ){
            result.rg = data.rg;
        }
        if( angular.isDefined(data.email) ){
            result.cargo = data.cargo;
        }
        return result;
    }
   
}

angular.module("appList").factory("TodoFactory", TodoFactory);