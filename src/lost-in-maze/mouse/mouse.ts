import {Point} from '../tile/tile.d';
import {DIRECTION} from '../direction/direction';
import {getNextPoint} from '../utility/utility';

export class Mouse {
  private currentPosition: Point;

  constructor() {
    this.currentPosition = {row: 0, col: 0};
  }

  public moveTo(direction: DIRECTION) {
    this.currentPosition = getNextPoint(this.currentPosition, direction);
  }
}
