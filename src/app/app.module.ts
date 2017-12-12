import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CarouselComponent } from './home/carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './routes/app.routes.module';
import { HttpClientModule } from '@angular/common/http';
import { ChangeBackgroudDirective } from './navbar/navbar.directive';
import { AddAnimationDirective } from './product/add-animation.directive';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { FormsModule } from '@angular/forms';
import { MobileValidatorDirective } from './user/directives/mobile-validator.directive';
import { UserLoginService } from './user/user-login.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent,
    ProductComponent,
    NewsComponent,
    AboutComponent,
    ChangeBackgroudDirective,
    AddAnimationDirective,
    UserLoginComponent,
    UserRegisterComponent,
    MobileValidatorDirective
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [UserLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
