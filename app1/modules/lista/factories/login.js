function LoginFactory(){
    var factory = {
        validatorLogin : _validatorLogin
    };

    function _validatorLogin( userObj ){
        var result = false;
        if( angular.isUndefined( userObj ) ){
            return
        };
        if( angular.isDefined(userObj.user) && userObj.user == 'user' ){
            if( angular.isDefined(userObj.pass) && userObj.pass == '123' ){
                result = true;
            };
        };

        return result;
    }
    return factory;
};

angular.module('appList')
            .factory('LoginFactory', LoginFactory);

