import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelPopUpComponent } from './excel-pop-up.component';

describe('ExcelPopUpComponent', () => {
  let component: ExcelPopUpComponent;
  let fixture: ComponentFixture<ExcelPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcelPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
