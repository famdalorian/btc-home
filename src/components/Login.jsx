import React, { useState } from "react";
import { Magic } from "magic-sdk";
import './form.css'

const magic = new Magic("pk_live_A2C1FC5327BEC218", { network: "mainnet" });

function SocialLogIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function connectWallet() {
    try {
      const accounts = await magic.wallet.connectWithUI();
      if (accounts) {
        setIsLoggedIn(true);
        console.log(accounts);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  async function showWallet() {
    try {
      await magic.wallet.showUI();
      const emailInfo = await magic.wallet.requestUserInfoWithUI({
        scope: { email: "required" },
      });
      console.log(emailInfo.email);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  async function disconnectWallet() {
    try {
      await magic.wallet.disconnect();
      setIsLoggedIn(false);
      console.log("Disconnected from wallet");
    } catch (error) {
      console.error("An error occurred while disconnecting:", error);
    }
  }

  return (
    <div>
      {!isLoggedIn && <button className="connect-button" onClick={connectWallet}><h2><h1>login</h1>  </h2></button>}
      {isLoggedIn && (
        <>
          <button className="wallet-button" onClick={showWallet}>
            <h1>Stash</h1>
          </button>
          <br />
          <br />

          <button className="disconnect-button" onClick={disconnectWallet}></button>
          <br />
          <br />
        </>
      )}
    </div>
  );
}

export default SocialLogIn;
