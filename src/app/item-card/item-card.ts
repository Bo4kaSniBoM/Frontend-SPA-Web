import { Component,Input } from '@angular/core';
import {ProgrammingLanguage} from '../core/models/programming-language';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-card',
  imports: [CommonModule],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css',
})
export class ItemCard {
  @Input() language!: ProgrammingLanguage;

  getRatingColor(rating: number): string {
    if (rating >= 9) return '#2ecc71';
    if (rating >= 6) return '#f1c40f';
    return '#95a5a6';
  }
}
