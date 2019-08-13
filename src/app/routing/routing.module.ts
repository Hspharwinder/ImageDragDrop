import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDetailComponent } from '../app-detail/app-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from '../app-home/app-home.component';

const routes: Routes = [
  { path:'home', component:AppHomeComponent },
  { path:'appDetail', component:AppDetailComponent, data: { animation: 'heroes' } },  

  // { path: 'superheroes',  component: HeroListComponent, data: { animation: 'heroes' } }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
export const Navigation = [AppDetailComponent,AppHomeComponent]
