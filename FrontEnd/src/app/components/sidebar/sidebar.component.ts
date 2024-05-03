import { Component } from "@angular/core"
import { Router } from "@angular/router"
import { ThemeService } from "../../services/theme.service"

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

  constructor(private router: Router, private themeService: ThemeService) {
    this.darkMode = this.themeService.isDarkModeEnabled()
  }

  toggleDarkMode(): void {
    this.themeService.toggleDarkMode()
  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.navItems.forEach((navItem) => {
        navItem.isActive = this.isRouteActive(navItem.route)
      })
    })
  }

  isRouteActive(route: string): boolean | undefined {
    const routeConfig = this.router.config.find(
      (config) => `/${config.path}` === route
    )
    const hasChildren = routeConfig?.children?.length

    if (!hasChildren) {
      return this.router.isActive(route, {
        paths: "exact",
        queryParams: "ignored",
        fragment: "ignored",
        matrixParams: "ignored",
      })
    }

    return routeConfig?.children?.some((child) =>
      this.router.isActive(`${route}/${child.path}`, {
        paths: "exact",
        queryParams: "ignored",
        fragment: "ignored",
        matrixParams: "ignored",
      })
    )
  }
}
