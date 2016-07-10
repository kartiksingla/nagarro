/**
 * Created by Nagarro on 09-07-2016.
 */
import {Component} from "@angular/core";

import {ChildComponent} from "./child.component";

@Component({
    selector: "my-app",
    template: `
    Parent Component----
    <input type="text" placeholder="Enter Country" #c (blur)="0"/>
    
    
    <br><br>
    <child-app coun = "{{c.value}}"></child-app>
    `,
    directives: [ChildComponent]
})
export class AppComponent{



}