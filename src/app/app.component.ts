import { Component } from '@angular/core';

import { type InvestmentResult } from '../models/investment-result.model';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {

  investmentResults: InvestmentResult[] | undefined;

  // Setting investmentResults to whatever we pass through from our <app-user-input /> element
  onCalculate(results: InvestmentResult[]): void {
    this.investmentResults = results;
  };

  // Getter that gets the final investment results so we can pass them to a child element
  get calculatedInvestmentResults(): InvestmentResult[] | undefined {
    return this.investmentResults;
  };

};
