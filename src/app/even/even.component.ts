import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit, OnChanges {

  @Input() num: number;
  evenNumbers: Array<number> = new Array<number>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['num'].firstChange && AppComponent.isEven(this.num)) {
      this.evenNumbers.push(this.num);
    }
  }
}
