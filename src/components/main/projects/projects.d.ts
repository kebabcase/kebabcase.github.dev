export interface Project {
  id: string;
  label: string;
  path: string;
  [key: string]: string;
}

export type Projects = Project[];
