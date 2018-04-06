import {Point} from '../tile/tile.d';
import {GridDimension} from './grid.d';

/**
 * Generate possible next positions where they are
 * not out of bound of given dimension.
 */
export function getNextPositions(current: Point, dimension: GridDimension): Point[] {
  const nextPositions: Point[] = [];
  const outOfBounds: Point[] = [];
  const added = {
    left: false,
    top: false,
    right: false,
    bottom: false,
  };

  while (nextPositions.length < (4 - outOfBounds.length)) {
    const r = Math.random();
    if (r < 0.25 && !added.left) {
      added.left = true;

      const position = {row: current.row - 1, col: current.col};
      isOutOfBound(dimension, position)
        ? outOfBounds.push(position)
        : nextPositions.push(position);
    }

    if (r < 0.5 && !added.top) {
      added.top = true;

      const position = {row: current.row, col: current.col + 1};
      isOutOfBound(dimension, position)
        ? outOfBounds.push(position)
        : nextPositions.push(position);
    }

    if (r < 0.75 && !added.right) {
      added.right = true;

      const position = {row: current.row + 1, col: current.col};
      isOutOfBound(dimension, position)
        ? outOfBounds.push(position)
        : nextPositions.push(position);
    }

    if (!added.bottom) {
      added.bottom = true;

      const position = {row: current.row, col: current.col - 1};
      isOutOfBound(dimension, position)
        ? outOfBounds.push(position)
        : nextPositions.push(position);
    }
  }

  return nextPositions;
}

export function isOutOfBound(dimension: GridDimension, point: Point): boolean {
  return point.row < 0 || point.row >= dimension.width - 1 ||
    point.col < 0 || point.col >= dimension.height - 1;
}
