import { Component } from '@angular/core';
import { Beast } from './beast.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Hyrule Zoo</h1>
  <beast-list [childBeastList]="masterBeastList"></beast-list>
  </div>
  `
})

export class AppComponent {
masterBeastList: Beast[] = [
  new Beast ("Moblin", "Bubs", 15, "Carnivore", "Hyrule Fields", 2, "Male", "Lamb shank", "Link"),
  new Beast ("Gold Skulltula", "Goldie", 5, "Carnivore", "Kokiri Forest", 1, "Female", "Dark, damp spaces", "Normal skulltulas")
];
 }
