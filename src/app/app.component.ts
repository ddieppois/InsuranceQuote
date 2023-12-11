import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MainComponent} from "./Components/main/main.component";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Insurance Quote Calculator';
}
