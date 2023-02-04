import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetCreatorComponent } from './set-creator.component';

const routes: Routes = [{ path: '', component: SetCreatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetCreatorRoutingModule { }
