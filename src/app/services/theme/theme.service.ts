import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private backgroundImageSource = new BehaviorSubject<string>("../assets/cppBack.png");
  backgroundImage = this.backgroundImageSource.asObservable();

  public footerThemeSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  footerTheme$: Observable<string> = this.footerThemeSubject.asObservable();;

  constructor() {
    const storedTheme = localStorage.getItem('footerTheme');

    if (storedTheme) {
      this.footerThemeSubject.next(storedTheme);
    }
  }

  setBackgroundImage(image: string) {
    this.backgroundImageSource.next(image);
  }

  setFooterTheme(theme: string): void {
    this.footerThemeSubject.next(theme);
    localStorage.setItem('footerTheme', theme);
  }
}
