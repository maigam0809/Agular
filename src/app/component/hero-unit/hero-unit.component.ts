import { Component, OnInit, Input  ,Output, EventEmitter} from '@angular/core';
import { Hero } from 'src/app/models/Hero';

@Component({
  selector: 'hero-unit',
  templateUrl: './hero-unit.component.html',
  styleUrls: ['./hero-unit.component.css']
})
export class HeroUnitComponent implements OnInit {
  @Input("hero-data") heroData: Hero;
  // Tạo ra sự kiện là delete
  @Output() deleted = new EventEmitter<Hero>();

  @Output() edit = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  removeHero(){
    console.log("HeroUniitComponent - removeHerro()");
    this.deleted.emit(this.heroData);
    // this.heroes = this.heroes.filter((x: Hero) => x != hero);
  }
  
  updateHero(){
    console.log("HeroUniitComponent - editHero()");
    this.edit.emit(this.heroData);
    // let updateHero = {...hero};
    // this.formObject = updateHero;


  }

}
