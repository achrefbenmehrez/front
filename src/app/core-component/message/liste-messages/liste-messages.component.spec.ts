import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMessagesComponent } from './liste-messages.component';

describe('ListeMessagesComponent', () => {
  let component: ListeMessagesComponent;
  let fixture: ComponentFixture<ListeMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
