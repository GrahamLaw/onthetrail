import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MainComponent } from './main.component';
// import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Page } from '../shared/page';
import { PageService } from '../services/page.service';
import { PAGES } from '../shared/pages';
import { baseURL } from '../shared/baseurl';

import { Observable, of } from 'rxjs';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {

    let dishServiceStub = {
      getDishes: function(): Observable<Page[]> {
        return of(PAGES);
      }
    };

    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule,
        // MaterialModule,
        FlexLayoutModule,
        RouterTestingModule.withRoutes([{ path: 'main', component: MainComponent }])
      ],
      declarations: [ MainComponent ],
      providers: [
        { provide: PageService },
        { provide: 'BaseURL', useValue: baseURL },
      ]
    })
    .compileComponents();

    let Pageservice = TestBed.get(PageService);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('pages items should be 4', () => {
    expect(component.pages.length).toBe(4);
    expect(component.pages[1].name).toBe('Zucchipakoda');
    expect(component.pages[3].featured).toBeFalsy();
  });

  it('should use dishes in the template', () => {
    fixture.detectChanges();

    let de:      DebugElement;
    let el:      HTMLElement;
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
    
    expect(el.textContent).toContain(PAGES[0].name.toUpperCase());

  });

});
