const memoryDiscriminator = (payload, currMemory, currDisplay) => {
  // (obj, val) --> [upperDisplay, numInMemory, numToDisplay]
  const { num, memoryAction } = payload;
  if (memoryAction === "MR") return ["", null, currDisplay];
  if (memoryAction === "MS") return ["M", num, "0"];
  else {
    if (currMemory === null) return ["", null, currDisplay];
    else return ["M", currMemory, currMemory];
  }
};

export default memoryDiscriminator;
