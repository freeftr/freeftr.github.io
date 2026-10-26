# freeftr.github.io

박종하 이력서 사이트. [uyu423/resume-nextjs](https://github.com/uyu423/resume-nextjs) 템플릿(MIT)을 바탕으로 GitHub Pages 에 올린다.

- 사이트: https://freeftr.github.io

## 내용 고치기

`payload/` 안의 파일만 고치면 된다. 섹션 순서는 `pages/index.tsx` 에서 바꾼다.

| 파일 | 내용 |
|---|---|
| `payload/profile.ts` | 사진, 이름, 연락처, 한 줄 소개 |
| `payload/introduce.ts` | Introduce 본문 |
| `payload/skill.ts` | Tech Stack |
| `payload/project.ts` | 프로젝트 |
| `payload/experience.ts` | 경력 |
| `payload/education.ts` | 교육 |
| `payload/etc.ts` | 수상 등 기타 |
| `package.json` 의 `lastestUpdatedAt` | Introduce 아래 "Latest Updated" 날짜 |

`main` 에 푸시하면 GitHub Actions 가 `npm run export` 로 `docs/` 를 만들어 배포한다. `docs/` 는 커밋하지 않는다.

## 로컬에서 보기

```sh
npm install
npm run dev      # http://localhost:3000
npm run export   # docs/ 에 정적 HTML 생성
```

Node 20 (`.nvmrc`). PDF 는 브라우저 인쇄(Cmd+P)로 뽑는다.
