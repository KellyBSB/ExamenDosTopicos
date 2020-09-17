import { Component, OnInit } from '@angular/core';
//import para peliculas
import {PeliculasService} from '../services/peliculas.service'
//router
//import {Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detallespelis',
  templateUrl: './detallespelis.page.html',
  styleUrls: ['./detallespelis.page.scss'],
})
export class DetallespelisPage implements OnInit {

//varialble
content: any = null;

  constructor(private peliculasService: PeliculasService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.peliculasService.getDetails(id).subscribe(result => this.content = result);

  }

}
