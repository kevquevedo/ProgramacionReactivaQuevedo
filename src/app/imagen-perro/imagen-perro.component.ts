import { Component, OnDestroy, OnInit } from '@angular/core';
import { tap, map, Subscription } from 'rxjs';
import { RazasPerrosService } from '../servicios/razas-perros.service';

@Component({
  selector: 'app-imagen-perro',
  templateUrl: './imagen-perro.component.html',
  styleUrls: ['./imagen-perro.component.css']
})
export class ImagenPerroComponent implements OnInit, OnDestroy {

  imagen: string | undefined;
  nombreRaza: string | undefined;
  imagenSub: Subscription;
  razaSub: Subscription;
  razasSelec: string | any;

  constructor(private razasService: RazasPerrosService) { }

  ngOnInit(): void {

    this.imagenSub = this.razasService.imagen$.subscribe(respuesta => {
      this.imagen = respuesta;
    });

    this.razaSub = this.razasService.razaSeleccionada$.subscribe(respuesta =>{
      this.nombreRaza = respuesta;
      console.log("imagen" + this.nombreRaza);
    })

    this.razasService.razas$.pipe(
      map(perros => { return perros.filter(perro => perro == 'bulldog') })
    ).subscribe(response =>{ this.razasSelec = response.shift() });

  }

  ngOnDestroy(): void {
    this.imagenSub.unsubscribe();
    this.razaSub.unsubscribe();
  }


}

class RazasPerros{

  raza: string;
}
