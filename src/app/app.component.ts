import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  feature: string = 'recipe';

  onNavigate(selected) {
    this.feature = selected;
  }
}
