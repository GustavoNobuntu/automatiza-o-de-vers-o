import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApontamentoDeProducaoListComponent } from './apontamento-de-producao-list.component';

describe('ApontamentoDeProducaoListComponent', () => {
  let component: ApontamentoDeProducaoListComponent;
  let fixture: ComponentFixture<ApontamentoDeProducaoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApontamentoDeProducaoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApontamentoDeProducaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
