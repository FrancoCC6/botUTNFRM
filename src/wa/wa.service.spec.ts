import { Test, TestingModule } from '@nestjs/testing';
import { TagEveryone } from './wa.plugin.service';
import { Agente } from './ia.plugin.service';
import { WaService } from './wa.service';

describe('WaService', () => {
  let service: WaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WaService, TagEveryone, Agente],
    }).compile();

    service = module.get<WaService>(WaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
