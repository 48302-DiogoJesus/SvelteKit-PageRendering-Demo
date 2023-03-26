import type { PageLoad } from "./$types";

export const csr = true;
export const ssr = true;

export const load = (({ params }) => {
  console.log("load function called");
  try {
    document.dispatchEvent(new CustomEvent("loadCalled"));
  } catch (_) {}
  return {
    time: new Promise((resolve) => {
      setTimeout(() => {
        const time = Date.now();
        console.log(time);
        resolve(time);
      }, 2500);
    }),
  };
}) satisfies PageLoad;
