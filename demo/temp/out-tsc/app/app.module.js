import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula';
import { EXAMPLES } from './examples';
import { DemoComponent } from './app.component';
var DragulaDemoModule = (function () {
    function DragulaDemoModule() {
    }
    return DragulaDemoModule;
}());
DragulaDemoModule = __decorate([
    NgModule({
        declarations: [
            DemoComponent
        ].concat(EXAMPLES),
        imports: [
            BrowserModule,
            FormsModule,
            DragulaModule,
            CommonModule
        ],
        providers: [],
        bootstrap: [DemoComponent]
    })
], DragulaDemoModule);
export { DragulaDemoModule };
//# sourceMappingURL=/Users/jclark/Documents/src/gas/ng2-dragula/demo/src/app/app.module.js.map