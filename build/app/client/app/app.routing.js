System.register(["@angular/router", "./components/homepage/homepage.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, homepage_component_1, appRoutes, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (homepage_component_1_1) {
                homepage_component_1 = homepage_component_1_1;
            }
        ],
        execute: function () {
            appRoutes = [
                {
                    path: '',
                    redirectTo: '/',
                    pathMatch: 'full'
                },
                {
                    path: '',
                    component: homepage_component_1.HomepageComponent
                }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    };
});
//# sourceMappingURL=app.routing.js.map