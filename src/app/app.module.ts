import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HerosComponent } from './screens/heros/heros.component';
import { HeroListComponent } from './screens/hero-list/hero-list.component';

import { MonsterComponent } from './monster/monster.component';
import { MosterListComponent } from './monster/moster-list/moster-list.component';
import { HeroUnitComponent } from './component/hero-unit/hero-unit.component';
import { GenderPipe } from './pipes/gender.pipe';
import { AdminDashbordComponent } from './screen/admin-dashbord/admin-dashbord.component';
import { DasboardComponent } from './screen/admin/dasboard/dasboard.component';
import { AdminLayoutComponent } from './screen/admin-layout/admin-layout.component';
import { HomeComponent } from './screen/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientLayoutComponent } from './screen/client-layout/client-layout.component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroListComponent,
    MonsterComponent,
    MosterListComponent,
    HeroUnitComponent,
    GenderPipe,
    AdminDashbordComponent,
    DasboardComponent,
    AdminLayoutComponent,
    HomeComponent,
    ClientLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

