import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  IonApp,
  IonRouterOutlet,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonContent,
  IonMenuButton,
  IonButtons,
  IonItem,
  IonList,
} from '@ionic/angular/standalone';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonApp,
    IonRouterOutlet,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonContent,
    IonMenuButton,
    IonButtons,
    IonItem,
    IonList,
  ],
})
export class AppComponent {
  menuEnabled = true;

  constructor(private router: Router, private menuController: MenuController) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.routerState.snapshot.root.firstChild;
        this.menuEnabled = !(currentRoute?.data?.['hideMenu'] ?? false);
      }
    });
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
    this.menuController.close();
  }
}
