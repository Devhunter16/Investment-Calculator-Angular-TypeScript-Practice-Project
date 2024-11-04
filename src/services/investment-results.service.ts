// Use the below code as a help
// e.g., integrate it into a service or component
// You may need to tweak it, depending on where and how you use it

import { type InvestmentResult } from '../models/investment-result.model';

export function calculateInvestmentResults(
  investmentResults: Partial<{ 
    initialInvestment: number | null; 
    annualInvestment: number | null; 
    expectedReturn: number | null; 
    duration: number | null; 
  }>
): InvestmentResult[] {
  // This code ensures that these values default to zero if they are null or undefined
  const initialInvestment = investmentResults.initialInvestment ?? 0;
  const annualInvestment = investmentResults.annualInvestment ?? 0;
  const expectedReturn = investmentResults.expectedReturn ?? 0;
  const duration = investmentResults.duration ?? 0;
 
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInterest =
      investmentValue - annualInvestment * year - initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: initialInvestment + annualInvestment * year,
    });
  };
  return annualData;
};
