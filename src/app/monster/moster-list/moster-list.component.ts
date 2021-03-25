import { Component, OnInit } from '@angular/core';

import {MOSTER} from '../../mock-data/MONTER';
import {Monster} from '../../models/Monster';

@Component({
  selector: 'app-moster-list',
  templateUrl: './moster-list.component.html',
  styleUrls: ['./moster-list.component.css']
})

export class MosterListComponent implements OnInit {

  heroes:Array<Monster> = MOSTER;
  detail: string = "<a href='http://google.com'>Link to google</a>";
  
  constructor() { }

  ngOnInit(): void {
  }

}
