import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { HerosComponent } from './screens/heros/heros.component';
import { HeroListComponent } from './screens/hero-list/hero-list.component';



import { MonsterComponent } from './monster/monster.component';
import { MosterListComponent } from './monster/moster-list/moster-list.component';
import { HeroUnitComponent } from './component/hero-unit/hero-unit.component';
import { PipesPipe } from './pipe/pipes.pipe';
import { GenderPipe } from './pipes/gender.pipe';
import { AdminDashbordComponent } from './screen/admin-dashbord/admin-dashbord.component';
import { DasboardComponent } from './screen/admin/dasboard/dasboard.component';
import { AdminLayoutComponent } from './screen/admin-layout/admin-layout.component';
import { HomeComponent } from './screen/home/home.component';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroListComponent,
    MonsterComponent,
    MosterListComponent,
    HeroUnitComponent,
    PipesPipe,
    GenderPipe,
    AdminDashbordComponent,
    DasboardComponent,
    AdminLayoutComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

