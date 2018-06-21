import { Component, OnInit } from '@angular/core';
import { images } from './images';
import { AngularFireDatabase } from 'angularfire2/database';
import { startWith } from 'rxjs/internal/operators';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-slideshow-client',
  template: `
    <div class="slide-wrapper">
      <div *ngFor="let image of images; let i = index">
        <div 
          class="slide"
          *ngIf="i === currentIndex"
          [@imageChange]="currentDirection" 
          [style.background-image]="'url(' + image + ')'"
        ></div>
      </div>
    </div>
  `,
  styles: [`
    .slide-wrapper {
      height: 50vw;
      max-height: 500px;
    }
    
    .slide {
      background-size: cover;
      background-position: 50%;
      background-repeat: no-repeat;
      position: absolute;
      top: 24px;
      bottom: 24px;
      right: 24px;
      left: 24px;
    }
  `],
  animations: [
    trigger('imageChange', [
      transition('void => left', [
        style({transform: 'translateX(100vw)'}),
        animate('300ms ease-in-out')
      ]),
      transition('left => void', [
        animate('300ms ease-in-out', style({transform: 'translateX(-100vw)'}))
      ]),
      transition('void => right', [
        style({transform: 'translateX(-100vw)'}),
        animate('300ms ease-in-out')
      ]),
      transition('right => void', [
        animate('300ms ease-in-out', style({transform: 'translateX(100vw)'}))
      ])
    ])
  ]
})
export class SlideshowClientComponent implements OnInit {
  position: any;
  images: any[] = images;
  currentIndex: number = 0;
  currentDirection: string = 'left';

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    const remote$ = this.db.object('slideshow/').valueChanges();

    remote$
      .pipe(startWith({index: 0, direction: 'left'}))
      .subscribe(event => {
        this.currentIndex = event.index;
        this.currentDirection = event.direction;
      });
  }
}
