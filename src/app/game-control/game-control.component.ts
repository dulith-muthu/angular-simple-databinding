import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  AfterViewInit,
  ElementRef,
  Renderer2
} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit, AfterViewInit {
  @Output() outNumber: EventEmitter<number> = new EventEmitter();
  index = 0;
  runInterval: number = null;
  loaderEl: any;

  constructor(private elRef: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.loaderEl = this.elRef.nativeElement.querySelector('#loader');
  }

  startGame(): void {
    if (!this.runInterval) {
      this.renderer.setStyle(this.loaderEl, 'display', 'inline-block');
      this.emitNumber();
      this.runInterval = window.setInterval(() => {
        this.emitNumber();
      }, 1000);
    }
  }

  stopGame(): void {
    if (this.runInterval) {
      clearInterval(this.runInterval);
      this.runInterval = null;
      this.renderer.setStyle(this.loaderEl, 'display', 'none');
    }
  }

  emitNumber(): void {
    this.index++;
    this.outNumber.emit(this.index);
  }
}
