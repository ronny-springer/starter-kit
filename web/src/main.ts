import 'zone.js';
import 'reflect-metadata';

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./modules/app/app.component";

@NgModule({
    imports: [
        BrowserModule        
    ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}