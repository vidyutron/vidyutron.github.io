"use strict";
var router_1 = require('@angular/router');
var UFPage_component_1 = require('./UFPage/UFPage.component');
var profile_component_1 = require('./Profile/profile.component');
var automation_component_1 = require('./automation/automation.component');
var sipv2_component_1 = require('./sipv2/sipv2.component');
var vs_component_1 = require('./vishalsridhar.com/vs.component');
var wwlm_component_1 = require('./wwlm/wwlm.component');
var routes = [
    { path: '', component: profile_component_1.ProfileComponent },
    { path: 'unifiedframework', component: UFPage_component_1.UFPageComponent },
    { path: 'test-automation', component: automation_component_1.AutomationComponent },
    { path: 'sipv2', component: sipv2_component_1.Sipv2Component },
    { path: 'vishalsridhar', component: vs_component_1.VSComponent },
    { path: 'wwlm', component: wwlm_component_1.WWLMComponent },
    { path: '**', component: profile_component_1.ProfileComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map