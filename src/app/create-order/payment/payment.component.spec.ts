import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetACCComponent } from '../../reset-acc/reset-acc.component';

describe('ResetACCComponent', () => {
  let component: ResetACCComponent;
  let fixture: ComponentFixture<ResetACCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetACCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetACCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
