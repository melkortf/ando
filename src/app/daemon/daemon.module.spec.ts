import { DaemonModule } from './daemon.module';

describe('DaemonModule', () => {
  let daemonModule: DaemonModule;

  beforeEach(() => {
    daemonModule = new DaemonModule();
  });

  it('should create an instance', () => {
    expect(daemonModule).toBeTruthy();
  });
});
