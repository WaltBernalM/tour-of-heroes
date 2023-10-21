import { Injectable } from '@angular/core'
import { Hero } from './hero'
import { HEROES } from './mock-heroes'
import { Observable, of } from 'rxjs'
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {
    /* 
    Angular injects the singleton MessageService into that property when it creates the HeroService.
    This is an example of a typical service-in-service scenario in which you inject 
    the MessageService into the HeroService which is injected into the HeroesComponent.
    */
  }
  getHeroes(): Observable<Hero[]> {
    /* of(HEROES) returns an Observable<Hero[]> that emits a single value, 
    the array of mock heroes.*/
    // This allows to work asynchronously
    const heroes = of(HEROES)

    //send a message when the heroes are fetched
    this.messageService.add('HeroService: fetched heroes')

    return heroes
  }
}
