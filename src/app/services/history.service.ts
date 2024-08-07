import { Injectable } from '@angular/core';
import { HistoryItem } from '../Interfaces/history';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private history: HistoryItem[] = [];

  addSearch(item: HistoryItem): void {
    this.history.push(item);
  }

  getHistory(): HistoryItem[] {
    return this.history;
  }
}
