import { Injectable } from '@angular/core';

//impotar

import {AngularFireAuth} from '@angular/fire/auth';
import {User} from '../share/user.class';
import {Router} from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

   //para saber si el usuario esta logiado o no
   public isLogged: any = false;

   constructor(public afAuth: AngularFireAuth, private router: Router) { 

    //de vuelve le estado del loggin para saber si el usuario esta logiado o no
    // si no hay un usuario logeado devolvear un null
    afAuth.authState.subscribe(user => (this.isLogged = user));
  }
    //metodo para logiarse

    async onlogin (user:User){
      try{
        return await this.afAuth.signInWithEmailAndPassword(user.email, user.password);
      }catch (error){
        console.log('error on login user', error);
      }
    }



    //metodo para registrar

    async onRegister (user:User){

      try{
        return await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
      }catch (error){
        console.log('error on register user', error);
      }
    }

    logout(){
      this.afAuth.signOut().then(() => {
        this.router.navigateByUrl('/login');
      })
    }
}  
