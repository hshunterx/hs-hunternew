'use client';
import {
  Transaction,
  TransactionButton,
  TransactionStatus,
  TransactionStatusAction,
  TransactionStatusLabel,
} from '@coinbase/onchainkit/transaction';
import type { Address, ContractFunctionParameters } from 'viem';
import {
  BASE_SEPOLIA_CHAIN_ID,
  mintABI,
  mintContractAddress,
} from '../constants';

export default function TransactionWrapper({ address }: { address: Address }) {
  const contracts = [
    {
      address: mintContractAddress,
      abi: mintABI,
      functionName: 'mint',
      args: [address],
    },
  ] as unknown as ContractFunctionParameters[];

  // Gunakan 'any' untuk semua handler agar tidak dicek oleh TypeScript
  const handleError = (err: any) => {
    console.error('Transaction error:', err);
  };

  const handleSuccess = (response: any) => {
    console.log('Transaction successful', response);
  };

  // Alias 'any' untuk membungkam error 'bigint' dan 'JSX component'
  const TBase = Transaction as any;
  const TButton = TransactionButton as any;
  const TStatus = TransactionStatus as any;
  const TStatusLabel = TransactionStatusLabel as any;
  const TStatusAction = TransactionStatusAction as any;

  return (
    <div className="flex w-[450px]">
      <TBase
        calls={contracts}
        className="w-[450px]"
        chainId={BASE_SEPOLIA_CHAIN_ID}
        onError={handleError}
        onSuccess={handleSuccess}
      >
        <TButton className="mt-0 mr-auto ml-auto w-[450px] max-w-full text-[white]" />
        <TStatus>
          <TStatusLabel />
          <TStatusAction />
        </TStatus>
      </TBase>
    </div>
  );
}