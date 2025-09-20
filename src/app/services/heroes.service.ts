import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroeModel } from '../models/heroe.model';
import { map, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private url = 'https://heroe-app-74f12-default-rtdb.firebaseio.com';
  private puntojson = '.json';

  constructor(private http: HttpClient) {}

  crearHeroe(heroe: HeroeModel) {
    return this.http.post(`${this.url}/heroes${this.puntojson}`, heroe).pipe(
      map((resp: any) => {
        heroe.id = resp.name;
        return heroe;
      })
    );
  }

  actualizarHeroe(heroe: HeroeModel) {
    const heroeTemp = {
      ...heroe,
    };
    delete heroeTemp.id;

    return this.http.put(
      `${this.url}/heroes/${heroe.id}${this.puntojson}`,
      heroeTemp
    );
  }

  borrarHeroe(id: string) {
    return this.http.delete(`${this.url}/heroes/${id}${this.puntojson}`);
  }

  getHeroe(id: string) {
    return this.http.get<HeroeModel>(
      `${this.url}/heroes/${id}${this.puntojson}`
    );
  }

  getHeroes() {
    return this.http
      .get(`${this.url}/heroes${this.puntojson}`)
      .pipe(map(this.crearArreglo), 
      delay(500)
    );
  }

  private crearArreglo(heroeObj: object | any) {
    const heroes: HeroeModel[] = [];
    console.log('heroeObj', heroeObj);

    // si viene vacio de la base de datos
    if (heroeObj === null) {
      return [];
    }

    Object.keys(heroeObj).forEach((key) => {
      const heroe: HeroeModel = heroeObj[key];
      heroe.id = key;

      console.log('data', heroe);
      heroes.push(heroe);
    });

    return heroes;
  }
}
