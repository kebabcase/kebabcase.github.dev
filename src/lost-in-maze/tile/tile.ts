import {Point} from './tile.d';
import {isSamePoint} from '../utility/utility';

export class Tile {
  private id: string;
  private next: Tile = null;
  private previous: Tile;

  constructor(private position: Point, parent: Tile) {
    this.id = Tile.generateId(position);
    this.next = null;
    this.previous = parent;
  }

  public getId() {
    return this.id;
  }

  public getPosition() {
    return this.position;
  }

  // TODO: next should be an array (multiple nexts)
  // - Grid generator has to account for this as well
  // - Tile should have getAvailableNexts()
  // - and getNext(direction)
  public getNext(): Tile {
    return this.next;
  }

  public setNext(next: Tile) {
    this.next = next;
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
