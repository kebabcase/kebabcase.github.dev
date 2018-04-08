import {Direction} from '../direction/direction.d';
import {Point, NextPoints} from './tile.d';
import {isSamePoint} from '../utility/utility';

export class Tile {
  private id: string;
  private next: NextPoints;
  private previous: Tile;

  constructor(private position: Point, parent: Tile) {
    this.id = Tile.generateId(position);
    this.next = {};
    this.previous = parent;
  }

  public getId() {
    return this.id;
  }

  public getPosition() {
    return this.position;
  }

  public getNexts(): NextPoints {
    return this.next;
  }

  public getNext(direction: Direction): Tile {
    return this.next[direction];
  }

  public setNext(next: Tile, direction: Direction) {
    this.next[direction] = next;
  }

  public getPrevious(): Tile {
    return this.previous;
  }

  public static generateId(position: Point) {
    return `(${position.row}, ${position.col})`;
  }


  // TODO: rename this function to something more descriptive
  // public canComeFromHere(to: Point): boolean {
  //   for (let i = 0, iLen = this.availableOutputs.length; i < iLen; i++) {
  //     if (isSamePoint(this.availableOutputs[i], to)) {
  //       return true;
  //     }
  //   }

  //   return false;
  // }
}
