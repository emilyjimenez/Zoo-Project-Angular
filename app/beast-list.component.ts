import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beast } from './beast.model';

@Component ({
  selector: 'beast-list',
  template: `
  <div class="beast-container">
    <div class="beast-object" *ngFor="let currentBeast of childBeastList">
      <ul class="list-unstyled">
        <li><h4><span class="species">Species Type:</span></h4> <h4>{{currentBeast.species}}</h4>
        <input *ngIf="currentBeast.onDisplay === true" type="checkbox" checked (click)="toggleOnDisplay(currentBeast, true)"/> <i>Check if on display</i>
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
            <button (click)="editButtonHasBeenClicked(currentBeast)">Edit</button>
          </ul>
      </ul>
    </div>
  </div>
  `
})

export class BeastListComponent {
  @Input() childBeastList: Beast[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(beastToEdit: Beast) {
    this.clickSender.emit(beastToEdit);
  }

  toggleOnDisplay(clickedBeast: Beast, setCompleteness: boolean) {
  clickedBeast.onDisplay = setCompleteness;
}
 }
