import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer2/source-files';

export const Personal = defineDocumentType(() => ({
  name: 'Personal',
  filePathPattern: 'personal.md',
  isSingleton: true,
  fields: {
    givenName: {
      type: 'string',
      description: 'Your first name or given name',
      required: true,
    },
    familyName: {
      type: 'string',
      description: 'Your last name or family name',
      required: true,
    },
    title: {
      type: 'string',
      description: 'Your current job title or a short description of your goal',
      required: true,
    },
    location: {
      type: 'string',
      description:
        'Your general location of residence, not your personal address',
    },
    email: {
      type: 'string',
      description: 'Public contact email',
    },
    githubUrl: {
      type: 'string',
      description: 'URL for your GitHub profile',
    },
    blogUrl: {
      type: 'string',
      description: 'URL for your blog',
    },
    linkedInUrl: {
      type: 'string',
      description: 'URL for your LinkedIn profile',
    },
  },
}));

export const Skill = defineDocumentType(() => ({
  name: 'Skill',
  filePathPattern: 'skills/*.md',
  fields: {
    title: {
      type: 'string',
      description: 'A name for the category of skills',
      required: true,
    },
  },
}));

export const ProfessionalTitle = defineNestedType(() => ({
  name: 'ProfessionalTitle',
  fields: {
    title: {
      type: 'string',
      description: 'A title at this organization',
      required: true,
    },
    startDate: {
      type: 'date',
      description: 'A parsable date for when you started the role',
      required: true,
    },
    endDate: {
      type: 'date',
      description:
        'A parsable date for when you ended the role, or empty if it is your current role',
      required: false,
    },
    description: {
      type: 'string',
      description:
        'A description of the work you did under this role, or your accomplishments that led to a promotion',
      required: false,
    },
  },
}));

export const ProfessionalExperience = defineDocumentType(() => ({
  name: 'ProfessionalExperience',
  filePathPattern: 'professional-experiences/*.md',
  fields: {
    organization: {
      type: 'string',
      description: 'The name of the company or organization you worked with',
      required: true,
    },
    titles: {
      type: 'list',
      of: ProfessionalTitle,
      required: true,
    },
  },
}));

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/*.md',
  fields: {
    title: {
      type: 'string',
      description: 'Project title, including the kind tag such as [회사 프로젝트]',
      required: true,
    },
    period: {
      type: 'string',
      description: 'Period text, e.g. 2026.07 ~ 2026.08',
      required: true,
    },
    team: {
      type: 'string',
      description: 'Team size and your role',
      required: true,
    },
    service: {
      type: 'string',
      description: 'One line about what the service is',
      required: false,
    },
    order: {
      type: 'number',
      description: 'Display order, ascending',
      required: true,
    },
  },
}));

export default makeSource({
  contentDirPath: 'edit-me/content',
  documentTypes: [Personal, Skill, ProfessionalExperience, Project],
});
