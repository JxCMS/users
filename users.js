/**
 * main file for users module
 */




//needs to have an init() method for setting up the module
exports.init = function(db, router){
    //setup routing
};


//also needs an activate method - used to activate the module after installation
exports.activate = function(){

}

//and a deactivate method - removes anything we added to make the module not work anymore
exports.deactivate = function(){

    //call deinit
    deinit();
}

/**
 * deinit undoes any initialization  (specifically the routing)
 */
function deinit() {

}

/**
 * From here down are specific functions that this module will need
 */