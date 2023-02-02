import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeRestrictionComponent } from './age-restriction.component';

describe('AgeRestrictionComponent', () => {
  let component: AgeRestrictionComponent;
  let fixture: ComponentFixture<AgeRestrictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeRestrictionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeRestrictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
