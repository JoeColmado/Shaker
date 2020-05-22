import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramControlComponent } from './program-control.component';

describe('ProgramControlComponent', () => {
  let component: ProgramControlComponent;
  let fixture: ComponentFixture<ProgramControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
