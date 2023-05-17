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
      <main className="sm:max-w-full md:max-w-5xl mx-auto px-2">
        <div className="flex items-center">
          <ThemeToggle config={{ theme, setTheme }} />
          <PrimaryNavigation />
        </div>
        {children}
      </main>
    </body>
  );
}
