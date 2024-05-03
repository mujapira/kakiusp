import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendenciasComponent } from './pendencias.component';

describe('PendenciasComponent', () => {
  let component: PendenciasComponent;
  let fixture: ComponentFixture<PendenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PendenciasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PendenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
