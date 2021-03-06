import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


// import tema matarial
import { MaterialModule } from './temas/material/material.module';


// import mdb
import { MDBBootstrapModule } from 'angular-bootstrap-md';


// import api google maps
import { AgmCoreModule } from '@agm/core';

// servicio de noticias
import { TopnewsService } from './services/topnews.service';


// import de componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BannerComponent } from './pages/home/banner/banner.component';
import { ContactoComponent } from './pages/home/contacto/contacto.component';
import { NewsComponent } from './pages/news/news.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { GruposDeInteresComponent } from './pages/grupos-de-interes/grupos-de-interes.component';
import { GrupoTarjetaComponent } from './pages/grupos-de-interes/grupo-tarjeta/grupo-tarjeta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { EventoComponent } from './components/evento/evento.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { IntegrantesComponent } from './pages/integrantes/integrantes.component';
import { NewsBannerComponent } from './components/news-banner/news-banner.component';
import { NewsCardComponent } from './components/news-card/news-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    ContactoComponent,
    NewsComponent,
    QuienesSomosComponent,
    EventosComponent,
    GruposDeInteresComponent,
    GrupoTarjetaComponent,
    NoticiaComponent,
    EventoComponent,
    ProyectosComponent,
    IntegrantesComponent,
    NewsBannerComponent,
    NewsCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDv_NF3NRZyDg5UjDb5I-0LobD-eXtfIaQ'
    }),
    BrowserAnimationsModule
  ],
  providers: [
    TopnewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
