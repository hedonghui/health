import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProductComponent } from '../product/product.component';
import { NewsComponent } from '../news/news.component';
import { AboutComponent } from '../about/about.component';
import { NgModule } from '@angular/core';
import { UserRegisterComponent } from '../user/user-register/user-register.component';
import { UserLoginComponent } from '../user/user-login/user-login.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'health', loadChildren: '../health-center/health-center.module#HealthCenterModule'},
    { path: 'product', component: ProductComponent},
    { path: 'news', component: NewsComponent},
    { path: 'about', component: AboutComponent},
    { path: 'register', component: UserRegisterComponent},
    { path: 'login', component: UserLoginComponent}
];
@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
      ]
})
export class AppRoutingModule { }


