export type Point = {
  row: number;
  col: number;
};

export interface ITile {
  canComeFromHere(to: Point): boolean;
}
