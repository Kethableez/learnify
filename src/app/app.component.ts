import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ktbz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learnify';

  constructor(private router: Router) {}

  get isNavigationVisible() {
    return this.router.url.split('/')[1] !== 'auth'
  }
}
