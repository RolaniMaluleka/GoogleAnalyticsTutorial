import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailblaizerComponent } from './trailblaizer.component';

describe('TrailblaizerComponent', () => {
  let component: TrailblaizerComponent;
  let fixture: ComponentFixture<TrailblaizerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrailblaizerComponent]
    });
    fixture = TestBed.createComponent(TrailblaizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
