import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-loader',
  templateUrl: './card-loader.component.html',
  styleUrls: ['./card-loader.component.css']
})
export class CardLoaderComponent {

  @Input('loading') loading!: boolean;
}
