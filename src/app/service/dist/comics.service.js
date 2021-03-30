"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ComicsService = void 0;
var core_1 = require("@angular/core");
var ComicsService = /** @class */ (function () {
    function ComicsService(http) {
        this.http = http;
        this.API_COMICS = "http://localhost:3000/comics";
    } // gán giá trị cho http
    ComicsService.prototype.getAll = function () {
        return this.http.get(this.API_COMICS);
    };
    ComicsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ComicsService);
    return ComicsService;
}());
exports.ComicsService = ComicsService;
