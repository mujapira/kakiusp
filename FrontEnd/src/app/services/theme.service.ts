import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  
  private themeChangeSubject = new Subject<boolean>();

  themeChange$ = this.themeChangeSubject.asObservable();

  isDarkModeEnabled(): boolean {
    const dataMode = localStorage.getItem('data-mode');
  
    if (dataMode === 'dark') {
      localStorage.setItem('data-mode', 'dark');
      document.documentElement.setAttribute('data-mode', 'dark');
      return true;
    } else {
      localStorage.setItem('data-mode', 'light');
      document.documentElement.setAttribute('data-mode', 'light');
      return false;
    }
  }

  toggleDarkMode(): void {
    const dataMode = document.documentElement.getAttribute('data-mode');
    
    if (dataMode === 'dark') {
      localStorage.setItem('data-mode', 'light');
      document.documentElement.setAttribute('data-mode', 'light');
    } else { 
      localStorage.setItem('data-mode', 'dark');
      document.documentElement.setAttribute('data-mode', 'dark');
    }
  
    this.themeChangeSubject.next(true);
  }
}
