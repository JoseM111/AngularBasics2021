import {Component} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})
// #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export class ServerComponent {
    //: - ©MEMBER-PROPERTIES|
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/
    servedId: number = 10
    serverStatus: string = 'offline'
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/

    // #━━━━━━━━━━━━━━━ Constructor ━━━━━━━━━━━━━━━
    constructor() {
        //___________
        /**| ™- Math.random() > 0.5 = 50% probability |*/
        this.serverStatus = Math.random() > 0.5
            ? 'offline' : 'online'
    }



    // #━━━━━ Class Methods ━━━━━

    getServerInfo = (): string => {
        //___________
        const {servedId: id, serverStatus: status} = this
        const result: string = `ID: ${id}\nStatus: ${status}`

        return result
    }
    /// --> : getServerStatus

    getColor = () =>
        this.serverStatus === 'online'
            ? 'green' : 'red'
    /// --> : getColor
}
/// --> : ServerComponent
