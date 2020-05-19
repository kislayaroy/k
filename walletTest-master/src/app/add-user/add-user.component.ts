import { Component, OnInit } from '@angular/core';
import { WalletService } from '../walletservice';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { Account } from '../model/account';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userAdded = false;
  account:Account;
  service:WalletService;
  constructor(service: WalletService) { this.service=service; }
  addedUser:User=null;
  ngOnInit(): void {
  }

  public createUser(form:any) {
    this.account = new Account();
    this.userAdded = true;
    let details=form.value;
    let userName=details.userName;
    let loginName=details.loginName;
    let password=details.password;
    let phoneNumber=details.phoneNumber;
    this.addedUser=new User(userName,loginName,password,phoneNumber,this.account);
    let result:Observable<User>=this.service.createUser(this.addedUser); // adding to the store
    result.subscribe((user:User)=>{
      this.addedUser=user;
    },
    err=>{
      console.log("err="+err);
      } );
  }
}
