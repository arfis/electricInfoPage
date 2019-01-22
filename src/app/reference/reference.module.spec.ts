import { ReferenceModule } from './reference.module';

describe('ReferenceModule', () => {
  let referenceModule: ReferenceModule;

  beforeEach(() => {
    referenceModule = new ReferenceModule();
  });

  it('should create an instance', () => {
    expect(referenceModule).toBeTruthy();
  });
});
