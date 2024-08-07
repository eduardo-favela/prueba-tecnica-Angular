import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './components/history/history.component';
import { MealDetailsComponent } from './components/meal-details/meal-details.component';
import { SearchComponent } from './components/search/search.component';
import { WildcardComponent } from './components/wildcard/wildcard.component';

const routes: Routes = [
  { path: 'index', component: SearchComponent, title: 'Buscar platillo' },
  { path: 'details/:id', component: MealDetailsComponent, title: 'Detalle de platillo' },
  { path: 'history', component: HistoryComponent, title: 'Ver historial' },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  {
    path: '**',
    component: WildcardComponent,
    title: '404 Not found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
