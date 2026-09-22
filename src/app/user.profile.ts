import { Component } from '@angular/core';

@Component({
    selector: 'user-profile',
    // Control flow with @if and @for
    // You can repeat part of a template multiple times with Angular's @for block:

    template: `
    <h1>User profile</h1>

    @if (isAdmin()) {
      <h2>Admin settings</h2>
      <!-- ... -->
    } @else {
      <h2>User settings</h2>
      <!-- ... -->
    }

    <ul class="user-badge-list">
      @for (badge of badges(); track badge.id) {
        <li class="user-badge">{{ badge.name }}</li>
      }
    </ul>
    
  `,
})
export class UserProfile {


  isAdmin() {
    return true;
  }

  badges() {
    let badgesList = [
      {id: 1, name: "one"},
      {id: 2, name: "two"},
      {id: 3, name: "three"},
    ];

    return badgesList;
  }

}