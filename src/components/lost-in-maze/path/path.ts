import {Point} from '../tile/tile.d';
import {Tile} from '../tile/tile';

class Path {
  private path: string[];

  constructor() {
  }

  public isOnPath(point: Point) {
    return this.path.indexOf(Tile.generateKey(point)) >= 0;
  }
}
