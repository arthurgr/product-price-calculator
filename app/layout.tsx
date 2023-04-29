"use client";

import { useEffect, useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import {
  // Import predefined theme
  ThemeSupa,
} from "@supabase/auth-ui-shared";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  const [session, setSession] = useState<any>(null);
  const router = useRouter();

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

  if (!session) {
    return (
      <html>
        <head />
        <body>
          <main className="flex justify-center">
            <section className="w-96 mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow">
              <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                providers={["google"]}
              />
            </section>
          </main>
        </body>
      </html>
    );
  }
  return (
    <html>
      <head />
      <body>
        <button
          onClick={signOut}
          className="bg-blue-500 hover:bg-blue-700 text-sm text-white py-2 px-4 rounded mb-4"
        >
          Sign Out
        </button>
        {children}
      </body>
    </html>
  );
}
