import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionFormularioComponent } from './presentacion-formulario.component';

describe('PresentacionFormularioComponent', () => {
  let component: PresentacionFormularioComponent;
  let fixture: ComponentFixture<PresentacionFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentacionFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentacionFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
