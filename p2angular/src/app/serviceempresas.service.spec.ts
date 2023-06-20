import { TestBed } from '@angular/core/testing';

import { ServiceempresasService } from './serviceempresas.service';

describe('ServiceempresasService', () => {
  let service: ServiceempresasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceempresasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
