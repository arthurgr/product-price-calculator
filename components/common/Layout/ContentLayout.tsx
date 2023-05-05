import PrimaryNavigation from "../Nav/PrimaryNavigation/PrimaryNavigation";
import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  const signOut = () => {
    supabase.auth.signOut();
  };
  return (
    <body>
      <main className="flex justify-center">
        <div className="max-w-4xl">
          <PrimaryNavigation />
          {children}
        </div>
      </main>
    </body>
  );
}
