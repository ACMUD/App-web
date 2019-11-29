import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-news-banner',
  templateUrl: './news-banner.component.html',
  styleUrls: ['./news-banner.component.scss']
})
export class NewsBannerComponent implements OnInit, OnChanges {
  @Input() news: any;
  FiveNews = [];

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    console.info("ngonchange")
    // console.info(this.news)
    this.FiveNews = this.news.slice(1,5);


  }

}
