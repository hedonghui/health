import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
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
    ProductComponent,
    NewsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
