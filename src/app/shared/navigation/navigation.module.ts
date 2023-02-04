import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { NavigationItemComponent } from './navigation-item/navigation-item.component';



@NgModule({
  declarations: [
    NavigationComponent,
    NavigationItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule { }
