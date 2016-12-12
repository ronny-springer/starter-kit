import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
	selector: 'app-component',
	template: `<h1>{{headline}}</h1>`,
	providers: [AppService]
})

export class AppComponent {
	headline: string;
	constructor(appService: AppService) {
    	this.headline = appService.getHeadline();
  	}
}
