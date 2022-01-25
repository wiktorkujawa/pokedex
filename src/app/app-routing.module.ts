import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { 
    path: '', 
    component: LayoutComponent,
    children: [
      { path: 'full', redirectTo: '/'},
      { path: '', loadChildren: () => import('./pages/pokeindex/pokeindex.module').then(m => m.PokeindexModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
