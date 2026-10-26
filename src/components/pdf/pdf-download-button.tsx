import { DocumentIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';
import { Button } from '@src/components/button/button';

export default function PDFDownloadButton(): ReactNode {
  return (
    <Button asChild size="lg">
      <a href="/resume.pdf">
        <DocumentIcon />
        View or Download PDF
      </a>
    </Button>
  );
}
