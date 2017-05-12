import { Component } from '@angular/core';

@Component({
  selector: 'lechaim-app',
  templateUrl: './app.component.html'
})

export class AppComponent {
  constructor() { }
}

export class Const {
  public static BASE_URL = 'http://localhost:3000/';
}

export class IsDirty {
 public checkDirtyState(component) {
    if (component.isDirty)
      return window.confirm('You have not saved this candidate, Do you really want to cancel?');
    return true;
  }

}
