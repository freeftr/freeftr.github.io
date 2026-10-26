import { ISkill } from '../component/skill/ISkill';

const techStack: ISkill.Skill = {
  category: 'Tech Stack',
  items: [
    { title: 'Java(Kotlin)' },
    { title: 'MySQL' },
    { title: 'PostgreSQL' },
    { title: 'Redis' },
    { title: 'Kafka' },
    { title: 'AI-Native' },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [techStack],
};

export default skill;
