import { Component, OnInit } from '@angular/core'
import { Hero } from '../hero'
import { HeroService } from '../hero.service'
import { MessageService } from '../message.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {
    // The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
    /*
    Reserve the constructor for minimal initialization such as wiring constructor parameters to properties. The constructor shouldn't do anything. It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.
    */
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes()

    // Fix to work with Observable class
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));

    /*
    Code asynchronously awaits for the Observable to emit the array of heroes, 
    which could happen now or several minutes from now. 
    The subscribe() method passes the emitted array to the callback, 
    which sets the component's heroes property
    */
  }
}
