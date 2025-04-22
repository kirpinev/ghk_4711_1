import { useTimeout } from "./use-timeout";

export const RedirectTo = () => {
  useTimeout(() => {
    window.location.replace(
      "alfabank:///dashboard/alfa_check_cards",
    );
  }, 2000);

  return null;
};
