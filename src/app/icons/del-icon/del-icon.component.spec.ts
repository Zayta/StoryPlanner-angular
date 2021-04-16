import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelIconComponent } from './del-icon.component';

describe('DelIconComponent', () => {
  let component: DelIconComponent;
  let fixture: ComponentFixture<DelIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
