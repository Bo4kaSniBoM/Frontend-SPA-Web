import { Component } from '@angular/core';
import { ProgrammingLanguage } from '../core/models/programming-language';
import { ItemCard } from '../item-card/item-card';

@Component({
  selector: 'app-items-list',
  imports: [ItemCard],
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
}
