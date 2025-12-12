import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgrammingLanguage } from '../core/models/programming-language';

@Component({
  selector: 'app-items-list',
  imports: [CommonModule],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsList {

  languages: ProgrammingLanguage[] = [
    {
      id: 1,
      name: 'JavaScript',
      description: 'Мова сценаріїв для інтерактивних веб-сторінок.',
      rating: 10
    },
    {
      id: 2,
      name: 'TypeScript',
      description: 'Суворий синтаксичний надбудова над JavaScript.',
      rating: 9
    },
    {
      id: 3,
      name: 'C#',
      description: 'Сучасна об\'єктно-орієнтована мова від Microsoft.',
      rating: 8
    }
  ];

  getRatingColor(rating: number): string {
    if (rating >= 9) return '#2ecc71';
    if (rating >= 6) return '#f1c40f';
    return '#95a5a6';
  }
}
