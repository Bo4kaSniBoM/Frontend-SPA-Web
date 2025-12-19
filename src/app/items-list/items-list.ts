import { Component,OnInit,OnDestroy } from '@angular/core';
import { ProgrammingLanguage } from '../core/models/programming-language';
import {ItemCard} from '../item-card/item-card';
import {Subscription} from 'rxjs';
import {FormsModule} from '@angular/forms';
import {Data} from '../core/services/data'

@Component({
  selector: 'app-items-list',
  imports: [ItemCard,FormsModule],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsList implements OnInit,OnDestroy {
  searchTerm: string = '';
  languages: ProgrammingLanguage[] = [];
  private subscription: Subscription = new Subscription();
  constructor(private data: Data) {}
  ngOnInit(): void {
    this.data.getItems().subscribe(data => {
      this.data.setLanguages(data);
    });
    this.subscription = this.data.languagesPub.subscribe({
      next: (data) => {
        this.languages = data;
      }
    });
  }
  onSearchChange(): void {
    this.data.updateSearch(this.searchTerm);
  }
  onLanguageSelected(lang: ProgrammingLanguage): void {
    console.log('Вибрано:', lang.name);
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
