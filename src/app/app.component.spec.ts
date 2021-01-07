import { AppComponent } from "./app.component";

describe('AppComponent', () => {
  let fixture: AppComponent;

  beforeEach(() => {
    fixture = new AppComponent();
  });

  describe('Component setup', () => {
    describe('constructor', () => {
      it('should create a component', () => {
        expect(fixture).toBeTruthy();
      })
    });
  });

});
