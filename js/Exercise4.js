let inputA = 15;
let inputB = 20;
let inputC = 15;

if (
  inputA + inputB >= inputC &&
  inputA + inputC >= inputB &&
  inputB + inputC >= inputA
) {
  console.log("true");
} else {
  console.log("false");
}
