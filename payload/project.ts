import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'AI 에이전트 커넥터 도구 지연 로딩',
      startedAt: '2026-10',
      endedAt: '2026-10',
      where: '회사 프로젝트 | 개인 (설계, 구현, 배포 담당)',
      descriptions: [
        {
          content:
            '서비스 : Google, Notion 등 외부 커넥터(MCP)를 붙여 업무를 자동화하는 AI 에이전트 플랫폼',
          weight: 'MEDIUM',
        },
        {
          content:
            '커넥터 8개(도구 105개)를 붙인 에이전트가 요청마다 모든 도구 정의를 실어 단계당 약 13만 토큰을 소모했고, 이는 사용자 입장에서 부담스러운 지출이었습니다.',
          descriptions: [
            {
              content:
                '=> 모델이 고른 커넥터의 도구의 컨텍스트만 불러오는 지연 로딩을 설계해 워크플로 비용을 54% 줄였습니다.',
            },
          ],
        },
        {
          content:
            '필요한 도구만 실으면 도구 목록이 바뀔 때마다 프롬프트 캐시가 깨지는 문제가 있었습니다.',
          descriptions: [
            {
              content: '=> 도구 목록은 고정하고 불러온 정의는 대화 끝에 붙여 캐시를 유지했습니다.',
            },
          ],
        },
      ],
    },
    {
      title: '사내 AI Context 관리 시스템 구축',
      startedAt: '2026-07',
      endedAt: '2026-08',
      where: '회사 프로젝트 | 개인',
      descriptions: [
        {
          content:
            '서비스 : 노후 문서를 정리해 에이전트가 최신 의사결정만 참조하게 하는 사내 Context Memory 시스템',
          weight: 'MEDIUM',
        },
        {
          content:
            '산재한 노후 문서의 유효성 판별과 에이전트의 컨텍스트 참조를 모두 사람이 챙겨야 하는 문제',
          descriptions: [
            {
              content:
                '=> 노후 문서 관리 데몬이 기존 문서와 충돌을 판정하고, 애매하면 LLM이, 확신이 낮으면 사람이 PR로 결정합니다. 30일 지난 문서는 요약만 남기고 원문은 S3로 옮겼습니다.',
            },
            {
              content:
                '=> 최신 문서는 OpenSearch로 색인해 MCP 서버로 각자의 에이전트가 검색하게 했고, 의사결정의 선후 관계는 GraphDB로 구조화해 의사결정 기록을 추적할 수 있게 했습니다.',
            },
          ],
        },
        {
          content: '도입 효과',
          descriptions: [
            {
              content:
                '=> 담당자 없이도 AI에게 물어 최신 의사결정을 파악해 블로킹과 인수인계 비용을 줄였습니다.',
            },
          ],
        },
      ],
    },
    {
      title: '선착순 쿠폰 발급 시스템',
      startedAt: '2025-09',
      endedAt: '2025-09',
      where: '개인 프로젝트',
      descriptions: [
        {
          content: 'Github : https://github.com/freeftr/Coupon_Dispatcher',
          href: 'https://github.com/freeftr/Coupon_Dispatcher',
        },
        {
          content: '서비스 : 특정 시간에 진행하는 쿠폰 발급 이벤트를 수행하는 안정적인 시스템 개발',
          weight: 'MEDIUM',
        },
        {
          content:
            '쿠폰 이벤트 시작 시, 순간적인 트래픽으로 인해 느린 응답 발생 및 쿠폰 발급 한도 조절 실패',
          descriptions: [
            {
              content:
                '=> 발급 이력 영속화 작업을 비동기로 전환하고, Redis를 활용해 쿠폰 수량 검증을 원자적으로 처리했습니다. 대기열을 활용해 DB 접근을 초당 10건으로 제한해 부하를 조절하였습니다.',
            },
          ],
        },
        {
          content:
            '발급 트랜잭션 내에서 외부 시스템을 직접 호출해 발급이 실패했는데, 이벤트는 발행되는 문제 발생',
          descriptions: [
            {
              content:
                '=> 로컬 이벤트를 활용해, 발급 트랜잭션과 이벤트 발행을 분리해 발급 성공 시에만 이벤트 발행을 보장했습니다.',
            },
          ],
        },
      ],
    },
    {
      title: '분산 락 개선',
      startedAt: '2025-06',
      endedAt: '2025-06',
      where: '개인 프로젝트',
      descriptions: [
        {
          content: 'Github : https://github.com/freeftr/Distributed_Lock_Toy_Project',
          href: 'https://github.com/freeftr/Distributed_Lock_Toy_Project',
        },
        {
          content: '서비스 : 다중화된 API 서버에서 계좌 이체의 동시성을 제어하는 함수형 분산 락',
          weight: 'MEDIUM',
        },
        {
          content:
            'AOP 분산 락이 불필요한 로직까지 감싸 락 경합이 늘고, 수만 건 동시 요청에서 일부가 간헐적으로 실패했습니다.',
          descriptions: [
            {
              content:
                '=> 락이 필요한 로직만 함수로 넘겨 락 안에서 실행하는 함수형 분산 락으로 바꿔 k6 부하 테스트 기준 성공률 약 43%, 평균 응답 시간 약 12배 개선했습니다.',
            },
          ],
        },
      ],
    },
  ],
};

export default project;
