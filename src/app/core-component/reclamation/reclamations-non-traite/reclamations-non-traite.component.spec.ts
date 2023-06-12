import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationsNonTraiteComponent } from './reclamations-non-traite.component';

describe('ReclamationsNonTraiteComponent', () => {
  let component: ReclamationsNonTraiteComponent;
  let fixture: ComponentFixture<ReclamationsNonTraiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationsNonTraiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReclamationsNonTraiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
