import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMenuComponent } from './show-menu.component';

describe('ShowMenuComponent', () => {
  let component: ShowMenuComponent;
  let fixture: ComponentFixture<ShowMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
