import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierMessageComponent } from './modifier-message.component';

describe('ModifierMessageComponent', () => {
  let component: ModifierMessageComponent;
  let fixture: ComponentFixture<ModifierMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
