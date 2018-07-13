import { Component } from '@angular/core';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'

})
export class AboutComponent {

  constructor(public teamService: TeamService) { }

}
