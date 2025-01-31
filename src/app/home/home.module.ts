import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';


@NgModule({
  declarations: [
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthModule
  ]
})
export class HomeModule { }
