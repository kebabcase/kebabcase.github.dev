import * as _ from 'lodash';
import {ImageFilter, FilterMetadata} from './filters.d';
import {DEFAULT_FILTER, FILTER_METADATA} from './filter.const';

export class Filters {
  private filters: ImageFilter;

  constructor(initialFilters?: ImageFilter) {
    this.filters = initialFilters || _.clone(DEFAULT_FILTER);
  }

  public stringify(): string {
    return _.reduce(this.filters, (str: string, value: number, filterType: string) => {
      const htmlAttribute = _.kebabCase(filterType);

      if (!str.length) {
        return `${htmlAttribute}(${value}${FILTER_METADATA[filterType].unit})`;
      }

      return `${str} ${htmlAttribute}(${value}${FILTER_METADATA[filterType].unit})`;
    }, '');
  }

  public getValues(): ImageFilter {
    return this.filters;
  }

  public getValue(type: string): number | null {
    switch (type) {
      case 'blur':
        return this.blur;
      case 'brightness':
        return this.brightness;
      case 'contrast':
        return this.contrast;
      case 'grayscale':
        return this.grayscale;
      case 'hueRotate':
        return this.hueRotate;
      case 'invert':
        return this.invert;
      case 'opacity':
        return this.opacity;
      case 'saturate':
        return this.saturate;
      case 'sepia':
        return this.sepia;
      default:
        return null;
    }
  }

  public setValue(type: string, value: number) {
    switch (type) {
      case 'blur':
        this.blur = value;
        return;
      case 'brightness':
        this.brightness = value;
        return;
      case 'contrast':
        this.contrast = value;
        return;
      case 'grayscale':
        this.grayscale = value;
        return;
      case 'hueRotate':
        this.hueRotate = value;
        return;
      case 'invert':
        this.invert = value;
        return;
      case 'opacity':
        this.opacity = value;
        return;
      case 'saturate':
        this.saturate = value;
        return;
      case 'sepia':
        this.sepia = value;
        return;
      default:
        return;
    }
  }

  public get blur(): number {
    return this.filters.blur;
  }

  public set blur(value: number) {
    this.filters.blur = value;
  }

  public get brightness(): number {
    return this.filters.brightness;
  }

  public set brightness(value: number) {
    this.filters.brightness = value;
  }

  public get contrast(): number {
    return this.filters.contrast;
  }

  public set contrast(value: number) {
    this.filters.contrast = value;
  }

  public get grayscale(): number {
    return this.filters.grayscale;
  }

  public set grayscale(value: number) {
    this.filters.grayscale = value;
  }

  public get hueRotate(): number {
    return this.filters.hueRotate;
  }

  public set hueRotate(value: number) {
    this.filters.hueRotate = value;
  }

  public get invert(): number {
    return this.filters.invert;
  }

  public set invert(value: number) {
    this.filters.invert = value;
  }

  public get opacity(): number {
    return this.filters.opacity;
  }

  public set opacity(value: number) {
    this.filters.opacity = value;
  }

  public get saturate(): number {
    return this.filters.saturate;
  }

  public set saturate(value: number) {
    this.filters.saturate = value;
  }

  public get sepia(): number {
    return this.filters.sepia;
  }

  public set sepia(value: number) {
    this.filters.sepia = value;
  }
}
