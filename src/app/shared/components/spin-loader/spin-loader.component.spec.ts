import { SpinLoaderComponent } from './spin-loader.component';

describe('SpinLoaderComponent', () => {
  let fixture: SpinLoaderComponent;

  beforeEach(() => {
    fixture = new SpinLoaderComponent();
  });

  describe('Component setup', () => {
    describe('constructor', () => {
      it('should create a component', () => {
        expect(fixture).toBeTruthy();
      });
    });
  });
});
