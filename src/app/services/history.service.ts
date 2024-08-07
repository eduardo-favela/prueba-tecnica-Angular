import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private history: string[] = [];

  addSearch(query: string): void {
    this.history.push(query);
  }

  getHistory(): string[] {
    return this.history;
  }
}
