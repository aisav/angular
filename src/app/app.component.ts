import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <h1>Inline Template</h1>
    <app-other></app-other>
  
  `,
  // styleUrls: ['./app.component.css']
  styles: [`
    h1 {
      color:blue;
    }
  
  `]
})
export class AppComponent {
  title = 'app changed!';
}
