import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { RazasPerrosService } from '../servicios/razas-perros.service';

@Component({
  selector: 'app-lista-razas',
  templateUrl: './lista-razas.component.html',
  styleUrls: ['./lista-razas.component.css']
})
export class ListaRazasComponent implements OnInit {

  razas: Array<string>;
  titulos: string[] = ['raza']
  datosTabla: any;

  constructor(private listado: RazasPerrosService) {}

  ngOnInit(): void {
    this.listado.razas$.subscribe(response => {
      this.razas = response;
      this.datosTabla = this.razas;
    });
  }

  clickLinea(row: string){
    this.listado.obtenerImagen(row);
  }


}
