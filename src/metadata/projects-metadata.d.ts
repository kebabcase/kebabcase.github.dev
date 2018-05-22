export interface Asset {
  path: string;
}

export interface Assets {
  featureImage: Asset;
  [key: string]: Asset;
}

export interface ProjectMetadata {
  id: string;
  label: string;
  name: string;
  path: string;
  assets: Assets;
  [key: string]: any;
}

export type ProjectsMetadata = ProjectMetadata[];
