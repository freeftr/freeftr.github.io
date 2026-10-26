import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '(주) 브이엠에스홀딩스',
      positions: [
        {
          title: 'Product Engineer',
          startedAt: '2026-05',
          descriptions: [
            'Team AI 에이전트 샌드박스 플랫폼 모바일, 서버 개발',
            '하네스, 자동화 판매 플랫폼 Marketplace 개발',
            '업무 자동화 기능 Workflow 기능 개발',
            '사내 AI 컨텍스트 관리 시스템 구축',
          ],
          skillKeywords: ['Kotlin', 'Spring', 'PostgreSQL', 'AWS Lambda', 'MCP'],
        },
      ],
    },
  ],
};

export default experience;
