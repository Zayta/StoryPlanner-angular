import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersDragDropComponent } from './characters-dragdrop.component';

describe('CharactersDragDropComponent', () => {
  let component: CharactersDragDropComponent;
  let fixture: ComponentFixture<CharactersDragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersDragDropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
