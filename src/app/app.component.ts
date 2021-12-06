import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('chevron', { static: false }) chevronEl: ElementRef;
  @ViewChild('collapsible', { static: false }) collapsibleEl: ElementRef;

  constructor(private renderer: Renderer2) { }

  feedNumber: number;
  isExpanded = false;

  public static isOdd(num): boolean {
    return num % 2 === 1;
  }

  public static isEven(num): boolean {
    return !this.isOdd(num);
  }

  showNumber(inNumber: number): void {
    this.feedNumber = inNumber;
  }

  toggleExpandRules(): void {
    this.isExpanded = !this.isExpanded;
    if (this.isExpanded) {
      this.renderer.removeClass(this.chevronEl.nativeElement, 'chevron-down');
      this.renderer.addClass(this.chevronEl.nativeElement, 'chevron-up');
      this.renderer.addClass(this.collapsibleEl.nativeElement, 'collapsible-expand');
    } else {
      this.renderer.removeClass(this.chevronEl.nativeElement, 'chevron-up');
      this.renderer.addClass(this.chevronEl.nativeElement, 'chevron-down');
      this.renderer.removeClass(this.collapsibleEl.nativeElement, 'collapsible-expand');
    }
  }
}
