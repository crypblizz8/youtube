import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import {
  useDisconnect,
  useAccount,
  useBalance,
  useSignMessage,
  useContractRead,
  useContractReads,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import wagmigotchiABI from "@/abi/wagmigotchiABI.json";
import mlootABI from "@/abi/mlootABI.json";
import erc721ABI from "@/abi/erc721ABI.json";

export default function Home() {
  const { open, close } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const { address } = useAccount();

  // useBalance
  const { data: balanceData } = useBalance({
    address: address,
  });

  // useSignMessage
  const {
    data: signMessageData,
    isSuccess: signMessageSuccess,
    signMessage,
  } = useSignMessage({
    message: "gm wagmi frens",
  });

  // useContractRead
  //   const { data: contractReadData, isSuccess: contractReadSuccess } =
  //     useContractRead({
  //       address: "0xecb504d39723b0be0e3a9aa33d646642d1051ee1",
  //       abi: wagmigotchiABI,
  //       functionName: "getHunger",
  //     });

  // useContractReads
  //   const wagmigotchiContract = {
  //     address: "0xecb504d39723b0be0e3a9aa33d646642d1051ee1",
  //     abi: wagmigotchiABI,
  //   };
  //   const mlootContract = {
  //     address: "0x1dfe7ca09e99d10835bf73044a23b73fc20623df",
  //     abi: mlootABI,
  //   };

  //   const { data: multiContractRead, isSuccess: multiContractReadSuccess } =
  //     useContractReads({
  //       contracts: [
  //         {
  //           ...wagmigotchiContract,
  //           functionName: "getAlive",
  //         },
  //         {
  //           ...mlootContract,
  //           functionName: "getWaist",
  //           args: [69],
  //         },
  //       ],
  //     });

  // useContractWrite
  const { config } = usePrepareContractWrite({
    address: "0xa8eaDF1942D06ddDa88654Ff52E2d979CAf98521",
    abi: erc721ABI,
    functionName: "safeMint",
    args: [address, 3],
  });

  const {
    data: mintData,
    isSuccess: mintSuccess,
    write,
  } = useContractWrite(config);

  return (
    <>
      <Head>
        <title>WalletConnect | Next Starter Template</title>
        <meta name="description" content="Generated by create-wc-dapp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.flexColumn}>
          <div className={styles.flexColumn}>
            <h1 className={styles.headingStyle}> Web3Modal Hooks</h1>
            <w3m-button />
            <button onClick={() => open()} className={styles.hookButtons}>
              {address ? address : "Open/Close"}
            </button>
            <button onClick={() => disconnect()} className={styles.hookButtons}>
              Disconnect
            </button>
          </div>
          <div className={styles.flexColumn}>
            <h1 className={styles.headingStyle}> Wagmi Hooks</h1>
            <button onClick={() => disconnect()} className={styles.hookButtons}>
              useAccount
            </button>
            <div>{address ? address : null}</div>
            <button onClick={() => disconnect()} className={styles.hookButtons}>
              useBalance
            </button>
            <div>
              Balance: {balanceData?.formatted} {balanceData?.symbol}
            </div>
            <button
              onClick={() => signMessage()}
              className={styles.hookButtons}
            >
              useSignMessage
            </button>
            {signMessageSuccess && <div>Signature: {signMessageData}</div>}

            <button onClick={() => disconnect()} className={styles.hookButtons}>
              useContractRead
            </button>
            {/* <div>
              {contractReadSuccess ? contractReadData?.toString() : null}
            </div> */}

            <button onClick={() => disconnect()} className={styles.hookButtons}>
              useContractReads
            </button>
            {/* <div>
              {multiContractReadSuccess
                ? multiContractRead?.map((data, index) => {
                    return <div key={index}>{data?.result.toString()}</div>;
                  })
                : null}
            </div> */}
            <button onClick={() => write?.()} className={styles.hookButtons}>
              useContractWrite
            </button>
            {mintSuccess && <div>Transaction: {JSON.stringify(mintData)}</div>}
          </div>
        </div>
      </main>
    </>
  );
}
