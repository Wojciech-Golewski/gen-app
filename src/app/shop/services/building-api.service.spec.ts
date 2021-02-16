import { BuildingApiService } from './building-api.service';

describe('BuildingApiService', () => {
  let fixture: BuildingApiService;

  beforeEach(() => {
    fixture = new BuildingApiService();
  });

  describe('Service setup', () => {
    describe('constructor', () => {
      it('should create a service', () => {
        expect(fixture).toBeTruthy();
      });
    });
  });
});
