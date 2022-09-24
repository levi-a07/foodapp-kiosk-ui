import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetUserPassComponent } from './reset-user-pass.component';

describe('ResetUserPassComponent', () => {
  let component: ResetUserPassComponent;
  let fixture: ComponentFixture<ResetUserPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetUserPassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetUserPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
