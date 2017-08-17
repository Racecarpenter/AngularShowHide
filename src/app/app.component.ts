import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showMes = true;
  somePrice = 5;
  someDate = new Date(1983, 3, 4);
  listOfThings = ['blah', 'quah', 'jah', 'dawh']

  falsey () {
    this.showMes = false;
  }
  truthy () {
    this.showMes = true;
  }
}
