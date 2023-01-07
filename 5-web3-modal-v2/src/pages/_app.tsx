import "../../styles/globals.css";
import type { AppProps } from "next/app";
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";

import { Web3Modal } from "@web3modal/react";

import { configureChains, createClient, WagmiConfig } from "wagmi";

import { goerli } from "wagmi/chains";

const chains = [goerli];

// Wagmi Provider
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: "fc1252c3e0c13567b30ca7072f80438b" }),
]);

// Wagmi Client
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "web3Modal", chains }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

export default function App({ Component, pageProps }: AppProps) {
  // return (<Component {...pageProps} />);
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <Component {...pageProps} />
      </WagmiConfig>

      <Web3Modal
        projectId="fc1252c3e0c13567b30ca7072f80438b"
        ethereumClient={ethereumClient}
      />
    </>
  );
}
