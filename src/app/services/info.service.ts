import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  info:any = {};
  loaded:boolean = false;
  
  constructor(public http:Http) { 
    this.http.get("assets/data/page-info.json")
             .subscribe(data =>{
                console.log(data.json());
                this.info = data.json();
                this.loaded = true;
             });
  }
}
