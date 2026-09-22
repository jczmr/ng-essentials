import { Component, inject } from "@angular/core";
import { Calculator } from "../calculator/calculator.service";

@Component({
  selector: 'app-receipt',
  template: `<h1>The total is {{ totalCost }}</h1>`,
  styles: `
    h1 {
        background-color: greenyellow;
    }
  `,
})
export class Receipt {
  private readonly calculator = inject(Calculator);
  totalCost = this.calculator.add(50, 25);
}