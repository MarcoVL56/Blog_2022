import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoReutilizableComponent } from './contacto-reutilizable/contacto-reutilizable.component';
import { createCustomElement } from '@angular/elements'

@NgModule({
  declarations: [
    ContactoReutilizableComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContactoReutilizableComponent
  ],
  providers: [],
  entryComponents: [ContactoReutilizableComponent]
})
export class ReutilizablesModule {
  
  constructor(private injector: Injector){
    const el = createCustomElement(ContactoReutilizableComponent, { injector })
    customElements.define('componente-contacto', el)
  }

    ngDoBootstrap(){}
 }
