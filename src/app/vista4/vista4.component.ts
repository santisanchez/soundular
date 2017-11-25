import { Component, OnInit } from '@angular/core';

declare var cordova: any;

@Component({
  selector: 'app-vista4',
  templateUrl: './vista4.component.html',
  styleUrls: ['./vista4.component.css']
})
export class Vista4Component implements OnInit {

  constructor() { 
    
   }

  ngOnInit() {
  }

  Notify(){
    cordova.plugins.notification.local.schedule({
        title: 'Sync in progress',
        text: 'Copied 2 of 10 files',
        sound: '"../../../assets/sounds/button_1.mp3',
        vibrate: true
    });
  }
}
