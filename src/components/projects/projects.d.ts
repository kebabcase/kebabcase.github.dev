export interface Asset {
  path: string;
}

export interface Assets {
  featureImage: Asset;
  [key: string]: Asset;
}

export interface Project {
  id: string;
  label: string;
  name: string;
  path: string;
  assets?: Assets;
  [key: string]: any;
}

export type Projects = Project[];
