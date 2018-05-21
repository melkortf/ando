import * as io from 'socket.io-client';
import { Server } from './models';

export class ServerImpl implements Server {

  private io: SocketIOClient.Socket;

  constructor(endpoint: string, private data: Server) {
    this.io = io(`${endpoint}/${data.name}`);
    this.io.on('stateChanged', state => this.data.state = state);
    this.io.on('hostnameChanged', hostname => this.data.hostname = hostname);
    this.io.on('playerCountChanged', playerCount => this.data.playerCount = playerCount);
    this.io.on('maxPlayersChanged', maxPlayers => this.data.maxPlayers = maxPlayers);
    this.io.on('mapChanged', map => this.data.map = map);
    this.io.on('addressChanged', address => this.data.address = address);
  }

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
