import PrimaryNavigation from "../Nav/PrimaryNavigation/PrimaryNavigation";
import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  const [theme, setTheme] = useState("light");

  const signOut = () => {
    supabase.auth.signOut();
  };
  return (
    <body className={theme}>
      <main className="flex justify-center">
        <div className="max-w-4xl">
          <ThemeToggle config={{ theme, setTheme }} />
          <PrimaryNavigation />
          {children}
        </div>
      </main>
    </body>
  );
}
