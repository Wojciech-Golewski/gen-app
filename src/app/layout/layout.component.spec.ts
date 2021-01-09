import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  let fixture: LayoutComponent;

  beforeEach(() => {
    fixture = new LayoutComponent();
  });

  describe('Component setup', () => {
    describe('constructor', () => {
      it('should create a component', () => {
        expect(fixture).toBeTruthy();
      });
    });
  });
});
