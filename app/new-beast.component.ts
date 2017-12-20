import { Component, Output, EventEmitter } from '@angular/core';
import { Beast } from './beast.model';

@Component ({
  selector: 'new-beast',
  template: `
  <div class="footer">
    <div class="container">
      <div class="add-beast">
        <h4>Add Beast</h4>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Species:</label>
              <input #newSpecies>
            </div>
            <div class="form-group">
              <label>Name:</label>
              <input #newName>
            </div>
            <div class="form-group">
              <label>Age:</label>
              <input type="number" #newAge>
            </div>
            <div class="form-group">
              <label>Diet:</label>
              <input #newDiet>
            </div>
            <div class="form-group">
              <label>Location: </label>
              <input #newLocation>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>Caretakers: </label>
              <input type="number" #newCaretakers>
            </div>
            <div class="form-group">
              <label>Sex: </label>
              <input #newSex>
            </div>
            <div class="form-group">
              <label>Likes:</label>
              <input #newLikes>
            </div>
            <div class="form-group">
              <label>Dislikes:</label>
              <input #newDislikes>
            </div>
          </div>
          <button class="btn btn-info" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add</button>
        </div>
      </div>
    </div>
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
