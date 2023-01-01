import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelControleComponent } from './panel-control.component';

describe('PanelControleComponent', () => {
  let component: PanelControleComponent;
  let fixture: ComponentFixture<PanelControleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelControleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
