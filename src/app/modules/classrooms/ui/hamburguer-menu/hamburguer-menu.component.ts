import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  IonMenu,
  IonContent,
  IonItem,
  IonList,
  IonAvatar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-hamburguer-menu',
  templateUrl: './hamburguer-menu.component.html',
  standalone: true,
  imports: [IonMenu, IonContent, IonItem, IonList, IonAvatar, NgIf],
  styleUrls: ['./hamburguer-menu.component.scss'],
})
export class HamburguerMenuComponent implements OnInit {
  @Input() isAuthenticated = false;

  @Output() navigateTo = new EventEmitter<string>();
  @Output() logout = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}
}
