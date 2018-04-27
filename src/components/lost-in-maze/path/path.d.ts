import {Point} from '../tile/tile.d';

export type Path = {
  path: Point[];
  isOnPath: (point: Point) => boolean;
};
