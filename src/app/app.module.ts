import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar.component';
import { catalogComponent } from "./catalog/catalog.component";
import { RegisterComponent } from "./users/register.component";
import { SignInComponent } from "./users/sign-in.component";
import { LoadingSpinnerComponent } from "./components/loading-spinner.component";
import { CatalogRepositoryService } from "./catalog/catalog.repository.service";
import { UserRepositoryService } from "./services/user-repository.service";
import { AccountMenuComponent } from "./account-menu.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    catalogComponent,
    RegisterComponent,
    SignInComponent,
    LoadingSpinnerComponent,
    AccountMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [CatalogRepositoryService, UserRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
