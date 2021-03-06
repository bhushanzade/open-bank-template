import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllSolutionsComponent } from './all-solutions/all-solutions.component';
import { SolutionRoutes } from 'src/app/config/routes/solution.routing';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AllSolutionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SolutionRoutes),
  ]
})
export class SolutionsModule { }
