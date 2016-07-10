/**
 * Created by Nagarro on 09-07-2016.
 */
import {Component} from "@angular/core";
import {BadgeComponent} from "./badge.component";
import {Badge} from "./Badge";

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

    badge1:Badge  = new Badge('Message', 34);
    badge2:Badge  = new Badge('Sent', 4);
    list: Array<Badge> = [
        this.badge1,this.badge2
    ]

    ngOnInit(){
        this.list.push(this.badge1)
    }
}