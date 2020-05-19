import { Account } from './account';

export class User {
    userId: number;
    userName: string;
    loginName: string;
    password: string;
    phoneNumber: string;
    account: Account
    
    constructor(userName:string,loginName:string,password:string,phoneNumber:string,account:Account){
        this.userName=userName;
        this.loginName=loginName;
        this.password=password;
        this.phoneNumber=phoneNumber;
        this.account=account;
    }
}