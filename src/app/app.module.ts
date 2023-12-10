import {NgModule} from "@angular/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";

@NgModule({
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule
  ]
})
class AppModule {
}
