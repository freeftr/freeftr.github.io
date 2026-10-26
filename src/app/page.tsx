import { ReactNode } from 'react';
import AboutMe from '@src/components/articles/about-me';
import ContactInformation from '@src/components/articles/contact-info';
import Professional from '@src/components/articles/professional';
import Projects from '@src/components/articles/projects';
import Skills from '@src/components/articles/skills';

export default function Page(): ReactNode {
  return (
    <div className="container space-y-12">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <AboutMe />
        <ContactInformation />
        <Skills />
      </div>

      <Projects />
      <Professional />
    </div>
  );
}
