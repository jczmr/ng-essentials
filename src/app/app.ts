import {Component, signal, computed} from '@angular/core';

const firstName = signal('Morgan');
const firstNameCapitalized = computed(() => firstName().toUpperCase());

console.log(firstNameCapitalized()); // MORGAN

@Component({
  selector: 'app-root',
  template: `
    <p>Check the console in the browser</p>
  `,
})
export class App {
}
