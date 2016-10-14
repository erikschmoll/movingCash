import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './component/main/app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { routing }        from './app.routing';
import { DashboardComponent }      from './dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { SolicitudeComponent } from './component/solicitude/solicitude.component';
import { AccountComponent } from './component/account/account.component';




//import { MdCardModule } from '@angular2-material/card';
//import { MdButtonModule } from '@angular2-material/button';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing/*,
    MdCardModule,
    MdButtonModule*/
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent,
    HomeComponent,
    SolicitudeComponent,
    AccountComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
