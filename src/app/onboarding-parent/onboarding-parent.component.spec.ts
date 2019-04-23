import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingParentComponent } from './onboarding-parent.component';

describe('OnboardingParentComponent', () => {
  let component: OnboardingParentComponent;
  let fixture: ComponentFixture<OnboardingParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
