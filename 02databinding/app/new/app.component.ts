import {Component, Input, EventEmitter}         from '@angular/core';
import {BooleanConverter, InputConverter} from "./converter";



console.log('in parent');


@Component({
    selector: 'my-cmp',
    template: `<p *ngIf="test">Country = {{country}} : {{test}}</p>

            <select #s1 (change)="onCountryChanged(s1.value)">  
                <option *ngFor="let p of states" [value]="p" >{{p}}</option>
            </select>
           
    <input type="text" placeholder="Two way binding in child" [(ngModel)]="abc"/> 
     {{abc}}
     
   <!--  Same as two way binding <input [value]="currentHero.firstName"
       (input)="currentHero.firstName=$event.target.value" >
       
       
       [(x)]="e" <==> [x]="e" (xChange)="e=$event"
       -->

    `,
    outputs: ['countryChanged']
})
class MyComponent {
    @Input('coun') country = 'India';
    @Input('abc') abc;

    @Input('test')
    // @InputConverter(BooleanConverter)
    test:boolean;
    indiastates : Array<string> = ['Delhi', 'Mumbai', 'Chennai'];
    usstates : Array<string> = ['MN', 'IL', 'CA'];
    states: Array<string> = null;
    someproperty: boolean = false;
    constructor() {
        console.log('constructor');
    }

    ngOnInit() {
        console.log('Init');


    }

    ngOnChanges(){
        console.log('Change in input');
        if(this.country == 'India'){
            this.states = this.indiastates
        }
        else{
            this.states = this.usstates;
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
    <button (click)="toggle()">Toggle Value</button>
    <p *ngIf="test">Same para</p>
    <input type="text" placeholder="Two way binding" [(ngModel)]="abc"/>
     <input type="text" placeholder="Two way binding" [(ngModel)]="abc"/> 
     {{abc}}
    
    <br>
    <h2>---- Inner Component --- </h2>
    <my-cmp coun="{{c.value}}" test="{{test}}"  (countryChanged)="country = $event"></my-cmp>
    <!--<my-cmp [coun]="c.value" (countryChanged)="country = $event"></my-cmp>-->
    `,
    directives: [MyComponent]
})
export class App {
    countries : Array<string> = ['India', 'US'];
    test: boolean = true;
    toggle(){
        this.test = !this.test;
    }
}



