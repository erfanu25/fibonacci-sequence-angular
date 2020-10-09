import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RadioButtonModule} from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        RadioButtonModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        TooltipModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
