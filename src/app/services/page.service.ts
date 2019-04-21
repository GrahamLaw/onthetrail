import { Injectable } from '@angular/core';
import { Page } from '../shared/page';
import { PAGES } from '../shared/pages';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor() { }


  getPages(): Observable<Page[]> {
    return of(PAGES).pipe(delay(2000));
  }

  getPage(id: number): Observable<Page> {
    return of(PAGES.filter((Page) => (Page.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedPage(): Observable<Page> {
    return of(PAGES.filter((Page) => Page.featured)[0]).pipe(delay(2000));
  }

  getPageIds(): Observable<number[] | any> {
    return of(PAGES.map(Page => Page.id ));
  }

}
