import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondChallengeComponent } from './second-challenge.component';

describe('SecondChallengeComponent', () => {
  let component: SecondChallengeComponent;
  let fixture: ComponentFixture<SecondChallengeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondChallengeComponent]
    });
    fixture = TestBed.createComponent(SecondChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
