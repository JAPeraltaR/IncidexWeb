import { NgModule } from "@angular/core";


import { FormLoginComponent } from "./components/form-login/form-login.component";
import { AuthPageComponent } from "./pages/auth-page/auth-page.component";
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
  declarations: [
    AuthPageComponent,
    FormLoginComponent,
  ],
  imports: [ AuthRoutingModule ],
  exports: [
    AuthPageComponent
  ]
})

export class AuthModule{

}
