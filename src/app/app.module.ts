import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { NavBarComponent } from './components/nav-bar.component';
import { catalogComponent } from "./components/catalog.component";
import { RegisterComponent } from "./components/sign-in.component";
import { SignInComponent } from "./components/sign-in.component";
import { LoadingComponent } from "./components/loading-spinner.component";
import { DataRepositoryService } from "./services/data-repository.service"
import { AccountMenuComponent } from "./components/account-menu.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    catalogComponent,
    RegisterComponent,
    SignInComponent,
    LoadingComponent,
    AccountMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [DataRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
