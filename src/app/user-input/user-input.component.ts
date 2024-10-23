import { Component, effect, input, output, computed } from '@angular/core';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  // Setting these variables as signal inputs to the component
  initialInvestment = input.required<number>();
  annualInvestment = input.required<number>();
  expectedReturn = input.required<number>();
  duration = input.required<number>();

  userInputArray = output<number[]>();

  constructor() {
    effect(() => {
      console.log("User Inputs: " + this.userInputs());
    });
  };

  userInputs = computed<number[]>(() => {
    return [
      this.initialInvestment(),
      this.annualInvestment(),
      this.expectedReturn(),
      this.duration()
    ];
  });

  onCalculate() {
    this.userInputArray.emit(this.userInputs());
  };
};