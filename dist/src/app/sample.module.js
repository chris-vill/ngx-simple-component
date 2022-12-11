import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './app.component';
console.log(NgModule);
console.log(CommonModule);
console.log(SampleComponent);
let SampleModule = class SampleModule {
};
SampleModule = __decorate([
    NgModule({
        declarations: [
            SampleComponent
        ],
        imports: [
            CommonModule
        ],
        exports: [
            SampleComponent
        ],
    })
], SampleModule);
export { SampleModule };
//# sourceMappingURL=sample.module.js.map