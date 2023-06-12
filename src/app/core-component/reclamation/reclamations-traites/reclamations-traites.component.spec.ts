import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationsTraitesComponent } from './reclamations-traites.component';

describe('ReclamationsTraitesComponent', () => {
  let component: ReclamationsTraitesComponent;
  let fixture: ComponentFixture<ReclamationsTraitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationsTraitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReclamationsTraitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
