import "@walletconnect/react-native-compat";
import { WagmiConfig } from "wagmi";
import { goerli } from "viem/chains";
import {
  createWeb3Modal,
  defaultWagmiConfig,
  Web3Modal,
  W3mButton,
} from "@web3modal/wagmi-react-native";

import { StyleSheet, Image, View } from "react-native";
import MintSection from "./src/components/MintSection";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "faf378b8fd897ea5a54cac416890929d";

// 2. Create config
const metadata = {
  name: "Web3Modal RN NFT Minting",
  description: "Web3Modal RN NFT Minting Tutorial",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
  redirect: {
    native: "YOUR_APP_SCHEME://",
    universal: "YOUR_APP_UNIVERSAL_LINK.com",
  },
};

const chains = [goerli];

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
});

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <View style={styles.container}>
        <Image
          source={require("./assets/W3MRN-New.png")}
          style={{
            width: 200,
            height: 200,
            borderRadius: 10,
            marginVertical: 16,
          }}
        />
        <W3mButton />
        <MintSection />
      </View>
      <Web3Modal />
    </WagmiConfig>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
