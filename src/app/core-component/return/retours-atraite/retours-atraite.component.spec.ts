import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetoursATraiteComponent } from './retours-atraite.component';

describe('RetoursATraiteComponent', () => {
  let component: RetoursATraiteComponent;
  let fixture: ComponentFixture<RetoursATraiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetoursATraiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetoursATraiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
