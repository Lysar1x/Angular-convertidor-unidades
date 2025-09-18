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
}
