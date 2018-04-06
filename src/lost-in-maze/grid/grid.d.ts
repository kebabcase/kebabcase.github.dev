import {Point} from '../tile/tile.d';

export type GridDimension = {
  width: number;
  height: number;
  getSize(): number;
};

export type GridCache = {
  [key: string]: boolean;
};
