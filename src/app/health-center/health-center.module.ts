import { NgModule } from '@angular/core';
import { HealthCenterComponent } from './health-center.component';
import { HealthCenterRoutingModule } from './health-center.routing';
@NgModule({
    imports: [ HealthCenterRoutingModule ],
    declarations: [ HealthCenterComponent ],
    providers: [ ]
})
export class HealthCenterModule { }
