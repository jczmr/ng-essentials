import { Component } from '@angular/core';
import { UserProfile } from './user.profile';


@Component({
  imports: [UserProfile],
  selector: 'app-root',
  template: `
    <p>Check the console in the browser</p>
    <user-profile />
  `,
})
export class App {
}
