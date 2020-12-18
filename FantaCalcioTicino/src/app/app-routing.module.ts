import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './page/account/account.component';
import { ClassificaComponent } from './page/classifica/classifica.component';
import { ErrorComponent } from './page/error/error.component';
import { FormazioneComponent } from './page/formazione/formazione.component';
import { GestioneComponent } from './page/gestione/gestione.component';
import { HomeComponent } from './page/home/home.component';
import { LiveComponent } from './page/live/live.component';
import { RegolamentoComponent } from './page/regolamento/regolamento.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'formazione', component: FormazioneComponent},
  {path: 'live', component: LiveComponent},
  {path: 'classifica', component: ClassificaComponent},
  {path: 'regolamento', component: RegolamentoComponent},
  {path: 'gestione', component: GestioneComponent},
  {path: 'account', component: AccountComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
