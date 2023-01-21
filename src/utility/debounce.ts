export const createDebounce = () => {
  let timeout: NodeJS.timeout | null = null;
  return function (fnc: () => void, delayMs: number) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fnc();
    }, delayMs || 1000);
  };
}
