import { Injectable } from '@angular/core';
import {ProgrammingLanguage} from '../models/programming-language';

@Injectable({
  providedIn: 'root',
})
export class Data {
  private languages: ProgrammingLanguage[] = [
    {
      id: 1,
      name: 'JavaScript',
      description: 'Основна мова для інтерактивності у веб-браузерах.',
      popularity: 10,
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      categories: ['Frontend', 'Backend', 'Web']
    },
    {
      id: 2,
      name: 'TypeScript',
      description: 'Сувора типізація для JS, робить код надійнішим.',
      popularity: 9.2,
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
      categories: ['Frontend', 'Typed', 'Microsoft']
    },
    {
      id: 3,
      name: 'Python',
      description: 'Ідеальна для новачків, штучного інтелекту та аналізу даних.',
      popularity: 9.8,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
      categories: ['Data Science', 'AI', 'Backend']
    },
    {
      id: 4,
      name: 'C#',
      description: 'Потужна мова від Microsoft для Enterprise та ігор.',
      popularity: 8.5,
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png',
      categories: ['Backend', 'GameDev', 'Desktop']
    },
    {
      id: 5,
      name: 'HTML',
      description: 'Мова розмітки. Фундамент будь-якої веб-сторінки.',
      popularity: 10,
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
      categories: ['Frontend', 'Web', 'Markup']
    },
    {
      id: 6,
      name: 'PHP',
      description: 'Класична мова для створення динамічних сайтів.',
      popularity: 5.5,
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg',
      categories: ['Web', 'Backend', 'Server']
    },
    {
      id: 7,
      name: 'CSS',
      description: 'Відповідає за стиль, кольори та адаптивність сайту.',
      popularity: 9.9,
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
      categories: ['Frontend', 'Web', 'Design']
    },
    {
      id: 8,
      name: 'Go (Golang)',
      description: 'Проста та швидка мова від Google для хмарних сервісів.',
      popularity: 8.8,
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg',
      categories: ['Cloud', 'Backend', 'Google']
    },
    {
      id: 9,
      name: 'C++',
      description: 'Висока продуктивність, використовується в ігрових рушіях.',
      popularity: 7.5,
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
      categories: ['System', 'GameDev', 'Hardcore']
    }
    ];
  constructor() { }
  getItems(): ProgrammingLanguage[] {
    return this.languages;
  }
}
