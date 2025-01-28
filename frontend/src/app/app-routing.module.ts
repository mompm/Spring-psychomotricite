import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ConsultationsComponent } from './consultations/consultations.component';
import { InfosComponent } from './infos/infos.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: AccueilComponent, pathMatch: 'full' },
  { path: 'activities', component: ActivitiesComponent},
  { path: 'consultations', component: ConsultationsComponent},
  { path: 'infos' , component: InfosComponent},
  { path: 'about' , component: AboutComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
