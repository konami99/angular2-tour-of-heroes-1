/// <reference path="../node_modules/angular2/typings/browser.d.ts" />

import { bootstrap }    from 'angular2/platform/browser';
import { AppComponent } from './app.component';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Location, LocationStrategy, HashLocationStrategy } from 'angular2/router'
import { provide, enableProdMode } from 'angular2/core'


if(webpack.ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent);