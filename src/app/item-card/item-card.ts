import { Component,Input,Output,EventEmitter} from '@angular/core';
import {ProgrammingLanguage} from '../core/models/programming-language';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-item-card',
  imports: [CommonModule],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css',
})
export class ItemCard {
  @Input() language!: ProgrammingLanguage;
  @Output() selected = new EventEmitter<ProgrammingLanguage>();
  onDetailsClick(): void {
    this.selected.emit(this.language);
  }
}
