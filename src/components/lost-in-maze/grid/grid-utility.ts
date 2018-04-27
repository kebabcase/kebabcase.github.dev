import {Point, NextPoints} from '../tile/tile.d';
import {GridDimension} from './grid.d';
import {DIRECTION} from '../direction/direction';

/**
 * Generate possible next positions where they are
 * not out of bound of given dimension.
 */
export function getNextPositions(current: Point, dimension: GridDimension): NextPoints {
  const nextPositions = {};
  const outOfBounds: Point[] = [];

  // Needed separate checked map from "nextPositions" since
  // some points are out of bound and is not added to "nextPositions".
  const checked = {
    left: false,
    top: false,
    right: false,
    bottom: false,
  };

  while (Object.keys(nextPositions).length < (4 - outOfBounds.length)) {
    const r = Math.random();
    if (r < 0.25 && !checked.left) {
      checked.left = true;

      const position = {row: current.row - 1, col: current.col};
      isOutOfBound(dimension, position)
        ? outOfBounds.push(position)
        : nextPositions[DIRECTION.LEFT] = position;
    }

    if (r < 0.5 && !checked.top) {
      checked.top = true;

      const position = {row: current.row, col: current.col + 1};
      isOutOfBound(dimension, position)
        ? outOfBounds.push(position)
        : nextPositions[DIRECTION.TOP] = position;
    }

    if (r < 0.75 && !checked.right) {
      checked.right = true;

      const position = {row: current.row + 1, col: current.col};
      isOutOfBound(dimension, position)
        ? outOfBounds.push(position)
        : nextPositions[DIRECTION.RIGHT] = position;
    }

    if (!checked.bottom) {
      checked.bottom = true;

      const position = {row: current.row, col: current.col - 1};
      isOutOfBound(dimension, position)
        ? outOfBounds.push(position)
        : nextPositions[DIRECTION.BOTTOM] = position;
    }
  }

  return nextPositions;
}

export function isOutOfBound(dimension: GridDimension, point: Point): boolean {
  return point.row < 0 || point.row >= dimension.width - 1 ||
    point.col < 0 || point.col >= dimension.height - 1;
}
