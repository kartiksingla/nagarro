/**
 * Created by Nagarro on 09-07-2016.
 */
/* Avoid: 'error TS2304: Cannot find name <type>' during compilation */
///<reference path="../../typings/index.d.ts"/>

import {AppComponent} from "./app.component";
import {bootstrap} from "@angular/platform-browser-dynamic";

bootstrap(AppComponent, []);