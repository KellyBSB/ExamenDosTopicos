import { Component } from '@angular/core';
import { async } from '@angular/core/testing';

//base de datos
import {AngularFireDatabase} from '@angular/fire/database'
import {AuthService} from '../services/auth.service'

//import para peliculas
import {PeliculasService} from '../services/peliculas.service'

//observable
import {Observable} from 'rxjs';
//mapa de loso observables
import {map} from 'rxjs/operators';
//imposetar la interface
import {Pelis} from '../model/pelis.interface'
//geolocalizacion
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
//usuario
import {User} from '../share/user.class'
//user
import {modelUser} from '../modelUser/modelUser'



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  //obtener resultados de la interface
  results: Observable<Pelis>;

  //instancia de user
  user: User = new User();
  nameUser:modelUser;

  lat:string='';
  lot: string='';
  term: string = '';
  type: string = '';
  
  datos=[];
  id


  constructor(private fdb:AngularFireDatabase,private geolocation: Geolocation, private authservices: AuthService, private peliculasService: PeliculasService ) {
    
  }
  
//ver datos
/*ionViewDidLoad(){
  this.peliculasService.getData().subscribe((data)=>{this.pelis = data;}, (error)=>{console.log(error)});
}*/

//salir de la seccion
  Onlogout(){
    this.authservices.logout();
    }

    //buscar datos
    searchChanged(): void {

      this.geolocation.getCurrentPosition().then((resp) => {

       this.lat= (resp.coords.latitude).toString(); 
       this.lot= (resp.coords.longitude).toString();

        if(this.user){
          this.results = this.peliculasService.searchMovies(this.term, this.type);
          console.log("resultado",this.term);

          //datos
          this.fdb.database.ref("Peliculas").push({
            
            pelicula: this.term,
            latitud:this.lat,
            longitud: this.lot,
          }
      
        );
        console.log("datos ingresados en la base" );
        }
        
 
      }).catch((error) => {
        console.log('Error al obtenener localizacion', error);
      });

    
    }

   //inicio de la app
   ngAfterViewInit(){
   this.geolocationNative();
   } 

  //geolocalization

  geolocationNative(){

    

    //this.geolocation.getCurrentPosition().then((geoposition:Geoposition)=>{console.log(geoposition)}).catch((error)=>{console.log("error de localizacion"),error});
    this.geolocation.getCurrentPosition().then((resp) => {
       console.log("Latitud",resp.coords.latitude)
       console.log("Longitud",resp.coords.longitude)

     }).catch((error) => {
       console.log('Error getting location', error);
     });

  }

    


  //async onBase(){




}
