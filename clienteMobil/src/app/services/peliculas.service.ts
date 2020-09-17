import { Injectable } from '@angular/core';

//importst
import {HttpClient} from '@angular/common/http';
//observables
import {Observable} from 'rxjs';
//mapa de loso observables
import {map} from 'rxjs/operators';
//imposetar la interface
import {Pelis} from '../model/pelis.interface'

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  //variables
  private url: string = '';
  private apiKey: string = '5a6ae374';

  constructor(private http:HttpClient) {
   }


   //busyqeda de peliculas

   searchMovies(title: string, type: string) {
    this.url = `https://www.omdbapi.com/?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`;
    console.log(this.url);
    return this.http.get<Pelis>(this.url).pipe(map(results => results['Search']));
  }


   //detalles de las peñiculas

   getDetails(id: string) {
    return this.http.get<Pelis>(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
  

   /*getData(){
     return this.http.get('https://api.themoviedb.org/3/movie/550?api_key=f568611e356b9b8959519e7087e95c83');
   }*/


}
