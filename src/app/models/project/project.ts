export interface Project {
  projectId?: number;
  clientId: number;
  companyName?: string;
  companyEmail?: string;
  companyPhone?: string;
  projectTitle?: string;
  projectDescription?: string;
  targetProgram?: string[];
  attachedFile?: string | File;
  approved?: boolean;
}
