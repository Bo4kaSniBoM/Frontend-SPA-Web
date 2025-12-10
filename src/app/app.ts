import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from './layout/layout';
import { ItemsList } from './items-list/items-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Layout,ItemsList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('spaproject');
}
