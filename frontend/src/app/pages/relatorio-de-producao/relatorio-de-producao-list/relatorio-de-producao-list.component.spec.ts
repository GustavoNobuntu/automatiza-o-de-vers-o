import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioDeProducaoListComponent } from './relatorio-de-producao-list.component';

describe('RelatorioDeProducaoListComponent', () => {
  let component: RelatorioDeProducaoListComponent;
  let fixture: ComponentFixture<RelatorioDeProducaoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioDeProducaoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioDeProducaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
