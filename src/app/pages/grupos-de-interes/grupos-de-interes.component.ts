import { Component, OnInit } from '@angular/core';
import { DatosJsonService } from '../../services/datos-json.service';

@Component({
  selector: 'app-grupos-de-interes',
  templateUrl: './grupos-de-interes.component.html',
  styleUrls: ['./grupos-de-interes.component.scss']
})
export class GruposDeInteresComponent implements OnInit {

  grupos: any = {};


  constructor(private DatosRequest: DatosJsonService) { }

  ngOnInit() {
    this.DatosRequest.get('grupos_interes').subscribe( dato => {
      // console.log(dato);
      this.grupos = dato;
      console.info(this.grupos)
    }, (error_service) => {
      console.log(error_service);
    });
  }

}

