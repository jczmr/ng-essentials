import { Service } from "@angular/core";

@Service()
export class Calculator {
    add(x: number, y: number) {
        return x + y;
    }
}
