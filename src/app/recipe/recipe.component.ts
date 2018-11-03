import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'oreon-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe: Recipe = new Recipe('Dummy recipe', 'Dummy description', 'dummy image');

  constructor() { }

  ngOnInit() {
  }

}
