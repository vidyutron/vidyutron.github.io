import {provideRouter, RouterConfig} from '@angular/router';
import {UFPageComponent} from './UFPage/UFPage.component';
import {ProfileComponent} from './Profile/profile.component';
import {AutomationComponent} from './automation/automation.component';
import {Sipv2Component} from './sipv2/sipv2.component';
import {VSComponent} from './vishalsridhar.com/vs.component';
import {WWLMComponent} from './wwlm/wwlm.component';
const routes: RouterConfig = [
    { path: '', component: ProfileComponent },
    { path: 'unifiedframework', component: UFPageComponent },
    { path: 'test-automation', component: AutomationComponent },
    { path: 'sipv2', component: Sipv2Component },
    { path: 'vishalsridhar', component: VSComponent },
    { path: 'wwlm', component: WWLMComponent },
    { path: '**', component: ProfileComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];