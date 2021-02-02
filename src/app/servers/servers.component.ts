import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `
  styles: [`
        .button {
          padding-bottom: 8px;
        }
        
        /*.server-name {*/
        /*  padding-top: 5px;*/
        /*}*/
        
        button:hover {
            background-color: navy;
            text-shadow: 1px 2px black;
            box-shadow: 1px 1px darkgray;
            border: 1px solid gray;
	        transition-property: border-bottom-color;
	        transition-duration: 1.3s;
	        transition-timing-function: ease-in;
	        transition-delay: 0.4s;
        }
  `]
})
// #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export class ServersComponent implements OnInit {
  //: - ©MEMBER-PROPERTIES|
  /**| #™━━━━━━━━━━━━━━━━━━━━━|*/
  allowNewServer: boolean = false
  serverCreationStatus: string = 'No server was created...'
  serverName: string = ''
  isServerCreated: boolean = false
  servers: string[] = ['Test Server', 'Test Server2']
  /**| #™━━━━━━━━━━━━━━━━━━━━━|*/

  constructor() {
    //___________
    setTimeout(() => this.allowNewServer = true, 2000)
  }

  /// --> : constructor
  ngOnInit(): void {
    //___________
  }

  // #━━━━━━━━━━━━━━━ Class Methods ━━━━━━━━━━━━━━━

  onCreateServer = (): void => {
    //___________
    this.isServerCreated = true
    /// -™ Adding our list of servers from the server name
    this.servers.push(this.serverName)

    this.serverCreationStatus = `Name: ( ${this.serverName}-SERVER )`
  }
  /// --> : onCreateServer

  updateServerName = (event: Event) =>
    //___________
    this.serverName = (<HTMLInputElement>event.target).value = ''
  /// --> : updateServerName

}
/**| - END OF: @ServersComponent |*/
