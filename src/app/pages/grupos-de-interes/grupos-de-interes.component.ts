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
      console.log(dato);
      //dato.values=[JSON.parse('"name": "test"')];
      this.grupos = dato;
      for(var i =0; i<this.grupos.length; i++){
          if(i%2==0){
            this.grupos[i].posicion="derecha";
          }else{
            this.grupos[i].posicion="izquierda";
          }

      }
      console.info(this.grupos);
    }, (error_service) => {
      console.log(error_service);
    });
  }

}

