import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieCommandeComponent } from './saisie-commande.component';

describe('SaisieCommandeComponent', () => {
  let component: SaisieCommandeComponent;
  let fixture: ComponentFixture<SaisieCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisieCommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaisieCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
