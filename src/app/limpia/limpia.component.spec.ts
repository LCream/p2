import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpiaComponent } from './limpia.component';

describe('LimpiaComponent', () => {
  let component: LimpiaComponent;
  let fixture: ComponentFixture<LimpiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimpiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimpiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
