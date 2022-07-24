import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x589C777AfFe5D124b16644691a15d7dE72cbEb2F");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Potato",
        description: "This NFT will give you access to MatheusDAO!",
        image: readFileSync("scripts/assets/potato.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();