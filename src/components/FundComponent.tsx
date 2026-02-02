'use client';

import { FundButton } from '@coinbase/onchainkit/fund';

export default function FundComponent() {
  return (
    <div className="flex justify-center">
      {/* @ts-ignore */}
      <FundButton 
        text="Buy Crypto"
        className='bg-slate-300 font-sans text-black hover:bg-purple-500'
      />
    </div>
  );
}