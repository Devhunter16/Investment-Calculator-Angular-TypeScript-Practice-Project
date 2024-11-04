import { Component, input, output, computed } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { type InvestmentResult } from '../../models/investment-result.model';
import { calculateInvestmentResults } from '../../services/investment-results.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  investmentForm = new FormGroup({
    initialInvestment: new FormControl<number>(0, [Validators.required, Validators.min(0)]),
    annualInvestment: new FormControl<number>(0, [Validators.required, Validators.min(0)]),
    expectedReturn: new FormControl<number>(0, [Validators.required, Validators.min(0)]),
    duration: new FormControl<number>(0, [Validators.required, Validators.min(0)])
  });

  calculate = output<InvestmentResult[]>();

  // Function that calculates the investment results based on user input and emits
  // that data
  onCalculate(): void {
    const investmentResults: InvestmentResult[] = calculateInvestmentResults(this.investmentForm.value);
    this.calculate.emit(investmentResults);
  };
};