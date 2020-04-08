import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AnimateComponent } from './animate.component';
import { AnimateService } from './animate.service';

@NgModule({
  imports: [
    CommonModule,
    ScrollingModule
  ],
  declarations: [ AnimateComponent ],
  exports: [ AnimateComponent ]
})
export class AnimateModule { }