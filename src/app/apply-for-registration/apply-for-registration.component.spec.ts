import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForRegistrationComponent } from './apply-for-registration.component';

describe('ApplyForRegistrationComponent', () => {
  let component: ApplyForRegistrationComponent;
  let fixture: ComponentFixture<ApplyForRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplyForRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplyForRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
