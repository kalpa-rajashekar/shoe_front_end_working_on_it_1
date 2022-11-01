import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UsersComponent } from './admin/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { AdduserComponent } from './admin/users/adduser/adduser.component';
import {FormsModule} from '@angular/forms';
import { ViewuserComponent } from './admin/users/viewuser/viewuser.component';
import { ShoesComponent } from './admin/shoes/shoes.component';
import { AddshoeComponent } from './admin/shoes/addshoe/addshoe.component';
import { ViewshoeComponent } from './admin/shoes/viewshoe/viewshoe.component';
import { ShopshoesComponent } from './shopshoes/shopshoes.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,
    AdduserComponent,
    ViewuserComponent,
    ShoesComponent,
    AddshoeComponent,
    ViewshoeComponent,
    ShopshoesComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
