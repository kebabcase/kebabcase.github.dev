import {Point} from '../tile/tile.d';
import {GridDimension, GridCache} from './grid.d';
import {Path} from '../path/path.d';
// import {DIRECTION} from '../direction/direction';
import {Tile} from '../tile//tile';
// import {isOnPath} from '../path/utility';
import {generateChildNodes} from './grid-generator';
import {getNextPositions, isOutOfBound} from './grid-utility';

export class Grid {
  private root: Tile;

  constructor(private dimension: GridDimension, private path: Path) {
    // TODO: randomize root point
    // this.getRandomRoot(dimension); ?
    const rootPoint = {row: 0, col: 0};
    this.root = new Tile(rootPoint, null);
    this.init(dimension, path);
  }

  private init(dimension, path) {
    const gridCache = generateChildNodes(this.root, dimension, {}, path);

    // Validate that all tiles in the grid are added to the tree.
    if (Object.keys(gridCache).length !== dimension.getSize()) {
      console.log(`Grid Cache: ${gridCache}`);
      console.log(`Dimension: ${dimension}`);

      throw new Error('Not every tile has been added to the tree!');
    }
  }

  public stringify(): string {
    // const possibleNexts = getNextPositions(this.root.getPosition(), this.dimension);
    let str = '';

    for (let i = 0, iLen = possibleNexts.length; i < iLen; i++) {
      str += this.stringifyChildren(possibleNexts[i], str) + '\n';
    }

    return str;
  }

  private stringifyChildren(current: Tile, ancesters: string): string {
    if (current.getNext()) {
      return ancesters + this.stringifyChildren(current.getNext(), ancesters);
    }

    return current.getId();
  }

  // TODO: move to path-generator.ts
  // private generatePath(to: Point): Path {
  //   const path = [];
  //   const directions = Object.keys(DIRECTION);

  //   for (let i = 0, iLen = directions.length; i < iLen; i++) {
  //     const direction = DIRECTION[directions[i]];
  //     const nextPoint = getNextPoint(to, direction);

  //     if (!isOutOfBound(nextPoint)) {
  //       const nextTile = this.grid[nextPoint.row][nextPoint.col];
  //       if ((!nextTile && this.randomChance()) || (nextTile && nextTile.canComeFromHere(to))) {
  //         path.push(nextPoint);
  //       }
  //     }
  //   }

  //   const pathObj = {path, isOnPath: () => true};
  //   pathObj.isOnPath = isOnPath.bind(pathObj);
  //   return pathObj;
  // }
}
