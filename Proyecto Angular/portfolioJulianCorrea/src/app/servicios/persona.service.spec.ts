import { TestBed } from '@angular/core/testing';

import { PersonaService } from './persona.service';

describe('ServiciosPorfolioService', () => {
  let service: PersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
