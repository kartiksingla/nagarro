import {Component} from 'angular2/core';
import {MyComonent1Component} from './mycomp1.component';
import {MyComonent2Component} from './mycomp2.component';
import {CommonService} from "./services/common.service";

@Component({
    selector: 'my-app',
    template:`
            <h1>See if this works</h1>
            <input type="text" [(ngModel)]="abc">
            <my-comp1></my-comp1>
            <br><br>
            <my-comp2></my-comp2>
            `,
    directives: [MyComonent1Component, MyComonent2Component],
    providers: [CommonService]

})
export class AppComponent {
  abc = "ravi"
}