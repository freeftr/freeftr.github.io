import { Project } from '@content';
import { ReactNode } from 'react';
import { Heading } from '@src/components/heading/heading';
import Prose from '@src/components/prose/prose';

export default function ProjectItem({
  body,
  period,
  service,
  team,
  title,
}: Project): ReactNode {
  return (
    <article className="space-y-4">
      <Heading className="text-balance" level={3}>
        {title}
      </Heading>

      <ul className="space-y-1">
        <li>
          <strong>일정 :</strong> {period}
        </li>
        <li>
          <strong>참여 인원 :</strong> {team}
        </li>
        {service && (
          <li>
            <strong>서비스 :</strong> {service}
          </li>
        )}
      </ul>

      <Prose html={body.html} />
    </article>
  );
}
