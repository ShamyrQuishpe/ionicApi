import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
})
export class PokemonListPage {
  pokemonName: string = ''; 
  pokemon: any = null; 
  loading: boolean = false; 

  constructor(private http: HttpClient) {}

  fetchPokemon() {
    if (!this.pokemonName.trim()) {
      alert('Please enter a Pokémon name!');
      return;
    }

    this.loading = true;
    this.http
      .get(`https://pokeapi.co/api/v2/pokemon/${this.pokemonName.toLowerCase()}`)
      .subscribe(
        (data: any) => {
          this.pokemon = data;
          this.loading = false;
        },
        (error) => {
          alert('Pokémon not found!');
          this.loading = false;
        }
      );
  }
}
