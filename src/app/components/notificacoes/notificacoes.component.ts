import { Component, OnInit } from '@angular/core';
import { notificationData } from 'src/models/notification';

@Component({
  selector: 'app-notificacoes',
  templateUrl: 'notificacoes.component.html',
  styleUrls: ['notificacoes.component.scss'],
})
export class NotificacoesComponent implements OnInit {
  notifications = notificationData;

  constructor() {}

  ngOnInit() {}

  checkNotifications() {
    return this.notifications.some(x=>!x.isRead)
  }
}
