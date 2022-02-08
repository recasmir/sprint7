import { TestBed } from '@angular/core/testing';

import { CalcularServeiService } from './calcular-servei.service';

describe('CalcularServeiService', () => {
  let service: CalcularServeiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcularServeiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
