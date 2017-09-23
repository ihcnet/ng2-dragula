import './polyfills.ts';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { DragulaDemoModule } from './app/app.module';
if (environment.production) {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(DragulaDemoModule);
//# sourceMappingURL=/Users/jclark/Documents/src/gas/ng2-dragula/demo/src/main.js.map