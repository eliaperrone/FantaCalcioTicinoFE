import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassificaComponent } from './page/classifica/classifica.component';
import { ErrorComponent } from './page/error/error.component';
import { FormazioneComponent } from './page/formazione/formazione.component';
import { HomeComponent } from './page/home/home.component';
import { LiveComponent } from './page/live/live.component';
import { RegolamentoComponent } from './page/regolamento/regolamento.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'formazione', component: FormazioneComponent},
  {path: 'live', component: LiveComponent},
  {path: 'classifica', component: ClassificaComponent},
  {path: 'regolamento', component: RegolamentoComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
