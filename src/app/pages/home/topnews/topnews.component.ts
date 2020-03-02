import { Component, OnInit } from '@angular/core';
import { DatosJsonService } from '../../../services/datos-json.service';
// import { Topnews_card } from '../../../services/topnews.service';

@Component({
  selector: 'app-topnews',
  templateUrl: './topnews.component.html',
  styleUrls: ['./topnews.component.scss']
})
export class TopnewsComponent implements OnInit {
  news: any;

  // topnews: Topnews_card[] = [];

  constructor(
    // private topnewsService: TopnewsService
    private newsData: DatosJsonService
     ) { }

     ngOnInit() {
      this.newsData.get('noticias').subscribe(
        datos => {
           let ArrayDado = [];
           for (let i = 0; i < 3; i++) {
           ArrayDado.push(datos[i]);
           }
          this.news = ArrayDado;
        },
        error_service => {
          console.log(error_service);
        }
      );
    }

}
