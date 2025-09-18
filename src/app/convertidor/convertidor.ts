import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convertidor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './convertidor.html',
  styleUrl: './convertidor.css'
})
export class Convertidor {
  metros: number=0;
  pies: number=0;
  convertiraPies(){
    this.pies = this.metros * 3.28084;
}
convertiraMetros(){
    this.metros = this.pies / 3.28084;
}}