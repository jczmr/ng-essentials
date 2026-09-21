import { Component, signal } from '@angular/core';

// Create a signal with the `signal` function.
const firstName = signal('Morgan');

// Read a signal value by calling it— signals are functions.
console.log(firstName());

// Change the value of this signal by calling its `set` method with a new value.
firstName.set('Jaime');
console.log(firstName());

// You can also use the `update` method to change the value
// based on the previous value.
firstName.update((name) => name.toUpperCase());
console.log(firstName());

@Component({
  selector: 'app-root',
  template: `
    <p>See the browser\'s console to check info related to Signals feature, in this excersise. </p>
    <p>This example is based on Angular Essentials Signals documentation:</p>
    <a href="https://angular.dev/essentials/signals" target="_blank">Essentials/Signals</a>
  `,
})
export class App {
}
