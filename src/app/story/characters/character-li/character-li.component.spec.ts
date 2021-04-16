import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterLiComponent } from './character-li.component';

describe('CharacterLiComponent', () => {
  let component: CharacterLiComponent;
  let fixture: ComponentFixture<CharacterLiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterLiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
