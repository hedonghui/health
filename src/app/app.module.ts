import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { HealthCenterComponent } from './health-center/health-center.component';
import { ProductComponent } from './product/product.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app.routes.module';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent,
    HealthCenterComponent,
    ProductComponent,
    NewsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule.forRoot(),
   AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
