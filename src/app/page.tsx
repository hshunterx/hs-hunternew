'use client';

import { 
  ConnectWallet, 
  Wallet, 
  WalletDropdown, 
  WalletDropdownDisconnect 
} from '@coinbase/onchainkit/wallet'; 
import { Identity, Name, Avatar } from '@coinbase/onchainkit/identity';
import FundComponent from '../components/FundComponent';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm flex flex-col gap-8">
        <h1 className="text-4xl font-bold">HS Hunter</h1>
        
        <div className="flex flex-col items-center gap-4">
          {/* @ts-ignore */}
          <Wallet>
            {/* @ts-ignore */}
            <ConnectWallet>
              {/* @ts-ignore */}
              <Avatar />
              {/* @ts-ignore */}
              <Name />
            </ConnectWallet>
            <WalletDropdown>
              {/* @ts-ignore */}
              <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                <Avatar />
                <Name />
              </Identity>
              <WalletDropdownDisconnect />
            </WalletDropdown>
          </Wallet>

          <FundComponent />
        </div>
      </div>
    </main>
  );
}