import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AButtonComponent } from './components/atoms/a-button/a-button.component';
import { HttpClientModule } from '@angular/common/http';
import { CHeaderComponent } from './components/organisms/c-header/c-header.component';
import { PokeindexModule } from './pages/pokeindex/pokeindex.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    PokeindexModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
