import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beast } from './beast.model';

@Component ({
  selector: 'edit-beast',
  template: `
  <div class="beast-edit" *ngIf="childSelectedBeast">
    <h4>Edit <span class="species">{{childSelectedBeast.species}}</span></h4>
    <label>Name:</label>
    <input [(ngModel)]="childSelectedBeast.name">
    <label>Age:</label>
    <input [(ngModel)]="childSelectedBeast.age">
    <label>Diet:</label>
    <input [(ngModel)]="childSelectedBeast.diet">
    <label>Location: </label>
    <input [(ngModel)]="childSelectedBeast.location">
    <label>Caretakers: </label>
    <input [(ngModel)]="childSelectedBeast.caretakers">
    <label>Sex: </label>
    <input [(ngModel)]="childSelectedBeast.sex">
    <label>Likes:</label>
    <input [(ngModel)]="childSelectedBeast.likes">
    <label>Dislikes:</label>
    <input [(ngModel)]="childSelectedBeast.dislikes">
    <button (click)="doneButtonClicked()">Done</button>
  </div>
  `
})

export class EditBeastComponent {
  @Input() childSelectedBeast: Beast;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

 }
