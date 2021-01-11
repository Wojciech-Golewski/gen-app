import { TopNavbarComponent } from './top-navbar.component';

describe('TopNavbarComponent', () => {
  let fixture: TopNavbarComponent;

  beforeEach(() => {
    fixture = new TopNavbarComponent();
  });

  describe('Component setup', () => {
    describe('constructor', () => {
      it('should create a component', () => {
        expect(fixture).toBeTruthy();
      });
    });
  });
});
