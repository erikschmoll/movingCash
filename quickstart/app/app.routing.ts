import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SolicitudeComponent } from './component/solicitude/solicitude.component';
import { AccountComponent } from './component/account/account.component';

const appRoutes: Routes = [
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
    }
];

export const routing = RouterModule.forRoot(appRoutes);
