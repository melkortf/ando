import { Server } from '../models';

const OfflineServer: Server = {
  name: 'TEST_NAME_SERVER_OFFLINE',
  state: 'offline',
};

const OnlineServer: Server = {
  name: 'TEST_NAME_SERVER_ONLINE',
  state: 'running',
  status: {
    hostname: 'TEST_HOSTNAME_SERVER_ONLINE',
    playerCount: 0,
    maxPlayers: 24,
    map: 'TEST_MAP',
    address: 'testprot://testhostname:1234',
    passwordProtected: false,
    sourceTv: {
      password: '',
      port: 27020,
    },
  },
};

export { OfflineServer, OnlineServer };
