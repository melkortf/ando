export interface Server {
  name: string;
  state: 'Offline' | 'Starting' | 'Running' | 'ShuttingDown' | 'Crashed';
  hostname: string;
  playerCount: number;
  maxPlayers: number;
  map: string;
  address: string;
}
