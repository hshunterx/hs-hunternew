'use client';

import { FundButton } from '@coinbase/onchainkit/fund';

export default function FundComponent() {
  return (
    <div className="flex justify-center">
      <FundButton 
        className='bg-slate-300 font-sans text-black hover:bg-purple-500'
        text="Buy Crypto"
      />
    </div>
  );
}