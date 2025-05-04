import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../hooks/queryClient";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: any) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
