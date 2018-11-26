import { HomeModule } from './home.module';

describe('FooterLinksModule', () => {
  let privacypolicysModule: ContactusModule;

  beforeEach(() => {
    privacypolicysModule = new ContactusModule();
  });

  it('should create an instance', () => {
    expect(privacypolicysModule).toBeTruthy();
  });
});
