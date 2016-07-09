/**
 * Created by Nagarro on 09-07-2016.
 */
/**
 * Created by Nagarro on 09-07-2016.
 */
import {Component, Input} from "@angular/core";

@Component({
    selector: "my-badge",
    template: `
    Child component --- 
        <button class="btn btn-primary" type="button">
            {{text}} <span class="badge">{{count}}</span>
        </button>
    `
})
export class BadgeComponent{
    sometext: string  = 'First Angular Component - Changed'
    @Input('text') text: string = 'Sent'
    @Input('count') count: number = 23
}