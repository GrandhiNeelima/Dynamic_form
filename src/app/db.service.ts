import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { identity } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class DbService {

    constructor(private client:HttpClient) { }


    Adddata(data:any){
       return this.client.post("http://localhost:3000/controls1",data)
    }
  }