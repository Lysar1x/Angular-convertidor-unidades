import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Convertidor } from "./convertidor/convertidor";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Convertidor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('convertidor-unidades');
}
