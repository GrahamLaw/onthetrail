import { Component, OnInit } from '@angular/core';
import { Page } from '../shared/page';
import { PAGES } from '../shared/pages';
import { PageService } from '../services/page.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {



  pages: Page[];

  selectedPage = Page[0];

  constructor(private pageService: PageService) { }

  ngOnInit() {
    // this.pages = this.pageService.getPages();
    this.pageService.getPages().subscribe(pages => this.pages = pages);
  }

  onSelect(page: Page) {
    this.selectedPage = page;
  }
}
