import { createPublicClient, http } from 'viem';
import { etherlinkTestnet } from 'wagmi/chains';
import { createWalletClient, custom } from 'viem';

export const publicClient = createPublicClient({
  chain: etherlinkTestnet,
  transport: http(),
});

export const walletClient = createWalletClient({
  chain: etherlinkTestnet,
  transport: custom(window.ethereum),
}); 