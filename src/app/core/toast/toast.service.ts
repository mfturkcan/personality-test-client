import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: string[] = [];
  constructor() { }

  showToast(text: string) {
    this.toasts.push(text);
  }

  removeToast(text: string) {
    this.toasts = this.toasts.filter(t => t !== text);
  }
}
