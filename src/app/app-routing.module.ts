import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CatchedPokemonsComponent } from './pages/catched-pokemons/catched-pokemons.component';
import { LoginComponent } from './pages/login/login.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { RegisterComponent } from './pages/register/register.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';
import { AuthGuard } from './guards/auth.guard';
import { UserResolver } from './resolvers/user.resolver';

const routes: Routes = [
  { 
    path: '', 
    runGuardsAndResolvers: "always",
    component: LayoutComponent, resolve: {
      user: UserResolver
  },
    children: [
      { path: 'full', redirectTo: '/'},
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'pokeindex', loadChildren: () => import('./pages/pokeindex/pokeindex.module').then(m => m.PokeindexModule)},
      { path: 'ranking', component: RankingComponent },
      { path: 'catched-pokemons', component: CatchedPokemonsComponent, canActivate: [AuthGuard] },
      { path: 'wishlist', component: WishListComponent, canActivate: [AuthGuard] }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
