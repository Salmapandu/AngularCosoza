import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCertAndLicenseComponent } from './manage-cert-and-license.component';

describe('ManageCertAndLicenseComponent', () => {
  let component: ManageCertAndLicenseComponent;
  let fixture: ComponentFixture<ManageCertAndLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageCertAndLicenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageCertAndLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
