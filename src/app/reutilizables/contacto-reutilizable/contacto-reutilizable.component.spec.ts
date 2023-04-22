import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoReutilizableComponent } from './contacto-reutilizable.component';

describe('ContactoReutilizableComponent', () => {
  let component: ContactoReutilizableComponent;
  let fixture: ComponentFixture<ContactoReutilizableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoReutilizableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoReutilizableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
