import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class navbar {
  selectedPage: string = 'Home';

  selectPage(page: string) {
    this.selectedPage = page;
  }
}