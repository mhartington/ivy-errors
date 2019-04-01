import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-cd-error',
  templateUrl: './cd-error.component.html',
  styleUrls: ['./cd-error.component.css']
})
export class CdErrorComponent {
  constructor(private c: ChangeDetectorRef) {
    this.c.detach();
  }
}
