import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AButtonComponent } from '../components/atoms/a-button/a-button.component';
import { CHeaderComponent } from '../components/organisms/c-header/c-header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AButtonComponent,
    CHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AButtonComponent,
    CHeaderComponent
  ]
})
export class SharedModule { }
