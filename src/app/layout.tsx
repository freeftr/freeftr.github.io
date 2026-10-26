import { Metadata, Viewport } from 'next';
import { ThemeProvider } from 'next-themes';
import { Albert_Sans, JetBrains_Mono, Noto_Sans_KR } from 'next/font/google';
import { PropsWithChildren, ReactNode } from 'react';
import Footer from '@src/components/footer/footer';
import Header from '@src/components/header/header';
import { deployURL } from '@src/helpers/environment';
import { cn, fullName } from '@src/helpers/utilities';
import './styles/globals.css';

const albert = Albert_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-albert',
});

const notoSansKR = Noto_Sans_KR({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-noto-kr',
  weight: ['400', '500', '700'],
});

const jetBrainsMono = JetBrains_Mono({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

const baseURL = `https://${deployURL}`;
const siteName = `${fullName} 이력서`;
const title = `이력서 | ${fullName}`;
const description = `${fullName}의 이력서입니다.`;

export const metadata: Metadata = {
  applicationName: siteName,
  authors: { name: fullName },
  creator: fullName,
  description,
  generator: 'Next.js',
  keywords: ['resume', '이력서', fullName, 'server engineer'],
  metadataBase: new URL(baseURL),
  openGraph: {
    type: 'profile',
    title,
    description,
    siteName,
    url: baseURL,
  },
  title,
  twitter: {
    site: siteName,
    creator: fullName,
    description,
    title,
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
};

export default function RootLayout({ children }: PropsWithChildren): ReactNode {
  return (
    <html
      lang="ko"
      className={cn(albert.variable, notoSansKR.variable, jetBrainsMono.variable)}
      suppressHydrationWarning
    >
      <body className="bg-neutral-1 text-neutral-12 selection:bg-accent-11 selection:text-neutral-1">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="space-y-12">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
