import {Component, signal} from '@angular/core';
import {form, FormField} from '@angular/forms/signals';

// Adding some other data type to handle differents input types could be present in html form
// see https://angular.dev/essentials/signal-forms for other input types.

interface FormData {
  email: string;
  name: string;
  age: number;
  eventDate: Date,
  eventTime: string,

}

@Component({
  selector: 'app-root',
  templateUrl: 'app.html',
  styleUrl: 'app.css',
  imports: [FormField],
})
export class App {
  formModel = signal<FormData>({
    email: '',
    name: '',
    age: 0,
    eventDate: new Date(),
    eventTime: '',
  });

  loginForm = form(this.formModel);

  onSubmit(event: Event) {
    event.preventDefault();

    // Perform some logic here, could be validate, modify data, etc.

    // harcoded the age
    this.loginForm.age().value.set(18);


    const formData = this.formModel();
    console.log('Logging in with:', formData);

  }
}