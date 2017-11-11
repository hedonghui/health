import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HealthCenterComponent } from './health-center/health-center.component';
import { ProductComponent } from './product/product.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'health', component: HealthCenterComponent },
    { path: 'product', component: ProductComponent},
    { path: 'news', component: NewsComponent},
    { path: 'about', component: AboutComponent}
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


