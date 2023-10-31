import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroment';
import { Message } from '../Models/message.model';

import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  ws: any;
  name: string;
  disabled: boolean;

  constructor() {
    this.connect();
  }

  connect() {
    let socket = new WebSocket("ws://localhost:8082/laliguria");
    this.ws = Stomp.over(socket);
    let that = this;

    this.ws.connect({}, function (frame) {
      that.ws.subscribe("/errors", function (message) {
        alert("Error " + message.body);
      });
      that.ws.subscribe("/topic/reply", function (message) {
        console.log(message)
      });
      that.disabled = true;
    }, function (error) {
      alert("STOMP error " + error);
    });
  }

  disconnect() {
    if (this.ws != null) {
      this.ws.ws.close();
    }
  }

  sendMessage(message: Message) {
    let data = JSON.stringify(message);
    this.ws.send("/app/message", {}, data);
  }

  updateView: EventEmitter<number> = new EventEmitter<number>;

  private callUpdateView(viewType: number) {
    this.updateView.emit(viewType);
  }
}
