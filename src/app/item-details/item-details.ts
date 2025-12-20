import { Component,OnInit } from '@angular/core';
import {RouterModule,ActivatedRoute} from '@angular/router';
import {Data} from '../core/services/data';
import {ProgrammingLanguage} from '../core/models/programming-language';

@Component({
  selector: 'app-item-details',
  imports: [RouterModule],
  templateUrl: './item-details.html',
  styleUrl: './item-details.css',
})
export class ItemDetails implements OnInit {
  language: ProgrammingLanguage | undefined;
  constructor(
    private route: ActivatedRoute,
    private dataService: Data
  ) {}
  ngOnInit(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    if (idString) {
      const id = Number(idString);
      this.dataService.getItemById(id).subscribe(item => {
        this.language = item;
      });
    }
  }
}
