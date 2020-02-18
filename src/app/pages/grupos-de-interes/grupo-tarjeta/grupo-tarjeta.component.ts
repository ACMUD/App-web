import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grupo-tarjeta',
  templateUrl: './grupo-tarjeta.component.html',
  styleUrls: ['./grupo-tarjeta.component.scss']
})
export class GrupoTarjetaComponent implements OnInit {
  @Input() grupos: {};

  constructor() { }

  ngOnInit() {
  }

}
