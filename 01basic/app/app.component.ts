/**
 * Created by Nagarro on 09-07-2016.
 */
import {Component} from "@angular/core";
import {BadgeComponent} from "./badge.component";

@Component({
    selector: "my-app",
    template: `
    Parent Component----
    <br>
    <div *ngFor="let obj of list"> 
        <my-badge [text]="obj.text" count="{{obj.count}}"></my-badge>
    </div>
    
       
    `,
    directives: [BadgeComponent]
})
export class AppComponent{
    list: any = [
        {text: 'Message', count: 5},
        {text: 'Sent', count: 53}
    ]
}