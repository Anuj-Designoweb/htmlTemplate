import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchdataService } from './fetchdata.service';
import { RegisterComponent } from './user/register/register.component';
//import {AuthguardGuard} from "../guards/authguard.guard";
import {AuthguardGuard} from "../../src/app/guards/authguard.guard";
import { LoginComponent } from './user/login/login.component';
import {SomeModuleRoutingModule} from "./some-module/some-module-routing.module";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { EmailComponent } from './user/email/email.component';
import { PasswordComponent } from './user//password/password.component';
import { HomeComponent } from './user//home/home.component';
//import {TokenintercepterService} from "./tokenintercepter.service";
//import { ChatComponent } from './chat/chat.component';
//import { ChatboxComponent } from './chatbox/chatbox.component';
//import {ChatserviceService} from "./chatservice.service";
import { ReactiveformComponent } from './user//reactiveform/reactiveform.component';
import { BlockCopyPasteDirective } from './highlight.directive';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { ListsComponent } from './user/lists/lists.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    
    LoginComponent,
    UpdateComponent,
    EmailComponent,
    PasswordComponent,
    HomeComponent,
   
    ReactiveformComponent,
    BlockCopyPasteDirective,
    DashboardComponent,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,SomeModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [FetchdataService,AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
