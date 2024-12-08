import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  IonMenu,
  IonContent,
  IonItem,
  IonList,
  IonAvatar,
  IonMenuToggle,
} from '@ionic/angular/standalone';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-hamburguer-menu',
  templateUrl: './hamburguer-menu.component.html',
  standalone: true,
  imports: [
    IonMenu,
    IonContent,
    IonItem,
    IonList,
    IonAvatar,
    NgIf,
    IonMenuToggle,
  ],
  styleUrls: ['./hamburguer-menu.component.scss'],
})
export class HamburguerMenuComponent {
  @Input() isAuthenticated = false;

  @Output() navigateTo = new EventEmitter<string>();
  @Output() logout = new EventEmitter<void>();

  constructor(private menuController: MenuController) {}

  onNavigateTo(path: string) {
    this.navigateTo.emit(path);
    this.menuController.close();
  }
}
