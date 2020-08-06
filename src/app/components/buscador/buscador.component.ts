import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = [];
  value:string;

  constructor( private activatedRoute:ActivatedRoute, private heroesServices:HeroesService, private router:Router ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.value = params['value'];
      this.heroes = this.heroesServices.buscarHeroes(params['value']);
    });
  }

  detallesHeroe(index:number){
    console.log(index);
    this.router.navigate( ['/heroe', index] );
  }
}
