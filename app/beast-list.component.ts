import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beast } from './beast.model';

@Component ({
  selector: 'beast-list',
  template: `
  <div class="beast-object" *ngFor="let currentBeast of childBeastList">
    <ul class="list-unstyled">
      <li><h4>Species Type: {{currentBeast.species}}</h4>
      <input *ngIf="currentBeast.onDisplay === true" type="checkbox" (click)="toggleOnDisplay(currentBeast, false)"/> <i>Check if not on display</i>
      </li>
        <ul>
          <li>Name: {{currentBeast.name}}</li>
          <li>Age: {{currentBeast.age}}</li>
          <li>Diet: {{currentBeast.diet}}</li>
          <li>Location: {{currentBeast.location}}</li>
          <li># of Caretakers: {{currentBeast.caretakers}}</li>
          <li>Sex: {{currentBeast.sex}}</li>
          <li>Likes: {{currentBeast.likes}}</li>
          <li>Dislikes: {{currentBeast.dislikes}}</li>
          <button (click)="editButtonHasBeenClicked(currentTask)">Edit!</button>
        </ul>
    </ul>
  </div>
  `
})

export class BeastListComponent {
  @Input() childBeastList: Beast[];

  toggleOnDisplay(clickedBeast: Beast, setCompleteness: boolean) {
  clickedBeast.onDisplay = setCompleteness;
}
 }
