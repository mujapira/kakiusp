import { Component } from "@angular/core"
import { Router } from "@angular/router"
import { ThemeService } from "../../services/theme.service"

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent {
  darkMode: boolean = false;

  constructor(private router: Router, private themeService: ThemeService) {
    this.darkMode = this.themeService.isDarkModeEnabled()
  }

  navItems = [
    { icon: "home", text: "Início", route: "/" },
    { icon: "attach_money", text: "Financeiro", route: "/financial" },
    { icon: "school", text: "Alunos", route: "/students" },
    { icon: "menu_book", text: "Cursos", route: "/courses" },
    { icon: "people", text: "Professores", route: "/teachers" },
    { icon: "event", text: "Eventos", route: "/events" },
  ]
  
  navItemsFooter = [
    { icon: "help", text: "Ajuda", route: "/help" },
    { icon: "settings", text: "Configurações", route: "/settings" },
  ]

  toggleDarkMode(): void {
    this.themeService.toggleDarkMode()
  }

  isRouteActive(route: string): boolean {
    return this.router.isActive(route, {paths: 'exact', queryParams: 'exact', fragment: 'ignored', matrixParams: 'ignored'})
  }
}
