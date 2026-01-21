export function getNextCycle(currentCycle: number) {
  const isInitialCycle = currentCycle === 0 || currentCycle === 8;
  return isInitialCycle ? 1 : currentCycle + 1;
}
