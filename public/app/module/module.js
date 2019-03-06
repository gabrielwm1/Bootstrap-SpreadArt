angular
    .module("App", ["ngRoute"])
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
            .when("/home", {
                template: "<home></home>"
            })
            .when("/events", {
                template: "<events></events>"
            })
            .when("/about", {
                template: "<about></about>"
            })
            .when("/workwithus", {
                template: "<workwithus></workwithus>"
            })
            .when("/donate", {
                template: "<donate></donate>"
            })
            .when("/contact", {
                template: "<contact></contact>"
            })
            .when("/",{
                template: "<home></home>"
            });

    }])
