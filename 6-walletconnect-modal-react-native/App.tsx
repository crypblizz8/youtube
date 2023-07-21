import { StyleSheet, Text, View, Pressable } from "react-native";
import { registerRootComponent } from "expo";

import {
  WalletConnectModal,
  useWalletConnectModal,
} from "@walletconnect/modal-react-native";
// Add in the useWalletConnectModal hook

// TODO: Insert the ProjectID
const projectId = "8b6b016f785c7f5dbbe71969d855fae8";

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
  // Add in the useWalletConnectModal hook + props
  const { open, isConnected, address, provider } = useWalletConnectModal();

  // Function to handle the
  const handleButtonPress = async () => {
    if (isConnected) {
      return provider?.disconnect();
    }
    return open();
  };

  // Main UI Render
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>WalletConnect Modal RN Tutorial</Text>
      <Text>{isConnected ? address : "No Connected"}</Text>
      <Pressable onPress={handleButtonPress} style={styles.pressableMargin}>
        <Text>{isConnected ? "Disconnect" : "Connect"}</Text>
      </Pressable>

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
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  pressableMargin: {
    marginTop: 16,
  },
});

registerRootComponent(App);
