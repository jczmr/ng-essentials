import { Component, signal } from '@angular/core';

@Component({
  selector: 'user-profile',
  template: `
    <button [disabled]="!isValidUserId()">Save changes</button>

    <ul [attr.role]="listRole()">
      <li>developer</li>
      <li>admin</li>
      <li>user</li>
    </ul>
  `,
})
export class UserProfile {
  isValidUserId = signal(true);

listRole() {
    return this.isValidUserId() ? 'list' : 'none';
  }
}