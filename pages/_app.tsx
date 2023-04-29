import RootLayout from "app/layout";
import type { AppProps } from "next/app";
import { Suspense } from "react";
import Loading from "@/common/Loading/Loading";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Suspense fallback={<Loading />}>
        <Component {...pageProps} />
      </Suspense>
    </RootLayout>
  );
}

// https://beta.nextjs.org/docs/routing/fundamentals
