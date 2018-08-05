import { ServerImpl } from './server-impl';
import { OnlineServer } from './testing/servers';

describe('ServerImpl', () => {
  it('should create', () => {
    const s = new ServerImpl('FAKE_HOST', OnlineServer);
    expect(s).toBeTruthy();
  });

  it('should return correct data', () => {
    const orig = OnlineServer;
    const s = new ServerImpl('FAKE_HOST', orig);

    expect(s.address).toBe(orig.address);
    expect(s.hostname).toBe(orig.hostname);
    expect(s.map).toBe(orig.map);
    expect(s.maxPlayers).toBe(orig.maxPlayers);
    expect(s.name).toBe(orig.name);
    expect(s.playerCount).toBe(orig.playerCount);
    expect(s.state).toBe(orig.state);
  });
});
