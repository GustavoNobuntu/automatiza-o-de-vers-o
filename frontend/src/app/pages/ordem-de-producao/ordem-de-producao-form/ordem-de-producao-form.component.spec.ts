import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemDeProducaoFormComponent } from './ordem-de-producao-form.component';

describe('OrdemDeProducaoFormComponent', () => {
  let component: OrdemDeProducaoFormComponent;
  let fixture: ComponentFixture<OrdemDeProducaoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdemDeProducaoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdemDeProducaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
