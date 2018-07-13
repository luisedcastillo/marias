import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  info:any = {};
  loaded:boolean = false;
  
  constructor(public http:Http) { 
    this.loadInfo()
  }

  public loadInfo()
  {
    this.http.get("assets/data/page-info.json")
             .subscribe(data =>{
                this.info = data.json();
                this.loaded = true;
             });
  }
}
