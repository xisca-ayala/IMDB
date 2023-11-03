"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, weight, height, isRetired, nationality, oscarNumber, profession) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarNumber = oscarNumber;
        this.profession = profession;
    }
    Professional.prototype.printProperties = function () {
        var arrayProperties = [
            this.name,
            this.age,
            this.weight,
            this.height,
            this.isRetired,
            this.nationality,
            this.oscarNumber,
            this.profession
        ];
        return arrayProperties;
    };
    return Professional;
}());
exports.Professional = Professional;
