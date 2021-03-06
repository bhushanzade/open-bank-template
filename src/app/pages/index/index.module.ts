import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { RouterModule } from '@angular/router';
import { IndexRoutes } from 'src/app/config/routes/index.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EligCalcComponent } from './elig-calc/elig-calc.component';
import { GlobalModule } from 'src/app/global/global.module';


@NgModule({
  declarations: [IndexComponent, EligCalcComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(IndexRoutes),
    FormsModule,
    GlobalModule,
    ReactiveFormsModule
  ]
})
export class IndexModule { }
