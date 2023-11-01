import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsbarComponent } from './statsbar.component';

describe('StatsbarComponent', () => {
  let component: StatsbarComponent;
  let fixture: ComponentFixture<StatsbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatsbarComponent]
    });
    fixture = TestBed.createComponent(StatsbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
