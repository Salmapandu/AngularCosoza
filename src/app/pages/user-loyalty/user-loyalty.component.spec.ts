import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoyaltyComponent } from './user-loyalty.component';

describe('UserLoyaltyComponent', () => {
  let component: UserLoyaltyComponent;
  let fixture: ComponentFixture<UserLoyaltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserLoyaltyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserLoyaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
