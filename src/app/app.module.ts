import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';



import { HerosComponent } from './screens/heros/heros.component';
import { HeroListComponent } from './screens/hero-list/hero-list.component';



import { MonsterComponent } from './monster/monster.component';
import { MosterListComponent } from './monster/moster-list/moster-list.component';
import { HeroUnitComponent } from './component/hero-unit/hero-unit.component';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroListComponent,
    MonsterComponent,
    MosterListComponent,
    HeroUnitComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

