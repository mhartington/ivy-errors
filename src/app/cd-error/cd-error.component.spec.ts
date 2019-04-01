import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdErrorComponent } from './cd-error.component';

describe('CdErrorComponent', () => {
  let component: CdErrorComponent;
  let fixture: ComponentFixture<CdErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
