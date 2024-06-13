import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApontamentoDeProducaoFormComponent } from './apontamento-de-producao-form.component';

describe('ApontamentoDeProducaoFormComponent', () => {
  let component: ApontamentoDeProducaoFormComponent;
  let fixture: ComponentFixture<ApontamentoDeProducaoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApontamentoDeProducaoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApontamentoDeProducaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
