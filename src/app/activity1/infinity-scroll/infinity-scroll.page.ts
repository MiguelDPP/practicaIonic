import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-infinity-scroll',
  templateUrl: './infinity-scroll.page.html',
  styleUrls: ['./infinity-scroll.page.scss'],
})
export class InfinityScrollPage implements OnInit {

  constructor() { }

  items: any[] = []
  api = 'https://pokeapi.co/api/v2/';
  next = '';

  ngOnInit() {
    this.generateItems();
  }

  private async generateItems() {
    const response = await fetch(`${this.api}pokemon?limit=20`);
    const data = await response.json();
    this.next = data.next;

    for (const pokemon of data.results) {
      const pokemonResponse = await fetch(pokemon.url);
      const pokemonData = await pokemonResponse.json();
      // console.log(pokemonData);
      this.items.push(pokemonData);
    }



    // const count = this.items.length + 1;
    // for (let i = 0; i < 20; i++) {
    //   this.items.push(`Cliente ${count + i}`);
    // }
  }

  async loadData(event: any) {
    this.generateItems();
    
    setTimeout(() => {
      (event as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

  // onIonInfinite(ev) {
  //   this.generateItems();
  //   setTimeout(() => {
  //     (ev as InfiniteScrollCustomEvent).target.complete();
  //   },500);
  // }

}
