import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatosService {

  constructor(private http: HttpClient) { }

  obtenerDatos(){
    return this.http.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  }

  /*obtenerDatosPorID(id : number){
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`);
  }*/
}
