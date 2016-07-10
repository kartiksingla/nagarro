import { Component, OnDestroy, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';

@Component({
    selector: 'countdown-timer',
    template: '<p>{{message}}</p>'
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
    intervalId = 0;
    message = '';
    seconds = 11;
    clearTimer() { clearInterval(this.intervalId); }
    ngOnInit()    { this.start(); }
    ngOnDestroy() { this.clearTimer(); }
    start() { this.countDown(); }
    stop()  {
        this.clearTimer();
        this.message = `Holding at T-${this.seconds} seconds`;
    }
    private countDown() {
        this.clearTimer();
        this.intervalId = window.setInterval(() => {
            this.seconds -= 1;
            if (this.seconds === 0) {
                this.message = 'Blast off!';
            } else {
                if (this.seconds < 0) { this.seconds = 10; } // reset
                this.message = `T-${this.seconds} seconds and counting`;
            }
        }, 1000);
    }
}


/*
@Component({
    selector: 'countdown-parent-lv',
    template: `
  <h3>Countdown to Liftoff (via local variable)</h3>
  <button (click)="timer.start()">Start</button>
  <button (click)="timer.stop()">Stop</button>
  <div>{{timer.seconds}}</div>
  <countdown-timer #timer></countdown-timer>
  `,
    directives: [CountdownTimerComponent]
})
export class CountdownLocalVarParentComponent { }*/



@Component({
    selector: 'countdown-parent-vc',
    template: `
  <h3>Countdown to Liftoff (via ViewChild)</h3>
  <button (click)="start()">Start</button>
  <button (click)="stop()">Stop</button>
  <div class="seconds">{{ seconds() }}</div>
  <countdown-timer></countdown-timer>
  `,
    directives: [CountdownTimerComponent]
})
export class CountdownViewChildParentComponent implements AfterViewInit {
    @ViewChild(CountdownTimerComponent)
    private timerComponent: CountdownTimerComponent;
    seconds() { return 0; }
    ngAfterViewInit() {
        // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
        // but wait a tick first to avoid one-time devMode
        // unidirectional-data-flow-violation error
        setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
    }
    start() { this.timerComponent.start(); }
    stop() { this.timerComponent.stop(); }
}
