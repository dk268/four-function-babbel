import { inputType } from "../.";

const memoryDiscriminator = (num, memoryAction, currMemory) => {
  if (memoryAction === "clear") return null;
  if (memoryAction === "store") return num;
  else {
    if (currMemory === null) return "0";
    else return currMemory;
  }
};

export default memoryDiscriminator;
