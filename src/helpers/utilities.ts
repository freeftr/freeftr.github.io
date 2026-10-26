import {
  allProfessionalExperiences,
  allProjects,
  IsoDateTimeString,
  personal,
} from '@content';
import { ClassValue } from 'class-variance-authority/types';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const fullName = `${personal.givenName} ${personal.familyName}`.trim();

export const initials = personal.givenName.slice(0, 1);

export const sortedProfessionalExperiences =
  allProfessionalExperiences.toSorted((a, b) => {
    const earliestStartDateA = Math.min(
      ...a.titles.map((title) => new Date(title.startDate).getTime()),
    );
    const earliestStartDateB = Math.min(
      ...b.titles.map((title) => new Date(title.startDate).getTime()),
    );

    return earliestStartDateB - earliestStartDateA;
  });

export const sortedProjects = allProjects.toSorted(
  (a, b) => a.order - b.order,
);

export function getFormattedDate(dateTimeString: IsoDateTimeString): string {
  const date = new Date(dateTimeString);
  const year = date.getUTCFullYear().toString();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  return `${year}.${month}`;
}

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
