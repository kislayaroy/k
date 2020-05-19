import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { WalletService } from './walletservice';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UserLoginComponent,
    AddUserComponent,
    AccountDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    HttpClientModule 
  ],
  providers: [WalletService],
  bootstrap: [AppComponent]
})
export class AppModule { }
