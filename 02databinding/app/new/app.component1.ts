
//Intercept input property changes with a setter
//Intercept input property changes with ngOnChanges
import {Component, Input, EventEmitter, SimpleChange}         from '@angular/core';


console.log('in parent');


@Component({
    selector: 'my-cmp',
    template: `<p>Country = {{country}}</p>

            <select #s1 (change)="onCountryChanged(s1.value)">  
                <option *ngFor="let p of states" [value]="p" >{{p}}</option>
            </select>
           
 
    `,
    outputs: ['countryChanged']
})
class MyComponent {
    @Input('coun') country: string = '<no country set>';

    set coun(country: string) {
        console.log('setter called.. ')
        this.country = (country && country.trim()) || '<no country set>';
    }
    get coun() { return this.country; }
    indiastates : Array<string> = ['Delhi', 'Mumbai', 'Chennai'];
    usstates : Array<string> = ['MN', 'IL', 'CA'];
    states: Array<string> = null;
    someproperty: boolean = true;
    constructor() {
        console.log('constructor');
    }

    ngOnInit() {
        console.log('Init');


    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}){

        let log: string[] = [];
        for (let propName in changes) {
            let changedProp = changes[propName];
            let from = JSON.stringify(changedProp.previousValue);
            let to =   JSON.stringify(changedProp.currentValue);
            log.push( `${propName} changed from ${from} to ${to}`);
        }

        console.log(log);
        console.log('Change in input');
        if(this.country == 'India'){
            this.states = this.indiastates
        }
        else if(this.country == 'US'){
            this.states = this.usstates;
        }
        else{
            this.states= [];
        }
        console.log('Printing states' + this.states)
    }

    countryChanged = new EventEmitter<string>();
    onCountryChanged (country: string) {
        console.log('Country changed is' + country);
        this.countryChanged.emit(country);
    }
}

@Component({
    selector: 'my-app',
    template: `
    <h2>---- Outer Component --- </h2>
     <select #c (change)="0">  
                <option *ngFor="let c of countries" [value]="c" >{{c}}</option>
           </select>
    <h2>{{country}}</h2>
    
    
    <br>
    <h2>---- Inner Component --- </h2>
    <my-cmp country="{{c.value}}" (countryChanged)="country = $event"></my-cmp>
    <!--<my-cmp [coun]="c.value" (countryChanged)="country = $event"></my-cmp>-->
    `,
    directives: [MyComponent]
})
export class App {
    countries : Array<string> = ['', 'India', 'US'];
}