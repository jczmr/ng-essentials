import { Component } from '@angular/core';
import { UserProfile } from './user.profile';

@Component({
  imports: [UserProfile],
  selector: 'app-root',
  template: `
  <user-profile />
  `,
})
export class App {
}

