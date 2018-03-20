import {Point} from '../tile/tile.d';
import {isSamePoint} from '../utility/utility';

/**
 * isOnPath utility function for Path objects.
 *
 * @param point Point
 * @returns boolean
 */
export function isOnPath(point: Point): boolean {
  for (let i = 0, iLen = this.path.length; i < iLen; i++) {
    if (isSamePoint(this.path[i], point)) {
      return true;
    }
  }

  return false;
}
