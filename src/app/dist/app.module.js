"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var heros_component_1 = require("./screens/heros/heros.component");
var hero_list_component_1 = require("./screens/hero-list/hero-list.component");
var monster_component_1 = require("./monster/monster.component");
var moster_list_component_1 = require("./monster/moster-list/moster-list.component");
var hero_unit_component_1 = require("./component/hero-unit/hero-unit.component");
var pipes_pipe_1 = require("./pipe/pipes.pipe");
var gender_pipe_1 = require("./pipes/gender.pipe");
var admin_dashbord_component_1 = require("./screen/admin-dashbord/admin-dashbord.component");
var dasboard_component_1 = require("./screen/admin/dasboard/dasboard.component");
var admin_layout_component_1 = require("./screen/admin-layout/admin-layout.component");
var home_component_1 = require("./screen/home/home.component");
var http_1 = require("@angular/common/http");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                heros_component_1.HerosComponent,
                hero_list_component_1.HeroListComponent,
                monster_component_1.MonsterComponent,
                moster_list_component_1.MosterListComponent,
                hero_unit_component_1.HeroUnitComponent,
                pipes_pipe_1.PipesPipe,
                gender_pipe_1.GenderPipe,
                admin_dashbord_component_1.AdminDashbordComponent,
                dasboard_component_1.DasboardComponent,
                admin_layout_component_1.AdminLayoutComponent,
                home_component_1.HomeComponent
            ],
            imports: [
                http_1.HttpClientModule,
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
