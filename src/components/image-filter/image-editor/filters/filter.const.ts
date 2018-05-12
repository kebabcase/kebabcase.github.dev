import {ImageFilter, FilterMetadataMap} from './filters.d';

export const DEFAULT_FILTER: ImageFilter = {
  blur: 0,
  brightness: 100,
  contrast: 100,
  // dropShadow
  grayscale: 0,
  hueRotate: 0,
  invert: 0,
  opacity: 100,
  saturate: 100,
  sepia: 0,
};

export const FILTER_METADATA: FilterMetadataMap = Object.freeze({
  blur: {
    label: 'Blur',
    unit: 'px',
    range: {
      min: 0,
      max: 100, // TODO: eval
    },
  },
  brightness: {
    label: 'Brightness',
    unit: '%',
    range: {
      min: 0,
      max: 200,
    },
  },
  contrast: {
    label: 'Contrast',
    unit: '%',
    range: {
      min: 0,
      max: 200,
    },
  },
  // TODO: add support for drop shadow here
  grayscale: {
    label: 'Grayscale',
    unit: '%',
    range: {
      min: 0,
      max: 100,
    },
  },
  hueRotate: {
    label: 'Hue Rotation',
    unit: 'deg',
    range: {
      min: 0,
      max: 360,
    },
  },
  invert: {
    label: 'Invert',
    unit: '%',
    range: {
      min: 0,
      max: 100,
    },
  },
  opacity: {
    label: 'Opacity',
    unit: '%',
    range: {
      min: 0,
      max: 100,
    },
  },
  saturate: {
    label: 'Saturate',
    unit: '%',
    range: {
      min: 0,
      max: 200,
    },
  },
  sepia: {
    label: 'Sepia',
    unit: '%',
    range: {
      min: 0,
      max: 100,
    },
  },
});
