import { Component } from '@angular/core';
import { HistoryService } from '../../services/history.service';
import { Router } from '@angular/router';
import { HistoryItem } from '../../Interfaces/history';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  history: HistoryItem[] = [];

  constructor(private historyService: HistoryService, private router: Router) { }

  ngOnInit(): void {
    this.history = this.historyService.getHistory();
  }

  search(query: string): void {
    this.router.navigate(['/index'], { queryParams: { name: query } });
  }

  deleteContact(id: any) {
    console.log(id)
  }
}
