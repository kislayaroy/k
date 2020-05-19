import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user';
import { Account } from './model/account';

@Injectable()
export class WalletService{

    client:HttpClient ;
  constructor(client:HttpClient ){
  this.client=client;
  }
    baseurl='http://localhost:8086/users';

    fetchAllUser():Observable<User[]>{
      let url=this.baseurl;
      let observable:Observable<User[]> = this.client.get<User[]>(url);
      return observable;
   }
    createUser(user:User):Observable<User>{
        let url = this.baseurl+"/add";
        let observable : Observable<User> = this.client.post<User>(url,user);
        return observable;
    }
}