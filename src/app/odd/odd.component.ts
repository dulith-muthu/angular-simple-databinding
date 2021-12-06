import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit, OnChanges {

  @Input() num: number;
  oddNumbers: Array<number> = new Array<number>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['num'].firstChange && AppComponent.isOdd(this.num)) {
      this.oddNumbers.push(this.num);
    }
  }

}
