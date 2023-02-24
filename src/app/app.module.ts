import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { StudentsNEEComponent } from './modal/components/students-nee/students-nee.component';

import {HttpClientModule} from "@angular/common/http";
import { AbilitiesComponent } from './modal/components/abilities/abilities.component';
import { SharedModule } from './shared/shared.module';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    StudentsNEEComponent,
    AbilitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
