import {Direction} from '../direction/direction.d';
import {Point} from '../tile/tile.d';
import {GridDimension, GridCache} from './grid.d';
import {Path} from '../path/path.d';
import {DIRECTION} from '../direction/direction';
import {Tile} from '../tile/tile';
import {getNextPositions, isOutOfBound} from './grid-utility';

/**
 * Create grid using tree data structure.
 * `this.root` being the initial position of the mice,
 * `path` is the only possible way to get to the ending reward, cheese.
 * All other children branches are dead end.
 */
export function generateChildNodes(currentNode: Tile, dimension: GridDimension, cache: GridCache, path: Path) {
  // Check all four sides in a random order.
  const nextPositions = getNextPositions(currentNode.getPosition(), dimension);
  const directions = Object.keys(nextPositions);

  while (directions.length) {
    const nextPossibleDirection = directions.shift();
    const possibleNextPosition = nextPositions[nextPossibleDirection];

    if (isOutOfBound(dimension, possibleNextPosition)) {
      break;
    }

    if (cache[Tile.generateId(possibleNextPosition)]) {
      break;
    }

    // If current node is not on the path, next node cannot be on path
    // since mouse cannot move back to the path from other nodes.
    if (!path.isOnPath(currentNode.getPosition()) && path.isOnPath(possibleNextPosition)) {
      break;
    }

    // Add next position and recursive call for the child
    const nextTile = new Tile(possibleNextPosition, currentNode);
    currentNode.setNext(nextTile, nextPossibleDirection as Direction);

    // Update cache
    cache[nextTile.getId()] = true;

    return generateChildNodes(nextTile, dimension, cache, path);
  }

  // Checked all possible directions.
  // Deadend.
  return cache;
}
