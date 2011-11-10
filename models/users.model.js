
var Collection = require('../../../system/collection').Collection,
    Model = require('../../../system/model').Model,
    encrypt = require('utils/lib/sha1').b64_hmac_sha1;


exports.model = new Class({
    
    Extends: Model,
    
    save: function(request){
       if (!this.updated) {
            this.updated = {};
        }
        this.updated.at = Date.now();
        if (!this.created) {
            this.created = {};
        }
        this.created.at = Date.now();
        this.password = this.encryptPassword(this.password);
        return this.parent(request);
    },
    
    fullName: function(){
        return this.first + ' ' + this.last;
    },
    
    encryptPassword: function(password){
        return encrypt(core.getOption(secureKey),password);
    }
});

exports.Collection = new Class({

    Extends: Collection,
    
    model: exports.model,
    
    name: 'users'
});