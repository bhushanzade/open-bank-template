import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-elig-calc',
  templateUrl: './elig-calc.component.html',
  styleUrls: ['./elig-calc.component.css']
})
export class EligCalcComponent implements OnInit {
  reactiveForm: FormGroup;
  mIncome: number = 0;
  mExpense: number = 0;
  tenure: number = 0;
  isExistingLoan: boolean = false;
  existingLoanAmt: number = 0;
  loan_amount: number = 0;
  emi_amount: number = 0;

  constructor(fb: FormBuilder) {
    this.reactiveForm = fb.group({
      mIncome: ['', Validators.compose([Validators.nullValidator])],
      mExpense: ['', Validators.compose([Validators.nullValidator])],
      tenure: ['', Validators.compose([Validators.nullValidator])],
      isExistingLoan: ['', Validators.compose([Validators.nullValidator])],
      existingLoanAmt: ['', Validators.compose([Validators.nullValidator, Validators.pattern(/^\d+$/)])]
    });
  }

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
    var reg = new RegExp(/^\d+$/);
    if (reg.test(this.existingLoanAmt.toString()))
      this.calculateEligibility();
  }

  calculateEligibility(): void {
    let remainInc = this.mIncome - this.mExpense;
    if (this.isExistingLoan) remainInc -= this.existingLoanAmt;

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

  getMoney(): void {
    if (this.loan_amount > 0) {
      Swal.fire(
        'Congratulations!',
        'You are eligible to get loan!',
        'success'
      )
    } else[
      Swal.fire(
        'Sorry!',
        'You are not eligible to get loan!',
        'error'
      )
    ]
  }
}
