import { faEnvelope, faPen, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { IProfile } from '../component/profile/IProfile';
import image from '../asset/photo.jpg';

const profile: IProfile.Payload = {
  disable: false,

  image,
  name: {
    title: '박종하',
    small: '(Jongha Park)',
  },
  contact: [
    {
      title: 'jonghaparkdevelop@gmail.com',
      link: 'mailto:jonghaparkdevelop@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'github.com/freeftr',
      link: 'https://github.com/freeftr',
      icon: faGithub,
    },
    {
      title: 'velog.io/@freeftr',
      link: 'https://velog.io/@freeftr/posts',
      icon: faPen,
    },
  ],
  notice: {
    title: '기술을 제품에 녹이는 Server Engineer, 박종하입니다.',
    icon: faQuoteLeft,
  },
};

export default profile;
