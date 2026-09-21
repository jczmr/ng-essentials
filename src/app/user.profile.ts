import { Component, signal } from "@angular/core";

@Component({
  selector: 'user-profile',
  template: `
  <h1 (mouseover)="updateUserName()" (mouseleave)="restoreUserName()">Profile for {{ userName() }} </h1>
  `,
  styles: `
    h1 {
        font-style: italic;
        color: red;
    }
  `,
})
export class UserProfile {
  userName = signal('pro_programmer_123');

  updateUserName() {
    this.userName.set('cool_coder_789');
  }

  restoreUserName() {
    this.userName.set('pro_programmer_123');
  }
}

