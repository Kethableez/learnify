import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetCreatorRoutingModule } from './set-creator-routing.module';
import { SetCreatorComponent } from './set-creator.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SetCreatorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    SetCreatorRoutingModule
  ]
})
export class SetCreatorModule { }
