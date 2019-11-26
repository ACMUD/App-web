import { Component, OnInit } from '@angular/core';
import { DatosJsonService } from '../../services/datos-json.service';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.scss']
})
export class IntegrantesComponent implements OnInit {

  integrantes: any;

  constructor(private DatosRequest: DatosJsonService) { }

  ngOnInit() {
    
    this.DatosRequest.get('miembros').subscribe( dato => {
      // console.log(dato);
      this.integrantes = dato;
      console.info(this.integrantes)
    }, (error_service) => {
      console.log(error_service);
    });
  }

}
