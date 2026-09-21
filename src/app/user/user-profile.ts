import { Component } from "@angular/core";
import { ProfilePhoto } from "./profile-photo";


@Component({
  selector: 'user-profile',
  templateUrl: 'user-profile.html',
  styleUrl: 'user-profile.css',
  imports: [ProfilePhoto]
})
export class UserProfile {
  /* Your component code goes here */
}