import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramModifyComponent } from './program-modify.component';

describe('ProgramModifyComponent', () => {
  let component: ProgramModifyComponent;
  let fixture: ComponentFixture<ProgramModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
