import { Component } from '@angular/core';

@Component({
    selector: 'user-profile',
    // Add an 'click' event handler that calls the `cancelSubscription` method.
    template: `
    <p>Handling user interaction</p>
    <button (click)="cancelSubscription()">Cancel subscription</button>

    <p>Example passing event handler</p>
    <button (click)="cancelSubscription2($event)">Cancel subscription</button>


  `,
})
export class UserProfile {
    cancelSubscription() {
        /* Your event handling code goes here. */
        alert('Attempt to cancel subscription.');
    }


    cancelSubscription2(event: Event) {
    /* Your event handling code goes here. */
    alert(event.type)
  }
}