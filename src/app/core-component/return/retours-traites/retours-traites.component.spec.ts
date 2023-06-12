import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetoursTraitesComponent } from './retours-traites.component';

describe('RetoursTraitesComponent', () => {
  let component: RetoursTraitesComponent;
  let fixture: ComponentFixture<RetoursTraitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetoursTraitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetoursTraitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
