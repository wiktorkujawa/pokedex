import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { PokeindexModule } from './pages/pokeindex/pokeindex.module';
import { SharedModule } from './shared/shared.module';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RegisterComponent } from './pages/register/register.component';
import { FormlyFieldInput } from './fields/input/input.component';
import { FormlyFieldPassword } from './fields/password/password.component';
import { LoginComponent } from './pages/login/login.component';
import { CatchedPokemonsComponent } from './pages/catched-pokemons/catched-pokemons.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';
import { RankingComponent } from './pages/ranking/ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    RegisterComponent,
    FormlyFieldInput,
    FormlyFieldPassword,
    LoginComponent,
    CatchedPokemonsComponent,
    WishListComponent,
    RankingComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    PokeindexModule,
    SharedModule,
    FormlyModule.forRoot({
      types: [ {
        name : 'input',
        component: FormlyFieldInput
      },
      {
        name: 'password',
        component: FormlyFieldPassword
      }
    ]
    }),
    ReactiveFormsModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
