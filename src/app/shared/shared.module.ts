import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AButtonComponent } from '../components/atoms/a-button/a-button.component';
import { CHeaderComponent } from '../components/organisms/c-header/c-header.component';
import { RouterModule } from '@angular/router';
import { MPaginationComponent } from '../components/molecules/m-pagination/m-pagination.component';
import { KebabCasePipe } from '../filters/kebab-case.pipe';
import { AngularSvgIconModule } from 'angular-svg-icon';



@NgModule({
  declarations: [
    AButtonComponent,
    CHeaderComponent,
    MPaginationComponent,
    KebabCasePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularSvgIconModule
  ],
  exports: [
    AButtonComponent,
    CHeaderComponent,
    MPaginationComponent,
    KebabCasePipe
  ]
})
export class SharedModule { }
