import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './component/main/app.component';
import { routing }        from './app.routing';
import { HomeComponent } from './component/home/home.component';
import { SolicitudeComponent } from './component/solicitude/solicitude.component';
import { AccountComponent } from './component/account/account.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SolicitudeComponent,
    AccountComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
