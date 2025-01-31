import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthPageComponent } from "./pages/auth-page/auth-page.component";
import { Error404Component } from "../shared/pages/error404/error404.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: AuthPageComponent},
      {path: '**', component: Error404Component}
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class AuthRoutingModule {

}
