import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beast } from './beast.model';

@Component ({
  selector: 'beast-list',
  template: `
  <div class="select-style">
    <select (change)="onChange($event.target.value)">
      <option value="onDisplay" selected="selected">On Display</option>
      <option value="notOnDisplay">Not On Display</option>
    </select>
  </div>
  <div class="beast-container">
      <div class="beast-object" *ngFor="let currentBeast of childBeastList | displayness:filterByDisplayness">
        <ul class="list-unstyled">
          <li><h4><span class="species">Species Type:</span></h4> <h4>{{currentBeast.species}}</h4></li>
            <ul>
              <li>Name: {{currentBeast.name}}</li>
              <li>Age: {{currentBeast.age}}</li>
              <li>Diet: {{currentBeast.diet}}</li>
              <li>Location: {{currentBeast.location}}</li>
              <li># of Caretakers: {{currentBeast.caretakers}}</li>
              <li>Sex: {{currentBeast.sex}}</li>
              <li>Likes: {{currentBeast.likes}}</li>
              <li>Dislikes: {{currentBeast.dislikes}}</li>
              <br>
              <input type="checkbox" #beastOnDisplay [checked]="currentBeast.onDisplay" (click)="toggleOnDisplay(currentBeast)"> <i>Check if on display</i>
              <br>
              <br>
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

  filterByDisplayness: string = "onDisplay";

  onChange(filterOption) {
    this.filterByDisplayness = filterOption;
  }

  toggleOnDisplay(clickedBeast: Beast) {

  clickedBeast.onDisplay = !clickedBeast.onDisplay;
}
 }
