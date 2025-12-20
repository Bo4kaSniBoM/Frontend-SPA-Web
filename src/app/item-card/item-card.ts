import { Component,Input,Output,EventEmitter} from '@angular/core';
import {ProgrammingLanguage} from '../core/models/programming-language';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-item-card',
  imports: [CommonModule,RouterModule],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css',
})
export class ItemCard {
  @Input() language!: ProgrammingLanguage;
  @Output() selected = new EventEmitter<ProgrammingLanguage>();
}
