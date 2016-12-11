import { Component } from '@angular/core';

@Component({
	selector: 'app-component',
	template: '<h1>{{headline}}</h1>'
})

export class AppComponent {
	headline: string;
	constructor() {
    	this.headline = 'Hallo Welt';
  	}
}
