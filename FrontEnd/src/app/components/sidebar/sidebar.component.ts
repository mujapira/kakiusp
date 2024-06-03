import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { NavigationService } from '../../services/navigation.service';
import { Subscription } from 'rxjs';
import { ISidebarNavItem } from '../../../interfaces/interfaces';
import { AuthService } from '../../services/auth.service';
import { userModel } from '../../models/userModel';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  private routeSubscription: Subscription = new Subscription();
  activeRoute: string = '';
  darkMode: boolean = false;
  user: userModel = {} as userModel;

  navItems: ISidebarNavItem[] = [
    { icon: 'home', text: 'Início', route: '/', isActive: false },
    {
      icon: 'attach_money',
      text: 'Financeiro',
      route: '/financial',
      isActive: false,
    },
    { icon: 'school', text: 'Alunos', route: '/students', isActive: false },
    { icon: 'menu_book', text: 'Cursos', route: '/courses', isActive: false },
    {
      icon: 'people',
      text: 'Professores',
      route: '/teachers',
      isActive: false,
    },
    { icon: 'event', text: 'Eventos', route: '/events', isActive: false },
    { icon: 'GAP', text: 'GAP', route: 'GAP', isActive: false },
    { icon: 'help', text: 'Ajuda', route: '/help', isActive: false },
    {
      icon: 'settings',
      text: 'Configurações',
      route: '/settings',
      isActive: false,
    },
  ];

  constructor(
    private themeService: ThemeService,
    private navigationService: NavigationService,
    private authService: AuthService
  ) {
    this.darkMode = this.themeService.isDarkModeEnabled();
  }

  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }

  handleLogout(): void {
    this.authService.logoutUser();
  }

  ngOnInit(): void {
    this.routeSubscription = this.navigationService.activeRoute$.subscribe(
      (route) => {
        this.activeRoute = route;
        this.navItems = this.navItems.map((item) => {
          item.isActive = item.route === '/' + route;
          return item;
        });
      }
    );
    this.user = this.authService.getUser();
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
