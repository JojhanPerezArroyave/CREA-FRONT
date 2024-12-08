import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  IonApp,
  IonRouterOutlet,
  IonHeader,
  IonToolbar,
  IonContent,
  IonMenuButton,
  IonButtons,

} from '@ionic/angular/standalone';
import { AuthService } from './modules/auth/services/auth.service';
import { HamburguerMenuComponent } from './modules/classrooms/ui/hamburguer-menu/hamburguer-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonApp,
    IonRouterOutlet,
    IonHeader,
    IonToolbar,
    IonContent,
    IonMenuButton,
    IonButtons, HamburguerMenuComponent
  ],
})
export class AppComponent {
  menuEnabled = true;
  isAuthenticated = false;

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.routerState.snapshot.root.firstChild;
        this.menuEnabled = !(currentRoute?.data?.['hideMenu'] ?? false);
      }

      this.authService.isAuthenticated$.subscribe(
        (isAuth) => (this.isAuthenticated = isAuth)
      );
    });
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  onLogout() {
    this.authService.logout();
    this.navigateTo('/auth');
  }
}
