import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {PersonalInformationComponent} from "./Components/personal-information/personal-information.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSlideToggleModule, PersonalInformationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Insurance Quote Calculator';
}
