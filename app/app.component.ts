import { Component } from '@angular/core';
import { Beast } from './beast.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Hyrule Zoo</h1>
  <beast-list [childBeastList]="masterBeastList" (clickSender)="editBeast($event)"></beast-list>
  <edit-beast [childSelectedBeast]="selectedBeast" (doneButtonClickedSender)="finishedEditing()"<edit-beast>
  </div>
  `
})

export class AppComponent {
masterBeastList: Beast[] = [
  new Beast ("Moblin", "Bubs", 15, "Carnivore", "Hyrule Fields", 2, "Male", "Lamb shank", "Link"),
  new Beast ("Gold Skulltula", "Goldie", 5, "Carnivore", "Kokiri Forest", 1, "Female", "Dark, damp spaces", "Normal skulltulas"),
  new Beast ("Baby Dodongo", "Fira", 1, "Carnivore", "Death Mountain", 4, "Female", "Spicy foods", "the cold"),
  new Beast ("Deku baba", "Harold", 2, "Herbivore", "Kokiri Forest", 1, "Female", "Sunny spots", "Epona")
  ];

selectedBeast = null;

editBeast(clickedBeast) {
  this.selectedBeast = clickedBeast;
}

finishedEditing() {
  this.selectedBeast = null;
}

}
