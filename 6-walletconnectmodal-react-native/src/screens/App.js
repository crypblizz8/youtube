import { StyleSheet, Text, View, Button } from "react-native";
import { registerRootComponent } from "expo";
// import "expo-crypto-shim.js";

import {
  WalletConnectModal,
  useWalletConnectModal,
} from "@walletconnect/modal-react-native";

const projectId = "...";

const providerMetadata = {
  name: "YOUR_PROJECT_NAME",
  description: "YOUR_PROJECT_DESCRIPTION",
  url: "https://your-project-website.com/",
  icons: ["https://your-project-logo.com/"],
  redirect: {
    native: "YOUR_APP_SCHEME://",
    universal: "YOUR_APP_UNIVERSAL_LINK.com",
  },
};

export default function App() {
  const { open, isConnected } = useWalletConnectModal();

  return (
    <View style={styles.container}>
      <Text> WalletConnectModal React Native Tutorial</Text>
      <Button title={isConnected ? "View Account" : "Connect"} onPress={open} />

      <WalletConnectModal
        projectId={projectId}
        providerMetadata={providerMetadata}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

registerRootComponent(App);
