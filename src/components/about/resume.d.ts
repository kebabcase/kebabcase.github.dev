export type ResumeTopic = 'tech' | 'finance' | 'education' | 'math' | 'health' | 'misc';

export interface ResumeContent {
  id: string;
  title?: string;
  content?: ResumeContent[];
  body?: string[];
}

export interface ResumeItem {
  id: string;
  label: string;
  at: string;
  link: string;
  location: string;
  time: string;
  duration: string;
  topic: ResumeTopic[];
  content: ResumeContent[];
}

export interface ResumeSection {
  id: string;
  label: string;
  content: ResumeItem[];
}

export type Resume = ResumeSection[];
