import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterMessageComponent } from './ajouter-message.component';

describe('AjouterMessageComponent', () => {
  let component: AjouterMessageComponent;
  let fixture: ComponentFixture<AjouterMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
