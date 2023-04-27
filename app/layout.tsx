"use client";

import { useEffect, useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  const router = useRouter();

  const signUp = () => {
    supabase.auth.signUp({
      email: "arevelski@gmail.com",
      password: "arthurr99",
    });
  };
  const signIn = () => {
    supabase.auth.signInWithPassword({
      email: "arevelski@gmail.com",
      password: "arthurr99",
    });
  };
  const signOut = () => {
    supabase.auth.signOut();
  };

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      router.refresh();
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [supabase, router]);

  return (
    <html>
      <head />
      <body>
        <button onClick={signUp}>Sign Up</button>
        <button onClick={signIn}>Sign In</button>
        <button onClick={signOut}>Sign Out</button>
        {children}
      </body>
    </html>
  );
}
