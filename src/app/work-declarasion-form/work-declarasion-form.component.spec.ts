import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDeclarasionFormComponent } from './work-declarasion-form.component';

describe('WorkDeclarasionFormComponent', () => {
  let component: WorkDeclarasionFormComponent;
  let fixture: ComponentFixture<WorkDeclarasionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkDeclarasionFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkDeclarasionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
