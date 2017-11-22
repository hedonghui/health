import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CarouselComponent } from '../carousel/carousel.component';

@NgModule({
    imports: [
        NgZorroAntdModule.forRoot()
    ],
    declarations: [
        HomeComponent,
        CarouselComponent
    ],
    exports: [],
    providers: []
})
export class HomeModule { }
