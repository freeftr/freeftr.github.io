import { RocketLaunchIcon } from '@heroicons/react/24/solid';
import { Fragment, ReactNode } from 'react';
import ProjectItem from '@src/components/articles/project-item';
import Separator from '@src/components/articles/separator';
import SectionHeading from '@src/components/section-heading/section-heading';
import { sortedProjects } from '@src/helpers/utilities';

export default function Projects(): ReactNode {
  return (
    <article className="border-neutral-6 bg-neutral-2 rounded-xl border py-12 shadow-md">
      <div className="container space-y-8">
        <SectionHeading
          className="justify-center"
          Icon={RocketLaunchIcon}
          level={2}
          text="Project"
        />

        {sortedProjects.map((project) => (
          <Fragment key={project._id}>
            <ProjectItem {...project} />
            <Separator />
          </Fragment>
        ))}
      </div>
    </article>
  );
}
