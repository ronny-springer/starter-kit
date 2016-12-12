import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
	selector: 'app-component',
	templateUrl: './modules/app/app.component.html',
	providers: [AppService]
})

export class AppComponent {
	headline: string;
	constructor(appService: AppService) {
    	this.headline = appService.getHeadline();
  	}
}
