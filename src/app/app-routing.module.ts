import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
// import { NewsComponent } from './pages/news/news.component';
import { GruposDeInteresComponent } from './pages/grupos-de-interes/grupos-de-interes.component';
// import { ProyectosComponent } from './pages/proyectos/proyectos.component';
// import { EventosComponent } from './pages/eventos/eventos.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
// import { EventoComponent } from './components/evento/evento.component';
// import { NoticiaComponent } from './components/noticia/noticia.component';
import { IntegrantesComponent } from './pages/integrantes/integrantes.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'news', component: NewsComponent },
  { path: 'grupos', component: GruposDeInteresComponent },
  // { path: 'proyectos', component: ProyectosComponent },
  // { path: 'eventos', component: EventosComponent },
  { path: 'quienes_somos', component: QuienesSomosComponent },
  { path: 'integrantes', component: IntegrantesComponent },
  // { path: 'evento/:id', component: EventoComponent },
  // { path: 'noticia/:id', component: NoticiaComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
