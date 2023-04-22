import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosNoticiasComponent } from './comentarios-noticias.component';

describe('ComentariosNoticiasComponent', () => {
  let component: ComentariosNoticiasComponent;
  let fixture: ComponentFixture<ComentariosNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentariosNoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariosNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
