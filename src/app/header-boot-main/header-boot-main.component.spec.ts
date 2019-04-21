import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBootMainComponent } from './header-boot-main.component';

describe('HeaderBootMainComponent', () => {
  let component: HeaderBootMainComponent;
  let fixture: ComponentFixture<HeaderBootMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBootMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBootMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
