import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoTarjetaComponent } from './grupo-tarjeta.component';

describe('GrupoTarjetaComponent', () => {
  let component: GrupoTarjetaComponent;
  let fixture: ComponentFixture<GrupoTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
