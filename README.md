# freeftr.github.io

박종하 이력서 사이트. [colinhemphill/nextjs-resume](https://github.com/colinhemphill/nextjs-resume) 템플릿을 바탕으로 GitHub Pages 에 정적으로 올린다.

- 사이트: https://freeftr.github.io
- PDF: https://freeftr.github.io/resume.pdf

## 내용 고치기

`edit-me/content/` 안의 Markdown 만 고치면 된다.

| 파일 | 내용 |
|---|---|
| `personal.md` | 이름, 한 줄 소개, 연락처, Introduction 본문 |
| `skills/0.md` | Tech Stack |
| `projects/*.md` | 프로젝트 (제목, 일정, 참여 인원, 서비스, 본문). `order` 가 작을수록 위 |
| `professional-experiences/*.md` | 회사, 교육 경력 |

`main` 에 푸시하면 GitHub Actions 가 빌드해 배포한다.

## 로컬에서 보기

```sh
bun install
bun run dev        # http://localhost:3000
bun run build      # contentlayer → public/resume.pdf → out/
```

## 템플릿에서 바꾼 것

- GitHub Pages 용 정적 내보내기(`output: 'export'`). 서버가 필요한 비공개 링크, `/api/pdf` 라우트는 뺐다.
- PDF 는 빌드 때 `scripts/build-pdf.tsx` 가 같은 react-pdf 컴포넌트로 `public/resume.pdf` 를 만든다.
- 한글 폰트: 웹은 Noto Sans KR, PDF 는 나눔고딕(`src/fonts/NanumGothic-*.ttf`).
- Project 섹션 추가, Achievements 와 Additional Info 섹션 제거.
