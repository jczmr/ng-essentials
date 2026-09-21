import { Component, signal, computed } from "@angular/core";

@Component({
  selector: 'user-profile',
  template: `
    <button type="button" (click)="activateTrial()">
      Activate trial
    </button>

    <div>{{ showTrialDuration() }}</div>
  `,
  styles: `
    div {
        background-color: aquamarine;
    }
  `,
})
export class UserProfile {
  isTrial = signal(false);
  isTrialExpired = signal(false);
  showTrialDuration = computed(() => this.isTrial() && !this.isTrialExpired());

  activateTrial() {
    this.isTrial.set(true);
  }
}