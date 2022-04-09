import { AppProps } from "next/app";
import { Header } from "../components/Header";
import { SessionProvider as NexAuthProvider } from "next-auth/react";
import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NexAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NexAuthProvider>
  );
}

export default MyApp;
