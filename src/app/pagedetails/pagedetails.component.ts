import { Component, OnInit, Inject } from '@angular/core';
import { Page } from '../shared/page';
import { PageService } from '../services/page.service';
// import { visibility } from '../animations/app.animation';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
// import { flyInOut, expand } from '../animations/app.animation';


@Component({
  selector: 'app-pagedetails',
  templateUrl: './pagedetails.component.html',
  styleUrls: ['./pagedetails.component.scss']
})
export class PagedetailsComponent implements OnInit {

  page: Page;
  pagecopy = null;
  pageIds: number[];
  prev: number;
  next: number;
  errMess: string;
  visibility = 'shown';

  constructor(private pageservice: PageService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder) {
     }

    ngOnInit() {

      this.pageservice.getPageIds()
        .subscribe(pageIds => this.pageIds = pageIds);
      this.route.params
        .switchMap((params: Params) => { this.visibility = 'hidden'; return this.pageservice.getPage(+params['id']); })
        .subscribe(page => { this.page = page; this.pagecopy = page; this.setPrevNext(page.id); this.visibility = 'shown'; },
            errmess => { this.page = null; this.errMess = <any>errmess; });
    }
  
    setPrevNext(pageIds: number) {
      let index = this.pageIds.indexOf(pageIds);
      this.prev = this.pageIds[(this.pageIds.length + index - 1)%this.pageIds.length];
      this.next = this.pageIds[(this.pageIds.length + index + 1)%this.pageIds.length];
    }

    goBack(): void {
      this.location.back();
    }

  

}
