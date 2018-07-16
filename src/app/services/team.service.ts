import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  team: any = {};
  loaded = false;

  constructor(public http: Http) {
      this.loadTeam();
   }

   public loadTeam() {
    this.http.get('https://joyeriasmaria-web.firebaseio.com/team.json')
    .subscribe(data => {
       this.team = data.json();
       this.loaded = true;
    });
   }
}
