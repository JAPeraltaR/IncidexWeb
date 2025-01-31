import { NgModule } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { MaterialModule } from "../material/material.module";
import { HomeRoutingModule } from "./home-routing.module";



@NgModule({
  declarations: [
    MainLayoutComponent,
  ],
  imports: [
    MaterialModule, RouterOutlet, HomeRoutingModule
  ],
  exports: [
    MainLayoutComponent,
   ],
})
export class HomePageModule{

}
