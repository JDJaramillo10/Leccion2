import { Component } from '@angular/core';
import { PlatosService } from '../../servicios/platos.service';
import { Plato } from '../../interfaz/plato';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  providers: [PlatosService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  titulo:string="Home"

  

  
}
