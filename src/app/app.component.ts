import { Component } from '@angular/core';
import { trigger, transition, group, style, animate} from '@angular/animations';
import { query } from '@angular/animations/src/animation_metadata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation',[
        transition('1 => 2', [
            style({ height: '!'}),
            query(':enter', style({transform: 'translateX(100%)'})),
            query(':enter , :leave', style({ position: 'absolute', top: 0, left:0 ,right:0})),
            group([
                query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1', style({transform: 'translateX(-100%)'}))]),
                query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1', style({transform: 'translateX(0)'}))]),
            ])
        ]),
        transition('2 => 1', [
            style({ height: '!'}),
            query(':enter', style({transform: 'translateX(-100%)'})),
            query(':enter , :leave', style({ position: 'absolute', top: 0, left:0 ,right:0})),
            group([
                query(':leave', [animate('0.3s cubic-bezier(.35, 0, .25, 1', style({transform: 'translateX(-100%)'}))]),
                query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25, 1', style({transform: 'translateX(-100%)'}))]),
            ])
        ])
    ])
  ]
})
export class AppComponent {
  title = 'app';
  public audio;

  public playSound(){
    this.audio = new Audio();
    this.audio.src = "../../../assets/sounds/button_1.mp3";
    this.audio.load();
    this.audio.play();
  }
  getDepth(outlet){
    return outlet.activatedRouteData['depth'];
  }
}
