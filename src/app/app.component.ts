import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
// import autoScroll from 'dom-autoscroller';
// import AutoScrollerFactory from 'dom-autoscroller';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-dnd';
  sectionA = [
    { id: 1, name: 'Section A value One' },
    { id: 2, name: 'Section A value Two' },
    { id: 3, name: 'Section A value Three' },
    { id: 4, name: 'Section A value Four' },
    { id: 5, name: 'Section A value Five' },
]
sectionB = [
  { id: 1, name: 'section B value one'}
]
scroll: any;
@ViewChild('autoscroll1') autoscroll1: ElementRef | any;
@ViewChild('autoscroll2') autoscroll2: ElementRef | any;

  constructor(private dragulaService: DragulaService) {}
  
  ngOnInit() {
    // autoScroll([
    //   this.autoscroll1.nativeElement,
    //   this.autoscroll2.nativeElement
    //  ], {
    //   margin: 35,
    //   maxSpeed: 4,
    //   scrollWhenOutside: true,
    //   autoScroll() {
    //    return this.down;
    //   }
    // });
   
    this.dragulaService.createGroup('DRAGULA_CONTAINER', {
      accepts: (target: any) => {
        return target.id !== "source";
      },
      copy: (source) => {
        return source.id === "source";
      },
      copyItem: (item) => {
        return item;
      }
    });
  }
}
