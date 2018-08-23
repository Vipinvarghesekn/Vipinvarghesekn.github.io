import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 
})
export class AppComponent {
  public title;
  setName() {
    this.title = "hai";
  }
}
