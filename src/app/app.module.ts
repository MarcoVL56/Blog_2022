import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DireccionamientoModule } from './direccionamiento/direccionamiento.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    DireccionamientoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
