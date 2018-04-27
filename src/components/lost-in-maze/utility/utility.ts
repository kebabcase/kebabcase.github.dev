import {Point} from '../tile/tile.d';
import {DIRECTION} from '../direction/direction';

export function isSamePoint(a: Point, b: Point): boolean {
  return a.row === b.row && a.col === b.col;
}

export function getNextPoint(from: Point, direction: DIRECTION): Point {
  switch (direction) {
    case DIRECTION.LEFT:
      return {row: from.row - 1, col: from.col};
    case DIRECTION.TOP:
      return {row: from.row, col: from.col + 1};
    case DIRECTION.RIGHT:
      return {row: from.row + 1, col: from.col};
    case DIRECTION.BOTTOM:
      return {row: from.row, col: from.col - 1};
  }
}
