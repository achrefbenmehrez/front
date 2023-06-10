import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesNonTraitesComponent } from './commandes-non-traites.component';

describe('CommandesNonTraitesComponent', () => {
  let component: CommandesNonTraitesComponent;
  let fixture: ComponentFixture<CommandesNonTraitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandesNonTraitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandesNonTraitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
