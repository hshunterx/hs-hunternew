import './globals.css';
import type { Metadata } from 'next';
import { OnchainProviders } from '../components/OnchainProviders';

export const metadata: Metadata = {
  title: 'HS Hunter - Onchain App',
  description: 'Built with Base OnchainKit',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <OnchainProviders>
          {children}
        </OnchainProviders>
      </body>
    </html>
  );
}