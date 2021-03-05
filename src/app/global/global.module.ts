import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonSectionComponent } from './common-section/common-section.component';


const Component = [
  CommonSectionComponent
]

@NgModule({
  declarations: [...Component],
  exports: [...Component],
  imports: [
    CommonModule
  ]
})
export class GlobalModule { }
