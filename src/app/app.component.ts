import { Component } from '@angular/core';

@Component({
  selector: 'oreon-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showRecipe: boolean = true;
  showShoppingList: boolean;

}
