import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioDeProducaoFormComponent } from './relatorio-de-producao-form.component';

describe('RelatorioDeProducaoFormComponent', () => {
  let component: RelatorioDeProducaoFormComponent;
  let fixture: ComponentFixture<RelatorioDeProducaoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioDeProducaoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioDeProducaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
