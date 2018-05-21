import { Server } from './models';

export class ServerImpl implements Server {

  constructor(private data: Server) { }

  get name() {
    return this.data.name;
  }

  get state() {
    return this.data.state;
  }

  get hostname() {
    return this.data.hostname;
  }

  get playerCount() {
    return this.data.playerCount;
  }

  get maxPlayers() {
    return this.data.maxPlayers;
  }

  get map() {
    return this.data.map;
  }

  get address() {
    return this.data.address;
  }

}
