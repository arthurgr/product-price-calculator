import { useEffect, useState } from "react";
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
    <main className="flex justify-center">
      <div className="max-w-4xl">
        <button
          onClick={signOut}
          className="bg-blue-500 hover:bg-blue-700 text-sm text-white py-2 px-4 rounded mb-4"
        >
          Sign Out
        </button>
        {children}
      </div>
    </main>
  );
}
