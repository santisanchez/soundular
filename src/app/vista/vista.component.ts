import { Component, OnInit } from '@angular/core';

declare var Media: any;
declare var cordova: any;

@Component({
    selector: 'app-vista',
    templateUrl: './vista.component.html',
    styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {

    }
    notify() {
        console.log("Notificar");
    }
    vibrate() {
        alert("Vibrar");
        navigator.vibrate([200, 100, 300]);
    }
    // alert() {
    //     // var path =  window.location.pathname.replace(/\/[^\/]+\/?$/, '') + "/";
    //     // alert(path);    
    //     var media = new Media( this.getPhoneGapPath() + 'button_1.mp3' );
    //     alert(this.getPhoneGapPath());
    //     // var mp3URL = path + "assets/button_1.mp3";
    //     // var media = new Media(mp3URL, null, null);
    //     media.setVolume(1.0);
    //     media.play();
    // }

    public playMP3() {
        alert(cordova.file.applicationDirectory);
        var path =  window.location.pathname.replace(/\/[^\/]+\/?$/, '') + "/";        
        var mp3URL = window.location.pathname + "assets/button_1.mp3";
        var media = new Media(mp3URL, null, null);
        media.setVolume(1.0);
        media.play();
    }

    serverSound() {
        var media = new Media("http://192.168.1.11:80/sound.mp3");
        navigator.vibrate([300,100,200]);
        media.setVolume(1.0);
        media.play();
    }
    // getPhoneGapPath() {

    //         var path = window.location.pathname;
    //         path = path.substr( path.length - 10 );
    //         return 'file://' + path;
    //     };



    // serverSound() {
    //     let media = new Media("192.168.1.11/sound.mp3",
    //         function () { console.log("Sound Success") },
    //         function (error) {
    //             console.log("Error:" + error)
    //         });
    //         media.play();
    // }

}
