import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ONGSComponent } from './ongs.component';

describe('ONGSComponent', () => {
  let component: ONGSComponent;
  let fixture: ComponentFixture<ONGSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ONGSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ONGSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
