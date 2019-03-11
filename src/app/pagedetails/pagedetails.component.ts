import { Component, OnInit } from '@angular/core';
import { Page } from '../shared/page';


@Component({
  selector: 'app-pagedetails',
  templateUrl: './pagedetails.component.html',
  styleUrls: ['./pagedetails.component.scss']
})
export class PagedetailsComponent implements OnInit {

  page: Page;

  constructor() { }

  ngOnInit() {
  }

}
