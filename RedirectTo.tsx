import { useTimeout } from "./use-timeout";

export const RedirectTo = () => {
  useTimeout(() => {
    window.location.replace(
      "alfabank:///dashboard/",
    );
  }, 2000);

  return null;
};
