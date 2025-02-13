import { Component } from '@angular/core';
import { Plato } from '../../interfaz/plato';
import { PlatosService } from '../../servicios/platos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-platos',
  standalone: true,
  imports: [CommonModule],
  providers: [PlatosService],
  templateUrl: './platos.component.html',
  styleUrl: './platos.component.css'
})
export class PlatosComponent {
  titulo:string="Platos"

  platos: Plato[] = [];

  constructor(private platosService: PlatosService) {
  }

  ngOnInit(): void {
    this.platosService.obtenerDatos().subscribe(respuesta => {
      const data = respuesta as any; // Aseguramos que es un objeto
      this.platos = data.meals || []; 
    });
  }
}
