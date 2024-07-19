import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [ {path:'home',component:HomeComponent},
  { path: 'register', component: RegisterComponent },
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'content',component:ContentComponent}
  
];

@NgModule({
  
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
 exports:[RouterModule]
})
export class UserRoutingModule { }
