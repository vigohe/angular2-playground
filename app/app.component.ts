/**
 * Created by vigohe on 11-04-16.
 */

import {Component} from "angular2/core";
@Component({
    selector: "my-app",
    template: `<h1>Hellow World!!! {{name}}</h1>`
})
export class AppComponent {
    name : string
    constructor(){
        this.name = "Angular 2"
    }
}