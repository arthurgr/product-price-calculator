"use client";

import { useEffect, useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import {
  // Import predefined theme
  ThemeSupa,
} from "@supabase/auth-ui-shared";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  const [session, setSession] = useState<any>(null);
  const router = useRouter();

  // const signUp = () => {
  //   supabase.auth.signUp({
  //     email: "",
  //     password: "",
  //   });
  // };
  // const signIn = () => {
  //   supabase.auth.signInWithPassword({
  //     email: "",
  //     password: "",
  //   });
  // };
  const signOut = () => {
    supabase.auth.signOut();
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      router.refresh();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase, router]);

  // if (!session) {
  //   return (
  //     <html>
  //       <head />
  //       <body>
  //         <Auth
  //           supabaseClient={supabase}
  //           appearance={{ theme: ThemeSupa }}
  //           providers={["google"]}
  //         />
  //         {/* {children} */}
  //       </body>
  //     </html>
  //   );
  // }
  return (
    <html>
      <head />
      <body>
        {/* <button onClick={signUp}>Sign Up</button>
        <button onClick={signIn}>Sign In</button> */}
        <button onClick={signOut}>Sign Out</button>
        {children}
      </body>
    </html>
  );
}
