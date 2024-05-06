import { Component } from "@angular/core"
import { Router } from "@angular/router"
import { ThemeService } from "../../services/theme.service"
import { NavigationService } from "../../services/navigation.service"
import { Subscription } from "rxjs"

interface NavItem {
  icon: string
  text: string
  route: string
  isActive?: boolean
}

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent {
  private routeSubscription: Subscription = new Subscription();
  activeRoute: string = "";
  darkMode: boolean = false

  navItems: NavItem[] = [
    { icon: "home", text: "Início", route: "/", isActive: false },
    { icon: "attach_money", text: "Financeiro", route: "/financial", isActive: false },
    { icon: "school", text: "Alunos", route: "/students", isActive: false },
    { icon: "menu_book", text: "Cursos", route: "/courses", isActive: false },
    { icon: "people", text: "Professores", route: "/teachers", isActive: false },
    { icon: "event", text: "Eventos", route: "/events", isActive: false },
    { icon: "GAP", text: "GAP", route: "GAP", isActive: false},
    { icon: "help", text: "Ajuda", route: "/help", isActive: false },
    { icon: "settings", text: "Configurações", route: "/settings", isActive: false },
  ]

  constructor(private themeService: ThemeService, private navigationService: NavigationService) {
    this.darkMode = this.themeService.isDarkModeEnabled()
  }

  toggleDarkMode(): void {
    this.themeService.toggleDarkMode()
  }

  ngOnInit(): void {
    this.routeSubscription = this.navigationService.activeRoute$.subscribe(route => {
      this.activeRoute = route;
      this.navItems = this.navItems.map(item => {
        item.isActive = item.route === '/'+route;
        //console.log(item.route, route, item.isActive = item.route === '/'+route)
        return item;
      });
      //console.log(this.navItems)
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
