import {Point, ITile} from './tile.d';
import {isSamePoint} from '../utility/utility';

export class Tile implements ITile {
  constructor(private position: Point,
              private availableOutputs: Point[]) {
  }

  // TODO: rename this function to something more descriptive
  public canComeFromHere(to: Point): boolean {
    for (let i = 0, iLen = this.availableOutputs.length; i < iLen; i++) {
      if (isSamePoint(this.availableOutputs[i], to)) {
        return true;
      }
    }

    return false;
  }
}
