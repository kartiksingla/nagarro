
/**
 * Created by Nagarro on 10-07-2016.
 */
import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
    selector: "child-app",
    template: `
    Child Component----
    Country Name : {{country}}
    <p>{{states}}</p>
    
    <select #s (change)="onStateChange(s.value)">
        <option *ngFor = "let state of states" value="{{state}}">{{state}}</option>
    </select>
    `,

})
export class ChildComponent{

    @Input('coun') country: string;
    @Output('stateChange') stateChange: EventEmitter = new EventEmitter() ;


    indiastates: Array<string> = ['Delhi', 'Mumbai'];
    usstates: Array<string> = ['IL', 'MN']
    states:Array<string> = [];

    ngOnChanges(){
        console.log('Property Change')
        if(this.country == 'India'){
            this.states = this.indiastates
        }
        else  if(this.country == 'US'){
            this.states = this.usstates
        }
    }

    onStateChange(value:string){
       // this.stateChange =  new EventEmitter();
        this.stateChange.emit(value);
    }
}