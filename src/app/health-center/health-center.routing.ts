import {Routes, RouterModule} from '@angular/router';
import {HealthCenterComponent} from './health-center.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: HealthCenterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []

})
export class HealthCenterRoutingModule { }
