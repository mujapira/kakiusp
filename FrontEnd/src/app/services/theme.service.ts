import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  
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
  }
}
