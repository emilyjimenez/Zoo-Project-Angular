import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beast } from './beast.model';

@Component ({
  selector: 'edit-beast',
  template: `
  <div *ngIf="childSelectedBeast">
  <h4>Edit {{childSelectedBeast.species}}</h4>
  <label>Name: {{childSelectedBeast.name}}</label>
  <input [(ngModel)]={{childSelectedBeast.name}}>
  <label>Age: {{childSelectedBeast.age}}</label>
  <input [(ngModel)]={{childSelectedBeast.age}}>
  <label>Diet: {{childSelectedBeast.diet}}</label>
  <input [(ngModel)]={{childSelectedBeast.diet}}>
  <label>Location: {{childSelectedBeast.location}}</label>
  <input [(ngModel)]={{childSelectedBeast.location}}>
  <label>Caretakers: {{childSelectedBeast.caretakers}}</label>
  <input [(ngModel)]={{childSelectedBeast.caretakers}}>
  <label>Sex: {{childSelectedBeast.sex}}</label>
  <input [(ngModel)]={{childSelectedBeast.sex}}>
  <label>Likes: {{childSelectedBeast.likes}}</label>
  <input [(ngModel)]={{childSelectedBeast.likes}}>
  <label>Dislikes: {{childSelectedBeast.dislikes}}</label>
  <input [(ngModel)]={{childSelectedBeast.dislikes}}>
  <button (click)="doneButtonClicked()">Done</button>
  `
})

export class BeastListComponent {
  @Input() childSelectedBeast: Beast;
  @Output() doneButtonClickedSender = new EventEmitter();


 }
