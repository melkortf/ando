export interface Server {
  name: string;
  state: 'offline' | 'starting' | 'running' | 'shutting down' | 'crashed';
  status?: {
    hostname: string;
    playerCount: number;
    maxPlayers: number;
    map: string;
    address: string;
    passwordProtected: boolean;
    sourceTv: {
      password: string;
      port: number;
    };
  };
}
