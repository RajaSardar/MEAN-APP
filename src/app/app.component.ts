/* The AppComponent class is the root component of the application, it is the first component that gets
loaded when the application starts. */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MEAN-APP';
}
