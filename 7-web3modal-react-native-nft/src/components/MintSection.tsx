import { Text, View, StyleSheet, Pressable } from "react-native";
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import mintABI from "../abis/MintABI.json";

export default function MintSection() {
  // Reading the Contract
  const {
    data: contractName,
    isError,
    isLoading,
    isSuccess,
  } = useContractRead({
    address: "0x47024d9106DB469Ef7A20593a3BeD84F2EbE6A04",
    abi: mintABI,
    functionName: "name",
  });

  // Writing to the Contract
  const { config } = usePrepareContractWrite({
    address: "0x47024d9106DB469Ef7A20593a3BeD84F2EbE6A04",
    abi: mintABI,
    functionName: "safeMint",
    args: ["0x307F2Ee534BE80B08993A50222dA462fD7546d56"],
  });

  const {
    data: mintData,
    isLoading: isLoadingMint,
    isSuccess: isSuccessMint,
    write: mint,
  } = useContractWrite(config);

  return (
    <View style={styles.marginVertical}>
      {/* <View style={styles.marginVertical}>
        {isLoading && <Text>Loading</Text>}
        {isSuccess && <Text>Name: {contractName?.toString()}</Text>}
        {isError && <Text>Error reading contract</Text>}
      </View> */}

      <Pressable style={styles.button} onPress={() => mint?.()}>
        <Text style={styles.centerText}>Mint</Text>
      </Pressable>
      {isLoading && <Text>Check Wallet</Text>}
      <Text style={{ textAlign: "center", marginVertical: 10 }}>
        Transaction:
      </Text>
      {isSuccess && (
        <Text style={{ textAlign: "center" }}>{JSON.stringify(mintData)}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
  },
  marginVertical: {
    marginVertical: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  centerText: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
  },
  button: {
    backgroundColor: "#57B36A",
    padding: 10,
    width: 140,
    borderRadius: 32,
  },
});
