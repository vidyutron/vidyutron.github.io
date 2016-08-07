import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {UFPageComponent} from './UFPage/UFPage.component';
import {ProfileComponent} from './Profile/profile.component';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES, ProfileComponent],
  precompile: [UFPageComponent]
})
export class AppComponent {
    testBinding='angular2 Injection';
 }