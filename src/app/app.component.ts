import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentRoute: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.urlAfterRedirects;
      });
  }
}
