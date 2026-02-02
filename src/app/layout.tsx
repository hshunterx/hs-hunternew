// Ubah dari './globals.css' menjadi '../globals.css'
import '../globals.css'; 
import { OnchainProviders } from '../components/OnchainProviders';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <OnchainProviders>{children}</OnchainProviders>
      </body>
    </html>
  );
}