import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './component/main/app.component';
import { routing }        from './app.routing';
import { HomeComponent } from './component/home/home.component';
import { SolicitudeComponent } from './component/solicitude/solicitude.component';
import { AccountComponent } from './component/account/account.component';
// importar la constante con los proveedores de http
import { HttpModule, Http } from '@angular/http';
import { HTTP_PROVIDERS, ConnectionBackend } from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SolicitudeComponent,
    AccountComponent
  ],
  providers:[
    Http, // El servicio proveedor
    HTTP_PROVIDERS,
    ConnectionBackend
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
