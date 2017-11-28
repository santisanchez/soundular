import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-vista',
    templateUrl: './vista.component.html',
    styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
    notify() {
        console.log("Notificar")
    }
    vibrate() {
        navigator.vibrate([200, 100, 300]);
    }
    alert() {
        alert("Alerta!");
    }

}
