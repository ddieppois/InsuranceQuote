import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from './app-routing.module';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    MatTableModule
  ],
  providers: [],
})
export class AppModule { }
