import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

const routes: Routes = [
  {  path :'home',component:HomeComponent },
  {  path :'user-login',component:UserLoginComponent },
  {  path :'add-user',component:AddUserComponent },
  {  path:'account-details',component:AccountDetailsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRouting { }
