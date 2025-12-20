import { Injectable } from '@angular/core';
import {Observable,BehaviorSubject,of} from 'rxjs';
import {ProgrammingLanguage} from '../models/programming-language';

@Injectable({
  providedIn: 'root',
})
export class Data {
  private allLanguages: ProgrammingLanguage[] = [
    {
      id: 1,
      name: 'JavaScript',
      description: 'Основна мова для інтерактивності у веб-браузерах.',
      popularity: 10,
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      categories: ['Frontend', 'Backend', 'Web'],
      creator: 'Brendan Eich',
      year: 1995,
      history: 'Мова була створена Бренданом Айком в Netscape всього за 10 днів у травні 1995 року. Спочатку вона називалася Mocha, потім LiveScript, і нарешті JavaScript, щоб скористатися популярністю мови Java на той час, хоча технічно вони мало пов’язані.'
    },
    {
      id: 2,
      name: 'TypeScript',
      description: 'Сувора типізація для JS, робить код надійнішим.',
      popularity: 9.2,
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
      categories: ['Frontend', 'Typed', 'Microsoft'],
      creator: 'Anders Hejlsberg',
      year: 2012,
      history: 'Розроблена Microsoft для вирішення проблем масштабування JavaScript у великих проектах. Керував розробкою Андерс Гейлсберг, творець C# та Turbo Pascal.'
    },
    {
      id: 3,
      name: 'Python',
      description: 'Ідеальна для новачків, штучного інтелекту та аналізу даних.',
      popularity: 9.8,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
      categories: ['Data Science', 'AI', 'Backend'],
      creator: 'Guido van Rossum',
      year: 1991,
      history: 'Задумана Гвідо ван Россумом як нащадок мови ABC, здатний до обробки виключень. Назва походить не від змії, а від британського комедійного шоу "Літаючий цирк Монті Пайтона".'
    },
    {
      id: 4,
      name: 'C#',
      description: 'Потужна мова від Microsoft для Enterprise та ігор.',
      popularity: 8.5,
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png',
      categories: ['Backend', 'GameDev', 'Desktop'],
      creator: 'Anders Hejlsberg',
      year: 2000,
      history: 'Створена командою Microsoft як частина платформи .NET. Спочатку мала кодову назву "Cool" (C-like Object Oriented Language), але була перейменована на C# (сі-шарп) перед релізом.'
    },
    {
      id: 5,
      name: 'HTML',
      description: 'Мова розмітки. Фундамент будь-якої веб-сторінки.',
      popularity: 10,
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
      categories: ['Frontend', 'Web', 'Markup'],
      creator: 'Tim Berners-Lee',
      year: 1993,
      history: 'Розроблений Тімом Бернерсом-Лі під час роботи в CERN для обміну науковими документами. Перша версія включала всього 18 тегів.'
    },
    {
      id: 6,
      name: 'PHP',
      description: 'Класична мова для створення динамічних сайтів.',
      popularity: 5.5,
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg',
      categories: ['Web', 'Backend', 'Server'],
      creator: 'Rasmus Lerdorf',
      year: 1995,
      history: 'Створена Расмусом Лердорфом як набір скриптів Perl для відстеження відвідувачів його онлайн-резюме. Абревіатура спочатку означала "Personal Home Page".'
    },
    {
      id: 7,
      name: 'CSS',
      description: 'Відповідає за стиль, кольори та адаптивність сайту.',
      popularity: 9.9,
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
      categories: ['Frontend', 'Web', 'Design'],
      creator: 'Håkon Wium Lie',
      year: 1996,
      history: 'Запропонована Гоконом Віум Лі у 1994 році. До появи CSS оформлення веб-сторінок виконувалося безпосередньо в HTML, що було справжнім кошмаром для розробників.'
    },
    {
      id: 8,
      name: 'Go (Golang)',
      description: 'Проста та швидка мова від Google для хмарних сервісів.',
      popularity: 8.8,
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg',
      categories: ['Cloud', 'Backend', 'Google'],
      creator: 'Robert Griesemer, Rob Pike, Ken Thompson',
      year: 2009,
      history: 'Розроблена в Google для вирішення проблем повільної збірки та залежностей у гігантських кодових базах компанії. Автори ненавиділи C++ і хотіли створити щось простіше.'
    },
    {
      id: 9,
      name: 'C++',
      description: 'Висока продуктивність, використовується в ігрових рушіях.',
      popularity: 7.5,
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
      categories: ['System', 'GameDev', 'Hardcore'],
      creator: 'Bjarne Stroustrup',
      year: 1985,
      history: 'Створена Б\'ярном Страуструпом у Bell Labs як розширення мови C. Він хотів додати можливості об\'єктно-орієнтованого програмування (класи) до швидкості C.'
    }
    ];
  private languagesSubject = new BehaviorSubject<ProgrammingLanguage[]>(this.allLanguages);
  public languagesPub = this.languagesSubject.asObservable();
  constructor() { }
  getItems(): Observable<ProgrammingLanguage[]> {
    return of(this.allLanguages);
  }
  setLanguages(data: ProgrammingLanguage[]): void {
    this.languagesSubject.next(data);
  }
  updateSearch(term: string): void {
    const lowerTerm = term.trim().toLowerCase();
    const filtered = this.allLanguages.filter(lang =>
      lang.name.toLowerCase().includes(lowerTerm)
    );
    this.languagesSubject.next(filtered);
  }
  getItemById(id: number): Observable<ProgrammingLanguage | undefined> {
    const item = this.allLanguages.find(l => l.id === id);
    return of(item);
  }
}
