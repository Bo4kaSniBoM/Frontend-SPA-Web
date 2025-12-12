import { Component } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  imports: [Header, Footer],
  styleUrls: ['./layout.css']
})
export class Layout {
}
