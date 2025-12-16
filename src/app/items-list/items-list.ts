import { Component,OnInit } from '@angular/core';
import { ProgrammingLanguage } from '../core/models/programming-language';
import {ItemCard} from '../item-card/item-card';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Data} from '../core/services/data'

@Component({
  selector: 'app-items-list',
  imports: [CommonModule,ItemCard,FormsModule],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsList implements OnInit {
  searchTerm: string = '';
  languages: ProgrammingLanguage[] = [];
  constructor(private data: Data) {
  }
  ngOnInit(): void {
    this.languages = this.data.getItems();
  }
  onLanguageSelected(lang: ProgrammingLanguage): void {
    console.log('Вибрано:', lang.name);
  }
  get filteredLanguages(): ProgrammingLanguage[] {
    if (!this.searchTerm.trim()) {
      return this.languages;
    }
    return this.languages.filter(l =>
      l.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
