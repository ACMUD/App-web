import { Component, OnInit } from '@angular/core';
import { DatosJsonService } from '../../services/datos-json.service';
import { MiembrosModel } from '../../models/miembros.models';
import { InfoACModel } from '../../models/info_acm.models';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.scss']
})
export class QuienesSomosComponent implements OnInit {

  bandera = false;
  miembros: MiembrosModel = new MiembrosModel();
  info_acm: InfoACModel = new InfoACModel();

  fotos = [
    {
      "name": "GiGame",
      "url": "https://github.com/ACMUD/Datos_json/blob/master/App_web/imgGrupos/GIGAME.png?raw=true"
    },
    {
      "name": "GiSac",
      "url": "https://github.com/ACMUD/Datos_json/blob/master/App_web/imgGrupos/GISAC.png?raw=true"
    },
    {
      "name": "GiWeb",
      "url": "https://github.com/ACMUD/Datos_json/blob/master/App_web/imgGrupos/GIWEB.png?raw=true"
    },
    {
      "name": "Gump",
      "url": "https://github.com/ACMUD/Datos_json/blob/master/App_web/imgGrupos/GUMP.jpg?raw=true"
    },
    {
      "name": "PyGroup",
      "url": "https://github.com/ACMUD/Datos_json/blob/master/App_web/imgGrupos/PYGROUP.png?raw=true"
    },
  ];
  constructor(private _datosJson: DatosJsonService) { }

  ngOnInit() {
    this._datosJson.get('miembros').subscribe(
      (datos : MiembrosModel) => this.miembros = datos );

    this._datosJson.get('Info_acm').subscribe(
      (datos : InfoACModel) => {this.info_acm = datos; console.log(datos)});
    }

}
