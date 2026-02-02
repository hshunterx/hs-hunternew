'use client';

import { OnchainKitProvider } from '@coinbase/onchainkit';
import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { base } from 'viem/chains';
import { ReactNode, useState } from 'react';

// Ambil API Key dari environment variable
const apiKey = process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY || "";

const config = getDefaultConfig({
  appName: 'HS Hunter',
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID', // Bisa diisi nanti, atau biarkan default
  chains: [base],
  ssr: true,
});

export function OnchainProviders({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider
          apiKey={apiKey}
          chain={base}
        >
          <RainbowKitProvider>
            {children}
          </RainbowKitProvider>
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}