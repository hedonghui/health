import { NgModule } from '@angular/core';
import { HealthCenterComponent } from './health-center.component';
import { HealthCenterRoutingModule } from './health-center.routing';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    imports: [ HealthCenterRoutingModule , NgZorroAntdModule],
    declarations: [ HealthCenterComponent ],
    providers: [ ]
})
export class HealthCenterModule { }
