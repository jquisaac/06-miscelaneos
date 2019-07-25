import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor( private route: ActivatedRoute) {
    console.log('Ruta padre');
    this.route.params.subscribe( parametros => console.log(parametros) );
   }

  ngOnInit() {
  }

}
