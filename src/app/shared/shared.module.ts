import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponentComponent } from './new-component/new-component.component';



@NgModule({
  declarations: [
    NewComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [  // <--- export for the SharedModule
    NewComponentComponent
  ]
})

export class SharedModule { }
