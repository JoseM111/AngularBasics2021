import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-warning-alert',
    // templateUrl: './warning-alert.component.html',
    template: `
      <p class="text" ><strong >Warning Component!!!</strong ></p >
    `,
    styles: [`
	    /*___________*/
		p:hover {
			color: white;
            text-shadow: 1px 2px black;
			padding: 20px;
			background-color: crimson;
			border-radius: 7px;
			border: 1px solid red;
			box-shadow: 6px 4px gray;
			transition: 0.5s;
		}
    `],

})
// #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export class WarningAlertComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
