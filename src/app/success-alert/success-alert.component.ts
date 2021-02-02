import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styles: [`
	    /*___________*/
		p:hover {
			color: white;
            text-shadow: 1px 2px black;
			padding: 20px;
			background-color: #040977;
			border-radius: 7px;
			border: 1px solid gray;
			box-shadow: 6px 4px gray;
            transition: 0.5s;
		}
    `],
})
// #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
