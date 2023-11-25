import { ConnectWallet, Web3Button, useContract } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const contractAddress = "0x6ffdd8060bc198780cba9c14712f25ace10b08dc";
  const { contract } = useContract(contractAddress);
  const [counter, setCounter] = useState<string | undefined>(undefined);

  async function getCounter() {
    if (!contract) return;

    const counter = await contract.call("getCounter");
    setCounter(counter.toString());
  }

  getCounter();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Counter Dapp</h1>
        <h3>{counter}</h3>
        <Web3Button
          contractAddress={contractAddress}
          action={() => getCounter()}
        >
          Refresh Counter
        </Web3Button>
        <br />
        <Web3Button
          contractAddress={contractAddress}
          action={(contract) => contract.call("incrementCounter")}
        >
          Increment Counter
        </Web3Button>
      </main>
    </div>
  );
};

export default Home;
