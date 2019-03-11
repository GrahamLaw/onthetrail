import { Component, OnInit } from '@angular/core';
import { Page } from '../shared/page';
import { PageService } from '../services/page.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  page: Page;
  promotion: Promotion;

  constructor(private pageService: PageService,
    private promotionservice: PromotionService) { }

  ngOnInit() {
    // this.page = this.pageService.getFeaturedPage();
    this.pageService.getFeaturedPage().subscribe(page => this.page = page);
    this.promotion = this.promotionservice.getFeaturedPromotion();
  }

}
