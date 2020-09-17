import { Component, OnInit } from '@angular/core';

//importar
import {Router} from '@angular/router'
import {AuthService} from '../services/auth.service'
import {User} from '../share/user.class'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

//instancia de user
user: User = new User();

//constructor
  constructor(private router: Router, private authSvc: AuthService) { }

  ngOnInit() {
  }

  //metodo de login
  async onLogin(){
    const user = await this.authSvc.onlogin(this.user);
    if(user){
      console.log('login correcto');
      this.router.navigateByUrl('/home')

    }


  }



}
