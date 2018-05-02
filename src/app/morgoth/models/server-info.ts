interface ServerStatus {
  hostname: string;
  playerCount: number;
  maxPlayers: number;
  map: string;
}

export interface ServerInfo {
  name: string;
  state: string;
  status: ServerStatus;
}
