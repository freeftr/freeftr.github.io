import { personal } from '@content';
import { EnvelopeIcon, IdentificationIcon } from '@heroicons/react/24/solid';
import { SiGithub, SiVelog } from '@icons';
import { ReactNode } from 'react';
import SectionHeading from '@src/components/section-heading/section-heading';

export default function ContactInformation(): ReactNode {
  return (
    <article className="space-y-4">
      <SectionHeading
        Icon={IdentificationIcon}
        level={3}
        text="Personal Information"
      />

      <ul className="space-y-1">
        {personal.location && (
          <li>
            <strong>Location :</strong> {personal.location}
          </li>
        )}
        {personal.email && (
          <li>
            <strong>Email :</strong>{' '}
            <a
              className="text-link inline-flex items-center gap-2"
              href={`mailto:${personal.email}`}
            >
              <EnvelopeIcon className="h-[1em]" /> {personal.email}
            </a>
          </li>
        )}
        {personal.githubUrl && (
          <li>
            <strong>Github :</strong>{' '}
            <a
              className="text-link inline-flex items-center gap-2"
              href={personal.githubUrl}
            >
              <SiGithub size="1em" /> {personal.githubUrl}
            </a>
          </li>
        )}
        {personal.blogUrl && (
          <li>
            <strong>Blog :</strong>{' '}
            <a
              className="text-link inline-flex items-center gap-2"
              href={personal.blogUrl}
            >
              <SiVelog size="1em" /> {personal.blogUrl}
            </a>
          </li>
        )}
      </ul>
    </article>
  );
}
