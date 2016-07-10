/**
 * Created by Nagarro on 09-07-2016.
 */
/* Avoid: 'error TS2304: Cannot find name <type>' during compilation */
///<reference path="../../typings/index.d.ts"/>

// import {AppComponent} from "./app.component";
import {CountdownTimerComponent} from "./app.component2";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {CountdownLocalVarParentComponent} from "./app.component2";


bootstrap(CountdownLocalVarParentComponent, []);