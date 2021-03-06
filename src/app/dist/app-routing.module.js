"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var client_layout_component_1 = require("./screen/client-layout/client-layout.component");
var admin_layout_component_1 = require("./screen/admin-layout/admin-layout.component");
var admin_dashbord_component_1 = require("./screen/admin-dashbord/admin-dashbord.component");
var danh_muc_component_1 = require("./screen/danh-muc/danh-muc.component");
var home_component_1 = require("./screen/home/home.component");
var routes = [
    {
        path: "",
        component: client_layout_component_1.ClientLayoutComponent,
        children: [
            {
                path: "",
                component: home_component_1.HomeComponent
            },
            {
                path: 'danh-muc',
                component: danh_muc_component_1.DanhMucComponent
            }
        ]
    },
    {
        path: "admin",
        component: admin_layout_component_1.AdminLayoutComponent,
        children: [
            {
                path: "dashboard",
                component: admin_dashbord_component_1.AdminDashbordComponent
            }
        ]
    },
    {
        path: "**",
        redirectTo: "",
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
