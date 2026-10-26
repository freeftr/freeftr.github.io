import favicon from '../asset/favicon.ico';
import previewImage from '../asset/photo.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = '박종하 이력서';
const description = '기술을 제품에 녹이는 Server Engineer, 박종하입니다.';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 600,
          height: 771,
          alt: '박종하',
        },
      ],
      type: 'profile',
      profile: {
        firstName: '종하',
        lastName: '박',
        username: 'freeftr',
        gender: 'male',
      },
    },
  },
};
