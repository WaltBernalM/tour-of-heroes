import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  // Add of messages to cache 
  add(message: string) {
    this.messages.push(message);
  }

  // Clears cache 
  clear() {
    this.messages = [];
  }
}
