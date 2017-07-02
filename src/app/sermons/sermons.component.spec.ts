import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SermonsComponent } from './sermons.component';

describe('SermonsComponent', () => {
  let component: SermonsComponent;
  let fixture: ComponentFixture<SermonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SermonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SermonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
