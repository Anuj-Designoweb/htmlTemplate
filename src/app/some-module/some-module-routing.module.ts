import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { FetchdataService } from '../fetchdata.service';
import { RegisterComponent } from '../user/register/register.component';
import { DashboardComponent } from '../user/dashboard/dashboard.component';
import { LoginComponent } from '../user/login/login.component';
import { UpdateComponent } from '../update/update.component';
import { EmailComponent } from '../user/email/email.component';
import { HomeComponent } from '../user/home/home.component';
import { PasswordComponent } from '../user/password/password.component';
//import {AuthguardGuard} from "../../app/guard/authguard.guard";
import {AuthguardGuard} from "../guards/authguard.guard";
import { ListsComponent } from '../user/lists/lists.component';
import { AgGridModule } from 'ag-grid-angular';

//import { ChatboxComponent } from '../chatbox/chatbox.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  
  { path: 'update/:id', component: UpdateComponent},
  { path: 'lists', component: ListsComponent},
  { path: 'home', component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent,
  canActivate:[AuthguardGuard]
},
  {
    path: 'password',
    component: PasswordComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes),AgGridModule.withComponents([])],
  exports: [RouterModule],
  providers: [AuthguardGuard]
})
export class SomeModuleRoutingModule { }
