import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elig-calc',
  templateUrl: './elig-calc.component.html',
  styleUrls: ['./elig-calc.component.css']
})
export class EligCalcComponent implements OnInit {

  mIncome: number = 0;
  mExpense: number = 0;
  tenure: number = 0;
  isExistingLoan: boolean = false;
  existingLoanAmt: number = 0;
  loan_amount: number = 0;
  emi_amount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeIncome($event): void {
    this.mIncome = $event;
    this.calculateEligibility();
  }

  onChnageExpense($event): void {
    this.mExpense = $event;
    this.calculateEligibility();
  }

  onChangeTenure($event): void {
    this.calculateEligibility();
  }

  onChangeExstAmt(): void {
    if (typeof (this.existingLoanAmt) === 'number')
      this.calculateEligibility();
  }

  calculateEligibility(): void {
    let remainInc = this.mIncome - this.mExpense;
    if (this.isExistingLoan) remainInc -= this.existingLoanAmt;
    console.log(this.existingLoanAmt);

    if (remainInc < 0) {
      this.loan_amount = 0;
      this.emi_amount = 0;
    } else {
      switch (parseInt(this.tenure.toString())) {
        case 0:
          this.loan_amount = remainInc * 6;
          this.emi_amount = this.loan_amount / 6;
          break;
        case 1:
          this.loan_amount = remainInc * 12;
          this.emi_amount = this.loan_amount / 12;
          break;
        case 2:
          this.loan_amount = remainInc * 36;
          this.emi_amount = this.loan_amount / 36;
          break;
        case 3:
          this.loan_amount = remainInc * 60;
          this.emi_amount = this.loan_amount / 60;
          break;
      }
    }
  }
}
