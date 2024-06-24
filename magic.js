import { Magic } from "magic-sdk";
import { SolanaExtension } from "@magic-ext/solana";

const magic = new Magic("YOUR_MAGIC_PUBLISHABLE_KEY", {
  extensions: {
    solana: new SolanaExtension({
      rpcUrl: "https://api.devnet.solana.com",
    }),
  },
});

export default magic;
