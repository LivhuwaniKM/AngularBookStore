import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateviewComponent } from './createview.component';

describe('CreateviewComponent', () => {
  let component: CreateviewComponent;
  let fixture: ComponentFixture<CreateviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
