import { Component, OnInit } from '@angular/core';
import { techsWithImages, TechType } from 'src/app/domains/types/Tech';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-used-techs',
  templateUrl: './used-techs.component.html',
  styleUrls: ['./used-techs.component.css']
})
export class UsedTechsComponent implements OnInit {

  techs = techsWithImages;
  backendLink = environment.serverUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
