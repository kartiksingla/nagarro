
/**
 * Created by Nagarro on 10-07-2016.
 */
import {Component, Input} from "@angular/core";
@Component({
    selector: "child-app",
    template: `
    Child Component----
    Country Name : {{country}}
    <p *ngIf="country == 'India'">{{indiastates}}</p>
    <p *ngIf="country == 'US'">{{usstates}}</p>
    `,

})
export class ChildComponent{

    @Input('coun') country: string;

    indiastates: Array<string> = ['Delhi', 'Mumbai'];
    usstates: Array<string> = ['IL', 'MN']
}