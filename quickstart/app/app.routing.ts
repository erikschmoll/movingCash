import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }      from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HomeComponent } from './component/home/home.component';
import { SolicitudeComponent } from './component/solicitude/solicitude.component';
import { AccountComponent } from './component/account/account.component';

const appRoutes: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        component: HomeComponent
        //redirectTo: '/dashboard',
        //pathMatch: 'full'
    },
    {
        path: 'solicitude',
        component: SolicitudeComponent
    },
    {
        path: 'account',
        component: AccountComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);
