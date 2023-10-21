import { Component } from '@angular/core'
import { Hero } from '../hero'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  constructor(private heroService: HeroService) {
    // The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
    /*
    Reserve the constructor for minimal initialization such as wiring constructor parameters to properties. The constructor shouldn't do anything. It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.
    */
  }
  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes()
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes)); // Fix to work with Observable class

    /*
    Code asynchronously awaits for the Observable to emit the array of heroes, 
    which could happen now or several minutes from now. 
    The subscribe() method passes the emitted array to the callback, 
    which sets the component's heroes property
    */
  }
  ngOnInit(): void {
    this.getHeroes()
  }

  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  }
  heroes: Hero[] = []
  selectedHero?: Hero
  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }
}
