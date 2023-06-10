import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportCommandeComponent } from './import-commande.component';

describe('ImportCommandeComponent', () => {
  let component: ImportCommandeComponent;
  let fixture: ComponentFixture<ImportCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportCommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
