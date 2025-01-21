import { NgModule } from "@angular/core";
import { CentralComponent } from "./components/central/central.component";
import { LoginPageComponent } from "./pages/loginPage/loginPage.component";

@NgModule({
  declarations: [
    CentralComponent,
    LoginPageComponent
  ],
  imports: [],
  exports: [
    LoginPageComponent
  ]
})

export class LoginModule{

}
