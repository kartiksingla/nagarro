/**
 * Created by Nagarro on 09-07-2016.
 */
import {Component} from "@angular/core";

import {ChildComponent} from "./child.component";

@Component({
    selector: "my-app",
    template: `
    Parent Component----
    
    <input type="text" placeholder="Two Way" [(ngModel)]="x"/>
   <input type="text" placeholder="Two Way" [(ngModel)]="x"/>
   {{x}}
   
   
    <select #c (change)="0" >
        <option *ngFor = "let country of countries" value="{{country}}">{{country}}</option>
    </select>
    {{c.value}}
    <br><br>
    <child-app *ngIf="c!==''" coun = "{{c.value}}" (stateChange)="captureEvent($event)"></child-app>
    State Changed is: {{output}}
    `,
    directives: [ChildComponent]
})
export class AppComponent{

 countries: Array<string> = ['India', 'US']
 x: string = "Initil"
 output: string
    captureEvent(event){
       this.output =  event
        console.log(event);
    }
}