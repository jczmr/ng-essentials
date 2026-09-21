import { Component } from "@angular/core";

@Component({
  selector: 'profile-photo',
  template: `
    <h1>profile photo</h1>
    <div>profile photo div</div>
  `,
  styles: `
    h1 {
      font-size: 3em;
      color: chocolate;
    }
    div {
        background-color: cornflowerblue;
    }
  `,
})
export class ProfilePhoto {
  /* Your component code goes here */
}