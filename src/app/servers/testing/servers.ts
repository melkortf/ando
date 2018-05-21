import { Server } from '../models';

const OfflineServer: Server = {
  name: 'TEST_NAME_SERVER_OFFLINE',
  state: 'Offline',
  hostname: null,
  playerCount: 0,
  maxPlayers: 0,
  map: null,
  address: '',
};

const OnlineServer: Server = {
  name: 'TEST_NAME_SERVER_ONLINE',
  state: 'Running',
  hostname: 'TEST_HOSTNAME_SERVER_ONLINE',
  playerCount: 0,
  maxPlayers: 24,
  map: 'TEST_MAP',
  address: 'testprot://testhostname:1234',
};

export { OfflineServer, OnlineServer };
