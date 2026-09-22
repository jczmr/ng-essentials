import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Receipt } from './receipt/receipt';

@Component({
  imports: [RouterOutlet, Receipt],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ng-essentials');
}
