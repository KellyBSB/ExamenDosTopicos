import { Component, OnInit } from '@angular/core';

//importar
import {Router} from '@angular/router'
import {AuthService} from '../services/auth.service'
import {User} from '../share/user.class'
import {AngularFireDatabase} from '@angular/fire/database'

//user
import {modelUser} from '../modelUser/modelUser'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  //instancia de la clase
  user:User = new User();
  nameUser:modelUser = new modelUser();
  name=new modelUser();

//inyectr el service
  constructor(private authSvc: AuthService, private router:Router, private fdb:AngularFireDatabase) { }

  ngOnInit() {
  }
 //metodo register para los nuevos usuarios
 async onRegister(){

  const user = await this.authSvc.onRegister(this.user);

  //si se creo correcto y no devolvio un null
  if(user){
    this.fdb.database.ref("Usuarios").push({

      name: this.nameUser.name

    });
    console.log('todo fue correcto con el registro');
    this.router.navigateByUrl('/home');

  }

 }

}
