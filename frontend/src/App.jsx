import React, { useState } from "react";
import { HttpAgent, Actor } from "@dfinity/agent";
import { idlFactory as backend_idl } from "./backend.did.js";
import { canisterId as backend_id } from "./backend_id.js";


function App() {
  const [status, setStatus] = useState("");
  const [principalId, setPrincipalId] = useState("");
  const [balance, setBalance] = useState(null);
  const [recordText, setRecordText] = useState("");

  let actor = null;

  // Connect Plug Wallet
  const connectPlug = async () => {
    if (window.ic?.plug) {
      const connected = await window.ic.plug.requestConnect();
      if (connected) {
        const principal = await window.ic.plug.getPrincipal();
        setPrincipalId(principal.toText());
        setStatus("✅ Connected: " + principal.toText());

        await window.ic.plug.createAgent({ whitelist: [backend_id] });
        actor = await window.ic.plug.createActor({
          canisterId: backend_id,
          interfaceFactory: backend_idl,
        });
      }
    } else {
      alert("🛑 Please install Plug Wallet first.");
    }
  };

  // Mint NFT
  const mintNFT = async () => {
    if (!actor) await connectPlug();
    const result = await actor.mintNFT(await window.ic.plug.getPrincipal());
    alert(result);
  };

  // Upload Encrypted Record + Reward
  const uploadRecord = async () => {
    if (!actor) await connectPlug();
    const result = await actor.uploadEncryptedRecord(
      await window.ic.plug.getPrincipal(),
      recordText
    );
    alert(result);
  };

  // Get ICP Reward Balance
  const getRewardBalance = async () => {
    if (!actor) await connectPlug();
    const bal = await actor.getBalance(await window.ic.plug.getPrincipal());
    setBalance(bal);
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>🩺 ICP Health Vault</h1>
      <button onClick={connectPlug}>🔌 Connect Plug Wallet</button>
      <p>Status: {status}</p>

      {principalId && (
        <>
          <hr />

          <button onClick={mintNFT}>🎟️ Mint NFT Consent Token</button><br /><br />

          <textarea
            rows={4}
            cols={40}
            placeholder="🔐 Enter encrypted health record here..."
            value={recordText}
            onChange={(e) => setRecordText(e.target.value)}
          /><br />
          <button onClick={uploadRecord}>📤 Upload Record + 💰 Get ICP Reward</button><br /><br />

          <button onClick={getRewardBalance}>💰 Show My ICP Reward Balance</button>
          {balance !== null && <p>💸 Balance: {balance} ICP</p>}
        </>
      )}
    </div>
  );
}

export default App;

