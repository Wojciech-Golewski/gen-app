import { MainShopComponent } from './main-shop.component';

describe('MainShopComponent', () => {
  let fixture: MainShopComponent;

  beforeEach(() => {
    fixture = new MainShopComponent();
  });

  describe('Component setup', () => {
    describe('constructor', () => {
      it('should create a component', () => {
        expect(fixture).toBeTruthy();
      });
    });
  });
});
