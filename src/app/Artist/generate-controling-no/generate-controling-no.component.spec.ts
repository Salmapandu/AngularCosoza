import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateControlingNoComponent } from './generate-controling-no.component';

describe('GenerateControlingNoComponent', () => {
  let component: GenerateControlingNoComponent;
  let fixture: ComponentFixture<GenerateControlingNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateControlingNoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateControlingNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
