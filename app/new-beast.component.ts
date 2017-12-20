import { Component, Output, EventEmitter } from '@angular/core';
import { Beast } from './beast.model';

@Component ({
  selector: 'new-beast',
  template: `
  <div class="add-beast">
    <h4>Add Beast</h4>
    <label>Species:</label>
    <input #newSpecies>
    <label>Name:</label>
    <input #newName>
    <label>Age:</label>
    <input type="number" #newAge>
    <label>Diet:</label>
    <input #newDiet>
    <label>Location: </label>
    <input #newLocation>
    <label>Caretakers: </label>
    <input type="number" #newCaretakers>
    <label>Sex: </label>
    <input #newSex>
    <label>Likes:</label>
    <input #newLikes>
    <label>Dislikes:</label>
    <input #newDislikes>
    <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value);newSpecies.value='', newName.value='', newAge.value='', newDiet.value='', newLocation.value='', newCaretakers.value='', newSex.value='', newLikes.value='', newDislikes.value=''"> Add</button>
  </div>
  `
})

export class NewBeastComponent {
  @Output() newBeastSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakes: number, sex: string, likes: string, dislikes: string) {
    var newBeastToAdd: Beast = new Beast(species, name, age, diet, location, caretakes, sex, likes, dislikes);
    this.newBeastSender.emit(newBeastToAdd);
  }
 }
