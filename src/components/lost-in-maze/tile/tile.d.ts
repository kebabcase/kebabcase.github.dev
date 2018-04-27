import {Direction} from '../direction/direction.d';
import {Tile} from './tile';

export type Point = {
  row: number;
  col: number;
};

export interface NextPoints {
  Direction?: Tile;
}
