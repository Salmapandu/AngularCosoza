import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddEditComponent } from './page-add-edit.component';

describe('PageAddEditComponent', () => {
  let component: PageAddEditComponent;
  let fixture: ComponentFixture<PageAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAddEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
