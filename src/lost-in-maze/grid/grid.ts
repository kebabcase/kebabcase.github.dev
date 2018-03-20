import {Point, ITile} from '../tile/tile.d';
import {GridDimension} from './grid.d';
import {Path} from '../path/path.d';
import {DIRECTION} from '../direction/direction';
import {Tile} from '../tile//tile';
import {isOnPath} from '../path/utility';
import {isSamePoint, getNextPoint} from '../utility/utility';

export class Grid {
  private grid: ITile[][];

  constructor(private dimension: GridDimension, private path: Path) {
    this.init(dimension, path);
  }

  private init(dimension: GridDimension, path: Path) {
    this.grid = [];
    for (let i = 0, iLen = dimension.width; i < iLen; i++) {
      this.grid.push([]);
    }

    const rootPoint = {row: 0, col: 0};
    this.grid[0][0] = new Tile(rootPoint, this.generateRandomAvailbeOutputs(rootPoint, path));

    this.populateGrid(dimension, path);
  }

  private populateGrid(dimension: GridDimension, path: Path) {
    for (let row = 0, rowLen = dimension.width; row < rowLen; row++) {
      for (let col = 1, colLen = dimension.height; col < colLen; col++) {
        const currentPosition = {row, col};
        const currentPath = this.getCurrentPath(currentPosition);
        const availableOutputs = this.generateRandomAvailbeOutputs(currentPosition, currentPath);

        this.grid[row][col] = new Tile(currentPosition, availableOutputs);
      }
    }
  }

  private getCurrentPath(to: Point): Path {
    const path = [];
    const directions = Object.keys(DIRECTION);

    for (let i = 0, iLen = directions.length; i < iLen; i++) {
      const direction = DIRECTION[directions[i]];
      const nextPoint = getNextPoint(to, direction);

      if (!this.isOutOfBound(nextPoint)) {
        const nextTile = this.grid[nextPoint.row][nextPoint.col];
        if ((!nextTile && this.randomChance()) || (nextTile && nextTile.canComeFromHere(to))) {
          path.push(nextPoint);
        }
      }
    }

    const pathObj = {path, isOnPath: () => true};
    pathObj.isOnPath = isOnPath.bind(pathObj);
    return pathObj;
  }

  private generateRandomAvailbeOutputs(from: Point, path: Path): Point[] {
    const availableOutputs = [];
    const directions = Object.keys(DIRECTION);

    for (let i = 0, iLen = directions.length; i < iLen; i++) {
      const direction = DIRECTION[directions[i]];
      const possiblePoint = getNextPoint(from, direction);

      if (path.isOnPath(possiblePoint) || this.randomChance()) {
        availableOutputs.push(possiblePoint);
      }
    }

    return availableOutputs;
  }

  private isOutOfBound(point: Point): boolean {
    return point.row < 0 || point.row >= this.dimension.width - 1 ||
      point.col < 0 || point.col >= this.dimension.height - 1;
  }

  // TODO: make a random number generator and return true for 30% to start
  private randomChance(): boolean {
    return true;
  }
}
