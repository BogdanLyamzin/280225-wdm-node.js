const isPositiveNumber = (num: unknown): boolean => {
  if (typeof num !== "number") {
    throw new Error("Argument must be number");
  }
  if (Number.isNaN(num)) {
    throw new Error("Argument cannot be NaN");
  }
  if (!Number.isFinite(num)) {
    throw new Error("Argument cannot be Infinity");
  }
  if (num <= 0) {
    throw new Error("Argument cannot be 0 or less");
  }
  return true;
};

export const calcWeightIndex = (height: number, weight: number): number => {
  isPositiveNumber(height);
  isPositiveNumber(weight);
  const result = weight / height ** 2;
  return Number(result.toFixed(2));
};

export const getDiagnosisBaseWeightIndex = (height: number, weight: number) => {
  isPositiveNumber(height);
  isPositiveNumber(weight);
  const weightIndex = calcWeightIndex(height, weight);
  if (weightIndex < 15) {
    return "анорексия";
  }
  if (weightIndex <= 25) {
    return "норма";
  }
  if (weightIndex <= 30) {
    return "лишний вес";
  }
  if (weightIndex <= 35) {
    return "ожирение I степени";
  }
  if (weightIndex <= 40) {
    return "ожирение II степени";
  }
  return "ожирение III степени";
};

// export {
//     calcWeightIndex,
//     getDiagnosisBaseWeightIndex,
// }
