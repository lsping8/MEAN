"use strict";
var router_1 = require("@angular/router");
var homepage_component_1 = require("./components/homepage/homepage.component");
var picture1_component_1 = require("./components/picture1/picture1.component");
var picture2_component_1 = require("./components/picture2/picture2.component");
var picture3_component_1 = require("./components/picture3/picture3.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '',
        component: homepage_component_1.HomepageComponent
    },
    {
        path: 'picture1',
        component: picture1_component_1.Picture1Component
    },
    {
        path: 'picture2',
        component: picture2_component_1.Picture2Component
    },
    {
        path: 'picture3',
        component: picture3_component_1.Picture3Component
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map