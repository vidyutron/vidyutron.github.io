import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h3>{{testBinding}}</h3>'
})
export class AppComponent {
    testBinding='angular2 Injection';
 }