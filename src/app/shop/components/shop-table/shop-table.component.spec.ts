import { ShopTableComponent } from './shop-table.component';

describe('ShopTableComponent', () => {
  let fixture: ShopTableComponent;

  beforeEach(() => {
    fixture = new ShopTableComponent();
  });

  describe('Component setup', () => {
    describe('constructor', () => {
      it('should create a component', () => {
        expect(fixture).toBeTruthy();
      });
    });
  });
});
