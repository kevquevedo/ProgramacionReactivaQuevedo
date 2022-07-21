import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, filter, Observable, Subject, tap, pipe } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RazasPerrosService {

  public razas$: Observable<string[]>;
  private razas: Subject<string[]>;
  public imagen$: Observable<string>;
  private imagen: Subject<string>;
  private razaSeleccionada: Subject<string>;
  public razaSeleccionada$: Observable<string>;

  constructor(private httpClient: HttpClient) {

    this.razaSeleccionada = new Subject();
    this.razaSeleccionada$ = this.razaSeleccionada.asObservable();
    this.imagen = new Subject();
    this.imagen$ = this.imagen.asObservable();
    this.razas = new Subject();
    this.razas$ = this.razas.asObservable();

    let promise = fetch('https://dog.ceo/api/breeds/list');
    promise.then(response => response.json()).then(response => this.razas.next(response.message));
  }

  obtenerImagen(raza: string){

    this.httpClient.get( `https://dog.ceo/api/breed/${raza}/images/random`
    ).subscribe(respuesta =>{
      this.imagen.next((respuesta as any).message);
      this.razaSeleccionada.next(raza);
    });
  }



}
