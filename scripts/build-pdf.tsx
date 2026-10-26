// 빌드 때 public/resume.pdf 를 만든다. GitHub Pages 는 정적 파일만 올릴 수 있어서
// 템플릿의 /api/pdf 라우트 대신 같은 PDF 컴포넌트를 미리 그려 둔다.
import { renderToFile } from '@react-pdf/renderer';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import PDF from '../src/components/pdf/pdf';

const outDir = path.join(process.cwd(), 'public');
const outFile = path.join(outDir, 'resume.pdf');

await mkdir(outDir, { recursive: true });
await renderToFile(<PDF />, outFile);
console.log(`PDF written: ${outFile}`);
