import { ContextProvider } from '@/Context/store';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'McloNotes',
  description: 'O céu é o limite',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ContextProvider>
        <body className={ inter.className }>{children}</body>
      </ContextProvider>
    </html>
  );
}
