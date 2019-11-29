import { Component, OnInit } from '@angular/core';
import { DatosJsonService } from '../../services/datos-json.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: any;

  constructor(private news_data: DatosJsonService) { }

  ngOnInit() {
    this.news_data.get('noticias').subscribe(
      datos => {
        this.news = datos;
      },
      error_service => {
        console.log(error_service);
      }
    );
  }
}
