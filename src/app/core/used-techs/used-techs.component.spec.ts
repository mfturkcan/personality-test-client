import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedTechsComponent } from './used-techs.component';

describe('UsedTechsComponent', () => {
  let component: UsedTechsComponent;
  let fixture: ComponentFixture<UsedTechsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsedTechsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedTechsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
