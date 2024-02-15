import "@/styles/globals.css";
import Appshell from "@/components/layouts/Appshell";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Appshell>
      <Component {...pageProps} />
    </Appshell>
  );
}
