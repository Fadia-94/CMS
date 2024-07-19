import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './user/login/login.component';
import { AdminComponent } from './user/admin/admin.component';
import { HomeComponent } from './user/home/home.component';
import { ContentComponent } from './user/content/content.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    ContentComponent,
    DropdownComponent,
  ],
  imports: [
    BrowserModule,
   
    AppRoutingModule,
    FormsModule,
    NgModule,
    HttpClientModule
    
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = 'CMS';
 }
