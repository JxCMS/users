
var mongoose = require('mongoose'),
    encrypt = require('utils/lib/sha1').b64_hmac_sha1;

mongoose.model('User', {

    properties: ['first', 'last', 'username', 'email', 'password', 'logins', 'last_login', 'updated_at'],

    indexes: ['email', 'username'],

    setters: {
        first: function(v){
            return v.capitalize();
        },
        password: function(v){
            //encrypt the password here....
            return encrypt(core.getOption(secureKey),v);
        }
    },

    getters: {
        full_name: function(){
            return this.first + ' ' + this.last
        }
    },

    methods: {
        save: function(fn){
            this.updated_at = new Date();
            this.__super__(fn);
        }
    },

    'static': {
        encryptPassword: function(password){
            return encrypt(core.getOption(secureKey),password);
        }
    }

});