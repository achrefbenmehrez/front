import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDiffusionComponent } from './liste-diffusion.component';

describe('ListeDiffusionComponent', () => {
  let component: ListeDiffusionComponent;
  let fixture: ComponentFixture<ListeDiffusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDiffusionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDiffusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
