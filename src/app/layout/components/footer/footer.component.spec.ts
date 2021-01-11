import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let fixture: FooterComponent;

  beforeEach(() => {
    fixture = new FooterComponent();
  });

  describe('Component setup', () => {
    describe('constructor', () => {
      it('should create a component', () => {
        expect(fixture).toBeTruthy();
      });
    });
  });
});
