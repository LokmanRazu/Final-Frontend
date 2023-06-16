import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'https://fin-al-project.vercel.app/user';
  constructor( private http:HttpClient) { }
  getData(){
    return this.http.get(this.url)
  }
  
  postData(data:any){
    return this.http.post(this.url,data)   
  }
}
