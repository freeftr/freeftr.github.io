import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'AI 도구의 플랫폼화',
    'AI 도구를 개인의 생산성 도구에서 팀이 함께 쓰는 플랫폼으로 만드는 일에 관심을 가지고 팀에 적용해 오고 있습니다. AI Context 관리 시스템을 사내에 구축해 AI agent 기반 개발 환경에서 쌓이는 노후화된 컨텍스트를 시스템적으로 관리해 AI agent의 작업 효율을 향상시킨 경험이 있습니다.',
  ],
  sign: 'Jongha Park',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
