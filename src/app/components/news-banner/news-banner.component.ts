import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-banner',
  templateUrl: './news-banner.component.html',
  styleUrls: ['./news-banner.component.scss']
})
export class NewsBannerComponent implements OnInit {
  @Input() news: any;

  constructor() { }

  ngOnInit() {
  }

}
