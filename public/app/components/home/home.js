"use strict"
const home = {
    templateUrl: "app/components/home/home.html",

    controller: [function(){
        const vm = this; 
    }]
};

angular 
    .module("App")
    .component("home", home);