import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
})
export class AppModule { }
