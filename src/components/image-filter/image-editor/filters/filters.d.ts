export interface ImageFilter {
  blur: number;
  brightness: number;
  contrast: number;
  // drop-shadow()
  grayscale: number;
  hueRotate: number;
  invert: number;
  opacity: number;
  saturate: number;
  sepia: number;
  [key: string]: number;
}

export interface FilterMetadata {
  label: string;
  unit: string;
  range: {
    min: number;
    max: number;
  };
}

export interface FilterMetadataMap {
  [key: string]: FilterMetadata;
}
