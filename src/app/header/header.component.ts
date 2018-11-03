import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'oreon-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() showRecipe: EventEmitter<void> = new EventEmitter();
  @Output() showShoppingList: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
