/**
 * Created by Nagarro on 09-07-2016.
 */
import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    template: `
        <p>Display String : {{sometext}}</p>
    `
})
export class AppComponent{
    let sometext: string  = 'First Angular Component - Changed'
}