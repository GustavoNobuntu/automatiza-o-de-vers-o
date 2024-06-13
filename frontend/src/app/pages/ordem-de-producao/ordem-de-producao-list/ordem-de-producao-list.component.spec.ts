import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemDeProducaoListComponent } from './ordem-de-producao-list.component';

describe('OrdemDeProducaoListComponent', () => {
  let component: OrdemDeProducaoListComponent;
  let fixture: ComponentFixture<OrdemDeProducaoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdemDeProducaoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdemDeProducaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
